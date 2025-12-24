#!/usr/bin/env bash
# config.sh - 配置管理库

# 读取配置文件
read_config() {
    local config_file="$1"
    local key="$2"

    if [ ! -f "$config_file" ]; then
        echo ""
        return 1
    fi

    # 简单的 JSON 解析（使用 grep 和 sed）
    grep "\"${key}\"" "$config_file" | sed -E 's/.*"'"${key}"'"\s*:\s*"([^"]*)".*/\1/' | head -1
}

# 写入配置文件
write_config() {
    local config_file="$1"
    local spec="$2"
    local installed_at="$(date -u +%Y-%m-%dT%H:%M:%SZ)"

    cat > "$config_file" <<EOF
{
  "spec": ${spec:+\"$spec\"},
  "installedAt": "$installed_at"
}
EOF
}

# 更新配置文件中的规范
update_spec() {
    local config_file="$1"
    local spec="$2"

    if [ ! -f "$config_file" ]; then
        write_config "$config_file" "$spec"
        return
    fi

    # 读取现有的 installedAt
    local installed_at=$(read_config "$config_file" "installedAt")
    if [ -z "$installed_at" ]; then
        installed_at="$(date -u +%Y-%m-%dT%H:%M:%SZ)"
    fi

    cat > "$config_file" <<EOF
{
  "spec": "$spec",
  "installedAt": "$installed_at"
}
EOF
}
