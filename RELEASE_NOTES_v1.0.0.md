# UIKit CLI v1.0.0

**AI 时代的 UI 规范管理系统 - 首个正式版本发布！**

## 🎉 主要特性

### 5 套专业 UI 规范
- **Modern Minimal** - 现代简约：少即是多，简洁优雅
- **Dark Elegant** - 暗黑优雅：精致、神秘、高对比度
- **Creative Playful** - 创意趣味：圆润温暖，充满活力
- **Professional Business** - 专业商务：稳重可信，传递权威
- **Vibrant Tech** - 活力科技：未来感、渐变、玻璃态

### 3 个核心命令
- `/uikit-switch` - 选择和切换设计规范
- `/uikit-do` - 按选定规范开发功能
- `/uikit-check` - 审查代码是否符合规范

### 平台支持
- ✅ **Claude Code** - 完全支持
- ✅ **Qoder** - 完全支持
- 🚧 Cursor - 计划中
- 🚧 Windsurf - 计划中

### 跨平台支持
- macOS (Intel x64)
- macOS (Apple Silicon arm64)
- Linux (x64)
- Linux (arm64)
- Windows (x64)

## 📦 安装方式

### 一键安装（推荐）
```bash
curl -fsSL https://raw.githubusercontent.com/lgh-dev/uikit/main/install.sh | bash
```

### 手动安装
从 [Releases](https://github.com/lgh-dev/uikit/releases/tag/v1.0.0) 下载对应平台的二进制文件：

1. **macOS Intel**
   ```bash
   wget https://github.com/lgh-dev/uikit/releases/download/v1.0.0/uikit-macos-x64
   sudo mv uikit-macos-x64 /usr/local/bin/uikit
   sudo chmod +x /usr/local/bin/uikit
   ```

2. **macOS Apple Silicon**
   ```bash
   wget https://github.com/lgh-dev/uikit/releases/download/v1.0.0/uikit-macos-arm64
   sudo mv uikit-macos-arm64 /usr/local/bin/uikit
   sudo chmod +x /usr/local/bin/uikit
   ```

3. **Linux x64**
   ```bash
   wget https://github.com/lgh-dev/uikit/releases/download/v1.0.0/uikit-linux-x64
   sudo mv uikit-linux-x64 /usr/local/bin/uikit
   sudo chmod +x /usr/local/bin/uikit
   ```

4. **Linux arm64**
   ```bash
   wget https://github.com/lgh-dev/uikit/releases/download/v1.0.0/uikit-linux-arm64
   sudo mv uikit-linux-arm64 /usr/local/bin/uikit
   sudo chmod +x /usr/local/bin/uikit
   ```

5. **Windows x64**
   - 下载 `uikit-windows-x64.exe`
   - 重命名为 `uikit.exe`
   - 移动到 PATH 中的目录（如 `C:\Windows\System32`）

## 🚀 快速开始

### 1. 初始化项目
```bash
# 进入你的项目目录
cd /path/to/your/project

# 初始化到 Claude Code
uikit init claude

# 或初始化到 Qoder
uikit init qoder
```

### 2. 重启 AI 工具
重启 Claude Code 或 Qoder 以加载命令

### 3. 使用命令
```bash
# 选择设计规范
/uikit-switch dark-elegant

# 按规范开发功能
/uikit-do 创建登录页面

# 审查代码合规性
/uikit-check
```

## 📊 技术规格

### 构建信息
- **构建工具**: Bun 1.0+
- **二进制大小**:
  - macOS x64: 63 MB
  - macOS arm64: 57 MB
  - Linux x64: 99 MB
  - Linux arm64: 92 MB
  - Windows x64: 110 MB
- **依赖**: 零外部依赖，独立运行

### 核心功能
- ✅ 框架无关（支持 React、Vue、Angular、Svelte、HTML）
- ✅ 样式方案无关（支持 Tailwind、CSS Modules、styled-components、SCSS、CSS）
- ✅ 云端同步（规范和命令从 GitHub 自动下载最新版本）
- ✅ 本地优先（支持离线使用，可自定义规范）
- ✅ 智能审查（自动检查色彩、间距、字体、组件样式）

## 📝 文件清单

本次发布包含以下文件：

| 文件名 | 大小 | 平台 | SHA256 |
|--------|------|------|--------|
| `uikit-macos-x64` | 63 MB | macOS Intel | (待生成) |
| `uikit-macos-arm64` | 57 MB | macOS Apple Silicon | (待生成) |
| `uikit-linux-x64` | 99 MB | Linux x64 | (待生成) |
| `uikit-linux-arm64` | 92 MB | Linux arm64 | (待生成) |
| `uikit-windows-x64.exe` | 110 MB | Windows x64 | (待生成) |

## 🔧 常见问题

### Q: 如何更新到最新版本？
A: 重新运行安装脚本即可：
```bash
curl -fsSL https://raw.githubusercontent.com/lgh-dev/uikit/main/install.sh | bash
```

### Q: 如何创建自定义规范？
A:
1. Fork [UIKit 仓库](https://github.com/lgh-dev/uikit)
2. 在 `specs/` 目录添加你的规范文件（参考现有规范）
3. 修改 `bin/uikit.js` 中的 `GITHUB_REPO` 指向你的仓库
4. 重新编译二进制文件

### Q: 如何查看当前状态？
A: 使用 `uikit status` 命令

### Q: 网络不可用时如何使用？
A:
1. 手动下载 [specs/](https://github.com/lgh-dev/uikit/tree/main/specs) 和 [commands/](https://github.com/lgh-dev/uikit/tree/main/commands) 目录
2. 将它们放在 UIKit 二进制文件同一目录
3. 运行 `uikit init` 会自动使用本地文件

## 🐛 已知问题

无

## 📅 下一步计划

- [ ] 支持 Cursor IDE
- [ ] 支持 Windsurf IDE
- [ ] 规范市场（社区贡献的规范）
- [ ] VS Code 插件
- [ ] 可视化规范编辑器

## 🙏 致谢

感谢所有测试用户的反馈和建议！

## 📄 许可证

MIT License - 详见 [LICENSE](https://github.com/lgh-dev/uikit/blob/main/LICENSE)

---

**开始使用 UIKit，让 AI 生成始终保持一致的高质量界面！**

项目主页: https://github.com/lgh-dev/uikit
