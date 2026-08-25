# 连接 Skill方法

## 输入

- Skill 真源目录或 Skill 集合目录
- 目标 Agent 的技能目录
- 现有同名路径
- scripts/link_skill.py

## 步骤

1. 使用脚本识别单个 Skill、绝对路径或 Skill 集合目录。
2. 列出 Claude Code、Codex、通用 Agents 和 Grok 的目标路径与现有类型。
3. link 时为前三者创建软链，为 Grok 创建只指向真源的薄入口；存在普通目录时报告冲突。
4. unlink 只移除本工具创建的连接；status 重新解析并核对 name 与目标。

## 交付

- 真源
- 目标
- 动作
- 冲突
- 验证结果

## 停止

- 目标已有普通目录时不覆盖
- 跨机器路径不创建无效链接
- 全局目录写入前确认
