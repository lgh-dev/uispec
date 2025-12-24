#!/usr/bin/env bun

/**
 * UIKit Build Script
 * 使用 Bun 编译原生可执行文件
 */

import { existsSync, mkdirSync, cpSync, rmSync, readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { $ } from 'bun';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = __dirname;

// 配置
const config = {
  entry: join(rootDir, 'bin', 'uikit.js'),
  distDir: join(rootDir, 'dist'),
  specsDir: join(rootDir, 'specs'),
  commandsDir: join(rootDir, 'commands'),
  targets: {
    'macos-x64': 'bun-darwin-x64',
    'macos-arm64': 'bun-darwin-arm64',
    'linux-x64': 'bun-linux-x64',
    'linux-arm64': 'bun-linux-arm64',
    'windows-x64': 'bun-windows-x64'
  }
};

// ANSI 颜色
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m'
};

const log = {
  info: (msg) => console.log(`${colors.blue}[BUILD]${colors.reset} ${msg}`),
  success: (msg) => console.log(`${colors.green}[SUCCESS]${colors.reset} ${msg}`),
  warning: (msg) => console.log(`${colors.yellow}[WARNING]${colors.reset} ${msg}`),
  error: (msg) => console.log(`${colors.red}[ERROR]${colors.reset} ${msg}`)
};

// 显示 Banner
function showBanner() {
  console.log(`
${colors.cyan}╔═══════════════════════════════════════════════╗
║                                               ║
║         UIKit Build System                    ║
║            Bun Native                         ║
║                                               ║
╚═══════════════════════════════════════════════╝${colors.reset}
`);
}

// 清理 dist 目录
function cleanDist() {
  if (existsSync(config.distDir)) {
    log.info('清理 dist 目录...');
    rmSync(config.distDir, { recursive: true, force: true });
  }
  mkdirSync(config.distDir, { recursive: true });
}

// 构建单个目标平台
async function buildTarget(platform, target) {
  const isWindows = platform.includes('windows');
  const outputName = isWindows ? `uikit-${platform}.exe` : `uikit-${platform}`;
  const outputPath = join(config.distDir, outputName);

  log.info(`构建 ${platform}...`);

  try {
    // 使用 Bun 编译
    const result = await $`bun build ${config.entry} --compile --target=${target} --outfile ${outputPath}`.quiet();

    if (result.exitCode === 0) {
      log.success(`✓ ${platform} -> ${outputPath}`);
      return true;
    } else {
      log.error(`✗ ${platform} 构建失败`);
      console.error(result.stderr.toString());
      return false;
    }
  } catch (error) {
    log.error(`✗ ${platform} 构建异常: ${error.message}`);
    return false;
  }
}

// 构建当前平台
async function buildCurrent() {
  const platform = process.platform;
  const arch = process.arch;

  let targetPlatform;
  if (platform === 'darwin') {
    targetPlatform = arch === 'arm64' ? 'macos-arm64' : 'macos-x64';
  } else if (platform === 'linux') {
    targetPlatform = arch === 'arm64' ? 'linux-arm64' : 'linux-x64';
  } else if (platform === 'win32') {
    targetPlatform = 'windows-x64';
  } else {
    log.error(`不支持的平台: ${platform}`);
    process.exit(1);
  }

  log.info(`检测到平台: ${targetPlatform}`);

  cleanDist();
  const target = config.targets[targetPlatform];
  const success = await buildTarget(targetPlatform, target);

  if (success) {
    log.success('构建完成!');
    showBuildInfo(targetPlatform);
  }
}

// 构建所有平台
async function buildAll() {
  cleanDist();

  let successCount = 0;
  const totalCount = Object.keys(config.targets).length;

  for (const [platform, target] of Object.entries(config.targets)) {
    const success = await buildTarget(platform, target);
    if (success) successCount++;
  }

  console.log();
  log.info(`构建完成: ${successCount}/${totalCount} 个平台成功`);

  if (successCount === totalCount) {
    log.success('所有平台构建成功!');
  } else {
    log.warning('部分平台构建失败');
  }
}

// 显示构建信息
function showBuildInfo(platform) {
  const isWindows = platform.includes('windows');
  const exeName = isWindows ? `uikit-${platform}.exe` : `uikit-${platform}`;

  console.log(`
${colors.cyan}═══════════════════════════════════════════════${colors.reset}

构建信息:
  平台: ${platform}
  输出: dist/${exeName}

使用方法:
  1. 安装到系统: sudo mv dist/${exeName} /usr/local/bin/uikit
  2. 运行: uikit init claude

注意: 规范文件和命令定义会在 init 时从 GitHub 自动下载

${colors.cyan}═══════════════════════════════════════════════${colors.reset}
`);
}

