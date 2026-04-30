# Codex Company Bootstrap

这个目录用于给同事电脑做一键安装。

在安装好 VS Code 和 Codex 扩展后，运行这里的安装脚本，就会把公司 API、TranAI 本地兼容代理、默认 Codex 配置、开机自启和配置切换脚本安装到当前 Windows 用户的 `%USERPROFILE%\.codex`。

## 推荐用法

PowerShell:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\tools\codex-bootstrap\install-codex-company.ps1 `
  -ApiKey "你的 TranAI API Key" `
  -UserNo "186xxxxx" `
  -UserName "张三" `
  -UserDeptName "AI创新部"
```

或者直接双击：

```text
tools\codex-bootstrap\install-codex-company.cmd
```

如果没有传 `-ApiKey`，脚本会在运行时提示输入。

## 安装结果

- 把本地 Responses 兼容代理安装到 `%USERPROFILE%\.codex\scripts`
- 把 `config.toml` 切到公司配置，默认模型为 `gpt-5.4`
- 把 `TRANAI_API_KEY`、`TRANAI_BASE_URL` 和可选的 `TRANAI_USER_*` 写入当前用户环境变量
- 自动创建开机启动项，登录 Windows 后自动拉起本地代理
- 生成 `switch-codex-profile.ps1`，可以在公司版和原生版之间切换

## 这版新增能力

- 长会话自动压缩，避免上下文膨胀后越来越卡
- 基于 `prompt_cache_key` 的本地会话复用，更接近原生 Codex 的会话管理
- 代理进程自动重启，降低 `127.0.0.1:4317` 掉线后直接报 `502` 的概率
- 已包含 TranAI `chat/completions` 到 Codex `responses` 的适配、工具调用修复、图片消息透传和模型回退逻辑

## 切换命令

切回原生：

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File "$env:USERPROFILE\.codex\scripts\switch-codex-profile.ps1" -Profile openai
```

切回公司版：

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File "$env:USERPROFILE\.codex\scripts\switch-codex-profile.ps1" -Profile company
```

查看当前状态：

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File "$env:USERPROFILE\.codex\scripts\show-codex-profile.ps1"
```

## 说明

- 这个通用安装包不会把 API key 硬编码进项目文件，适合在不同同事电脑上重复安装
- 如果机器上没有 `node` 命令，安装器会正常写入配置，但不会立刻启动本地代理
