# Project Rules

- 本项目生成一个 Obsidian 桌面插件，插件 ID 固定为 `fde365-knowledge-os`。
- `vault-template/` 是知识库初始化模板的唯一编辑源；修改后运行 `npm run build:blueprint` 生成 `blueprint.json`。
- 初始化和修复必须采用 create-only：只补齐缺失目录和文件，不覆盖、移动或删除用户内容。
- API Key 仅可保存到当前 Vault 的插件 `data.json`，不得进入源码、测试、发布包或日志。
- 发布包必须保留 `LICENSES.md`、Knowledge OS MIT、kb-suite CC BY-NC 与 NOTICE、Defuddle 许可。
- 修改运行时代码后至少执行 `npm run lint && npm run build && npm test && npm run check`。