// 创建发布包
async function createRelease() {
  log.info('创建发布包...');

  const platforms = ['macos-x64', 'macos-arm64', 'linux-x64', 'windows-x64'];

  for (const platform of platforms) {
    const isWindows = platform.includes('windows');
    const exeName = isWindows ? `uikit-${platform}.exe` : `uikit-${platform}`;
    const exePath = join(config.distDir, exeName);

    if (!existsSync(exePath)) {
      log.warning(`跳过 ${platform}: 可执行文件不存在`);
      continue;
    }

    const releaseDir = join(config.distDir, `uikit-${platform}`);
    mkdirSync(releaseDir, { recursive: true });

    // 复制可执行文件
    const targetExe = isWindows ? 'uikit.exe' : 'uikit';
    cpSync(exePath, join(releaseDir, targetExe));

    // 复制规范和命令文件
    cpSync(config.specsDir, join(releaseDir, 'specs'), { recursive: true });
    cpSync(config.commandsDir, join(releaseDir, 'commands'), { recursive: true });

    // 创建 README
    const readme = `# UIKit CLI (${platform})

## 快速开始

1. 选择设计规范:
   ${isWindows ? '.\\uikit.exe' : './uikit'} switch

2. 开发功能:
   ${isWindows ? '.\\uikit.exe' : './uikit'} do 创建登录页面

3. 审查代码:
   ${isWindows ? '.\\uikit.exe' : './uikit'} check

## 命令列表

- switch   选择UI规范
- do       按规范开发功能
- check    审查功能合规性
- status   查看当前状态
- help     显示帮助

## 内置规范

- modern-minimal (现代简约)
- creative-playful (创意趣味)
- professional-business (专业商务)
- vibrant-tech (活力科技)
- dark-elegant (暗黑优雅)

## AI 工具集成

在 Claude Code 或 Qoder 中使用:
- /uikit.switch   选择UI规范
- /uikit.do       开发功能
- /uikit.check    审查功能
`;

    writeFileSync(join(releaseDir, 'README.md'), readme);

    // 创建安装脚本 (Unix)
    if (!isWindows) {
      const installScript = `#!/bin/bash
# UIKit CLI 安装脚本

echo "安装 UIKit CLI..."

# 创建目录
mkdir -p ~/bin

# 复制可执行文件
cp ./uikit ~/bin/uikit
chmod +x ~/bin/uikit

# 复制规范文件
mkdir -p ~/.uikit
cp -r ./specs ~/.uikit/

echo "✓ UIKit CLI 已安装到 ~/bin/uikit"
echo "✓ 规范文件已安装到 ~/.uikit/specs"
echo ""
echo "请确保 ~/bin 在您的 PATH 中:"
echo "export PATH=\\$HOME/bin:\\$PATH"
echo ""
echo "运行 'uikit help' 查看帮助"
`;
      writeFileSync(join(releaseDir, 'install.sh'), installScript);
      await $`chmod +x ${join(releaseDir, 'install.sh')}`;
    } else {
      // Windows 安装脚本
      const installScript = `@echo off
echo Installing UIKit CLI...

REM Create directory
if not exist "%USERPROFILE%\\bin" mkdir "%USERPROFILE%\\bin"

REM Copy executable
copy uikit.exe "%USERPROFILE%\\bin\\uikit.exe"

REM Copy specs
if not exist "%USERPROFILE%\\.uikit" mkdir "%USERPROFILE%\\.uikit"
xcopy /E /I specs "%USERPROFILE%\\.uikit\\specs"

echo UIKit CLI installed to %USERPROFILE%\\bin\\uikit.exe
echo Specs installed to %USERPROFILE%\\.uikit\\specs
echo.
echo Please add %USERPROFILE%\\bin to your PATH
echo.
echo Run 'uikit help' to get started
pause
`;
      writeFileSync(join(releaseDir, 'install.bat'), installScript);
    }

    log.success(`发布包创建: uikit-${platform}/`);
  }

  log.success('所有发布包创建完成!');
}

// 主函数
async function main() {
  const args = process.argv.slice(2);
  const command = args[0];

  showBanner();

  switch (command) {
    case '--all':
    case '-a':
      await buildAll();
      break;

    case '--release':
    case '-r':
      await buildAll();
      await createRelease();
      break;

    case '--current':
    case '-c':
    default:
      await buildCurrent();
      break;
  }
}

// 运行
main().catch(error => {
  log.error(`构建失败: ${error.message}`);
  process.exit(1);
});