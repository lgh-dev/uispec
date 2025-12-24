#!/usr/bin/env bash
# UIKit CLI - Shell Script Version
# Version: 2.0.0

set -e
set -u

# 版本号
readonly VERSION="2.0.0"

# 确定脚本目录
# 如果从 /usr/local/bin/uikit 调用，库文件在 /usr/local/share/uikit
# 如果从开发目录调用，库文件在同级 shell 目录
if [ -d "/usr/local/share/uikit" ]; then
    readonly SCRIPT_DIR="/usr/local/share/uikit"
elif [ -d "$(dirname "$0")/../shell" ]; then
    readonly SCRIPT_DIR="$(cd "$(dirname "$0")/../shell" && pwd)"
else
    readonly SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
fi

# 加载库
source "${SCRIPT_DIR}/lib/colors.sh"

# 显示帮助
show_help() {
    cat <<EOF
${CYAN}UIKit CLI v${VERSION}${NC}
AI 时代的 UI 规范管理系统

${CYAN}用法:${NC}
  uikit <command> [options]

${CYAN}命令:${NC}
  init <platform>   初始化 UIKit 到指定平台
  status            查看安装状态
  uninstall         卸载命令
  help, -h          显示帮助
  -v, --version     显示版本号

${CYAN}初始化示例:${NC}
  uikit init claude     # 初始化到 Claude Code
  uikit init qoder      # 初始化到 Qoder
  uikit init all        # 初始化到所有平台

${CYAN}支持的平台:${NC}
  claude    Claude Code (当前支持)
  qoder     Qoder (当前支持)
  cursor    Cursor (计划支持)
  windsurf  Windsurf (计划支持)

${CYAN}示例:${NC}
  ${GRAY}# 查看当前状态${NC}
  uikit status

  ${GRAY}# 初始化到 Claude Code${NC}
  uikit init claude

  ${GRAY}# 初始化到 Qoder${NC}
  uikit init qoder

  ${GRAY}# 查看版本${NC}
  uikit -v

${CYAN}版本:${NC} ${VERSION}

EOF
}

# 主函数
main() {
    local command="${1:-}"

    case "$command" in
        init)
            shift
            bash "${SCRIPT_DIR}/commands/init.sh" "$@"
            ;;
        status)
            bash "${SCRIPT_DIR}/commands/status.sh"
            ;;
        uninstall)
            shift
            bash "${SCRIPT_DIR}/commands/uninstall.sh" "$@"
            ;;
        -v|--version|version)
            echo "UIKit CLI v${VERSION}"
            ;;
        -h|--help|help|"")
            show_help
            ;;
        *)
            print_error "未知命令: $command"
            echo ""
            show_help
            exit 1
            ;;
    esac
}

main "$@"
