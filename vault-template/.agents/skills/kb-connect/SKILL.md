---
name: kb-connect
description: |
  把一个 Skill 真源连接到用户指定的 Agent 技能目录，并检查连接状态。默认使用可恢复的符号链接。触发方式：/kb-connect、「连接这个 Skill」「让多个 Agent 都能用」。
---

# 连接 Skill

<!-- KB-OWNED-WORKFLOW: v1 -->

## 开始前

1. 从当前目录向上找到 `.kb/config.yaml`，按配置解析六类资产库。
2. 只读取本任务需要的文件，不跨知识库搜索。
3. 把库内事实、用户本轮信息、当前推断和未知项分开。
4. 原始材料不覆盖；删除、移动和批量写入先确认。

## 读取

- Skill 真源目录或 Skill 集合目录
- 目标 Agent 的技能目录
- 现有同名路径
- scripts/link_skill.py

## 必须保留的能力

- 支持单个 Skill、绝对路径和 Skill 集合目录
- 支持连接、取消和状态检查
- 覆盖 Claude Code、Codex、通用 Agents 和 Grok
- 普通目标目录不覆盖
- 连接后验证 name 和目标

## 执行

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

每个关键判断附来源路径；没有来源的内容标为推断或待确认。

## 写回

- 只修改用户确认的目标技能目录
- 状态记录写入 `.kb/logs`

## 停止条件

- 目标已有普通目录时不覆盖
- 跨机器路径不创建无效链接
- 全局目录写入前确认

## 接续

- 整理完整工作台用 kb-setup
- 风险检查用 kb-safety

来源沿革只用于追溯，不作为运行指令。需要追溯时读取 `references/source-map.md`。
