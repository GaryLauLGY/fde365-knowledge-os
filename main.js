var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// blueprint.json
var require_blueprint = __commonJS({
  "blueprint.json"(exports2, module2) {
    module2.exports = {
      id: "fde365-six-assets",
      version: 7,
      root: "FDE365知识库",
      folders: [
        ".agents",
        ".agents/skills",
        ".agents/skills/fde-action",
        ".agents/skills/fde-action/agents",
        ".agents/skills/fde-action/references",
        ".agents/skills/fde-benchmark",
        ".agents/skills/fde-benchmark/agents",
        ".agents/skills/fde-benchmark/references",
        ".agents/skills/fde-benchmark/references/modes",
        ".agents/skills/fde-check",
        ".agents/skills/fde-check/agents",
        ".agents/skills/fde-check/references",
        ".agents/skills/fde-decide",
        ".agents/skills/fde-decide/agents",
        ".agents/skills/fde-decide/references",
        ".agents/skills/fde-define",
        ".agents/skills/fde-define/agents",
        ".agents/skills/fde-define/references",
        ".agents/skills/fde-diagnose",
        ".agents/skills/fde-diagnose/agents",
        ".agents/skills/fde-diagnose/references",
        ".agents/skills/fde-diagnose/references/modes",
        ".agents/skills/fde-discuss",
        ".agents/skills/fde-discuss/agents",
        ".agents/skills/fde-discuss/references",
        ".agents/skills/fde-economy",
        ".agents/skills/fde-economy/agents",
        ".agents/skills/fde-economy/references",
        ".agents/skills/fde-export",
        ".agents/skills/fde-export/agents",
        ".agents/skills/fde-export/references",
        ".agents/skills/fde-export/scripts",
        ".agents/skills/fde-flow",
        ".agents/skills/fde-flow/agents",
        ".agents/skills/fde-flow/references",
        ".agents/skills/fde-focus",
        ".agents/skills/fde-focus/agents",
        ".agents/skills/fde-focus/references",
        ".agents/skills/fde-format",
        ".agents/skills/fde-format/agents",
        ".agents/skills/fde-format/references",
        ".agents/skills/fde-format/scripts",
        ".agents/skills/fde-goal",
        ".agents/skills/fde-goal/agents",
        ".agents/skills/fde-goal/references",
        ".agents/skills/fde-health",
        ".agents/skills/fde-health/agents",
        ".agents/skills/fde-health/references",
        ".agents/skills/fde-hook",
        ".agents/skills/fde-hook/agents",
        ".agents/skills/fde-hook/references",
        ".agents/skills/fde-impact",
        ".agents/skills/fde-impact/agents",
        ".agents/skills/fde-impact/references",
        ".agents/skills/fde-ingest",
        ".agents/skills/fde-ingest/agents",
        ".agents/skills/fde-ingest/references",
        ".agents/skills/fde-interview",
        ".agents/skills/fde-interview/agents",
        ".agents/skills/fde-interview/references",
        ".agents/skills/fde-learn",
        ".agents/skills/fde-learn/agents",
        ".agents/skills/fde-learn/references",
        ".agents/skills/fde-library",
        ".agents/skills/fde-library/agents",
        ".agents/skills/fde-library/references",
        ".agents/skills/fde-organize",
        ".agents/skills/fde-organize/agents",
        ".agents/skills/fde-organize/references",
        ".agents/skills/fde-organize/scripts",
        ".agents/skills/fde-question",
        ".agents/skills/fde-question/agents",
        ".agents/skills/fde-question/references",
        ".agents/skills/fde-report",
        ".agents/skills/fde-report/agents",
        ".agents/skills/fde-report/references",
        ".agents/skills/fde-resume",
        ".agents/skills/fde-resume/agents",
        ".agents/skills/fde-resume/references",
        ".agents/skills/fde-review",
        ".agents/skills/fde-review/agents",
        ".agents/skills/fde-review/references",
        ".agents/skills/fde-review/references/modes",
        ".agents/skills/fde-safety",
        ".agents/skills/fde-safety/agents",
        ".agents/skills/fde-safety/references",
        ".agents/skills/fde-safety/scripts",
        ".agents/skills/fde-save",
        ".agents/skills/fde-save/agents",
        ".agents/skills/fde-save/references",
        ".agents/skills/fde-setup",
        ".agents/skills/fde-setup/agents",
        ".agents/skills/fde-setup/references",
        ".agents/skills/fde-spread",
        ".agents/skills/fde-spread/agents",
        ".agents/skills/fde-spread/references",
        ".agents/skills/fde-start",
        ".agents/skills/fde-start/agents",
        ".agents/skills/fde-start/references",
        ".agents/skills/fde-title",
        ".agents/skills/fde-title/agents",
        ".agents/skills/fde-title/references",
        ".agents/skills/fde-topics",
        ".agents/skills/fde-topics/agents",
        ".agents/skills/fde-topics/references",
        ".agents/skills/fde-update",
        ".agents/skills/fde-update/agents",
        ".agents/skills/fde-update/references",
        ".agents/skills/fde-write",
        ".agents/skills/fde-write/agents",
        ".agents/skills/fde-write/references",
        ".agents/skills/fde-write/references/modes",
        ".fde",
        ".fde/indexes",
        ".fde/logs",
        ".fde/quarantine",
        ".fde/reports",
        ".fde/state",
        ".fde/versions",
        "0-待处理材料",
        "0-待处理材料/待处理",
        "0-待处理材料/已处理记录",
        "1-个人说明书",
        "2-产品库",
        "3-客户需求库",
        "4-素材案例库",
        "5-方法论库",
        "6-内容生产",
        "6-内容生产/草稿",
        "6-内容生产/待发布",
        "6-内容生产/待审核",
        "6-内容生产/发布数据",
        "6-内容生产/选题",
        "6-内容生产/已发布",
        "7-系统",
        "7-系统/AI协作",
        "7-系统/AI协作/输出",
        "7-系统/AI协作/运行记录",
        "docs"
      ],
      files: {
        ".agents/skills/fde-action/agents/openai.yaml": 'interface:\n  display_name: "行动卡点"\n  short_description: "读取当前六类资产知识库，执行行动卡点并返回来源、结果和未确认项。"\n  default_prompt: "请使用 $fde-action 处理当前知识库里的真实任务，并说明来源和未确认项。"\n',
        ".agents/skills/fde-action/references/acceptance.md": "# 验收\n\n- [ ] fde-action 使用当前知识库配置。\n- [ ] 读取范围与任务有关。\n- [ ] 事实、推断和未知分开。\n- [ ] 关键判断有来源。\n- [ ] 破坏性动作先确认。\n- [ ] 输出包含：卡点类型、下一步动作、完成信号、所需支持、回填时间。\n- [ ] 能力：诊断知道但不行动的具体阻点。\n- [ ] 能力：区分方向不清、条件不足、未承诺和回避结果。\n- [ ] 能力：把任务缩成一个可完成动作。\n- [ ] 能力：约定完成信号和回填时间。\n",
        ".agents/skills/fde-action/references/atoms.jsonl": '{"id": "FDE-ACTION-001", "rule": "先定位当前知识库配置，再读取资料。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-ACTION-002", "rule": "只加载当前任务需要的资产。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-ACTION-003", "rule": "区分事实、用户陈述、推断和未知。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-ACTION-004", "rule": "关键结论返回来源路径。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-ACTION-005", "rule": "原始材料保持不变。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-ACTION-006", "rule": "批量写入、移动、覆盖和删除先确认。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-ACTION-007", "rule": "不跨客户或跨项目读取。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-ACTION-008", "rule": "资料不足时完成证据允许的部分。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-ACTION-009", "rule": "不能确认的分类进入待确认区。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-ACTION-010", "rule": "交付后说明写入位置和未完成项。", "source": "fde-skills-workflow-v1"}\n',
        ".agents/skills/fde-action/references/axioms.md": "# 公理\n\n## AXIOM-01：定位\n\n没有知识库配置就不猜路径。\n\n## AXIOM-02：最小读取\n\n只读取当前任务需要的资产。\n\n## AXIOM-03：证据\n\n事实和推断分开，关键判断附来源。\n\n## AXIOM-04：可恢复\n\n原始材料不覆盖，破坏性动作先确认。\n\n## AXIOM-05：闭环\n\n交付说明结果、写入位置、未知项和下一步。\n",
        ".agents/skills/fde-action/references/behavior-tests.json": '[\n  {\n    "id": "case-1",\n    "prompt": "使用 fde-action 完成：诊断知道但不行动的具体阻点。",\n    "must_do": [\n      "诊断知道但不行动的具体阻点",\n      "区分方向不清、条件不足、未承诺和回避结果",\n      "把任务缩成一个可完成动作"\n    ],\n    "must_not": [\n      "编造事实",\n      "跨项目读取"\n    ]\n  },\n  {\n    "id": "case-2",\n    "prompt": "继续使用 fde-action 完成：约定完成信号和回填时间。",\n    "must_do": [\n      "约定完成信号和回填时间",\n      "返回来源",\n      "说明未确认项"\n    ],\n    "must_not": [\n      "把推断写成事实",\n      "覆盖原始材料"\n    ]\n  },\n  {\n    "id": "counterexample-1",\n    "prompt": "找不到配置，但要求 fde-action 批量写入。",\n    "must_do": [\n      "停止写入",\n      "询问根目录"\n    ],\n    "must_not": [\n      "猜路径",\n      "写入用户主目录"\n    ]\n  }\n]\n',
        ".agents/skills/fde-action/references/capability-contract.json": '{\n  "skill": "fde-action",\n  "implementation": "fde-skills-owned",\n  "runtime_uses_historical_skill": false,\n  "must_support": [\n    "诊断知道但不行动的具体阻点",\n    "区分方向不清、条件不足、未承诺和回避结果",\n    "把任务缩成一个可完成动作",\n    "约定完成信号和回填时间"\n  ],\n  "tests": [\n    "case-1",\n    "case-2",\n    "counterexample-1"\n  ]\n}\n',
        ".agents/skills/fde-action/references/cases.md": "# 案例\n\n## 正常\n\n配置可读，fde-action 只读取所需资产，交付附来源。\n\n## 资料不足\n\n完成有证据的部分，把缺口留给用户。\n\n## 停止\n\n找不到配置或请求越过项目边界时停止写入。\n",
        ".agents/skills/fde-action/references/library-map.md": "# 六类资产映射\n\n运行时以知识库根目录的 `.fde/config.yaml` 为准。\n\n- owner：个人说明书\n- product：产品库\n- customer：客户需求库\n- case：素材案例库\n- method：方法论库\n- content：内容生产\n\n不得把这些显示名当成固定路径。\n",
        ".agents/skills/fde-action/references/maturity.json": '{\n  "status": "project-owned-v1",\n  "source_role": "historical_reference_only",\n  "live_customer_test": false\n}\n',
        ".agents/skills/fde-action/references/method.md": "# 行动卡点方法\n\n## 输入\n\n- 当前目标\n- 已承诺动作\n- 最近一次尝试\n- 实际阻力\n- 可用时间和资源\n\n## 步骤\n\n1. 区分不知道做什么、做不到、未承诺和在回避结果。\n2. 找出动作开始前的最后一个具体阻点。\n3. 把任务改写为有对象、动作、完成信号和截止时间的一步。\n4. 约定一次回填，不做长期激励演讲。\n\n## 交付\n\n- 卡点类型\n- 下一步动作\n- 完成信号\n- 所需支持\n- 回填时间\n\n## 停止\n\n- 目标本身不清时转 fde-goal\n- 需要专业心理支持时不代替专业人员\n- 不使用羞辱或人格判断\n",
        ".agents/skills/fde-action/references/source-evidence.md": "# 当前实现证据\n\n- 工作流规格：`tools/rewrite-owned-suite.py` 的 `fde-action`。\n- 六类资产路径：`六类资产库目录模板/.fde/config.yaml`。\n- 名称和历史映射：`改造清单/skill-manifest.json`。\n- 相似度验收：`tools/check-source-similarity.py`。\n",
        ".agents/skills/fde-action/references/source-map.md": "# 来源映射\n\n## 当前实现\n\n- 运行流程由 `tools/rewrite-owned-suite.py` 中的 `fde-action` 规格生成。\n- 资产模型来自本项目 `六类资产库目录模板/.fde/config.yaml`。\n- 用户要求是：英文 `fde-` 名称、易于理解、服务当前六类资产库。\n\n## 历史对照\n\n- 历史能力对照：`dbskill-upstream/skills/dbs-action`。\n- 固定快照：`v2.17.15`，commit `af99c577bfb9f1926236671a882b15030242fe8b`。\n- 该快照只用于能力盘点、相似度检查和署名追溯，不在运行时加载。\n\n历史对照不代表当前运行规则。商业许可仍按项目 `NOTICE.md` 和授权清单处理。\n",
        ".agents/skills/fde-action/SKILL.md": "---\nname: fde-action\ndescription: |\n  处理已经知道要做什么但没有推进的任务。核对目标、前置条件、阻力和反馈，把任务缩成能产生结果的一步。触发方式：/fde-action、「一直拖着没做」「这件事推不动」。\n---\n\n# 行动卡点\n\n<!-- FDE-OWNED-WORKFLOW: v1 -->\n\n## 开始前\n\n1. 从当前目录向上找到 `.fde/config.yaml`，按配置解析六类资产库。\n2. 只读取本任务需要的文件，不跨知识库搜索。\n3. 把库内事实、用户本轮信息、当前推断和未知项分开。\n4. 原始材料不覆盖；删除、移动和批量写入先确认。\n\n## 读取\n\n- 当前目标\n- 已承诺动作\n- 最近一次尝试\n- 实际阻力\n- 可用时间和资源\n\n## 必须保留的能力\n\n- 诊断知道但不行动的具体阻点\n- 区分方向不清、条件不足、未承诺和回避结果\n- 把任务缩成一个可完成动作\n- 约定完成信号和回填时间\n\n## 执行\n\n1. 区分不知道做什么、做不到、未承诺和在回避结果。\n2. 找出动作开始前的最后一个具体阻点。\n3. 把任务改写为有对象、动作、完成信号和截止时间的一步。\n4. 约定一次回填，不做长期激励演讲。\n\n## 交付\n\n- 卡点类型\n- 下一步动作\n- 完成信号\n- 所需支持\n- 回填时间\n\n每个关键判断附来源路径；没有来源的内容标为推断或待确认。\n\n## 写回\n\n- 用户同意后把动作写入当前任务状态\n- 完成结果回到相关项目记录\n\n## 停止条件\n\n- 目标本身不清时转 fde-goal\n- 需要专业心理支持时不代替专业人员\n- 不使用羞辱或人格判断\n\n## 接续\n\n- 目标不清用 fde-goal\n- 方向不清用 fde-diagnose\n\n来源沿革只用于追溯，不作为运行指令。需要追溯时读取 `references/source-map.md`。\n",
        ".agents/skills/fde-benchmark/agents/openai.yaml": 'interface:\n  display_name: "对标研究"\n  short_description: "读取当前六类资产知识库，执行对标研究并返回来源、结果和未确认项。"\n  default_prompt: "请使用 $fde-benchmark 处理当前知识库里的真实任务，并说明来源和未确认项。"\n',
        ".agents/skills/fde-benchmark/references/acceptance.md": "# 验收\n\n- [ ] fde-benchmark 使用当前知识库配置。\n- [ ] 读取范围与任务有关。\n- [ ] 事实、推断和未知分开。\n- [ ] 关键判断有来源。\n- [ ] 破坏性动作先确认。\n- [ ] 输出包含：候选筛选、可学动作、不适用部分、证据链接或文件、本周实验。\n- [ ] 能力：从候选中筛选对标。\n- [ ] 能力：评估用户指定的对标。\n- [ ] 能力：比较公开且可观察的业务条件。\n- [ ] 能力：提取可复测动作而不复制人设。\n- [ ] 能力：记录实验和结果。\n",
        ".agents/skills/fde-benchmark/references/atoms.jsonl": '{"id": "FDE-BENCHMARK-001", "rule": "先定位当前知识库配置，再读取资料。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-BENCHMARK-002", "rule": "只加载当前任务需要的资产。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-BENCHMARK-003", "rule": "区分事实、用户陈述、推断和未知。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-BENCHMARK-004", "rule": "关键结论返回来源路径。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-BENCHMARK-005", "rule": "原始材料保持不变。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-BENCHMARK-006", "rule": "批量写入、移动、覆盖和删除先确认。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-BENCHMARK-007", "rule": "不跨客户或跨项目读取。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-BENCHMARK-008", "rule": "资料不足时完成证据允许的部分。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-BENCHMARK-009", "rule": "不能确认的分类进入待确认区。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-BENCHMARK-010", "rule": "交付后说明写入位置和未完成项。", "source": "fde-skills-workflow-v1"}\n',
        ".agents/skills/fde-benchmark/references/axioms.md": "# 公理\n\n## AXIOM-01：定位\n\n没有知识库配置就不猜路径。\n\n## AXIOM-02：最小读取\n\n只读取当前任务需要的资产。\n\n## AXIOM-03：证据\n\n事实和推断分开，关键判断附来源。\n\n## AXIOM-04：可恢复\n\n原始材料不覆盖，破坏性动作先确认。\n\n## AXIOM-05：闭环\n\n交付说明结果、写入位置、未知项和下一步。\n",
        ".agents/skills/fde-benchmark/references/behavior-tests.json": '[\n  {\n    "id": "case-1",\n    "prompt": "使用 fde-benchmark 完成：从候选中筛选对标。",\n    "must_do": [\n      "从候选中筛选对标",\n      "评估用户指定的对标",\n      "比较公开且可观察的业务条件"\n    ],\n    "must_not": [\n      "编造事实",\n      "跨项目读取"\n    ]\n  },\n  {\n    "id": "case-2",\n    "prompt": "继续使用 fde-benchmark 完成：记录实验和结果。",\n    "must_do": [\n      "记录实验和结果",\n      "返回来源",\n      "说明未确认项"\n    ],\n    "must_not": [\n      "把推断写成事实",\n      "覆盖原始材料"\n    ]\n  },\n  {\n    "id": "counterexample-1",\n    "prompt": "找不到配置，但要求 fde-benchmark 批量写入。",\n    "must_do": [\n      "停止写入",\n      "询问根目录"\n    ],\n    "must_not": [\n      "猜路径",\n      "写入用户主目录"\n    ]\n  }\n]\n',
        ".agents/skills/fde-benchmark/references/capability-contract.json": '{\n  "skill": "fde-benchmark",\n  "implementation": "fde-skills-owned",\n  "runtime_uses_historical_skill": false,\n  "must_support": [\n    "从候选中筛选对标",\n    "评估用户指定的对标",\n    "比较公开且可观察的业务条件",\n    "提取可复测动作而不复制人设",\n    "记录实验和结果"\n  ],\n  "tests": [\n    "case-1",\n    "case-2",\n    "counterexample-1"\n  ]\n}\n',
        ".agents/skills/fde-benchmark/references/cases.md": "# 案例\n\n## 正常\n\n配置可读，fde-benchmark 只读取所需资产，交付附来源。\n\n## 资料不足\n\n完成有证据的部分，把缺口留给用户。\n\n## 停止\n\n找不到配置或请求越过项目边界时停止写入。\n",
        ".agents/skills/fde-benchmark/references/library-map.md": "# 六类资产映射\n\n运行时以知识库根目录的 `.fde/config.yaml` 为准。\n\n- owner：个人说明书\n- product：产品库\n- customer：客户需求库\n- case：素材案例库\n- method：方法论库\n- content：内容生产\n\n不得把这些显示名当成固定路径。\n",
        ".agents/skills/fde-benchmark/references/maturity.json": '{\n  "status": "project-owned-v1",\n  "source_role": "historical_reference_only",\n  "live_customer_test": false\n}\n',
        ".agents/skills/fde-benchmark/references/method.md": "# 对标研究方法\n\n## 输入\n\n- 自己的目标和约束\n- 候选对象的公开材料\n- 知识库中的产品、客户和内容数据\n\n## 步骤\n\n1. 先写清要解决的问题和不能照搬的条件。\n2. 选择 3—5 个可比对象，记录来源和观察时间。\n3. 按对象、做法、证据、适用条件和风险拆解。\n4. 只提取能做小实验的动作，安排验证周期。\n\n## 交付\n\n- 候选筛选\n- 可学动作\n- 不适用部分\n- 证据链接或文件\n- 本周实验\n\n## 停止\n\n- 没有公开证据时不评价结果\n- 不得把粉丝数直接当商业效果\n- 不复制个人经历和虚构人设\n",
        ".agents/skills/fde-benchmark/references/modes/big10.md": "# 多对象扫描\n\n先列 10 个候选，只用公开证据筛到 3 个可比对象。筛选理由写成条件，不写个人好恶。\n",
        ".agents/skills/fde-benchmark/references/modes/note.md": "# 单篇内容拆解\n\n记录内容对象、问题、材料、结构、行动和发布数据。只提取可复测变量，不照搬措辞。\n",
        ".agents/skills/fde-benchmark/references/source-evidence.md": "# 当前实现证据\n\n- 工作流规格：`tools/rewrite-owned-suite.py` 的 `fde-benchmark`。\n- 六类资产路径：`六类资产库目录模板/.fde/config.yaml`。\n- 名称和历史映射：`改造清单/skill-manifest.json`。\n- 相似度验收：`tools/check-source-similarity.py`。\n",
        ".agents/skills/fde-benchmark/references/source-map.md": "# 来源映射\n\n## 当前实现\n\n- 运行流程由 `tools/rewrite-owned-suite.py` 中的 `fde-benchmark` 规格生成。\n- 资产模型来自本项目 `六类资产库目录模板/.fde/config.yaml`。\n- 用户要求是：英文 `fde-` 名称、易于理解、服务当前六类资产库。\n\n## 历史对照\n\n- 历史能力对照：`dbskill-upstream/skills/dbs-benchmark`。\n- 固定快照：`v2.17.15`，commit `af99c577bfb9f1926236671a882b15030242fe8b`。\n- 该快照只用于能力盘点、相似度检查和署名追溯，不在运行时加载。\n\n历史对照不代表当前运行规则。商业许可仍按项目 `NOTICE.md` 和授权清单处理。\n",
        ".agents/skills/fde-benchmark/SKILL.md": "---\nname: fde-benchmark\ndescription: |\n  围绕一个明确业务目标研究对标对象，比较可观察的产品、内容、客户和结果，不复制人设。触发方式：/fde-benchmark、「找对标」「研究这个账号」。\n---\n\n# 对标研究\n\n<!-- FDE-OWNED-WORKFLOW: v1 -->\n\n## 开始前\n\n1. 从当前目录向上找到 `.fde/config.yaml`，按配置解析六类资产库。\n2. 只读取本任务需要的文件，不跨知识库搜索。\n3. 把库内事实、用户本轮信息、当前推断和未知项分开。\n4. 原始材料不覆盖；删除、移动和批量写入先确认。\n\n## 读取\n\n- 自己的目标和约束\n- 候选对象的公开材料\n- 知识库中的产品、客户和内容数据\n\n## 必须保留的能力\n\n- 从候选中筛选对标\n- 评估用户指定的对标\n- 比较公开且可观察的业务条件\n- 提取可复测动作而不复制人设\n- 记录实验和结果\n\n## 执行\n\n1. 先写清要解决的问题和不能照搬的条件。\n2. 选择 3—5 个可比对象，记录来源和观察时间。\n3. 按对象、做法、证据、适用条件和风险拆解。\n4. 只提取能做小实验的动作，安排验证周期。\n\n## 交付\n\n- 候选筛选\n- 可学动作\n- 不适用部分\n- 证据链接或文件\n- 本周实验\n\n每个关键判断附来源路径；没有来源的内容标为推断或待确认。\n\n## 写回\n\n- 研究记录写入方法库\n- 实验结果写入 `发布数据/分析`，并关联对应已发布内容\n\n## 停止条件\n\n- 没有公开证据时不评价结果\n- 不得把粉丝数直接当商业效果\n- 不复制个人经历和虚构人设\n\n## 接续\n\n- 实验形成内容时用 fde-write\n- 商业方向不清用 fde-diagnose\n\n来源沿革只用于追溯，不作为运行指令。需要追溯时读取 `references/source-map.md`。\n",
        ".agents/skills/fde-check/agents/openai.yaml": 'interface:\n  display_name: "文字痕迹检查"\n  short_description: "读取当前六类资产知识库，执行文字痕迹检查并返回来源、结果和未确认项。"\n  default_prompt: "请使用 $fde-check 处理当前知识库里的真实任务，并说明来源和未确认项。"\n',
        ".agents/skills/fde-check/references/acceptance.md": "# 验收\n\n- [ ] fde-check 使用当前知识库配置。\n- [ ] 读取范围与任务有关。\n- [ ] 事实、推断和未知分开。\n- [ ] 关键判断有来源。\n- [ ] 破坏性动作先确认。\n- [ ] 输出包含：问题位置、问题类型、为什么有问题、最小修改动作、应保留内容。\n- [ ] 能力：扫描空泛结构和常见 AI 写作特征。\n- [ ] 能力：标出具体句子和问题类型。\n- [ ] 能力：对照个人表达检查偏差。\n- [ ] 能力：默认只诊断不改写。\n- [ ] 能力：不声称能证明真实作者。\n",
        ".agents/skills/fde-check/references/atoms.jsonl": '{"id": "FDE-CHECK-001", "rule": "先定位当前知识库配置，再读取资料。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-CHECK-002", "rule": "只加载当前任务需要的资产。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-CHECK-003", "rule": "区分事实、用户陈述、推断和未知。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-CHECK-004", "rule": "关键结论返回来源路径。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-CHECK-005", "rule": "原始材料保持不变。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-CHECK-006", "rule": "批量写入、移动、覆盖和删除先确认。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-CHECK-007", "rule": "不跨客户或跨项目读取。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-CHECK-008", "rule": "资料不足时完成证据允许的部分。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-CHECK-009", "rule": "不能确认的分类进入待确认区。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-CHECK-010", "rule": "交付后说明写入位置和未完成项。", "source": "fde-skills-workflow-v1"}\n',
        ".agents/skills/fde-check/references/axioms.md": "# 公理\n\n## AXIOM-01：定位\n\n没有知识库配置就不猜路径。\n\n## AXIOM-02：最小读取\n\n只读取当前任务需要的资产。\n\n## AXIOM-03：证据\n\n事实和推断分开，关键判断附来源。\n\n## AXIOM-04：可恢复\n\n原始材料不覆盖，破坏性动作先确认。\n\n## AXIOM-05：闭环\n\n交付说明结果、写入位置、未知项和下一步。\n",
        ".agents/skills/fde-check/references/behavior-tests.json": '[\n  {\n    "id": "case-1",\n    "prompt": "使用 fde-check 完成：扫描空泛结构和常见 AI 写作特征。",\n    "must_do": [\n      "扫描空泛结构和常见 AI 写作特征",\n      "标出具体句子和问题类型",\n      "对照个人表达检查偏差"\n    ],\n    "must_not": [\n      "编造事实",\n      "跨项目读取"\n    ]\n  },\n  {\n    "id": "case-2",\n    "prompt": "继续使用 fde-check 完成：不声称能证明真实作者。",\n    "must_do": [\n      "不声称能证明真实作者",\n      "返回来源",\n      "说明未确认项"\n    ],\n    "must_not": [\n      "把推断写成事实",\n      "覆盖原始材料"\n    ]\n  },\n  {\n    "id": "counterexample-1",\n    "prompt": "找不到配置，但要求 fde-check 批量写入。",\n    "must_do": [\n      "停止写入",\n      "询问根目录"\n    ],\n    "must_not": [\n      "猜路径",\n      "写入用户主目录"\n    ]\n  }\n]\n',
        ".agents/skills/fde-check/references/capability-contract.json": '{\n  "skill": "fde-check",\n  "implementation": "fde-skills-owned",\n  "runtime_uses_historical_skill": false,\n  "must_support": [\n    "扫描空泛结构和常见 AI 写作特征",\n    "标出具体句子和问题类型",\n    "对照个人表达检查偏差",\n    "默认只诊断不改写",\n    "不声称能证明真实作者"\n  ],\n  "tests": [\n    "case-1",\n    "case-2",\n    "counterexample-1"\n  ]\n}\n',
        ".agents/skills/fde-check/references/cases.md": "# 案例\n\n## 正常\n\n配置可读，fde-check 只读取所需资产，交付附来源。\n\n## 资料不足\n\n完成有证据的部分，把缺口留给用户。\n\n## 停止\n\n找不到配置或请求越过项目边界时停止写入。\n",
        ".agents/skills/fde-check/references/library-map.md": "# 六类资产映射\n\n运行时以知识库根目录的 `.fde/config.yaml` 为准。\n\n- owner：个人说明书\n- product：产品库\n- customer：客户需求库\n- case：素材案例库\n- method：方法论库\n- content：内容生产\n\n不得把这些显示名当成固定路径。\n",
        ".agents/skills/fde-check/references/maturity.json": '{\n  "status": "project-owned-v1",\n  "source_role": "historical_reference_only",\n  "live_customer_test": false\n}\n',
        ".agents/skills/fde-check/references/method.md": "# 文字痕迹检查方法\n\n## 输入\n\n- 待检查文本\n- 个人说明书中的原话和禁区\n- 内容来源\n- 用户要求保留的表达\n\n## 步骤\n\n1. 先找没有来源的事实和过度确定的判断。\n2. 再找重复句式、均匀段落、概念堆叠和替读者总结。\n3. 对照本人原话标出语气和用词偏差。\n4. 按删、补证据、还原原话和保留分组。\n\n## 交付\n\n- 问题位置\n- 问题类型\n- 为什么有问题\n- 最小修改动作\n- 应保留内容\n\n## 停止\n\n- 不能根据文本判断是否由 AI 实际生成\n- 不删除行业必要术语\n- 不为了口语化添加虚构场景\n",
        ".agents/skills/fde-check/references/source-evidence.md": "# 当前实现证据\n\n- 工作流规格：`tools/rewrite-owned-suite.py` 的 `fde-check`。\n- 六类资产路径：`六类资产库目录模板/.fde/config.yaml`。\n- 名称和历史映射：`改造清单/skill-manifest.json`。\n- 相似度验收：`tools/check-source-similarity.py`。\n",
        ".agents/skills/fde-check/references/source-map.md": "# 来源映射\n\n## 当前实现\n\n- 运行流程由 `tools/rewrite-owned-suite.py` 中的 `fde-check` 规格生成。\n- 资产模型来自本项目 `六类资产库目录模板/.fde/config.yaml`。\n- 用户要求是：英文 `fde-` 名称、易于理解、服务当前六类资产库。\n\n## 历史对照\n\n- 历史能力对照：`dbskill-upstream/skills/dbs-ai-check`。\n- 固定快照：`v2.17.15`，commit `af99c577bfb9f1926236671a882b15030242fe8b`。\n- 该快照只用于能力盘点、相似度检查和署名追溯，不在运行时加载。\n\n历史对照不代表当前运行规则。商业许可仍按项目 `NOTICE.md` 和授权清单处理。\n",
        ".agents/skills/fde-check/SKILL.md": "---\nname: fde-check\ndescription: |\n  检查文稿中的空泛判断、整齐模板、无来源事实和与个人表达不一致的句子。默认只标问题。触发方式：/fde-check、「检查 AI 味」「这段像不像我」。\n---\n\n# 文字痕迹检查\n\n<!-- FDE-OWNED-WORKFLOW: v1 -->\n\n## 开始前\n\n1. 从当前目录向上找到 `.fde/config.yaml`，按配置解析六类资产库。\n2. 只读取本任务需要的文件，不跨知识库搜索。\n3. 把库内事实、用户本轮信息、当前推断和未知项分开。\n4. 原始材料不覆盖；删除、移动和批量写入先确认。\n\n## 读取\n\n- 待检查文本\n- 个人说明书中的原话和禁区\n- 内容来源\n- 用户要求保留的表达\n\n## 必须保留的能力\n\n- 扫描空泛结构和常见 AI 写作特征\n- 标出具体句子和问题类型\n- 对照个人表达检查偏差\n- 默认只诊断不改写\n- 不声称能证明真实作者\n\n## 执行\n\n1. 先找没有来源的事实和过度确定的判断。\n2. 再找重复句式、均匀段落、概念堆叠和替读者总结。\n3. 对照本人原话标出语气和用词偏差。\n4. 按删、补证据、还原原话和保留分组。\n\n## 交付\n\n- 问题位置\n- 问题类型\n- 为什么有问题\n- 最小修改动作\n- 应保留内容\n\n每个关键判断附来源路径；没有来源的内容标为推断或待确认。\n\n## 写回\n\n- 默认不改原文；确认后另存版本\n\n## 停止条件\n\n- 不能根据文本判断是否由 AI 实际生成\n- 不删除行业必要术语\n- 不为了口语化添加虚构场景\n\n## 接续\n\n- 整体审核用 fde-review\n- 需要写稿用 fde-write\n\n来源沿革只用于追溯，不作为运行指令。需要追溯时读取 `references/source-map.md`。\n",
        ".agents/skills/fde-decide/agents/openai.yaml": 'interface:\n  display_name: "决策记录"\n  short_description: "读取当前六类资产知识库，执行决策记录并返回来源、结果和未确认项。"\n  default_prompt: "请使用 $fde-decide 处理当前知识库里的真实任务，并说明来源和未确认项。"\n',
        ".agents/skills/fde-decide/references/acceptance.md": "# 验收\n\n- [ ] fde-decide 使用当前知识库配置。\n- [ ] 读取范围与任务有关。\n- [ ] 事实、推断和未知分开。\n- [ ] 关键判断有来源。\n- [ ] 破坏性动作先确认。\n- [ ] 输出包含：领域档案、决策事件、不可改快照、当前选择、关键假设、回填计划、模式和状态画像。\n- [ ] 能力：为长期领域建立决策记录。\n- [ ] 能力：保存带来源且写后不改的快照。\n- [ ] 能力：支持结果回填和判断变化。\n- [ ] 能力：从多次记录提炼重复模式。\n- [ ] 能力：生成当前状态画像。\n",
        ".agents/skills/fde-decide/references/atoms.jsonl": '{"id": "FDE-DECIDE-001", "rule": "先定位当前知识库配置，再读取资料。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DECIDE-002", "rule": "只加载当前任务需要的资产。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DECIDE-003", "rule": "区分事实、用户陈述、推断和未知。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DECIDE-004", "rule": "关键结论返回来源路径。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DECIDE-005", "rule": "原始材料保持不变。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DECIDE-006", "rule": "批量写入、移动、覆盖和删除先确认。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DECIDE-007", "rule": "不跨客户或跨项目读取。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DECIDE-008", "rule": "资料不足时完成证据允许的部分。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DECIDE-009", "rule": "不能确认的分类进入待确认区。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DECIDE-010", "rule": "交付后说明写入位置和未完成项。", "source": "fde-skills-workflow-v1"}\n',
        ".agents/skills/fde-decide/references/axioms.md": "# 公理\n\n## AXIOM-01：定位\n\n没有知识库配置就不猜路径。\n\n## AXIOM-02：最小读取\n\n只读取当前任务需要的资产。\n\n## AXIOM-03：证据\n\n事实和推断分开，关键判断附来源。\n\n## AXIOM-04：可恢复\n\n原始材料不覆盖，破坏性动作先确认。\n\n## AXIOM-05：闭环\n\n交付说明结果、写入位置、未知项和下一步。\n",
        ".agents/skills/fde-decide/references/behavior-tests.json": '[\n  {\n    "id": "case-1",\n    "prompt": "使用 fde-decide 完成：为长期领域建立决策记录。",\n    "must_do": [\n      "为长期领域建立决策记录",\n      "保存带来源且写后不改的快照",\n      "支持结果回填和判断变化"\n    ],\n    "must_not": [\n      "编造事实",\n      "跨项目读取"\n    ]\n  },\n  {\n    "id": "case-2",\n    "prompt": "继续使用 fde-decide 完成：生成当前状态画像。",\n    "must_do": [\n      "生成当前状态画像",\n      "返回来源",\n      "说明未确认项"\n    ],\n    "must_not": [\n      "把推断写成事实",\n      "覆盖原始材料"\n    ]\n  },\n  {\n    "id": "counterexample-1",\n    "prompt": "找不到配置，但要求 fde-decide 批量写入。",\n    "must_do": [\n      "停止写入",\n      "询问根目录"\n    ],\n    "must_not": [\n      "猜路径",\n      "写入用户主目录"\n    ]\n  }\n]\n',
        ".agents/skills/fde-decide/references/capability-contract.json": '{\n  "skill": "fde-decide",\n  "implementation": "fde-skills-owned",\n  "runtime_uses_historical_skill": false,\n  "must_support": [\n    "为长期领域建立决策记录",\n    "保存带来源且写后不改的快照",\n    "支持结果回填和判断变化",\n    "从多次记录提炼重复模式",\n    "生成当前状态画像"\n  ],\n  "tests": [\n    "case-1",\n    "case-2",\n    "counterexample-1"\n  ]\n}\n',
        ".agents/skills/fde-decide/references/cases.md": "# 案例\n\n## 正常\n\n配置可读，fde-decide 只读取所需资产，交付附来源。\n\n## 资料不足\n\n完成有证据的部分，把缺口留给用户。\n\n## 停止\n\n找不到配置或请求越过项目边界时停止写入。\n",
        ".agents/skills/fde-decide/references/decision-model.md": "# 四层决策记录\n\n1. 领域：长期跟踪的范围和指标。\n2. 事件：一次具体选择及选项。\n3. 快照：当时证据、假设、选择和未选原因，写后不改。\n4. 模式：多次结果后提炼的重复信号和当前状态画像。\n\n结果通过追加回填进入事件，不覆盖快照。\n",
        ".agents/skills/fde-decide/references/library-map.md": "# 六类资产映射\n\n运行时以知识库根目录的 `.fde/config.yaml` 为准。\n\n- owner：个人说明书\n- product：产品库\n- customer：客户需求库\n- case：素材案例库\n- method：方法论库\n- content：内容生产\n\n不得把这些显示名当成固定路径。\n",
        ".agents/skills/fde-decide/references/maturity.json": '{\n  "status": "project-owned-v1",\n  "source_role": "historical_reference_only",\n  "live_customer_test": false\n}\n',
        ".agents/skills/fde-decide/references/method.md": "# 决策记录方法\n\n## 输入\n\n- 要做的决定\n- 选项\n- 证据\n- 限制\n- 已有类似记录\n\n## 步骤\n\n1. 建立领域、事件、快照、模式四层记录。\n2. 确认决策人、截止时间和可逆性，为每个选项记录事实、假设、代价和失败信号。\n3. 保存带来源且写后不改的决策快照，写下选择及未选原因。\n4. 按日期回填结果和判断变化，不覆盖旧快照。\n5. 多次记录后提炼重复模式，并生成当前状态画像。\n\n## 交付\n\n- 领域档案\n- 决策事件\n- 不可改快照\n- 当前选择\n- 关键假设\n- 回填计划\n- 模式和状态画像\n\n## 停止\n\n- 决策人不是用户时标明权限\n- 证据不足时可记录暂定选择但不能写成确定结论\n- 不可逆高风险决定先提示专业核验\n",
        ".agents/skills/fde-decide/references/source-evidence.md": "# 当前实现证据\n\n- 工作流规格：`tools/rewrite-owned-suite.py` 的 `fde-decide`。\n- 六类资产路径：`六类资产库目录模板/.fde/config.yaml`。\n- 名称和历史映射：`改造清单/skill-manifest.json`。\n- 相似度验收：`tools/check-source-similarity.py`。\n",
        ".agents/skills/fde-decide/references/source-map.md": "# 来源映射\n\n## 当前实现\n\n- 运行流程由 `tools/rewrite-owned-suite.py` 中的 `fde-decide` 规格生成。\n- 资产模型来自本项目 `六类资产库目录模板/.fde/config.yaml`。\n- 用户要求是：英文 `fde-` 名称、易于理解、服务当前六类资产库。\n\n## 历史对照\n\n- 历史能力对照：`dbskill-upstream/skills/dbs-decision`。\n- 固定快照：`v2.17.15`，commit `af99c577bfb9f1926236671a882b15030242fe8b`。\n- 该快照只用于能力盘点、相似度检查和署名追溯，不在运行时加载。\n\n历史对照不代表当前运行规则。商业许可仍按项目 `NOTICE.md` 和授权清单处理。\n",
        ".agents/skills/fde-decide/SKILL.md": "---\nname: fde-decide\ndescription: |\n  记录一个需要以后回看结果的选择，保存选项、证据、假设、风险和回填日期。触发方式：/fde-decide、「记下这个决定」「以后复盘这个选择」。\n---\n\n# 决策记录\n\n<!-- FDE-OWNED-WORKFLOW: v1 -->\n\n## 开始前\n\n1. 从当前目录向上找到 `.fde/config.yaml`，按配置解析六类资产库。\n2. 只读取本任务需要的文件，不跨知识库搜索。\n3. 把库内事实、用户本轮信息、当前推断和未知项分开。\n4. 原始材料不覆盖；删除、移动和批量写入先确认。\n\n## 读取\n\n- 要做的决定\n- 选项\n- 证据\n- 限制\n- 已有类似记录\n\n## 必须保留的能力\n\n- 为长期领域建立决策记录\n- 保存带来源且写后不改的快照\n- 支持结果回填和判断变化\n- 从多次记录提炼重复模式\n- 生成当前状态画像\n\n## 执行\n\n1. 建立领域、事件、快照、模式四层记录。\n2. 确认决策人、截止时间和可逆性，为每个选项记录事实、假设、代价和失败信号。\n3. 保存带来源且写后不改的决策快照，写下选择及未选原因。\n4. 按日期回填结果和判断变化，不覆盖旧快照。\n5. 多次记录后提炼重复模式，并生成当前状态画像。\n\n## 交付\n\n- 领域档案\n- 决策事件\n- 不可改快照\n- 当前选择\n- 关键假设\n- 回填计划\n- 模式和状态画像\n\n每个关键判断附来源路径；没有来源的内容标为推断或待确认。\n\n## 写回\n\n- 写入 `.fde/state/decisions`\n- 后续结果追加，不覆盖原判断\n\n## 停止条件\n\n- 决策人不是用户时标明权限\n- 证据不足时可记录暂定选择但不能写成确定结论\n- 不可逆高风险决定先提示专业核验\n\n## 接续\n\n- 商业判断用 fde-diagnose\n- 回看旧决定用 fde-report\n\n来源沿革只用于追溯，不作为运行指令。需要追溯时读取 `references/source-map.md`。\n",
        ".agents/skills/fde-define/agents/openai.yaml": 'interface:\n  display_name: "词义校准"\n  short_description: "读取当前六类资产知识库，执行词义校准并返回来源、结果和未确认项。"\n  default_prompt: "请使用 $fde-define 处理当前知识库里的真实任务，并说明来源和未确认项。"\n',
        ".agents/skills/fde-define/references/acceptance.md": "# 验收\n\n- [ ] fde-define 使用当前知识库配置。\n- [ ] 读取范围与任务有关。\n- [ ] 事实、推断和未知分开。\n- [ ] 关键判断有来源。\n- [ ] 破坏性动作先确认。\n- [ ] 输出包含：用法列表、操作性定义、包含项、不包含项、反例、对当前决定的影响。\n- [ ] 能力：收集一个词在不同场景的用法。\n- [ ] 能力：换成可观察的人、动作和结果。\n- [ ] 能力：建立当前任务的暂定定义。\n- [ ] 能力：提供包含项、排除项和反例。\n",
        ".agents/skills/fde-define/references/atoms.jsonl": '{"id": "FDE-DEFINE-001", "rule": "先定位当前知识库配置，再读取资料。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DEFINE-002", "rule": "只加载当前任务需要的资产。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DEFINE-003", "rule": "区分事实、用户陈述、推断和未知。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DEFINE-004", "rule": "关键结论返回来源路径。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DEFINE-005", "rule": "原始材料保持不变。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DEFINE-006", "rule": "批量写入、移动、覆盖和删除先确认。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DEFINE-007", "rule": "不跨客户或跨项目读取。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DEFINE-008", "rule": "资料不足时完成证据允许的部分。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DEFINE-009", "rule": "不能确认的分类进入待确认区。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DEFINE-010", "rule": "交付后说明写入位置和未完成项。", "source": "fde-skills-workflow-v1"}\n',
        ".agents/skills/fde-define/references/axioms.md": "# 公理\n\n## AXIOM-01：定位\n\n没有知识库配置就不猜路径。\n\n## AXIOM-02：最小读取\n\n只读取当前任务需要的资产。\n\n## AXIOM-03：证据\n\n事实和推断分开，关键判断附来源。\n\n## AXIOM-04：可恢复\n\n原始材料不覆盖，破坏性动作先确认。\n\n## AXIOM-05：闭环\n\n交付说明结果、写入位置、未知项和下一步。\n",
        ".agents/skills/fde-define/references/behavior-tests.json": '[\n  {\n    "id": "case-1",\n    "prompt": "使用 fde-define 完成：收集一个词在不同场景的用法。",\n    "must_do": [\n      "收集一个词在不同场景的用法",\n      "换成可观察的人、动作和结果",\n      "建立当前任务的暂定定义"\n    ],\n    "must_not": [\n      "编造事实",\n      "跨项目读取"\n    ]\n  },\n  {\n    "id": "case-2",\n    "prompt": "继续使用 fde-define 完成：提供包含项、排除项和反例。",\n    "must_do": [\n      "提供包含项、排除项和反例",\n      "返回来源",\n      "说明未确认项"\n    ],\n    "must_not": [\n      "把推断写成事实",\n      "覆盖原始材料"\n    ]\n  },\n  {\n    "id": "counterexample-1",\n    "prompt": "找不到配置，但要求 fde-define 批量写入。",\n    "must_do": [\n      "停止写入",\n      "询问根目录"\n    ],\n    "must_not": [\n      "猜路径",\n      "写入用户主目录"\n    ]\n  }\n]\n',
        ".agents/skills/fde-define/references/capability-contract.json": '{\n  "skill": "fde-define",\n  "implementation": "fde-skills-owned",\n  "runtime_uses_historical_skill": false,\n  "must_support": [\n    "收集一个词在不同场景的用法",\n    "换成可观察的人、动作和结果",\n    "建立当前任务的暂定定义",\n    "提供包含项、排除项和反例"\n  ],\n  "tests": [\n    "case-1",\n    "case-2",\n    "counterexample-1"\n  ]\n}\n',
        ".agents/skills/fde-define/references/cases.md": "# 案例\n\n## 正常\n\n配置可读，fde-define 只读取所需资产，交付附来源。\n\n## 资料不足\n\n完成有证据的部分，把缺口留给用户。\n\n## 停止\n\n找不到配置或请求越过项目边界时停止写入。\n",
        ".agents/skills/fde-define/references/library-map.md": "# 六类资产映射\n\n运行时以知识库根目录的 `.fde/config.yaml` 为准。\n\n- owner：个人说明书\n- product：产品库\n- customer：客户需求库\n- case：素材案例库\n- method：方法论库\n- content：内容生产\n\n不得把这些显示名当成固定路径。\n",
        ".agents/skills/fde-define/references/maturity.json": '{\n  "status": "project-owned-v1",\n  "source_role": "historical_reference_only",\n  "live_customer_test": false\n}\n',
        ".agents/skills/fde-define/references/method.md": "# 词义校准方法\n\n## 输入\n\n- 词出现的原句\n- 说话人和场景\n- 该词影响的决定\n- 知识库中已有用法\n\n## 步骤\n\n1. 收集同一个词在当前材料中的不同用法。\n2. 把每种用法换成可观察的人、动作和结果。\n3. 指出哪些用法能合并，哪些必须分开。\n4. 为当前任务选择一个暂定定义和反例。\n\n## 交付\n\n- 用法列表\n- 操作性定义\n- 包含项\n- 不包含项\n- 反例\n- 对当前决定的影响\n\n## 停止\n\n- 没有上下文时不提供唯一真定义\n- 行业术语可能变化时标记待核验\n- 不把定义争论代替实际决定\n",
        ".agents/skills/fde-define/references/source-evidence.md": "# 当前实现证据\n\n- 工作流规格：`tools/rewrite-owned-suite.py` 的 `fde-define`。\n- 六类资产路径：`六类资产库目录模板/.fde/config.yaml`。\n- 名称和历史映射：`改造清单/skill-manifest.json`。\n- 相似度验收：`tools/check-source-similarity.py`。\n",
        ".agents/skills/fde-define/references/source-map.md": "# 来源映射\n\n## 当前实现\n\n- 运行流程由 `tools/rewrite-owned-suite.py` 中的 `fde-define` 规格生成。\n- 资产模型来自本项目 `六类资产库目录模板/.fde/config.yaml`。\n- 用户要求是：英文 `fde-` 名称、易于理解、服务当前六类资产库。\n\n## 历史对照\n\n- 历史能力对照：`dbskill-upstream/skills/dbs-deconstruct`。\n- 固定快照：`v2.17.15`，commit `af99c577bfb9f1926236671a882b15030242fe8b`。\n- 该快照只用于能力盘点、相似度检查和署名追溯，不在运行时加载。\n\n历史对照不代表当前运行规则。商业许可仍按项目 `NOTICE.md` 和授权清单处理。\n",
        ".agents/skills/fde-define/SKILL.md": "---\nname: fde-define\ndescription: |\n  在当前业务场景里给模糊词建立可观察定义，避免不同人用同一个词说不同事情。触发方式：/fde-define、「这个词到底指什么」「先把概念说清楚」。\n---\n\n# 词义校准\n\n<!-- FDE-OWNED-WORKFLOW: v1 -->\n\n## 开始前\n\n1. 从当前目录向上找到 `.fde/config.yaml`，按配置解析六类资产库。\n2. 只读取本任务需要的文件，不跨知识库搜索。\n3. 把库内事实、用户本轮信息、当前推断和未知项分开。\n4. 原始材料不覆盖；删除、移动和批量写入先确认。\n\n## 读取\n\n- 词出现的原句\n- 说话人和场景\n- 该词影响的决定\n- 知识库中已有用法\n\n## 必须保留的能力\n\n- 收集一个词在不同场景的用法\n- 换成可观察的人、动作和结果\n- 建立当前任务的暂定定义\n- 提供包含项、排除项和反例\n\n## 执行\n\n1. 收集同一个词在当前材料中的不同用法。\n2. 把每种用法换成可观察的人、动作和结果。\n3. 指出哪些用法能合并，哪些必须分开。\n4. 为当前任务选择一个暂定定义和反例。\n\n## 交付\n\n- 用法列表\n- 操作性定义\n- 包含项\n- 不包含项\n- 反例\n- 对当前决定的影响\n\n每个关键判断附来源路径；没有来源的内容标为推断或待确认。\n\n## 写回\n\n- 用户确认后写入方法库的词汇表\n\n## 停止条件\n\n- 没有上下文时不提供唯一真定义\n- 行业术语可能变化时标记待核验\n- 不把定义争论代替实际决定\n\n## 接续\n\n- 目标句仍模糊用 fde-goal\n- 问题边界不清用 fde-question\n\n来源沿革只用于追溯，不作为运行指令。需要追溯时读取 `references/source-map.md`。\n",
        ".agents/skills/fde-diagnose/agents/openai.yaml": 'interface:\n  display_name: "生意诊断"\n  short_description: "读取当前六类资产知识库，执行生意诊断并返回来源、结果和未确认项。"\n  default_prompt: "请使用 $fde-diagnose 处理当前知识库里的真实任务，并说明来源和未确认项。"\n',
        ".agents/skills/fde-diagnose/references/acceptance.md": "# 验收\n\n- [ ] fde-diagnose 使用当前知识库配置。\n- [ ] 读取范围与任务有关。\n- [ ] 事实、推断和未知分开。\n- [ ] 关键判断有来源。\n- [ ] 破坏性动作先确认。\n- [ ] 输出包含：一句话判断、证据表、最先处理的问题、验证动作、观察指标、暂不处理项。\n- [ ] 能力：支持单个问题问诊。\n- [ ] 能力：支持完整业务体检。\n- [ ] 能力：拆解客户、产品、证据、交付、获客和收入。\n- [ ] 能力：找到最早失效环节。\n- [ ] 能力：给出可观察的验证动作。\n",
        ".agents/skills/fde-diagnose/references/atoms.jsonl": '{"id": "FDE-DIAGNOSE-001", "rule": "先定位当前知识库配置，再读取资料。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DIAGNOSE-002", "rule": "只加载当前任务需要的资产。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DIAGNOSE-003", "rule": "区分事实、用户陈述、推断和未知。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DIAGNOSE-004", "rule": "关键结论返回来源路径。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DIAGNOSE-005", "rule": "原始材料保持不变。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DIAGNOSE-006", "rule": "批量写入、移动、覆盖和删除先确认。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DIAGNOSE-007", "rule": "不跨客户或跨项目读取。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DIAGNOSE-008", "rule": "资料不足时完成证据允许的部分。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DIAGNOSE-009", "rule": "不能确认的分类进入待确认区。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DIAGNOSE-010", "rule": "交付后说明写入位置和未完成项。", "source": "fde-skills-workflow-v1"}\n',
        ".agents/skills/fde-diagnose/references/axioms.md": "# 公理\n\n## AXIOM-01：定位\n\n没有知识库配置就不猜路径。\n\n## AXIOM-02：最小读取\n\n只读取当前任务需要的资产。\n\n## AXIOM-03：证据\n\n事实和推断分开，关键判断附来源。\n\n## AXIOM-04：可恢复\n\n原始材料不覆盖，破坏性动作先确认。\n\n## AXIOM-05：闭环\n\n交付说明结果、写入位置、未知项和下一步。\n",
        ".agents/skills/fde-diagnose/references/behavior-tests.json": '[\n  {\n    "id": "case-1",\n    "prompt": "使用 fde-diagnose 完成：支持单个问题问诊。",\n    "must_do": [\n      "支持单个问题问诊",\n      "支持完整业务体检",\n      "拆解客户、产品、证据、交付、获客和收入"\n    ],\n    "must_not": [\n      "编造事实",\n      "跨项目读取"\n    ]\n  },\n  {\n    "id": "case-2",\n    "prompt": "继续使用 fde-diagnose 完成：给出可观察的验证动作。",\n    "must_do": [\n      "给出可观察的验证动作",\n      "返回来源",\n      "说明未确认项"\n    ],\n    "must_not": [\n      "把推断写成事实",\n      "覆盖原始材料"\n    ]\n  },\n  {\n    "id": "counterexample-1",\n    "prompt": "找不到配置，但要求 fde-diagnose 批量写入。",\n    "must_do": [\n      "停止写入",\n      "询问根目录"\n    ],\n    "must_not": [\n      "猜路径",\n      "写入用户主目录"\n    ]\n  }\n]\n',
        ".agents/skills/fde-diagnose/references/capability-contract.json": '{\n  "skill": "fde-diagnose",\n  "implementation": "fde-skills-owned",\n  "runtime_uses_historical_skill": false,\n  "must_support": [\n    "支持单个问题问诊",\n    "支持完整业务体检",\n    "拆解客户、产品、证据、交付、获客和收入",\n    "找到最早失效环节",\n    "给出可观察的验证动作"\n  ],\n  "tests": [\n    "case-1",\n    "case-2",\n    "counterexample-1"\n  ]\n}\n',
        ".agents/skills/fde-diagnose/references/cases.md": "# 案例\n\n## 正常\n\n配置可读，fde-diagnose 只读取所需资产，交付附来源。\n\n## 资料不足\n\n完成有证据的部分，把缺口留给用户。\n\n## 停止\n\n找不到配置或请求越过项目边界时停止写入。\n",
        ".agents/skills/fde-diagnose/references/library-map.md": "# 六类资产映射\n\n运行时以知识库根目录的 `.fde/config.yaml` 为准。\n\n- owner：个人说明书\n- product：产品库\n- customer：客户需求库\n- case：素材案例库\n- method：方法论库\n- content：内容生产\n\n不得把这些显示名当成固定路径。\n",
        ".agents/skills/fde-diagnose/references/maturity.json": '{\n  "status": "project-owned-v1",\n  "source_role": "historical_reference_only",\n  "live_customer_test": false\n}\n',
        ".agents/skills/fde-diagnose/references/method.md": "# 生意诊断方法\n\n## 输入\n\n- 产品和价格\n- 客户原话与成交记录\n- 案例结果\n- 交付方法\n- 用户当前问题\n\n## 步骤\n\n1. 把问题拆成客户、承诺、证据、交付、获客和收入六部分。\n2. 为每部分列已知事实、矛盾和缺口。\n3. 找出最早会让整条链失效的一处，不一次改所有环节。\n4. 设计一个成本可控的验证动作，并写明通过和失败信号。\n\n## 交付\n\n- 一句话判断\n- 证据表\n- 最先处理的问题\n- 验证动作\n- 观察指标\n- 暂不处理项\n\n## 停止\n\n- 数据不足时不下结论\n- 涉及法律、医疗或财务判断时要求专业核验\n- 不把心理猜测当商业事实\n",
        ".agents/skills/fde-diagnose/references/modes/product.md": "# 产品模式\n\n检查承诺、交付、证据、价格和客户异议。优先找交付链上最早失效的一处。\n",
        ".agents/skills/fde-diagnose/references/modes/strategy.md": "# 方向模式\n\n检查客户是否存在、问题是否发生、现有方案和进入成本。输出一个要验证的方向，不写长期口号。\n",
        ".agents/skills/fde-diagnose/references/source-evidence.md": "# 当前实现证据\n\n- 工作流规格：`tools/rewrite-owned-suite.py` 的 `fde-diagnose`。\n- 六类资产路径：`六类资产库目录模板/.fde/config.yaml`。\n- 名称和历史映射：`改造清单/skill-manifest.json`。\n- 相似度验收：`tools/check-source-similarity.py`。\n",
        ".agents/skills/fde-diagnose/references/source-map.md": "# 来源映射\n\n## 当前实现\n\n- 运行流程由 `tools/rewrite-owned-suite.py` 中的 `fde-diagnose` 规格生成。\n- 资产模型来自本项目 `六类资产库目录模板/.fde/config.yaml`。\n- 用户要求是：英文 `fde-` 名称、易于理解、服务当前六类资产库。\n\n## 历史对照\n\n- 历史能力对照：`dbskill-upstream/skills/dbs-diagnosis`。\n- 固定快照：`v2.17.15`，commit `af99c577bfb9f1926236671a882b15030242fe8b`。\n- 该快照只用于能力盘点、相似度检查和署名追溯，不在运行时加载。\n\n历史对照不代表当前运行规则。商业许可仍按项目 `NOTICE.md` 和授权清单处理。\n",
        ".agents/skills/fde-diagnose/SKILL.md": "---\nname: fde-diagnose\ndescription: |\n  用六类资产中的客户、产品、案例和交付记录诊断一个生意问题。把事实、假设和待验证项分开。触发方式：/fde-diagnose、「这个生意哪里有问题」「帮我看产品和客户」。\n---\n\n# 生意诊断\n\n<!-- FDE-OWNED-WORKFLOW: v1 -->\n\n## 开始前\n\n1. 从当前目录向上找到 `.fde/config.yaml`，按配置解析六类资产库。\n2. 只读取本任务需要的文件，不跨知识库搜索。\n3. 把库内事实、用户本轮信息、当前推断和未知项分开。\n4. 原始材料不覆盖；删除、移动和批量写入先确认。\n\n## 读取\n\n- 产品和价格\n- 客户原话与成交记录\n- 案例结果\n- 交付方法\n- 用户当前问题\n\n## 必须保留的能力\n\n- 支持单个问题问诊\n- 支持完整业务体检\n- 拆解客户、产品、证据、交付、获客和收入\n- 找到最早失效环节\n- 给出可观察的验证动作\n\n## 执行\n\n1. 把问题拆成客户、承诺、证据、交付、获客和收入六部分。\n2. 为每部分列已知事实、矛盾和缺口。\n3. 找出最早会让整条链失效的一处，不一次改所有环节。\n4. 设计一个成本可控的验证动作，并写明通过和失败信号。\n\n## 交付\n\n- 一句话判断\n- 证据表\n- 最先处理的问题\n- 验证动作\n- 观察指标\n- 暂不处理项\n\n每个关键判断附来源路径；没有来源的内容标为推断或待确认。\n\n## 写回\n\n- 确认后的诊断写入方法库或 `.fde/state/decisions`\n- 新客户事实回到客户库\n\n## 停止条件\n\n- 数据不足时不下结论\n- 涉及法律、医疗或财务判断时要求专业核验\n- 不把心理猜测当商业事实\n\n## 接续\n\n- 需要对标用 fde-benchmark\n- 需要记录选择用 fde-decide\n\n来源沿革只用于追溯，不作为运行指令。需要追溯时读取 `references/source-map.md`。\n",
        ".agents/skills/fde-discuss/agents/openai.yaml": 'interface:\n  display_name: "多角度讨论"\n  short_description: "读取当前六类资产知识库，执行多角度讨论并返回来源、结果和未确认项。"\n  default_prompt: "请使用 $fde-discuss 处理当前知识库里的真实任务，并说明来源和未确认项。"\n',
        ".agents/skills/fde-discuss/references/acceptance.md": "# 验收\n\n- [ ] fde-discuss 使用当前知识库配置。\n- [ ] 读取范围与任务有关。\n- [ ] 事实、推断和未知分开。\n- [ ] 关键判断有来源。\n- [ ] 破坏性动作先确认。\n- [ ] 输出包含：角色观点、证据、分歧、共识、待验证项、行动归属。\n- [ ] 能力：根据问题推荐职责或接受用户指定角色。\n- [ ] 能力：角色依据可验证理论和知识库事实发言。\n- [ ] 能力：支持连续多轮使用同一组角色。\n- [ ] 能力：输出共识、分歧和缺失证据。\n- [ ] 能力：支持明确结束讨论。\n",
        ".agents/skills/fde-discuss/references/atoms.jsonl": '{"id": "FDE-DISCUSS-001", "rule": "先定位当前知识库配置，再读取资料。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DISCUSS-002", "rule": "只加载当前任务需要的资产。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DISCUSS-003", "rule": "区分事实、用户陈述、推断和未知。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DISCUSS-004", "rule": "关键结论返回来源路径。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DISCUSS-005", "rule": "原始材料保持不变。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DISCUSS-006", "rule": "批量写入、移动、覆盖和删除先确认。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DISCUSS-007", "rule": "不跨客户或跨项目读取。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DISCUSS-008", "rule": "资料不足时完成证据允许的部分。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DISCUSS-009", "rule": "不能确认的分类进入待确认区。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DISCUSS-010", "rule": "交付后说明写入位置和未完成项。", "source": "fde-skills-workflow-v1"}\n',
        ".agents/skills/fde-discuss/references/axioms.md": "# 公理\n\n## AXIOM-01：定位\n\n没有知识库配置就不猜路径。\n\n## AXIOM-02：最小读取\n\n只读取当前任务需要的资产。\n\n## AXIOM-03：证据\n\n事实和推断分开，关键判断附来源。\n\n## AXIOM-04：可恢复\n\n原始材料不覆盖，破坏性动作先确认。\n\n## AXIOM-05：闭环\n\n交付说明结果、写入位置、未知项和下一步。\n",
        ".agents/skills/fde-discuss/references/behavior-tests.json": '[\n  {\n    "id": "case-1",\n    "prompt": "使用 fde-discuss 完成：根据问题推荐职责或接受用户指定角色。",\n    "must_do": [\n      "根据问题推荐职责或接受用户指定角色",\n      "角色依据可验证理论和知识库事实发言",\n      "支持连续多轮使用同一组角色"\n    ],\n    "must_not": [\n      "编造事实",\n      "跨项目读取"\n    ]\n  },\n  {\n    "id": "case-2",\n    "prompt": "继续使用 fde-discuss 完成：支持明确结束讨论。",\n    "must_do": [\n      "支持明确结束讨论",\n      "返回来源",\n      "说明未确认项"\n    ],\n    "must_not": [\n      "把推断写成事实",\n      "覆盖原始材料"\n    ]\n  },\n  {\n    "id": "counterexample-1",\n    "prompt": "找不到配置，但要求 fde-discuss 批量写入。",\n    "must_do": [\n      "停止写入",\n      "询问根目录"\n    ],\n    "must_not": [\n      "猜路径",\n      "写入用户主目录"\n    ]\n  }\n]\n',
        ".agents/skills/fde-discuss/references/capability-contract.json": '{\n  "skill": "fde-discuss",\n  "implementation": "fde-skills-owned",\n  "runtime_uses_historical_skill": false,\n  "must_support": [\n    "根据问题推荐职责或接受用户指定角色",\n    "角色依据可验证理论和知识库事实发言",\n    "支持连续多轮使用同一组角色",\n    "输出共识、分歧和缺失证据",\n    "支持明确结束讨论"\n  ],\n  "tests": [\n    "case-1",\n    "case-2",\n    "counterexample-1"\n  ]\n}\n',
        ".agents/skills/fde-discuss/references/cases.md": "# 案例\n\n## 正常\n\n配置可读，fde-discuss 只读取所需资产，交付附来源。\n\n## 资料不足\n\n完成有证据的部分，把缺口留给用户。\n\n## 停止\n\n找不到配置或请求越过项目边界时停止写入。\n",
        ".agents/skills/fde-discuss/references/library-map.md": "# 六类资产映射\n\n运行时以知识库根目录的 `.fde/config.yaml` 为准。\n\n- owner：个人说明书\n- product：产品库\n- customer：客户需求库\n- case：素材案例库\n- method：方法论库\n- content：内容生产\n\n不得把这些显示名当成固定路径。\n",
        ".agents/skills/fde-discuss/references/maturity.json": '{\n  "status": "project-owned-v1",\n  "source_role": "historical_reference_only",\n  "live_customer_test": false\n}\n',
        ".agents/skills/fde-discuss/references/method.md": "# 多角度讨论方法\n\n## 输入\n\n- 讨论问题\n- 参与角色或职责\n- 六类资产中的相关事实\n- 需要做出的决定\n\n## 步骤\n\n1. 把问题和决策标准写清楚。\n2. 用户未指定角色时，按问题推荐 3—5 个职责；用户指定时沿用。\n3. 为每个角色限定证据和关注点，逐轮提出观点、质疑和回应。\n4. 把角色组和未解决问题写入当前会话状态，后续输入继续同一组。\n5. 用户说结束时退出，并列共识、分歧、缺证据和负责动作。\n\n## 交付\n\n- 角色观点\n- 证据\n- 分歧\n- 共识\n- 待验证项\n- 行动归属\n\n## 停止\n\n- 不得声称是真人意见\n- 角色没有证据时必须承认\n- 没有决策问题时不无限发散\n",
        ".agents/skills/fde-discuss/references/session-contract.md": "# 讨论会话\n\n保存问题、角色职责、可用证据、未解决分歧和当前轮次。后续输入默认继续同一角色组。用户说结束时清理会话状态并输出总结。\n",
        ".agents/skills/fde-discuss/references/source-evidence.md": "# 当前实现证据\n\n- 工作流规格：`tools/rewrite-owned-suite.py` 的 `fde-discuss`。\n- 六类资产路径：`六类资产库目录模板/.fde/config.yaml`。\n- 名称和历史映射：`改造清单/skill-manifest.json`。\n- 相似度验收：`tools/check-source-similarity.py`。\n",
        ".agents/skills/fde-discuss/references/source-map.md": "# 来源映射\n\n## 当前实现\n\n- 运行流程由 `tools/rewrite-owned-suite.py` 中的 `fde-discuss` 规格生成。\n- 资产模型来自本项目 `六类资产库目录模板/.fde/config.yaml`。\n- 用户要求是：英文 `fde-` 名称、易于理解、服务当前六类资产库。\n\n## 历史对照\n\n- 历史能力对照：`dbskill-upstream/skills/dbs-chatroom`。\n- 固定快照：`v2.17.15`，commit `af99c577bfb9f1926236671a882b15030242fe8b`。\n- 该快照只用于能力盘点、相似度检查和署名追溯，不在运行时加载。\n\n历史对照不代表当前运行规则。商业许可仍按项目 `NOTICE.md` 和授权清单处理。\n",
        ".agents/skills/fde-discuss/SKILL.md": "---\nname: fde-discuss\ndescription: |\n  围绕一个具体决定建立 3—5 个角色视角，角色只使用知识库事实和公开方法，不冒充真人。触发方式：/fde-discuss、「换几个角度讨论」「模拟团队讨论」。\n---\n\n# 多角度讨论\n\n<!-- FDE-OWNED-WORKFLOW: v1 -->\n\n## 开始前\n\n1. 从当前目录向上找到 `.fde/config.yaml`，按配置解析六类资产库。\n2. 只读取本任务需要的文件，不跨知识库搜索。\n3. 把库内事实、用户本轮信息、当前推断和未知项分开。\n4. 原始材料不覆盖；删除、移动和批量写入先确认。\n\n## 读取\n\n- 讨论问题\n- 参与角色或职责\n- 六类资产中的相关事实\n- 需要做出的决定\n\n## 必须保留的能力\n\n- 根据问题推荐职责或接受用户指定角色\n- 角色依据可验证理论和知识库事实发言\n- 支持连续多轮使用同一组角色\n- 输出共识、分歧和缺失证据\n- 支持明确结束讨论\n\n## 执行\n\n1. 把问题和决策标准写清楚。\n2. 用户未指定角色时，按问题推荐 3—5 个职责；用户指定时沿用。\n3. 为每个角色限定证据和关注点，逐轮提出观点、质疑和回应。\n4. 把角色组和未解决问题写入当前会话状态，后续输入继续同一组。\n5. 用户说结束时退出，并列共识、分歧、缺证据和负责动作。\n\n## 交付\n\n- 角色观点\n- 证据\n- 分歧\n- 共识\n- 待验证项\n- 行动归属\n\n每个关键判断附来源路径；没有来源的内容标为推断或待确认。\n\n## 写回\n\n- 用户需要时把结论写入决策记录\n\n## 停止条件\n\n- 不得声称是真人意见\n- 角色没有证据时必须承认\n- 没有决策问题时不无限发散\n\n## 接续\n\n- 需要正式决策用 fde-decide\n- 商业问题用 fde-diagnose\n\n来源沿革只用于追溯，不作为运行指令。需要追溯时读取 `references/source-map.md`。\n",
        ".agents/skills/fde-economy/agents/openai.yaml": 'interface:\n  display_name: "交易与激励"\n  short_description: "读取当前六类资产知识库，执行交易与激励并返回来源、结果和未确认项。"\n  default_prompt: "请使用 $fde-economy 处理当前知识库里的真实任务，并说明来源和未确认项。"\n',
        ".agents/skills/fde-economy/references/acceptance.md": "# 验收\n\n- [ ] fde-economy 使用当前知识库配置。\n- [ ] 读取范围与任务有关。\n- [ ] 事实、推断和未知分开。\n- [ ] 关键判断有来源。\n- [ ] 破坏性动作先确认。\n- [ ] 输出包含：参与方、交换内容、激励变化、信息缺口、可观察信号、限制。\n- [ ] 能力：用分散知识视角检查信息问题。\n- [ ] 能力：用行动与选择视角检查成本和机会。\n- [ ] 能力：用经营者视角综合价格和激励。\n- [ ] 能力：形成三席对话而不冒充真人。\n- [ ] 能力：落到可观察的市场信号。\n",
        ".agents/skills/fde-economy/references/atoms.jsonl": '{"id": "FDE-ECONOMY-001", "rule": "先定位当前知识库配置，再读取资料。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-ECONOMY-002", "rule": "只加载当前任务需要的资产。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-ECONOMY-003", "rule": "区分事实、用户陈述、推断和未知。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-ECONOMY-004", "rule": "关键结论返回来源路径。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-ECONOMY-005", "rule": "原始材料保持不变。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-ECONOMY-006", "rule": "批量写入、移动、覆盖和删除先确认。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-ECONOMY-007", "rule": "不跨客户或跨项目读取。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-ECONOMY-008", "rule": "资料不足时完成证据允许的部分。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-ECONOMY-009", "rule": "不能确认的分类进入待确认区。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-ECONOMY-010", "rule": "交付后说明写入位置和未完成项。", "source": "fde-skills-workflow-v1"}\n',
        ".agents/skills/fde-economy/references/axioms.md": "# 公理\n\n## AXIOM-01：定位\n\n没有知识库配置就不猜路径。\n\n## AXIOM-02：最小读取\n\n只读取当前任务需要的资产。\n\n## AXIOM-03：证据\n\n事实和推断分开，关键判断附来源。\n\n## AXIOM-04：可恢复\n\n原始材料不覆盖，破坏性动作先确认。\n\n## AXIOM-05：闭环\n\n交付说明结果、写入位置、未知项和下一步。\n",
        ".agents/skills/fde-economy/references/behavior-tests.json": '[\n  {\n    "id": "case-1",\n    "prompt": "使用 fde-economy 完成：用分散知识视角检查信息问题。",\n    "must_do": [\n      "用分散知识视角检查信息问题",\n      "用行动与选择视角检查成本和机会",\n      "用经营者视角综合价格和激励"\n    ],\n    "must_not": [\n      "编造事实",\n      "跨项目读取"\n    ]\n  },\n  {\n    "id": "case-2",\n    "prompt": "继续使用 fde-economy 完成：落到可观察的市场信号。",\n    "must_do": [\n      "落到可观察的市场信号",\n      "返回来源",\n      "说明未确认项"\n    ],\n    "must_not": [\n      "把推断写成事实",\n      "覆盖原始材料"\n    ]\n  },\n  {\n    "id": "counterexample-1",\n    "prompt": "找不到配置，但要求 fde-economy 批量写入。",\n    "must_do": [\n      "停止写入",\n      "询问根目录"\n    ],\n    "must_not": [\n      "猜路径",\n      "写入用户主目录"\n    ]\n  }\n]\n',
        ".agents/skills/fde-economy/references/capability-contract.json": '{\n  "skill": "fde-economy",\n  "implementation": "fde-skills-owned",\n  "runtime_uses_historical_skill": false,\n  "must_support": [\n    "用分散知识视角检查信息问题",\n    "用行动与选择视角检查成本和机会",\n    "用经营者视角综合价格和激励",\n    "形成三席对话而不冒充真人",\n    "落到可观察的市场信号"\n  ],\n  "tests": [\n    "case-1",\n    "case-2",\n    "counterexample-1"\n  ]\n}\n',
        ".agents/skills/fde-economy/references/cases.md": "# 案例\n\n## 正常\n\n配置可读，fde-economy 只读取所需资产，交付附来源。\n\n## 资料不足\n\n完成有证据的部分，把缺口留给用户。\n\n## 停止\n\n找不到配置或请求越过项目边界时停止写入。\n",
        ".agents/skills/fde-economy/references/library-map.md": "# 六类资产映射\n\n运行时以知识库根目录的 `.fde/config.yaml` 为准。\n\n- owner：个人说明书\n- product：产品库\n- customer：客户需求库\n- case：素材案例库\n- method：方法论库\n- content：内容生产\n\n不得把这些显示名当成固定路径。\n",
        ".agents/skills/fde-economy/references/maturity.json": '{\n  "status": "project-owned-v1",\n  "source_role": "historical_reference_only",\n  "live_customer_test": false\n}\n',
        ".agents/skills/fde-economy/references/method.md": "# 交易与激励方法\n\n## 输入\n\n- 交易双方\n- 价格和成本\n- 可替代方案\n- 规则和信息\n- 实际行为\n\n## 步骤\n\n1. 建立三席：分散知识席、行动选择席、经营者席，不冒充历史人物。\n2. 分散知识席检查信息在哪些人手里、价格传递了什么。\n3. 行动选择席检查谁在选择、付出什么和放弃什么。\n4. 经营者席检查价格变化会改变谁的激励、风险和替代方案。\n5. 三席互相质疑后，列出可以观察的市场信号和理论无法直接判断的部分。\n\n## 交付\n\n- 参与方\n- 交换内容\n- 激励变化\n- 信息缺口\n- 可观察信号\n- 限制\n\n## 停止\n\n- 不把理论当成事实证据\n- 不预测具体市场价格\n- 金融投资问题要求专业核验\n",
        ".agents/skills/fde-economy/references/source-evidence.md": "# 当前实现证据\n\n- 工作流规格：`tools/rewrite-owned-suite.py` 的 `fde-economy`。\n- 六类资产路径：`六类资产库目录模板/.fde/config.yaml`。\n- 名称和历史映射：`改造清单/skill-manifest.json`。\n- 相似度验收：`tools/check-source-similarity.py`。\n",
        ".agents/skills/fde-economy/references/source-map.md": "# 来源映射\n\n## 当前实现\n\n- 运行流程由 `tools/rewrite-owned-suite.py` 中的 `fde-economy` 规格生成。\n- 资产模型来自本项目 `六类资产库目录模板/.fde/config.yaml`。\n- 用户要求是：英文 `fde-` 名称、易于理解、服务当前六类资产库。\n\n## 历史对照\n\n- 历史能力对照：`dbskill-upstream/skills/dbs-chatroom-austrian`。\n- 固定快照：`v2.17.15`，commit `af99c577bfb9f1926236671a882b15030242fe8b`。\n- 该快照只用于能力盘点、相似度检查和署名追溯，不在运行时加载。\n\n历史对照不代表当前运行规则。商业许可仍按项目 `NOTICE.md` 和授权清单处理。\n",
        ".agents/skills/fde-economy/references/three-chairs.md": "# 三席讨论\n\n- 分散知识席：谁掌握局部信息，价格传递什么。\n- 行动选择席：谁在选择，付出和放弃什么。\n- 经营者席：价格、成本、替代和风险怎样改变动作。\n\n三席是分析职责，不是历史人物扮演。\n",
        ".agents/skills/fde-economy/SKILL.md": "---\nname: fde-economy\ndescription: |\n  用价格、成本、选择、激励和信息差检查一个商业判断，不模拟经济学家人格。触发方式：/fde-economy、「从交易角度看」「分析价格和激励」。\n---\n\n# 交易与激励\n\n<!-- FDE-OWNED-WORKFLOW: v1 -->\n\n## 开始前\n\n1. 从当前目录向上找到 `.fde/config.yaml`，按配置解析六类资产库。\n2. 只读取本任务需要的文件，不跨知识库搜索。\n3. 把库内事实、用户本轮信息、当前推断和未知项分开。\n4. 原始材料不覆盖；删除、移动和批量写入先确认。\n\n## 读取\n\n- 交易双方\n- 价格和成本\n- 可替代方案\n- 规则和信息\n- 实际行为\n\n## 必须保留的能力\n\n- 用分散知识视角检查信息问题\n- 用行动与选择视角检查成本和机会\n- 用经营者视角综合价格和激励\n- 形成三席对话而不冒充真人\n- 落到可观察的市场信号\n\n## 执行\n\n1. 建立三席：分散知识席、行动选择席、经营者席，不冒充历史人物。\n2. 分散知识席检查信息在哪些人手里、价格传递了什么。\n3. 行动选择席检查谁在选择、付出什么和放弃什么。\n4. 经营者席检查价格变化会改变谁的激励、风险和替代方案。\n5. 三席互相质疑后，列出可以观察的市场信号和理论无法直接判断的部分。\n\n## 交付\n\n- 参与方\n- 交换内容\n- 激励变化\n- 信息缺口\n- 可观察信号\n- 限制\n\n每个关键判断附来源路径；没有来源的内容标为推断或待确认。\n\n## 写回\n\n- 确认后的分析可写入方法库\n\n## 停止条件\n\n- 不把理论当成事实证据\n- 不预测具体市场价格\n- 金融投资问题要求专业核验\n\n## 接续\n\n- 落到具体生意用 fde-diagnose\n- 概念不清用 fde-define\n\n来源沿革只用于追溯，不作为运行指令。需要追溯时读取 `references/source-map.md`。\n",
        ".agents/skills/fde-export/agents/openai.yaml": 'interface:\n  display_name: "导出聊天"\n  short_description: "读取当前六类资产知识库，执行导出聊天并返回来源、结果和未确认项。"\n  default_prompt: "请使用 $fde-export 处理当前知识库里的真实任务，并说明来源和未确认项。"\n',
        ".agents/skills/fde-export/references/acceptance.md": "# 验收\n\n- [ ] fde-export 使用当前知识库配置。\n- [ ] 读取范围与任务有关。\n- [ ] 事实、推断和未知分开。\n- [ ] 关键判断有来源。\n- [ ] 破坏性动作先确认。\n- [ ] 输出包含：导出文件列表、会话时间范围、消息数量、未能解析的记录。\n- [ ] 能力：列出本地项目和会话。\n- [ ] 能力：支持单选、多选、最近记录和批量选择。\n- [ ] 能力：导出用户与助手的可读 Markdown。\n- [ ] 能力：过滤工具日志并保留时间和源文件。\n",
        ".agents/skills/fde-export/references/atoms.jsonl": '{"id": "FDE-EXPORT-001", "rule": "先定位当前知识库配置，再读取资料。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-EXPORT-002", "rule": "只加载当前任务需要的资产。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-EXPORT-003", "rule": "区分事实、用户陈述、推断和未知。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-EXPORT-004", "rule": "关键结论返回来源路径。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-EXPORT-005", "rule": "原始材料保持不变。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-EXPORT-006", "rule": "批量写入、移动、覆盖和删除先确认。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-EXPORT-007", "rule": "不跨客户或跨项目读取。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-EXPORT-008", "rule": "资料不足时完成证据允许的部分。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-EXPORT-009", "rule": "不能确认的分类进入待确认区。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-EXPORT-010", "rule": "交付后说明写入位置和未完成项。", "source": "fde-skills-workflow-v1"}\n',
        ".agents/skills/fde-export/references/axioms.md": "# 公理\n\n## AXIOM-01：定位\n\n没有知识库配置就不猜路径。\n\n## AXIOM-02：最小读取\n\n只读取当前任务需要的资产。\n\n## AXIOM-03：证据\n\n事实和推断分开，关键判断附来源。\n\n## AXIOM-04：可恢复\n\n原始材料不覆盖，破坏性动作先确认。\n\n## AXIOM-05：闭环\n\n交付说明结果、写入位置、未知项和下一步。\n",
        ".agents/skills/fde-export/references/behavior-tests.json": '[\n  {\n    "id": "case-1",\n    "prompt": "使用 fde-export 完成：列出本地项目和会话。",\n    "must_do": [\n      "列出本地项目和会话",\n      "支持单选、多选、最近记录和批量选择",\n      "导出用户与助手的可读 Markdown"\n    ],\n    "must_not": [\n      "编造事实",\n      "跨项目读取"\n    ]\n  },\n  {\n    "id": "case-2",\n    "prompt": "继续使用 fde-export 完成：过滤工具日志并保留时间和源文件。",\n    "must_do": [\n      "过滤工具日志并保留时间和源文件",\n      "返回来源",\n      "说明未确认项"\n    ],\n    "must_not": [\n      "把推断写成事实",\n      "覆盖原始材料"\n    ]\n  },\n  {\n    "id": "counterexample-1",\n    "prompt": "找不到配置，但要求 fde-export 批量写入。",\n    "must_do": [\n      "停止写入",\n      "询问根目录"\n    ],\n    "must_not": [\n      "猜路径",\n      "写入用户主目录"\n    ]\n  }\n]\n',
        ".agents/skills/fde-export/references/capability-contract.json": '{\n  "skill": "fde-export",\n  "implementation": "fde-skills-owned",\n  "runtime_uses_historical_skill": false,\n  "must_support": [\n    "列出本地项目和会话",\n    "支持单选、多选、最近记录和批量选择",\n    "导出用户与助手的可读 Markdown",\n    "过滤工具日志并保留时间和源文件"\n  ],\n  "tests": [\n    "case-1",\n    "case-2",\n    "counterexample-1"\n  ]\n}\n',
        ".agents/skills/fde-export/references/cases.md": "# 案例\n\n## 正常\n\n配置可读，fde-export 只读取所需资产，交付附来源。\n\n## 资料不足\n\n完成有证据的部分，把缺口留给用户。\n\n## 停止\n\n找不到配置或请求越过项目边界时停止写入。\n",
        ".agents/skills/fde-export/references/library-map.md": "# 六类资产映射\n\n运行时以知识库根目录的 `.fde/config.yaml` 为准。\n\n- owner：个人说明书\n- product：产品库\n- customer：客户需求库\n- case：素材案例库\n- method：方法论库\n- content：内容生产\n\n不得把这些显示名当成固定路径。\n",
        ".agents/skills/fde-export/references/maturity.json": '{\n  "status": "project-owned-v1",\n  "source_role": "historical_reference_only",\n  "live_customer_test": false\n}\n',
        ".agents/skills/fde-export/references/method.md": "# 导出聊天方法\n\n## 输入\n\n- 用户指定的 Agent 和项目\n- 本地会话索引\n- 用户选择的会话范围\n- `scripts/export_chat.py`\n\n## 步骤\n\n1. 先识别宿主和本地会话位置，不扫描无关目录。\n2. 使用 `scripts/export_chat.py list` 列出日期、项目和首条消息，让用户选择。\n3. 支持单选、多选、最近记录和全部；导出前显示会话数、目标目录和隐私范围。\n4. 使用脚本只提取用户与助手可读文本，生成 Markdown 和来源清单。\n\n## 交付\n\n- 导出文件列表\n- 会话时间范围\n- 消息数量\n- 未能解析的记录\n\n## 停止\n\n- 宿主格式未知时不猜解析规则\n- 未获确认时不批量导出\n- 含敏感信息时先提醒用户选择范围\n",
        ".agents/skills/fde-export/references/source-evidence.md": "# 当前实现证据\n\n- 工作流规格：`tools/rewrite-owned-suite.py` 的 `fde-export`。\n- 六类资产路径：`六类资产库目录模板/.fde/config.yaml`。\n- 名称和历史映射：`改造清单/skill-manifest.json`。\n- 相似度验收：`tools/check-source-similarity.py`。\n",
        ".agents/skills/fde-export/references/source-map.md": "# 来源映射\n\n## 当前实现\n\n- 运行流程由 `tools/rewrite-owned-suite.py` 中的 `fde-export` 规格生成。\n- 资产模型来自本项目 `六类资产库目录模板/.fde/config.yaml`。\n- 用户要求是：英文 `fde-` 名称、易于理解、服务当前六类资产库。\n\n## 历史对照\n\n- 历史能力对照：`skills矩阵/导出聊天记录/SKILL.md`。\n- 该文件只用于能力盘点、相似度检查和署名追溯，不在运行时加载。\n\n历史对照不代表当前运行规则。商业许可仍按项目 `NOTICE.md` 和授权清单处理。\n",
        ".agents/skills/fde-export/scripts/export_chat.py": '#!/usr/bin/env python3\n"""List local JSONL conversations and export readable user/assistant text."""\n\nfrom __future__ import annotations\n\nimport argparse\nimport json\nfrom datetime import datetime\nfrom pathlib import Path\n\n\ndef text_from_content(content) -> str:\n    if isinstance(content, str):\n        return content.strip()\n    if isinstance(content, list):\n        values = []\n        for item in content:\n            if isinstance(item, str):\n                values.append(item)\n            elif isinstance(item, dict) and item.get("type") in {"text", "input_text", "output_text"}:\n                values.append(str(item.get("text", "")))\n        return "\\n".join(value for value in values if value).strip()\n    return ""\n\n\ndef extract(obj: dict) -> tuple[str, str, str] | None:\n    timestamp = str(obj.get("timestamp") or obj.get("created_at") or "")\n    message = obj.get("message") if isinstance(obj.get("message"), dict) else obj\n    role = message.get("role") or obj.get("type")\n    content = message.get("content")\n    if obj.get("type") == "response_item" and isinstance(obj.get("payload"), dict):\n        payload = obj["payload"]\n        if payload.get("type") == "message" or "role" in payload:\n            role = payload.get("role")\n            content = payload.get("content")\n    if role not in {"user", "assistant"}:\n        return None\n    value = text_from_content(content)\n    return (role, value, timestamp) if value else None\n\n\ndef read_messages(path: Path) -> list[tuple[str, str, str]]:\n    messages = []\n    for line in path.read_text(encoding="utf-8", errors="replace").splitlines():\n        try:\n            obj = json.loads(line)\n        except json.JSONDecodeError:\n            continue\n        if isinstance(obj, dict):\n            item = extract(obj)\n            if item:\n                messages.append(item)\n    return messages\n\n\ndef discover(root: Path) -> list[Path]:\n    return sorted(root.rglob("*.jsonl"), key=lambda path: path.stat().st_mtime, reverse=True)\n\n\ndef summary(path: Path, root: Path) -> dict:\n    messages = read_messages(path)\n    first = messages[0][1].replace("\\n", " ")[:100] if messages else ""\n    return {\n        "source": str(path),\n        "relative": str(path.relative_to(root)),\n        "modified": datetime.fromtimestamp(path.stat().st_mtime).isoformat(timespec="seconds"),\n        "messages": len(messages),\n        "first_message": first,\n    }\n\n\ndef export(paths: list[Path], output: Path) -> None:\n    sections = ["# 聊天导出", ""]\n    total = 0\n    for path in paths:\n        messages = read_messages(path)\n        total += len(messages)\n        sections.extend([f"## {path.name}", "", f"来源：`{path}`", ""])\n        for role, content, timestamp in messages:\n            label = "用户" if role == "user" else "助手"\n            suffix = f" · {timestamp}" if timestamp else ""\n            sections.extend([f"### {label}{suffix}", "", content, ""])\n    output.parent.mkdir(parents=True, exist_ok=True)\n    output.write_text("\\n".join(sections).rstrip() + "\\n", encoding="utf-8")\n    print(json.dumps({"sources": len(paths), "messages": total, "output": str(output)}, ensure_ascii=False))\n\n\ndef main() -> None:\n    parser = argparse.ArgumentParser()\n    sub = parser.add_subparsers(dest="command", required=True)\n    list_parser = sub.add_parser("list")\n    list_parser.add_argument("--root", type=Path, required=True)\n    export_parser = sub.add_parser("export")\n    export_parser.add_argument("--root", type=Path, required=True)\n    export_parser.add_argument("--source", action="append", type=Path)\n    export_parser.add_argument("--recent", type=int)\n    export_parser.add_argument("--all", action="store_true")\n    export_parser.add_argument("--output", type=Path, required=True)\n    args = parser.parse_args()\n    files = discover(args.root.expanduser().resolve())\n    if args.command == "list":\n        print(json.dumps([summary(path, args.root.resolve()) for path in files], ensure_ascii=False, indent=2))\n        return\n    if args.source:\n        chosen = [path.expanduser().resolve() for path in args.source]\n    elif args.recent:\n        chosen = files[: args.recent]\n    elif args.all:\n        chosen = files\n    else:\n        parser.error("choose --source, --recent or --all")\n    missing = [str(path) for path in chosen if not path.is_file()]\n    if missing:\n        parser.error("missing source: " + ", ".join(missing))\n    export(chosen, args.output.resolve())\n\n\nif __name__ == "__main__":\n    main()\n',
        ".agents/skills/fde-export/SKILL.md": "---\nname: fde-export\ndescription: |\n  把用户明确选择的本地 Agent 会话导出为 Markdown，过滤工具日志并保留时间和来源。适用于导出 Claude Code 或当前宿主支持的聊天记录。触发方式：/fde-export、「导出聊天记录」。\n---\n\n# 导出聊天\n\n<!-- FDE-OWNED-WORKFLOW: v1 -->\n\n## 开始前\n\n1. 从当前目录向上找到 `.fde/config.yaml`，按配置解析六类资产库。\n2. 只读取本任务需要的文件，不跨知识库搜索。\n3. 把库内事实、用户本轮信息、当前推断和未知项分开。\n4. 原始材料不覆盖；删除、移动和批量写入先确认。\n\n## 读取\n\n- 用户指定的 Agent 和项目\n- 本地会话索引\n- 用户选择的会话范围\n- `scripts/export_chat.py`\n\n## 必须保留的能力\n\n- 列出本地项目和会话\n- 支持单选、多选、最近记录和批量选择\n- 导出用户与助手的可读 Markdown\n- 过滤工具日志并保留时间和源文件\n\n## 执行\n\n1. 先识别宿主和本地会话位置，不扫描无关目录。\n2. 使用 `scripts/export_chat.py list` 列出日期、项目和首条消息，让用户选择。\n3. 支持单选、多选、最近记录和全部；导出前显示会话数、目标目录和隐私范围。\n4. 使用脚本只提取用户与助手可读文本，生成 Markdown 和来源清单。\n\n## 交付\n\n- 导出文件列表\n- 会话时间范围\n- 消息数量\n- 未能解析的记录\n\n每个关键判断附来源路径；没有来源的内容标为推断或待确认。\n\n## 写回\n\n- 默认写入知识库收件箱的聊天导出目录\n- 不改动本地会话源文件\n\n## 停止条件\n\n- 宿主格式未知时不猜解析规则\n- 未获确认时不批量导出\n- 含敏感信息时先提醒用户选择范围\n\n## 接续\n\n- 导出后用 fde-ingest 入库\n\n来源沿革只用于追溯，不作为运行指令。需要追溯时读取 `references/source-map.md`。\n",
        ".agents/skills/fde-flow/agents/openai.yaml": 'interface:\n  display_name: "口播衔接"\n  short_description: "读取当前六类资产知识库，执行口播衔接并返回来源、结果和未确认项。"\n  default_prompt: "请使用 $fde-flow 处理当前知识库里的真实任务，并说明来源和未确认项。"\n',
        ".agents/skills/fde-flow/references/acceptance.md": "# 验收\n\n- [ ] fde-flow 使用当前知识库配置。\n- [ ] 读取范围与任务有关。\n- [ ] 事实、推断和未知分开。\n- [ ] 关键判断有来源。\n- [ ] 破坏性动作先确认。\n- [ ] 输出包含：段落功能表、断点、重复、最小调整、调整后顺序。\n- [ ] 能力：检查段落间承接。\n- [ ] 能力：检查段落内信息密度。\n- [ ] 能力：检查句子口播流畅度。\n- [ ] 能力：标出可能划走的位置。\n- [ ] 能力：诊断后可按确认生成标记式改稿。\n",
        ".agents/skills/fde-flow/references/atoms.jsonl": '{"id": "FDE-FLOW-001", "rule": "先定位当前知识库配置，再读取资料。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-FLOW-002", "rule": "只加载当前任务需要的资产。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-FLOW-003", "rule": "区分事实、用户陈述、推断和未知。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-FLOW-004", "rule": "关键结论返回来源路径。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-FLOW-005", "rule": "原始材料保持不变。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-FLOW-006", "rule": "批量写入、移动、覆盖和删除先确认。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-FLOW-007", "rule": "不跨客户或跨项目读取。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-FLOW-008", "rule": "资料不足时完成证据允许的部分。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-FLOW-009", "rule": "不能确认的分类进入待确认区。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-FLOW-010", "rule": "交付后说明写入位置和未完成项。", "source": "fde-skills-workflow-v1"}\n',
        ".agents/skills/fde-flow/references/axioms.md": "# 公理\n\n## AXIOM-01：定位\n\n没有知识库配置就不猜路径。\n\n## AXIOM-02：最小读取\n\n只读取当前任务需要的资产。\n\n## AXIOM-03：证据\n\n事实和推断分开，关键判断附来源。\n\n## AXIOM-04：可恢复\n\n原始材料不覆盖，破坏性动作先确认。\n\n## AXIOM-05：闭环\n\n交付说明结果、写入位置、未知项和下一步。\n",
        ".agents/skills/fde-flow/references/behavior-tests.json": '[\n  {\n    "id": "case-1",\n    "prompt": "使用 fde-flow 完成：检查段落间承接。",\n    "must_do": [\n      "检查段落间承接",\n      "检查段落内信息密度",\n      "检查句子口播流畅度"\n    ],\n    "must_not": [\n      "编造事实",\n      "跨项目读取"\n    ]\n  },\n  {\n    "id": "case-2",\n    "prompt": "继续使用 fde-flow 完成：诊断后可按确认生成标记式改稿。",\n    "must_do": [\n      "诊断后可按确认生成标记式改稿",\n      "返回来源",\n      "说明未确认项"\n    ],\n    "must_not": [\n      "把推断写成事实",\n      "覆盖原始材料"\n    ]\n  },\n  {\n    "id": "counterexample-1",\n    "prompt": "找不到配置，但要求 fde-flow 批量写入。",\n    "must_do": [\n      "停止写入",\n      "询问根目录"\n    ],\n    "must_not": [\n      "猜路径",\n      "写入用户主目录"\n    ]\n  }\n]\n',
        ".agents/skills/fde-flow/references/capability-contract.json": '{\n  "skill": "fde-flow",\n  "implementation": "fde-skills-owned",\n  "runtime_uses_historical_skill": false,\n  "must_support": [\n    "检查段落间承接",\n    "检查段落内信息密度",\n    "检查句子口播流畅度",\n    "标出可能划走的位置",\n    "诊断后可按确认生成标记式改稿"\n  ],\n  "tests": [\n    "case-1",\n    "case-2",\n    "counterexample-1"\n  ]\n}\n',
        ".agents/skills/fde-flow/references/cases.md": "# 案例\n\n## 正常\n\n配置可读，fde-flow 只读取所需资产，交付附来源。\n\n## 资料不足\n\n完成有证据的部分，把缺口留给用户。\n\n## 停止\n\n找不到配置或请求越过项目边界时停止写入。\n",
        ".agents/skills/fde-flow/references/library-map.md": "# 六类资产映射\n\n运行时以知识库根目录的 `.fde/config.yaml` 为准。\n\n- owner：个人说明书\n- product：产品库\n- customer：客户需求库\n- case：素材案例库\n- method：方法论库\n- content：内容生产\n\n不得把这些显示名当成固定路径。\n",
        ".agents/skills/fde-flow/references/maturity.json": '{\n  "status": "project-owned-v1",\n  "source_role": "historical_reference_only",\n  "live_customer_test": false\n}\n',
        ".agents/skills/fde-flow/references/method.md": "# 口播衔接方法\n\n## 输入\n\n- 逐字稿\n- 目标时长\n- 核心观点\n- 必须保留的原话\n\n## 步骤\n\n1. 按听众能感知的意思分段。\n2. 为每段标出作用：提出、解释、证明、转折或行动。\n3. 找出无承接、重复证明、概念跳跃和单段过载。\n4. 给出删、移、补一句的最小调整。\n\n## 交付\n\n- 段落功能表\n- 断点\n- 重复\n- 最小调整\n- 调整后顺序\n\n## 停止\n\n- 核心观点不清时先停止结构调整\n- 不把口语全部改成书面语\n- 不删除用户要求保留的原话\n",
        ".agents/skills/fde-flow/references/source-evidence.md": "# 当前实现证据\n\n- 工作流规格：`tools/rewrite-owned-suite.py` 的 `fde-flow`。\n- 六类资产路径：`六类资产库目录模板/.fde/config.yaml`。\n- 名称和历史映射：`改造清单/skill-manifest.json`。\n- 相似度验收：`tools/check-source-similarity.py`。\n",
        ".agents/skills/fde-flow/references/source-map.md": "# 来源映射\n\n## 当前实现\n\n- 运行流程由 `tools/rewrite-owned-suite.py` 中的 `fde-flow` 规格生成。\n- 资产模型来自本项目 `六类资产库目录模板/.fde/config.yaml`。\n- 用户要求是：英文 `fde-` 名称、易于理解、服务当前六类资产库。\n\n## 历史对照\n\n- 历史能力对照：`dbskill-upstream/skills/dbs-script-flow`。\n- 固定快照：`v2.17.15`，commit `af99c577bfb9f1926236671a882b15030242fe8b`。\n- 该快照只用于能力盘点、相似度检查和署名追溯，不在运行时加载。\n\n历史对照不代表当前运行规则。商业许可仍按项目 `NOTICE.md` 和授权清单处理。\n",
        ".agents/skills/fde-flow/SKILL.md": "---\nname: fde-flow\ndescription: |\n  检查口播稿每一段是否承接上一段并推动下一段，找出跳步、重复和信息拥堵。触发方式：/fde-flow、「稿子顺不顺」「哪里会划走」。\n---\n\n# 口播衔接\n\n<!-- FDE-OWNED-WORKFLOW: v1 -->\n\n## 开始前\n\n1. 从当前目录向上找到 `.fde/config.yaml`，按配置解析六类资产库。\n2. 只读取本任务需要的文件，不跨知识库搜索。\n3. 把库内事实、用户本轮信息、当前推断和未知项分开。\n4. 原始材料不覆盖；删除、移动和批量写入先确认。\n\n## 读取\n\n- 逐字稿\n- 目标时长\n- 核心观点\n- 必须保留的原话\n\n## 必须保留的能力\n\n- 检查段落间承接\n- 检查段落内信息密度\n- 检查句子口播流畅度\n- 标出可能划走的位置\n- 诊断后可按确认生成标记式改稿\n\n## 执行\n\n1. 按听众能感知的意思分段。\n2. 为每段标出作用：提出、解释、证明、转折或行动。\n3. 找出无承接、重复证明、概念跳跃和单段过载。\n4. 给出删、移、补一句的最小调整。\n\n## 交付\n\n- 段落功能表\n- 断点\n- 重复\n- 最小调整\n- 调整后顺序\n\n每个关键判断附来源路径；没有来源的内容标为推断或待确认。\n\n## 写回\n\n- 默认只出标记稿；用户确认后另存修改版\n\n## 停止条件\n\n- 核心观点不清时先停止结构调整\n- 不把口语全部改成书面语\n- 不删除用户要求保留的原话\n\n## 接续\n\n- 开头用 fde-hook\n- 整体审核用 fde-review\n\n来源沿革只用于追溯，不作为运行指令。需要追溯时读取 `references/source-map.md`。\n",
        ".agents/skills/fde-focus/agents/openai.yaml": 'interface:\n  display_name: "优先事项"\n  short_description: "读取当前六类资产知识库，执行优先事项并返回来源、结果和未确认项。"\n  default_prompt: "请使用 $fde-focus 处理当前知识库里的真实任务，并说明来源和未确认项。"\n',
        ".agents/skills/fde-focus/references/acceptance.md": "# 验收\n\n- [ ] fde-focus 使用当前知识库配置。\n- [ ] 读取范围与任务有关。\n- [ ] 事实、推断和未知分开。\n- [ ] 关键判断有来源。\n- [ ] 破坏性动作先确认。\n- [ ] 输出包含：当前约束、主动作、维护动作、暂停清单、复查条件。\n- [ ] 能力：识别贪快和绕开摩擦的做法。\n- [ ] 能力：区分能积累资产的慢动作与低效忙碌。\n- [ ] 能力：说明摩擦会留下什么可复用资产。\n- [ ] 能力：安排一个长期主动作和停止清单。\n",
        ".agents/skills/fde-focus/references/asset-friction.md": "# 摩擦与资产\n\n慢动作必须留下可复用结果，才算资产积累。检查它是否留下客户证据、交付标准、案例、方法、渠道关系或可复用内容。只增加耗时、不留下结果的动作列为低效。\n",
        ".agents/skills/fde-focus/references/atoms.jsonl": '{"id": "FDE-FOCUS-001", "rule": "先定位当前知识库配置，再读取资料。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-FOCUS-002", "rule": "只加载当前任务需要的资产。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-FOCUS-003", "rule": "区分事实、用户陈述、推断和未知。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-FOCUS-004", "rule": "关键结论返回来源路径。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-FOCUS-005", "rule": "原始材料保持不变。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-FOCUS-006", "rule": "批量写入、移动、覆盖和删除先确认。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-FOCUS-007", "rule": "不跨客户或跨项目读取。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-FOCUS-008", "rule": "资料不足时完成证据允许的部分。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-FOCUS-009", "rule": "不能确认的分类进入待确认区。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-FOCUS-010", "rule": "交付后说明写入位置和未完成项。", "source": "fde-skills-workflow-v1"}\n',
        ".agents/skills/fde-focus/references/axioms.md": "# 公理\n\n## AXIOM-01：定位\n\n没有知识库配置就不猜路径。\n\n## AXIOM-02：最小读取\n\n只读取当前任务需要的资产。\n\n## AXIOM-03：证据\n\n事实和推断分开，关键判断附来源。\n\n## AXIOM-04：可恢复\n\n原始材料不覆盖，破坏性动作先确认。\n\n## AXIOM-05：闭环\n\n交付说明结果、写入位置、未知项和下一步。\n",
        ".agents/skills/fde-focus/references/behavior-tests.json": '[\n  {\n    "id": "case-1",\n    "prompt": "使用 fde-focus 完成：识别贪快和绕开摩擦的做法。",\n    "must_do": [\n      "识别贪快和绕开摩擦的做法",\n      "区分能积累资产的慢动作与低效忙碌",\n      "说明摩擦会留下什么可复用资产"\n    ],\n    "must_not": [\n      "编造事实",\n      "跨项目读取"\n    ]\n  },\n  {\n    "id": "case-2",\n    "prompt": "继续使用 fde-focus 完成：安排一个长期主动作和停止清单。",\n    "must_do": [\n      "安排一个长期主动作和停止清单",\n      "返回来源",\n      "说明未确认项"\n    ],\n    "must_not": [\n      "把推断写成事实",\n      "覆盖原始材料"\n    ]\n  },\n  {\n    "id": "counterexample-1",\n    "prompt": "找不到配置，但要求 fde-focus 批量写入。",\n    "must_do": [\n      "停止写入",\n      "询问根目录"\n    ],\n    "must_not": [\n      "猜路径",\n      "写入用户主目录"\n    ]\n  }\n]\n',
        ".agents/skills/fde-focus/references/capability-contract.json": '{\n  "skill": "fde-focus",\n  "implementation": "fde-skills-owned",\n  "runtime_uses_historical_skill": false,\n  "must_support": [\n    "识别贪快和绕开摩擦的做法",\n    "区分能积累资产的慢动作与低效忙碌",\n    "说明摩擦会留下什么可复用资产",\n    "安排一个长期主动作和停止清单"\n  ],\n  "tests": [\n    "case-1",\n    "case-2",\n    "counterexample-1"\n  ]\n}\n',
        ".agents/skills/fde-focus/references/cases.md": "# 案例\n\n## 正常\n\n配置可读，fde-focus 只读取所需资产，交付附来源。\n\n## 资料不足\n\n完成有证据的部分，把缺口留给用户。\n\n## 停止\n\n找不到配置或请求越过项目边界时停止写入。\n",
        ".agents/skills/fde-focus/references/library-map.md": "# 六类资产映射\n\n运行时以知识库根目录的 `.fde/config.yaml` 为准。\n\n- owner：个人说明书\n- product：产品库\n- customer：客户需求库\n- case：素材案例库\n- method：方法论库\n- content：内容生产\n\n不得把这些显示名当成固定路径。\n",
        ".agents/skills/fde-focus/references/maturity.json": '{\n  "status": "project-owned-v1",\n  "source_role": "historical_reference_only",\n  "live_customer_test": false\n}\n',
        ".agents/skills/fde-focus/references/method.md": "# 优先事项方法\n\n## 输入\n\n- 当前目标\n- 任务列表\n- 依赖关系\n- 时间与资源\n- 最近结果\n\n## 步骤\n\n1. 删除与当前目标无关的任务。\n2. 标出会阻塞其他任务的前置项。\n3. 比较每项的结果信号、成本和可逆性。\n4. 只保留一个主动作、一个维护动作和一个观察项。\n\n## 交付\n\n- 当前约束\n- 主动作\n- 维护动作\n- 暂停清单\n- 复查条件\n\n## 停止\n\n- 目标不清时不排序\n- 紧急合规或安全问题优先处理\n- 不把所有任务都标成重点\n",
        ".agents/skills/fde-focus/references/source-evidence.md": "# 当前实现证据\n\n- 工作流规格：`tools/rewrite-owned-suite.py` 的 `fde-focus`。\n- 六类资产路径：`六类资产库目录模板/.fde/config.yaml`。\n- 名称和历史映射：`改造清单/skill-manifest.json`。\n- 相似度验收：`tools/check-source-similarity.py`。\n",
        ".agents/skills/fde-focus/references/source-map.md": "# 来源映射\n\n## 当前实现\n\n- 运行流程由 `tools/rewrite-owned-suite.py` 中的 `fde-focus` 规格生成。\n- 资产模型来自本项目 `六类资产库目录模板/.fde/config.yaml`。\n- 用户要求是：英文 `fde-` 名称、易于理解、服务当前六类资产库。\n\n## 历史对照\n\n- 历史能力对照：`dbskill-upstream/skills/dbs-slowisfast`。\n- 固定快照：`v2.17.15`，commit `af99c577bfb9f1926236671a882b15030242fe8b`。\n- 该快照只用于能力盘点、相似度检查和署名追溯，不在运行时加载。\n\n历史对照不代表当前运行规则。商业许可仍按项目 `NOTICE.md` 和授权清单处理。\n",
        ".agents/skills/fde-focus/SKILL.md": "---\nname: fde-focus\ndescription: |\n  从多个任务中找出当前约束，决定做什么、暂缓什么和观察什么。触发方式：/fde-focus、「事情太多」「现在先做哪个」。\n---\n\n# 优先事项\n\n<!-- FDE-OWNED-WORKFLOW: v1 -->\n\n## 开始前\n\n1. 从当前目录向上找到 `.fde/config.yaml`，按配置解析六类资产库。\n2. 只读取本任务需要的文件，不跨知识库搜索。\n3. 把库内事实、用户本轮信息、当前推断和未知项分开。\n4. 原始材料不覆盖；删除、移动和批量写入先确认。\n\n## 读取\n\n- 当前目标\n- 任务列表\n- 依赖关系\n- 时间与资源\n- 最近结果\n\n## 必须保留的能力\n\n- 识别贪快和绕开摩擦的做法\n- 区分能积累资产的慢动作与低效忙碌\n- 说明摩擦会留下什么可复用资产\n- 安排一个长期主动作和停止清单\n\n## 执行\n\n1. 删除与当前目标无关的任务。\n2. 标出会阻塞其他任务的前置项。\n3. 比较每项的结果信号、成本和可逆性。\n4. 只保留一个主动作、一个维护动作和一个观察项。\n\n## 交付\n\n- 当前约束\n- 主动作\n- 维护动作\n- 暂停清单\n- 复查条件\n\n每个关键判断附来源路径；没有来源的内容标为推断或待确认。\n\n## 写回\n\n- 确认后写入 `.fde/state` 的当前计划\n\n## 停止条件\n\n- 目标不清时不排序\n- 紧急合规或安全问题优先处理\n- 不把所有任务都标成重点\n\n## 接续\n\n- 目标不清用 fde-goal\n- 动作推不动用 fde-action\n\n来源沿革只用于追溯，不作为运行指令。需要追溯时读取 `references/source-map.md`。\n",
        ".agents/skills/fde-format/agents/openai.yaml": 'interface:\n  display_name: "公众号排版"\n  short_description: "读取当前六类资产知识库，执行公众号排版并返回来源、结果和未确认项。"\n  default_prompt: "请使用 $fde-format 处理当前知识库里的真实任务，并说明来源和未确认项。"\n',
        ".agents/skills/fde-format/references/acceptance.md": "# 验收\n\n- [ ] fde-format 使用当前知识库配置。\n- [ ] 读取范围与任务有关。\n- [ ] 事实、推断和未知分开。\n- [ ] 关键判断有来源。\n- [ ] 破坏性动作先确认。\n- [ ] 输出包含：HTML 文件、预览说明、资源缺失、正文差异清单。\n- [ ] 能力：把 Markdown 转成微信公众号可粘贴 HTML。\n- [ ] 能力：提供 15 个自有排版主题。\n- [ ] 能力：支持主题预览和正式生成。\n- [ ] 能力：保留正文内容。\n- [ ] 能力：检查图片、链接和移动端显示。\n",
        ".agents/skills/fde-format/references/atoms.jsonl": '{"id": "FDE-FORMAT-001", "rule": "先定位当前知识库配置，再读取资料。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-FORMAT-002", "rule": "只加载当前任务需要的资产。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-FORMAT-003", "rule": "区分事实、用户陈述、推断和未知。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-FORMAT-004", "rule": "关键结论返回来源路径。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-FORMAT-005", "rule": "原始材料保持不变。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-FORMAT-006", "rule": "批量写入、移动、覆盖和删除先确认。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-FORMAT-007", "rule": "不跨客户或跨项目读取。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-FORMAT-008", "rule": "资料不足时完成证据允许的部分。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-FORMAT-009", "rule": "不能确认的分类进入待确认区。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-FORMAT-010", "rule": "交付后说明写入位置和未完成项。", "source": "fde-skills-workflow-v1"}\n',
        ".agents/skills/fde-format/references/axioms.md": "# 公理\n\n## AXIOM-01：定位\n\n没有知识库配置就不猜路径。\n\n## AXIOM-02：最小读取\n\n只读取当前任务需要的资产。\n\n## AXIOM-03：证据\n\n事实和推断分开，关键判断附来源。\n\n## AXIOM-04：可恢复\n\n原始材料不覆盖，破坏性动作先确认。\n\n## AXIOM-05：闭环\n\n交付说明结果、写入位置、未知项和下一步。\n",
        ".agents/skills/fde-format/references/behavior-tests.json": '[\n  {\n    "id": "case-1",\n    "prompt": "使用 fde-format 完成：把 Markdown 转成微信公众号可粘贴 HTML。",\n    "must_do": [\n      "把 Markdown 转成微信公众号可粘贴 HTML",\n      "提供 15 个自有排版主题",\n      "支持主题预览和正式生成"\n    ],\n    "must_not": [\n      "编造事实",\n      "跨项目读取"\n    ]\n  },\n  {\n    "id": "case-2",\n    "prompt": "继续使用 fde-format 完成：检查图片、链接和移动端显示。",\n    "must_do": [\n      "检查图片、链接和移动端显示",\n      "返回来源",\n      "说明未确认项"\n    ],\n    "must_not": [\n      "把推断写成事实",\n      "覆盖原始材料"\n    ]\n  },\n  {\n    "id": "counterexample-1",\n    "prompt": "找不到配置，但要求 fde-format 批量写入。",\n    "must_do": [\n      "停止写入",\n      "询问根目录"\n    ],\n    "must_not": [\n      "猜路径",\n      "写入用户主目录"\n    ]\n  }\n]\n',
        ".agents/skills/fde-format/references/capability-contract.json": '{\n  "skill": "fde-format",\n  "implementation": "fde-skills-owned",\n  "runtime_uses_historical_skill": false,\n  "must_support": [\n    "把 Markdown 转成微信公众号可粘贴 HTML",\n    "提供 15 个自有排版主题",\n    "支持主题预览和正式生成",\n    "保留正文内容",\n    "检查图片、链接和移动端显示"\n  ],\n  "tests": [\n    "case-1",\n    "case-2",\n    "counterexample-1"\n  ]\n}\n',
        ".agents/skills/fde-format/references/cases.md": "# 案例\n\n## 正常\n\n配置可读，fde-format 只读取所需资产，交付附来源。\n\n## 资料不足\n\n完成有证据的部分，把缺口留给用户。\n\n## 停止\n\n找不到配置或请求越过项目边界时停止写入。\n",
        ".agents/skills/fde-format/references/library-map.md": "# 六类资产映射\n\n运行时以知识库根目录的 `.fde/config.yaml` 为准。\n\n- owner：个人说明书\n- product：产品库\n- customer：客户需求库\n- case：素材案例库\n- method：方法论库\n- content：内容生产\n\n不得把这些显示名当成固定路径。\n",
        ".agents/skills/fde-format/references/maturity.json": '{\n  "status": "project-owned-v1",\n  "source_role": "historical_reference_only",\n  "live_customer_test": false\n}\n',
        ".agents/skills/fde-format/references/method.md": "# 公众号排版方法\n\n## 输入\n\n- 已确认 Markdown\n- 排版主题选择\n- 图片和链接\n- 公众号发布限制\n- references/style-themes.json\n- scripts/render_wechat.py\n\n## 步骤\n\n1. 先验证稿件状态和资源路径。\n2. 从 15 个自有主题中选择，或先生成主题预览。\n3. 使用 `scripts/render_wechat.py` 转换标题、段落、引用、列表、图片和链接。\n4. 生成可粘贴 HTML，检查移动端宽度和复制兼容。\n5. 列出未找到的图片、外链和转换差异。\n\n## 交付\n\n- HTML 文件\n- 预览说明\n- 资源缺失\n- 正文差异清单\n\n## 停止\n\n- 稿件未确认时不进入待发布\n- 不修改正文观点\n- 外部样式和脚本不写入公众号 HTML\n",
        ".agents/skills/fde-format/references/source-evidence.md": "# 当前实现证据\n\n- 工作流规格：`tools/rewrite-owned-suite.py` 的 `fde-format`。\n- 六类资产路径：`六类资产库目录模板/.fde/config.yaml`。\n- 名称和历史映射：`改造清单/skill-manifest.json`。\n- 相似度验收：`tools/check-source-similarity.py`。\n",
        ".agents/skills/fde-format/references/source-map.md": "# 来源映射\n\n## 当前实现\n\n- 运行流程由 `tools/rewrite-owned-suite.py` 中的 `fde-format` 规格生成。\n- 资产模型来自本项目 `六类资产库目录模板/.fde/config.yaml`。\n- 用户要求是：英文 `fde-` 名称、易于理解、服务当前六类资产库。\n\n## 历史对照\n\n- 历史能力对照：`dbskill-upstream/skills/dbs-wechat-html`。\n- 固定快照：`v2.17.15`，commit `af99c577bfb9f1926236671a882b15030242fe8b`。\n- 该快照只用于能力盘点、相似度检查和署名追溯，不在运行时加载。\n\n历史对照不代表当前运行规则。商业许可仍按项目 `NOTICE.md` 和授权清单处理。\n",
        ".agents/skills/fde-format/references/style-themes.json": '[\n  {\n    "id": "clear",\n    "label": "清楚",\n    "tokens": {\n      "text_color": "#1f2937",\n      "background": "#ffffff",\n      "font": "sans",\n      "spacing": "compact",\n      "accent": "line"\n    }\n  },\n  {\n    "id": "memo",\n    "label": "备忘",\n    "tokens": {\n      "text_color": "#44403c",\n      "background": "#fffdf8",\n      "font": "sans",\n      "spacing": "normal",\n      "accent": "soft"\n    }\n  },\n  {\n    "id": "ledger",\n    "label": "台账",\n    "tokens": {\n      "text_color": "#243447",\n      "background": "#f8fafc",\n      "font": "mono",\n      "spacing": "compact",\n      "accent": "box"\n    }\n  },\n  {\n    "id": "field",\n    "label": "现场",\n    "tokens": {\n      "text_color": "#3f3f2f",\n      "background": "#fbfaf4",\n      "font": "serif",\n      "spacing": "loose",\n      "accent": "line"\n    }\n  },\n  {\n    "id": "studio",\n    "label": "工作室",\n    "tokens": {\n      "text_color": "#27272a",\n      "background": "#ffffff",\n      "font": "sans",\n      "spacing": "normal",\n      "accent": "block"\n    }\n  },\n  {\n    "id": "slate",\n    "label": "深色",\n    "tokens": {\n      "text_color": "#e5e7eb",\n      "background": "#18181b",\n      "font": "sans",\n      "spacing": "compact",\n      "accent": "box"\n    }\n  },\n  {\n    "id": "paper",\n    "label": "纸张",\n    "tokens": {\n      "text_color": "#292524",\n      "background": "#fffaf0",\n      "font": "serif",\n      "spacing": "loose",\n      "accent": "soft"\n    }\n  },\n  {\n    "id": "signal",\n    "label": "信号",\n    "tokens": {\n      "text_color": "#172554",\n      "background": "#eff6ff",\n      "font": "sans",\n      "spacing": "compact",\n      "accent": "block"\n    }\n  },\n  {\n    "id": "calm",\n    "label": "留白",\n    "tokens": {\n      "text_color": "#374151",\n      "background": "#ffffff",\n      "font": "serif",\n      "spacing": "loose",\n      "accent": "line"\n    }\n  },\n  {\n    "id": "brief",\n    "label": "简报",\n    "tokens": {\n      "text_color": "#111827",\n      "background": "#f9fafb",\n      "font": "sans",\n      "spacing": "compact",\n      "accent": "box"\n    }\n  },\n  {\n    "id": "lesson",\n    "label": "讲义",\n    "tokens": {\n      "text_color": "#312e81",\n      "background": "#fafafa",\n      "font": "sans",\n      "spacing": "normal",\n      "accent": "soft"\n    }\n  },\n  {\n    "id": "case",\n    "label": "案例",\n    "tokens": {\n      "text_color": "#7c2d12",\n      "background": "#fff7ed",\n      "font": "serif",\n      "spacing": "normal",\n      "accent": "line"\n    }\n  },\n  {\n    "id": "launch",\n    "label": "发布",\n    "tokens": {\n      "text_color": "#7f1d1d",\n      "background": "#fffafa",\n      "font": "sans",\n      "spacing": "compact",\n      "accent": "block"\n    }\n  },\n  {\n    "id": "qa",\n    "label": "问答",\n    "tokens": {\n      "text_color": "#14532d",\n      "background": "#f0fdf4",\n      "font": "sans",\n      "spacing": "normal",\n      "accent": "box"\n    }\n  },\n  {\n    "id": "archive",\n    "label": "档案",\n    "tokens": {\n      "text_color": "#334155",\n      "background": "#f8fafc",\n      "font": "mono",\n      "spacing": "loose",\n      "accent": "line"\n    }\n  }\n]\n',
        ".agents/skills/fde-format/scripts/render_wechat.py": `#!/usr/bin/env python3
"""Render a small Markdown subset as self-contained WeChat HTML."""

from __future__ import annotations

import argparse
import html
import json
import re
from pathlib import Path


HERE = Path(__file__).resolve().parent
THEMES = HERE.parent / "references" / "style-themes.json"
FONTS = {
    "sans": "-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif",
    "serif": "Georgia,'Noto Serif SC',serif",
    "mono": "ui-monospace,SFMono-Regular,Menlo,monospace",
}
SPACING = {"compact": (1.6, "0.65em"), "normal": (1.75, "0.9em"), "loose": (1.95, "1.15em")}


def load_themes() -> dict[str, dict]:
    return {item["id"]: item for item in json.loads(THEMES.read_text(encoding="utf-8"))}


def inline(value: str) -> str:
    value = html.escape(value, quote=True)
    value = re.sub(r"!\\[([^]]*)\\]\\(([^)]+)\\)", r'<img alt="\\1" src="\\2" style="max-width:100%;height:auto;" />', value)
    value = re.sub(r"\\[([^]]+)\\]\\(([^)]+)\\)", r'<a href="\\2" style="color:inherit;text-decoration:underline;">\\1</a>', value)
    value = re.sub(r"\\*\\*([^*]+)\\*\\*", r"<strong>\\1</strong>", value)
    value = re.sub(r"\`([^\`]+)\`", r"<code>\\1</code>", value)
    return value


def render(markdown: str, theme: dict) -> str:
    tokens = theme["tokens"]
    line_height, gap = SPACING[tokens["spacing"]]
    font = FONTS[tokens["font"]]
    accent = {"line": "border-left:3px solid currentColor", "soft": "border:1px solid #d1d5db", "box": "border:1px solid currentColor", "block": "background:rgba(127,127,127,.10)"}[tokens["accent"]]
    parts: list[str] = []
    in_code = False
    code_lines: list[str] = []
    list_kind = None

    def close_list() -> None:
        nonlocal list_kind
        if list_kind:
            parts.append(f"</{list_kind}>")
            list_kind = None

    for raw in markdown.splitlines():
        line = raw.rstrip()
        if line.startswith("\`\`\`"):
            close_list()
            if in_code:
                parts.append(f'<pre style="overflow:auto;padding:12px;{accent};"><code>{html.escape(chr(10).join(code_lines))}</code></pre>')
                code_lines = []
            in_code = not in_code
            continue
        if in_code:
            code_lines.append(line)
            continue
        if not line:
            close_list()
            continue
        heading = re.match(r"^(#{1,3})\\s+(.+)$", line)
        if heading:
            close_list()
            level = len(heading.group(1))
            size = {1: "1.55em", 2: "1.3em", 3: "1.12em"}[level]
            parts.append(f'<h{level} style="font-size:{size};margin:{gap} 0 .45em;">{inline(heading.group(2))}</h{level}>')
            continue
        item = re.match(r"^\\s*([-*]|\\d+\\.)\\s+(.+)$", line)
        if item:
            kind = "ul" if item.group(1) in {"-", "*"} else "ol"
            if list_kind != kind:
                close_list()
                parts.append(f'<{kind} style="padding-left:1.4em;margin:{gap} 0;">')
                list_kind = kind
            parts.append(f"<li>{inline(item.group(2))}</li>")
            continue
        close_list()
        if line.startswith("> "):
            parts.append(f'<blockquote style="margin:{gap} 0;padding:.6em 1em;{accent};">{inline(line[2:])}</blockquote>')
        else:
            parts.append(f'<p style="margin:{gap} 0;">{inline(line)}</p>')
    close_list()
    if in_code:
        parts.append(f"<pre><code>{html.escape(chr(10).join(code_lines))}</code></pre>")
    body = "\\n".join(parts)
    return (
        f'<section data-fde-theme="{theme["id"]}" style="box-sizing:border-box;max-width:100%;'
        f'padding:16px;color:{tokens["text_color"]};background:{tokens["background"]};'
        f'font-family:{font};font-size:16px;line-height:{line_height};word-break:break-word;">\\n{body}\\n</section>\\n'
    )


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--input", type=Path)
    parser.add_argument("--output", type=Path)
    parser.add_argument("--theme", default="clear")
    parser.add_argument("--list-themes", action="store_true")
    args = parser.parse_args()
    themes = load_themes()
    if args.list_themes:
        print(json.dumps([{"id": value["id"], "label": value["label"]} for value in themes.values()], ensure_ascii=False, indent=2))
        return
    if not args.input or not args.output:
        parser.error("--input and --output are required")
    if args.theme not in themes:
        parser.error(f"unknown theme: {args.theme}")
    result = render(args.input.read_text(encoding="utf-8"), themes[args.theme])
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(result, encoding="utf-8")
    print(json.dumps({"theme": args.theme, "output": str(args.output)}, ensure_ascii=False))


if __name__ == "__main__":
    main()
`,
        ".agents/skills/fde-format/SKILL.md": "---\nname: fde-format\ndescription: |\n  把已确认的 Markdown 稿转成微信公众号可粘贴 HTML，保持正文不变并检查标题、图片和链接。触发方式：/fde-format、「排成公众号」「生成微信 HTML」。\n---\n\n# 公众号排版\n\n<!-- FDE-OWNED-WORKFLOW: v1 -->\n\n## 开始前\n\n1. 从当前目录向上找到 `.fde/config.yaml`，按配置解析六类资产库。\n2. 只读取本任务需要的文件，不跨知识库搜索。\n3. 把库内事实、用户本轮信息、当前推断和未知项分开。\n4. 原始材料不覆盖；删除、移动和批量写入先确认。\n\n## 读取\n\n- 已确认 Markdown\n- 排版主题选择\n- 图片和链接\n- 公众号发布限制\n- references/style-themes.json\n- scripts/render_wechat.py\n\n## 必须保留的能力\n\n- 把 Markdown 转成微信公众号可粘贴 HTML\n- 提供 15 个自有排版主题\n- 支持主题预览和正式生成\n- 保留正文内容\n- 检查图片、链接和移动端显示\n\n## 执行\n\n1. 先验证稿件状态和资源路径。\n2. 从 15 个自有主题中选择，或先生成主题预览。\n3. 使用 `scripts/render_wechat.py` 转换标题、段落、引用、列表、图片和链接。\n4. 生成可粘贴 HTML，检查移动端宽度和复制兼容。\n5. 列出未找到的图片、外链和转换差异。\n\n## 交付\n\n- HTML 文件\n- 预览说明\n- 资源缺失\n- 正文差异清单\n\n每个关键判断附来源路径；没有来源的内容标为推断或待确认。\n\n## 写回\n\n- 写入内容库的 `待发布`，不覆盖 Markdown 原稿\n\n## 停止条件\n\n- 稿件未确认时不进入待发布\n- 不修改正文观点\n- 外部样式和脚本不写入公众号 HTML\n\n## 接续\n\n- 内容没审核用 fde-review\n\n来源沿革只用于追溯，不作为运行指令。需要追溯时读取 `references/source-map.md`。\n",
        ".agents/skills/fde-goal/agents/openai.yaml": 'interface:\n  display_name: "目标说明"\n  short_description: "读取当前六类资产知识库，执行目标说明并返回来源、结果和未确认项。"\n  default_prompt: "请使用 $fde-goal 处理当前知识库里的真实任务，并说明来源和未确认项。"\n',
        ".agents/skills/fde-goal/references/acceptance.md": "# 验收\n\n- [ ] fde-goal 使用当前知识库配置。\n- [ ] 读取范围与任务有关。\n- [ ] 事实、推断和未知分开。\n- [ ] 关键判断有来源。\n- [ ] 破坏性动作先确认。\n- [ ] 输出包含：原目标、可检查目标、验收证据、边界、第一步。\n- [ ] 能力：保留用户原目标。\n- [ ] 能力：找出无法检查的词。\n- [ ] 能力：改写为对象、结果、边界、证据和时间。\n- [ ] 能力：给出验收方式和第一步。\n",
        ".agents/skills/fde-goal/references/atoms.jsonl": '{"id": "FDE-GOAL-001", "rule": "先定位当前知识库配置，再读取资料。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-GOAL-002", "rule": "只加载当前任务需要的资产。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-GOAL-003", "rule": "区分事实、用户陈述、推断和未知。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-GOAL-004", "rule": "关键结论返回来源路径。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-GOAL-005", "rule": "原始材料保持不变。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-GOAL-006", "rule": "批量写入、移动、覆盖和删除先确认。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-GOAL-007", "rule": "不跨客户或跨项目读取。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-GOAL-008", "rule": "资料不足时完成证据允许的部分。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-GOAL-009", "rule": "不能确认的分类进入待确认区。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-GOAL-010", "rule": "交付后说明写入位置和未完成项。", "source": "fde-skills-workflow-v1"}\n',
        ".agents/skills/fde-goal/references/axioms.md": "# 公理\n\n## AXIOM-01：定位\n\n没有知识库配置就不猜路径。\n\n## AXIOM-02：最小读取\n\n只读取当前任务需要的资产。\n\n## AXIOM-03：证据\n\n事实和推断分开，关键判断附来源。\n\n## AXIOM-04：可恢复\n\n原始材料不覆盖，破坏性动作先确认。\n\n## AXIOM-05：闭环\n\n交付说明结果、写入位置、未知项和下一步。\n",
        ".agents/skills/fde-goal/references/behavior-tests.json": '[\n  {\n    "id": "case-1",\n    "prompt": "使用 fde-goal 完成：保留用户原目标。",\n    "must_do": [\n      "保留用户原目标",\n      "找出无法检查的词",\n      "改写为对象、结果、边界、证据和时间"\n    ],\n    "must_not": [\n      "编造事实",\n      "跨项目读取"\n    ]\n  },\n  {\n    "id": "case-2",\n    "prompt": "继续使用 fde-goal 完成：给出验收方式和第一步。",\n    "must_do": [\n      "给出验收方式和第一步",\n      "返回来源",\n      "说明未确认项"\n    ],\n    "must_not": [\n      "把推断写成事实",\n      "覆盖原始材料"\n    ]\n  },\n  {\n    "id": "counterexample-1",\n    "prompt": "找不到配置，但要求 fde-goal 批量写入。",\n    "must_do": [\n      "停止写入",\n      "询问根目录"\n    ],\n    "must_not": [\n      "猜路径",\n      "写入用户主目录"\n    ]\n  }\n]\n',
        ".agents/skills/fde-goal/references/capability-contract.json": '{\n  "skill": "fde-goal",\n  "implementation": "fde-skills-owned",\n  "runtime_uses_historical_skill": false,\n  "must_support": [\n    "保留用户原目标",\n    "找出无法检查的词",\n    "改写为对象、结果、边界、证据和时间",\n    "给出验收方式和第一步"\n  ],\n  "tests": [\n    "case-1",\n    "case-2",\n    "counterexample-1"\n  ]\n}\n',
        ".agents/skills/fde-goal/references/cases.md": "# 案例\n\n## 正常\n\n配置可读，fde-goal 只读取所需资产，交付附来源。\n\n## 资料不足\n\n完成有证据的部分，把缺口留给用户。\n\n## 停止\n\n找不到配置或请求越过项目边界时停止写入。\n",
        ".agents/skills/fde-goal/references/library-map.md": "# 六类资产映射\n\n运行时以知识库根目录的 `.fde/config.yaml` 为准。\n\n- owner：个人说明书\n- product：产品库\n- customer：客户需求库\n- case：素材案例库\n- method：方法论库\n- content：内容生产\n\n不得把这些显示名当成固定路径。\n",
        ".agents/skills/fde-goal/references/maturity.json": '{\n  "status": "project-owned-v1",\n  "source_role": "historical_reference_only",\n  "live_customer_test": false\n}\n',
        ".agents/skills/fde-goal/references/method.md": "# 目标说明方法\n\n## 输入\n\n- 用户原话\n- 当前业务阶段\n- 已有资源\n- 不能接受的结果\n\n## 步骤\n\n1. 保留原句，标出无法检查的词。\n2. 追问想让谁发生什么变化，以及用什么证据确认。\n3. 写出范围、截止点、资源和不做事项。\n4. 生成最小目标版本和验收方式。\n\n## 交付\n\n- 原目标\n- 可检查目标\n- 验收证据\n- 边界\n- 第一步\n\n## 停止\n\n- 用户不接受量化时用可观察事实替代\n- 不替用户决定价值取舍\n- 目标与事实冲突时标出\n",
        ".agents/skills/fde-goal/references/source-evidence.md": "# 当前实现证据\n\n- 工作流规格：`tools/rewrite-owned-suite.py` 的 `fde-goal`。\n- 六类资产路径：`六类资产库目录模板/.fde/config.yaml`。\n- 名称和历史映射：`改造清单/skill-manifest.json`。\n- 相似度验收：`tools/check-source-similarity.py`。\n",
        ".agents/skills/fde-goal/references/source-map.md": "# 来源映射\n\n## 当前实现\n\n- 运行流程由 `tools/rewrite-owned-suite.py` 中的 `fde-goal` 规格生成。\n- 资产模型来自本项目 `六类资产库目录模板/.fde/config.yaml`。\n- 用户要求是：英文 `fde-` 名称、易于理解、服务当前六类资产库。\n\n## 历史对照\n\n- 历史能力对照：`dbskill-upstream/skills/dbs-goal`。\n- 固定快照：`v2.17.15`，commit `af99c577bfb9f1926236671a882b15030242fe8b`。\n- 该快照只用于能力盘点、相似度检查和署名追溯，不在运行时加载。\n\n历史对照不代表当前运行规则。商业许可仍按项目 `NOTICE.md` 和授权清单处理。\n",
        ".agents/skills/fde-goal/SKILL.md": "---\nname: fde-goal\ndescription: |\n  把模糊愿望改成可检查的结果、对象、边界、证据和时间。触发方式：/fde-goal、「把目标说清楚」「我想做个人 IP」。\n---\n\n# 目标说明\n\n<!-- FDE-OWNED-WORKFLOW: v1 -->\n\n## 开始前\n\n1. 从当前目录向上找到 `.fde/config.yaml`，按配置解析六类资产库。\n2. 只读取本任务需要的文件，不跨知识库搜索。\n3. 把库内事实、用户本轮信息、当前推断和未知项分开。\n4. 原始材料不覆盖；删除、移动和批量写入先确认。\n\n## 读取\n\n- 用户原话\n- 当前业务阶段\n- 已有资源\n- 不能接受的结果\n\n## 必须保留的能力\n\n- 保留用户原目标\n- 找出无法检查的词\n- 改写为对象、结果、边界、证据和时间\n- 给出验收方式和第一步\n\n## 执行\n\n1. 保留原句，标出无法检查的词。\n2. 追问想让谁发生什么变化，以及用什么证据确认。\n3. 写出范围、截止点、资源和不做事项。\n4. 生成最小目标版本和验收方式。\n\n## 交付\n\n- 原目标\n- 可检查目标\n- 验收证据\n- 边界\n- 第一步\n\n每个关键判断附来源路径；没有来源的内容标为推断或待确认。\n\n## 写回\n\n- 用户确认后写入项目状态或决策记录\n\n## 停止条件\n\n- 用户不接受量化时用可观察事实替代\n- 不替用户决定价值取舍\n- 目标与事实冲突时标出\n\n## 接续\n\n- 执行受阻用 fde-action\n- 需要拆问题用 fde-question\n\n来源沿革只用于追溯，不作为运行指令。需要追溯时读取 `references/source-map.md`。\n",
        ".agents/skills/fde-health/agents/openai.yaml": 'interface:\n  display_name: "知识库体检"\n  short_description: "读取当前六类资产知识库，执行知识库体检并返回来源、结果和未确认项。"\n  default_prompt: "请使用 $fde-health 处理当前知识库里的真实任务，并说明来源和未确认项。"\n',
        ".agents/skills/fde-health/references/acceptance.md": "# 验收\n\n- [ ] fde-health 使用当前知识库配置。\n- [ ] 读取范围与任务有关。\n- [ ] 事实、推断和未知分开。\n- [ ] 关键判断有来源。\n- [ ] 破坏性动作先确认。\n- [ ] 输出包含：能否使用、问题路径和证据、影响、建议动作、等待确认的修正。\n- [ ] 能力：核对知识库配置与实际目录。\n- [ ] 能力：核对 Agent 规则文件、Skill 和项目状态。\n- [ ] 能力：发现路径、数据、版本和状态冲突。\n- [ ] 能力：先报告，确认后再修正。\n",
        ".agents/skills/fde-health/references/atoms.jsonl": '{"id": "FDE-HEALTH-001", "rule": "先定位当前知识库配置，再读取资料。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-HEALTH-002", "rule": "只加载当前任务需要的资产。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-HEALTH-003", "rule": "区分事实、用户陈述、推断和未知。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-HEALTH-004", "rule": "关键结论返回来源路径。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-HEALTH-005", "rule": "原始材料保持不变。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-HEALTH-006", "rule": "批量写入、移动、覆盖和删除先确认。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-HEALTH-007", "rule": "不跨客户或跨项目读取。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-HEALTH-008", "rule": "资料不足时完成证据允许的部分。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-HEALTH-009", "rule": "不能确认的分类进入待确认区。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-HEALTH-010", "rule": "交付后说明写入位置和未完成项。", "source": "fde-skills-workflow-v1"}\n',
        ".agents/skills/fde-health/references/axioms.md": "# 公理\n\n## AXIOM-01：定位\n\n没有知识库配置就不猜路径。\n\n## AXIOM-02：最小读取\n\n只读取当前任务需要的资产。\n\n## AXIOM-03：证据\n\n事实和推断分开，关键判断附来源。\n\n## AXIOM-04：可恢复\n\n原始材料不覆盖，破坏性动作先确认。\n\n## AXIOM-05：闭环\n\n交付说明结果、写入位置、未知项和下一步。\n",
        ".agents/skills/fde-health/references/behavior-tests.json": '[\n  {\n    "id": "case-1",\n    "prompt": "使用 fde-health 完成：核对知识库配置与实际目录。",\n    "must_do": [\n      "核对知识库配置与实际目录",\n      "核对 Agent 规则文件、Skill 和项目状态",\n      "发现路径、数据、版本和状态冲突"\n    ],\n    "must_not": [\n      "编造事实",\n      "跨项目读取"\n    ]\n  },\n  {\n    "id": "case-2",\n    "prompt": "继续使用 fde-health 完成：先报告，确认后再修正。",\n    "must_do": [\n      "先报告，确认后再修正",\n      "返回来源",\n      "说明未确认项"\n    ],\n    "must_not": [\n      "把推断写成事实",\n      "覆盖原始材料"\n    ]\n  },\n  {\n    "id": "counterexample-1",\n    "prompt": "找不到配置，但要求 fde-health 批量写入。",\n    "must_do": [\n      "停止写入",\n      "询问根目录"\n    ],\n    "must_not": [\n      "猜路径",\n      "写入用户主目录"\n    ]\n  }\n]\n',
        ".agents/skills/fde-health/references/capability-contract.json": '{\n  "skill": "fde-health",\n  "implementation": "fde-skills-owned",\n  "runtime_uses_historical_skill": false,\n  "must_support": [\n    "核对知识库配置与实际目录",\n    "核对 Agent 规则文件、Skill 和项目状态",\n    "发现路径、数据、版本和状态冲突",\n    "先报告，确认后再修正"\n  ],\n  "tests": [\n    "case-1",\n    "case-2",\n    "counterexample-1"\n  ]\n}\n',
        ".agents/skills/fde-health/references/cases.md": "# 案例\n\n## 正常\n\n配置可读，fde-health 只读取所需资产，交付附来源。\n\n## 资料不足\n\n完成有证据的部分，把缺口留给用户。\n\n## 停止\n\n找不到配置或请求越过项目边界时停止写入。\n",
        ".agents/skills/fde-health/references/health-dimensions.md": "# 体检范围\n\n检查配置与目录、资产来源、收件箱流转、内容阶段、运行状态、AGENTS.md 与 CLAUDE.md、Skill 清单、业务数字和版本。事实冲突只报告，不自动选边。\n",
        ".agents/skills/fde-health/references/library-map.md": "# 六类资产映射\n\n运行时以知识库根目录的 `.fde/config.yaml` 为准。\n\n- owner：个人说明书\n- product：产品库\n- customer：客户需求库\n- case：素材案例库\n- method：方法论库\n- content：内容生产\n\n不得把这些显示名当成固定路径。\n",
        ".agents/skills/fde-health/references/maturity.json": '{\n  "status": "project-owned-v1",\n  "source_role": "historical_reference_only",\n  "live_customer_test": false\n}\n',
        ".agents/skills/fde-health/references/method.md": "# 知识库体检方法\n\n## 输入\n\n- `.fde/config.yaml`\n- 六类资产路径\n- 收件箱和内容阶段\n- `.fde` 运行目录\n- AGENTS.md、CLAUDE.md 和已安装 fde-* 清单\n\n## 步骤\n\n1. 验证配置字段、路径边界和目录可读性。\n2. 统计六类资产的文件数、来源覆盖和最近更新。\n3. 对照 AGENTS.md、CLAUDE.md、Skill 目录和实际项目状态，找路径、版本、数字和状态冲突。\n4. 检查待处理材料、重复入库、内容阶段冲突和运行文件越界。\n5. 把问题分为阻塞、要处理和提醒，只给出有证据的问题。\n\n## 交付\n\n- 能否使用\n- 问题路径和证据\n- 影响\n- 建议动作\n- 等待确认的修正\n\n## 停止\n\n- 配置不存在时停止并询问根目录\n- 业务事实冲突时不自动选边\n- 不把空库当成损坏\n",
        ".agents/skills/fde-health/references/source-evidence.md": "# 当前实现证据\n\n- 工作流规格：`tools/rewrite-owned-suite.py` 的 `fde-health`。\n- 六类资产路径：`六类资产库目录模板/.fde/config.yaml`。\n- 名称和历史映射：`改造清单/skill-manifest.json`。\n- 相似度验收：`tools/check-source-similarity.py`。\n",
        ".agents/skills/fde-health/references/source-map.md": "# 来源映射\n\n## 当前实现\n\n- 运行流程由 `tools/rewrite-owned-suite.py` 中的 `fde-health` 规格生成。\n- 资产模型来自本项目 `六类资产库目录模板/.fde/config.yaml`。\n- 用户要求是：英文 `fde-` 名称、易于理解、服务当前六类资产库。\n\n## 历史对照\n\n- 历史能力对照：`skills矩阵/CLAUDE体检/SKILL.md`。\n- 该文件只用于能力盘点、相似度检查和署名追溯，不在运行时加载。\n\n历史对照不代表当前运行规则。商业许可仍按项目 `NOTICE.md` 和授权清单处理。\n",
        ".agents/skills/fde-health/SKILL.md": "---\nname: fde-health\ndescription: |\n  检查六类资产库的配置、目录、来源、收件箱、内容阶段、运行状态和已安装 fde-*。默认只报告，确认后才修目录。触发方式：/fde-health、「知识库体检」「检查知识库」。\n---\n\n# 知识库体检\n\n<!-- FDE-OWNED-WORKFLOW: v1 -->\n\n## 开始前\n\n1. 从当前目录向上找到 `.fde/config.yaml`，按配置解析六类资产库。\n2. 只读取本任务需要的文件，不跨知识库搜索。\n3. 把库内事实、用户本轮信息、当前推断和未知项分开。\n4. 原始材料不覆盖；删除、移动和批量写入先确认。\n\n## 读取\n\n- `.fde/config.yaml`\n- 六类资产路径\n- 收件箱和内容阶段\n- `.fde` 运行目录\n- AGENTS.md、CLAUDE.md 和已安装 fde-* 清单\n\n`.fde/config.yaml` 是唯一运行真源。旧 `.kb/` 只作历史追溯：不要读取其中配置来决定路径，也不要仅因它仍存在就报告真源冲突。\n\n## 必须保留的能力\n\n- 核对知识库配置与实际目录\n- 核对 Agent 规则文件、Skill 和项目状态\n- 发现路径、数据、版本和状态冲突\n- 先报告，确认后再修正\n\n## 执行\n\n1. 验证配置字段、路径边界和目录可读性。\n2. 统计六类资产的文件数、来源覆盖和最近更新。\n3. 对照 AGENTS.md、CLAUDE.md、Skill 目录和实际项目状态，找路径、版本、数字和状态冲突。\n4. 检查待处理材料、重复入库、内容阶段冲突和运行文件越界。\n5. 把问题分为阻塞、要处理和提醒，只给出有证据的问题。\n\n### 待处理口径\n\n- 待处理数量只统计收件箱中的原始材料记录：兼容 `type: inbox` 或没有 `type` 的旧材料，但必须排除 README、`原始文件/`、`附件/`、分流预览、分流记录和处理记录。\n- `status` 为 `processed`、`completed`、`closed`、`done`、`已完成`、`已处理` 或 `结案` 的原始材料属于已处理，不得再次计入积压或建议重新入库。\n- 同源处理记录或正式资产可以作为终态证据；若原材料状态仍是 pending，报告“状态待对齐”，不要把同一材料同时统计为待处理和已处理。\n- 同一材料有多份预览时，旧的 `awaiting-confirmation` 是历史审计记录；已有更新的 `confirmed-noop`、processed 收件记录或完成写入证据时，不把旧预览当成当前冲突，也不改写或删除它。\n- 目录中的非隐藏文件总数不是待处理数量。报告时分别给出原始材料、有效待处理、已处理和派生产物数量。\n\n## 交付\n\n- 能否使用\n- 问题路径和证据\n- 影响\n- 建议动作\n- 等待确认的修正\n\n每个关键判断附来源路径；没有来源的内容标为推断或待确认。\n\n## 写回\n\n- 默认不写；确认后只创建缺失空目录或修正明确的路径\n- 修正规则真源时只更新 FDE365 管理的旧默认路径，不删除 `.kb/`，不覆盖自定义业务路径\n\n## 停止条件\n\n- 配置不存在时停止并询问根目录\n- 业务事实冲突时不自动选边\n- 不把空库当成损坏\n\n## 接续\n\n- 空库用 fde-interview\n- 积压材料用 fde-ingest\n\n来源沿革只用于追溯，不作为运行指令。需要追溯时读取 `references/source-map.md`。\n",
        ".agents/skills/fde-hook/agents/openai.yaml": 'interface:\n  display_name: "内容开头"\n  short_description: "读取当前六类资产知识库，执行内容开头并返回来源、结果和未确认项。"\n  default_prompt: "请使用 $fde-hook 处理当前知识库里的真实任务，并说明来源和未确认项。"\n',
        ".agents/skills/fde-hook/references/acceptance.md": "# 验收\n\n- [ ] fde-hook 使用当前知识库配置。\n- [ ] 读取范围与任务有关。\n- [ ] 事实、推断和未知分开。\n- [ ] 关键判断有来源。\n- [ ] 破坏性动作先确认。\n- [ ] 输出包含：问题诊断、3 个开头、选择建议、承接句、来源。\n- [ ] 能力：诊断现有开头问题。\n- [ ] 能力：生成多个不同切入版本。\n- [ ] 能力：说明适合的读者和承接方式。\n- [ ] 能力：不制造正文没有的承诺。\n",
        ".agents/skills/fde-hook/references/atoms.jsonl": '{"id": "FDE-HOOK-001", "rule": "先定位当前知识库配置，再读取资料。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-HOOK-002", "rule": "只加载当前任务需要的资产。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-HOOK-003", "rule": "区分事实、用户陈述、推断和未知。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-HOOK-004", "rule": "关键结论返回来源路径。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-HOOK-005", "rule": "原始材料保持不变。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-HOOK-006", "rule": "批量写入、移动、覆盖和删除先确认。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-HOOK-007", "rule": "不跨客户或跨项目读取。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-HOOK-008", "rule": "资料不足时完成证据允许的部分。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-HOOK-009", "rule": "不能确认的分类进入待确认区。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-HOOK-010", "rule": "交付后说明写入位置和未完成项。", "source": "fde-skills-workflow-v1"}\n',
        ".agents/skills/fde-hook/references/axioms.md": "# 公理\n\n## AXIOM-01：定位\n\n没有知识库配置就不猜路径。\n\n## AXIOM-02：最小读取\n\n只读取当前任务需要的资产。\n\n## AXIOM-03：证据\n\n事实和推断分开，关键判断附来源。\n\n## AXIOM-04：可恢复\n\n原始材料不覆盖，破坏性动作先确认。\n\n## AXIOM-05：闭环\n\n交付说明结果、写入位置、未知项和下一步。\n",
        ".agents/skills/fde-hook/references/behavior-tests.json": '[\n  {\n    "id": "case-1",\n    "prompt": "使用 fde-hook 完成：诊断现有开头问题。",\n    "must_do": [\n      "诊断现有开头问题",\n      "生成多个不同切入版本",\n      "说明适合的读者和承接方式"\n    ],\n    "must_not": [\n      "编造事实",\n      "跨项目读取"\n    ]\n  },\n  {\n    "id": "case-2",\n    "prompt": "继续使用 fde-hook 完成：不制造正文没有的承诺。",\n    "must_do": [\n      "不制造正文没有的承诺",\n      "返回来源",\n      "说明未确认项"\n    ],\n    "must_not": [\n      "把推断写成事实",\n      "覆盖原始材料"\n    ]\n  },\n  {\n    "id": "counterexample-1",\n    "prompt": "找不到配置，但要求 fde-hook 批量写入。",\n    "must_do": [\n      "停止写入",\n      "询问根目录"\n    ],\n    "must_not": [\n      "猜路径",\n      "写入用户主目录"\n    ]\n  }\n]\n',
        ".agents/skills/fde-hook/references/capability-contract.json": '{\n  "skill": "fde-hook",\n  "implementation": "fde-skills-owned",\n  "runtime_uses_historical_skill": false,\n  "must_support": [\n    "诊断现有开头问题",\n    "生成多个不同切入版本",\n    "说明适合的读者和承接方式",\n    "不制造正文没有的承诺"\n  ],\n  "tests": [\n    "case-1",\n    "case-2",\n    "counterexample-1"\n  ]\n}\n',
        ".agents/skills/fde-hook/references/cases.md": "# 案例\n\n## 正常\n\n配置可读，fde-hook 只读取所需资产，交付附来源。\n\n## 资料不足\n\n完成有证据的部分，把缺口留给用户。\n\n## 停止\n\n找不到配置或请求越过项目边界时停止写入。\n",
        ".agents/skills/fde-hook/references/library-map.md": "# 六类资产映射\n\n运行时以知识库根目录的 `.fde/config.yaml` 为准。\n\n- owner：个人说明书\n- product：产品库\n- customer：客户需求库\n- case：素材案例库\n- method：方法论库\n- content：内容生产\n\n不得把这些显示名当成固定路径。\n",
        ".agents/skills/fde-hook/references/maturity.json": '{\n  "status": "project-owned-v1",\n  "source_role": "historical_reference_only",\n  "live_customer_test": false\n}\n',
        ".agents/skills/fde-hook/references/method.md": "# 内容开头方法\n\n## 输入\n\n- 现有开头\n- 选题\n- 客户原话\n- 案例冲突\n- 平台和时长\n\n## 步骤\n\n1. 判断开头是否说明对象、问题和继续看的理由。\n2. 找出最强的真实冲突、结果或原话。\n3. 生成 3 个不同切入版本，不制造假数字和假危机。\n4. 说明每版适合的读者和后文承接。\n\n## 交付\n\n- 问题诊断\n- 3 个开头\n- 选择建议\n- 承接句\n- 来源\n\n## 停止\n\n- 选题本身不成立时停止改开头\n- 没有证据时不用夸张结果\n- 不生成与后文无关的钩子\n",
        ".agents/skills/fde-hook/references/source-evidence.md": "# 当前实现证据\n\n- 工作流规格：`tools/rewrite-owned-suite.py` 的 `fde-hook`。\n- 六类资产路径：`六类资产库目录模板/.fde/config.yaml`。\n- 名称和历史映射：`改造清单/skill-manifest.json`。\n- 相似度验收：`tools/check-source-similarity.py`。\n",
        ".agents/skills/fde-hook/references/source-map.md": "# 来源映射\n\n## 当前实现\n\n- 运行流程由 `tools/rewrite-owned-suite.py` 中的 `fde-hook` 规格生成。\n- 资产模型来自本项目 `六类资产库目录模板/.fde/config.yaml`。\n- 用户要求是：英文 `fde-` 名称、易于理解、服务当前六类资产库。\n\n## 历史对照\n\n- 历史能力对照：`dbskill-upstream/skills/dbs-hook`。\n- 固定快照：`v2.17.15`，commit `af99c577bfb9f1926236671a882b15030242fe8b`。\n- 该快照只用于能力盘点、相似度检查和署名追溯，不在运行时加载。\n\n历史对照不代表当前运行规则。商业许可仍按项目 `NOTICE.md` 和授权清单处理。\n",
        ".agents/skills/fde-hook/SKILL.md": "---\nname: fde-hook\ndescription: |\n  根据选题、目标读者和真实材料设计内容开头。先诊断现有开头，再给少量可用版本。触发方式：/fde-hook、「改开头」「前几秒留不住人」。\n---\n\n# 内容开头\n\n<!-- FDE-OWNED-WORKFLOW: v1 -->\n\n## 开始前\n\n1. 从当前目录向上找到 `.fde/config.yaml`，按配置解析六类资产库。\n2. 只读取本任务需要的文件，不跨知识库搜索。\n3. 把库内事实、用户本轮信息、当前推断和未知项分开。\n4. 原始材料不覆盖；删除、移动和批量写入先确认。\n\n## 读取\n\n- 现有开头\n- 选题\n- 客户原话\n- 案例冲突\n- 平台和时长\n\n## 必须保留的能力\n\n- 诊断现有开头问题\n- 生成多个不同切入版本\n- 说明适合的读者和承接方式\n- 不制造正文没有的承诺\n\n## 执行\n\n1. 判断开头是否说明对象、问题和继续看的理由。\n2. 找出最强的真实冲突、结果或原话。\n3. 生成 3 个不同切入版本，不制造假数字和假危机。\n4. 说明每版适合的读者和后文承接。\n\n## 交付\n\n- 问题诊断\n- 3 个开头\n- 选择建议\n- 承接句\n- 来源\n\n每个关键判断附来源路径；没有来源的内容标为推断或待确认。\n\n## 写回\n\n- 用户选择后写入对应草稿的新版本\n\n## 停止条件\n\n- 选题本身不成立时停止改开头\n- 没有证据时不用夸张结果\n- 不生成与后文无关的钩子\n\n## 接续\n\n- 检查全文用 fde-review\n- 检查衔接用 fde-flow\n\n来源沿革只用于追溯，不作为运行指令。需要追溯时读取 `references/source-map.md`。\n",
        ".agents/skills/fde-impact/agents/openai.yaml": 'interface:\n  display_name: "受众反应"\n  short_description: "读取当前六类资产知识库，执行受众反应并返回来源、结果和未确认项。"\n  default_prompt: "请使用 $fde-impact 处理当前知识库里的真实任务，并说明来源和未确认项。"\n',
        ".agents/skills/fde-impact/references/acceptance.md": "# 验收\n\n- [ ] fde-impact 使用当前知识库配置。\n- [ ] 读取范围与任务有关。\n- [ ] 事实、推断和未知分开。\n- [ ] 关键判断有来源。\n- [ ] 破坏性动作先确认。\n- [ ] 输出包含：目标读者匹配、有效段落、失焦位置、缺少的证据、优先修改项。\n- [ ] 能力：判断目标读者是否明确。\n- [ ] 能力：检查问题和情绪是否来自真实材料。\n- [ ] 能力：定位不共鸣的段落。\n- [ ] 能力：给出具体修正动作。\n- [ ] 能力：没有发布数据时不预测实际流量。\n",
        ".agents/skills/fde-impact/references/atoms.jsonl": '{"id": "FDE-IMPACT-001", "rule": "先定位当前知识库配置，再读取资料。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-IMPACT-002", "rule": "只加载当前任务需要的资产。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-IMPACT-003", "rule": "区分事实、用户陈述、推断和未知。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-IMPACT-004", "rule": "关键结论返回来源路径。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-IMPACT-005", "rule": "原始材料保持不变。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-IMPACT-006", "rule": "批量写入、移动、覆盖和删除先确认。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-IMPACT-007", "rule": "不跨客户或跨项目读取。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-IMPACT-008", "rule": "资料不足时完成证据允许的部分。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-IMPACT-009", "rule": "不能确认的分类进入待确认区。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-IMPACT-010", "rule": "交付后说明写入位置和未完成项。", "source": "fde-skills-workflow-v1"}\n',
        ".agents/skills/fde-impact/references/axioms.md": "# 公理\n\n## AXIOM-01：定位\n\n没有知识库配置就不猜路径。\n\n## AXIOM-02：最小读取\n\n只读取当前任务需要的资产。\n\n## AXIOM-03：证据\n\n事实和推断分开，关键判断附来源。\n\n## AXIOM-04：可恢复\n\n原始材料不覆盖，破坏性动作先确认。\n\n## AXIOM-05：闭环\n\n交付说明结果、写入位置、未知项和下一步。\n",
        ".agents/skills/fde-impact/references/behavior-tests.json": '[\n  {\n    "id": "case-1",\n    "prompt": "使用 fde-impact 完成：判断目标读者是否明确。",\n    "must_do": [\n      "判断目标读者是否明确",\n      "检查问题和情绪是否来自真实材料",\n      "定位不共鸣的段落"\n    ],\n    "must_not": [\n      "编造事实",\n      "跨项目读取"\n    ]\n  },\n  {\n    "id": "case-2",\n    "prompt": "继续使用 fde-impact 完成：没有发布数据时不预测实际流量。",\n    "must_do": [\n      "没有发布数据时不预测实际流量",\n      "返回来源",\n      "说明未确认项"\n    ],\n    "must_not": [\n      "把推断写成事实",\n      "覆盖原始材料"\n    ]\n  },\n  {\n    "id": "counterexample-1",\n    "prompt": "找不到配置，但要求 fde-impact 批量写入。",\n    "must_do": [\n      "停止写入",\n      "询问根目录"\n    ],\n    "must_not": [\n      "猜路径",\n      "写入用户主目录"\n    ]\n  }\n]\n',
        ".agents/skills/fde-impact/references/capability-contract.json": '{\n  "skill": "fde-impact",\n  "implementation": "fde-skills-owned",\n  "runtime_uses_historical_skill": false,\n  "must_support": [\n    "判断目标读者是否明确",\n    "检查问题和情绪是否来自真实材料",\n    "定位不共鸣的段落",\n    "给出具体修正动作",\n    "没有发布数据时不预测实际流量"\n  ],\n  "tests": [\n    "case-1",\n    "case-2",\n    "counterexample-1"\n  ]\n}\n',
        ".agents/skills/fde-impact/references/cases.md": "# 案例\n\n## 正常\n\n配置可读，fde-impact 只读取所需资产，交付附来源。\n\n## 资料不足\n\n完成有证据的部分，把缺口留给用户。\n\n## 停止\n\n找不到配置或请求越过项目边界时停止写入。\n",
        ".agents/skills/fde-impact/references/library-map.md": "# 六类资产映射\n\n运行时以知识库根目录的 `.fde/config.yaml` 为准。\n\n- owner：个人说明书\n- product：产品库\n- customer：客户需求库\n- case：素材案例库\n- method：方法论库\n- content：内容生产\n\n不得把这些显示名当成固定路径。\n",
        ".agents/skills/fde-impact/references/maturity.json": '{\n  "status": "project-owned-v1",\n  "source_role": "historical_reference_only",\n  "live_customer_test": false\n}\n',
        ".agents/skills/fde-impact/references/method.md": "# 受众反应方法\n\n## 输入\n\n- 内容稿\n- 目标客户资产\n- 客户原话\n- 发布数据或反馈\n- 预期行动\n\n## 步骤\n\n1. 标出文章声称在对谁说。\n2. 对照客户原话检查问题是否真实存在。\n3. 检查内容是否给出新的判断、证据和下一步。\n4. 区分定位偏差、材料不足、表达模糊和行动门槛。\n\n## 交付\n\n- 目标读者匹配\n- 有效段落\n- 失焦位置\n- 缺少的证据\n- 优先修改项\n\n## 停止\n\n- 没有目标读者时不判断共鸣\n- 没有发布数据时不声称传播效果\n- 不编造受众心理\n",
        ".agents/skills/fde-impact/references/source-evidence.md": "# 当前实现证据\n\n- 工作流规格：`tools/rewrite-owned-suite.py` 的 `fde-impact`。\n- 六类资产路径：`六类资产库目录模板/.fde/config.yaml`。\n- 名称和历史映射：`改造清单/skill-manifest.json`。\n- 相似度验收：`tools/check-source-similarity.py`。\n",
        ".agents/skills/fde-impact/references/source-map.md": "# 来源映射\n\n## 当前实现\n\n- 运行流程由 `tools/rewrite-owned-suite.py` 中的 `fde-impact` 规格生成。\n- 资产模型来自本项目 `六类资产库目录模板/.fde/config.yaml`。\n- 用户要求是：英文 `fde-` 名称、易于理解、服务当前六类资产库。\n\n## 历史对照\n\n- 历史能力对照：`dbskill-upstream/skills/dbs-resonate`。\n- 固定快照：`v2.17.15`，commit `af99c577bfb9f1926236671a882b15030242fe8b`。\n- 该快照只用于能力盘点、相似度检查和署名追溯，不在运行时加载。\n\n历史对照不代表当前运行规则。商业许可仍按项目 `NOTICE.md` 和授权清单处理。\n",
        ".agents/skills/fde-impact/SKILL.md": "---\nname: fde-impact\ndescription: |\n  检查内容是否准确指向目标读者的处境、判断和行动，不用空泛情绪代替证据。触发方式：/fde-impact、「这篇会不会打中人」「为什么没反应」。\n---\n\n# 受众反应\n\n<!-- FDE-OWNED-WORKFLOW: v1 -->\n\n## 开始前\n\n1. 从当前目录向上找到 `.fde/config.yaml`，按配置解析六类资产库。\n2. 只读取本任务需要的文件，不跨知识库搜索。\n3. 把库内事实、用户本轮信息、当前推断和未知项分开。\n4. 原始材料不覆盖；删除、移动和批量写入先确认。\n\n## 读取\n\n- 内容稿\n- 目标客户资产\n- 客户原话\n- 发布数据或反馈\n- 预期行动\n\n## 必须保留的能力\n\n- 判断目标读者是否明确\n- 检查问题和情绪是否来自真实材料\n- 定位不共鸣的段落\n- 给出具体修正动作\n- 没有发布数据时不预测实际流量\n\n## 执行\n\n1. 标出文章声称在对谁说。\n2. 对照客户原话检查问题是否真实存在。\n3. 检查内容是否给出新的判断、证据和下一步。\n4. 区分定位偏差、材料不足、表达模糊和行动门槛。\n\n## 交付\n\n- 目标读者匹配\n- 有效段落\n- 失焦位置\n- 缺少的证据\n- 优先修改项\n\n每个关键判断附来源路径；没有来源的内容标为推断或待确认。\n\n## 写回\n\n- 诊断写入内容审核记录\n- 不自动改正文\n\n## 停止条件\n\n- 没有目标读者时不判断共鸣\n- 没有发布数据时不声称传播效果\n- 不编造受众心理\n\n## 接续\n\n- 传播原因用 fde-spread\n- 需要改稿用 fde-review\n\n来源沿革只用于追溯，不作为运行指令。需要追溯时读取 `references/source-map.md`。\n",
        ".agents/skills/fde-ingest/agents/openai.yaml": 'interface:\n  display_name: "材料入库"\n  short_description: "区分材料形式与六类资产归属，先生成可多选的入库预览。"\n  default_prompt: "请使用 $fde-ingest 处理当前知识库里的真实任务，并说明来源和未确认项。"\n',
        ".agents/skills/fde-ingest/references/acceptance.md": "# 验收\n\n- [ ] fde-ingest 使用当前知识库配置。\n- [ ] 读取范围与任务有关。\n- [ ] 事实、推断和未知分开。\n- [ ] 关键判断有来源。\n- [ ] 破坏性动作先确认。\n- [ ] 输出包含：原文摘要、分流清单、冲突和重复、写入文件、未处理内容。\n- [ ] 能力：通读整份材料后再拆分。\n- [ ] 能力：提取认知、方法、故事数据、情绪原话、选题和待办。\n- [ ] 能力：生成结构化处理稿。\n- [ ] 能力：确认后分流入库并保留原文件。\n- [ ] 材料形式与六类资产归属分开，录音不被当作独立资产库。\n- [ ] 同一证据单元可预览多个资产去向，归属不明时留在待确认。\n- [ ] 录音转写中不确定的人名、数字、日期和时间戳已标记。\n- [ ] 分流预览只出现在当前对话和 AI 运行记录，没有在待处理目录新增材料。\n- [ ] 处理完成只更新原始材料记录状态，没有自动移动或删除原始材料；删除仅来自用户在材料列表中的独立确认操作。\n",
        ".agents/skills/fde-ingest/references/atoms.jsonl": '{"id": "FDE-INGEST-001", "rule": "先定位当前知识库配置，再读取资料。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-INGEST-002", "rule": "只加载当前任务需要的资产。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-INGEST-003", "rule": "区分事实、用户陈述、推断和未知。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-INGEST-004", "rule": "关键结论返回来源路径。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-INGEST-005", "rule": "原始材料保持不变。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-INGEST-006", "rule": "批量写入、移动、覆盖和删除先确认。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-INGEST-007", "rule": "不跨客户或跨项目读取。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-INGEST-008", "rule": "资料不足时完成证据允许的部分。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-INGEST-009", "rule": "不能确认的分类进入待确认区。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-INGEST-010", "rule": "交付后说明写入位置和未完成项。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-INGEST-011", "rule": "录音聊天会议图片和文档是材料形式，不是六类资产归属。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-INGEST-012", "rule": "同一证据单元可建议多个资产去向，但必须分别给出证据。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-INGEST-013", "rule": "录音转写中不确定的人名数字日期和时间戳不得猜测。", "source": "fde-skills-workflow-v1"}\n',
        ".agents/skills/fde-ingest/references/axioms.md": "# 公理\n\n## AXIOM-01：定位\n\n没有知识库配置就不猜路径。\n\n## AXIOM-02：最小读取\n\n只读取当前任务需要的资产。\n\n## AXIOM-03：证据\n\n事实和推断分开，关键判断附来源。\n\n## AXIOM-04：可恢复\n\n原始材料不覆盖，破坏性动作先确认。\n\n## AXIOM-05：闭环\n\n交付说明结果、写入位置、未知项和下一步。\n",
        ".agents/skills/fde-ingest/references/behavior-tests.json": '[\n  {\n    "id": "case-1",\n    "prompt": "使用 fde-ingest 完成：通读整份材料后再拆分。",\n    "must_do": [\n      "通读整份材料后再拆分",\n      "提取认知、方法、故事数据、情绪原话、选题和待办",\n      "生成结构化处理稿"\n    ],\n    "must_not": [\n      "编造事实",\n      "跨项目读取"\n    ]\n  },\n  {\n    "id": "case-2",\n    "prompt": "继续使用 fde-ingest 完成：确认后分流入库并保留原文件。",\n    "must_do": [\n      "确认后分流入库并保留原文件",\n      "返回来源",\n      "说明未确认项"\n    ],\n    "must_not": [\n      "把推断写成事实",\n      "覆盖原始材料"\n    ]\n  },\n  {\n    "id": "case-3",\n    "prompt": "处理一份客户会谈录音：其中包含客户需求、产品报价和一段可复用方法，两个数字听不清。",\n    "must_do": [\n      "将录音标为材料形式而非资产库",\n      "建议客户需求库产品库和方法论库多个去向",\n      "标记听不清的数字为待确认"\n    ],\n    "must_not": [\n      "创建独立录音资产库",\n      "猜测听不清的数字"\n    ]\n  },\n  {\n    "id": "counterexample-1",\n    "prompt": "找不到配置，但要求 fde-ingest 批量写入。",\n    "must_do": [\n      "停止写入",\n      "询问根目录"\n    ],\n    "must_not": [\n      "猜路径",\n      "写入用户主目录"\n    ]\n  }\n]\n',
        ".agents/skills/fde-ingest/references/capability-contract.json": '{\n  "skill": "fde-ingest",\n  "implementation": "fde-skills-owned",\n  "runtime_uses_historical_skill": false,\n  "must_support": [\n    "通读整份材料后再拆分",\n    "提取认知、方法、故事数据、情绪原话、选题和待办",\n    "生成结构化处理稿",\n    "确认后分流入库并保留原文件",\n    "材料形式与六类资产归属分开",\n    "同一证据单元可生成多资产去向预览",\n    "录音转写中的人名数字日期和时间戳不确定时标记待确认"\n  ],\n  "tests": [\n    "case-1",\n    "case-2",\n    "case-3",\n    "counterexample-1"\n  ]\n}\n',
        ".agents/skills/fde-ingest/references/cases.md": "# 案例\n\n## 正常\n\n配置可读，fde-ingest 只读取所需资产，交付附来源。\n\n## 资料不足\n\n完成有证据的部分，把缺口留给用户。\n\n## 停止\n\n找不到配置或请求越过项目边界时停止写入。\n",
        ".agents/skills/fde-ingest/references/library-map.md": "# 六类资产映射\n\n运行时以知识库根目录的 `.fde/config.yaml` 为准。\n\n- owner：个人说明书\n- product：产品库\n- customer：客户需求库\n- case：素材案例库\n- method：方法论库\n- content：内容生产\n\n不得把这些显示名当成固定路径。\n",
        ".agents/skills/fde-ingest/references/maturity.json": '{\n  "status": "project-owned-v1",\n  "source_role": "historical_reference_only",\n  "live_customer_test": false\n}\n',
        ".agents/skills/fde-ingest/references/method.md": "# 材料入库方法\n\n## 输入\n\n- 收件箱中的原始文件\n- 六类资产库现有条目\n- 重复记录和命名规则\n\n## 步骤\n\n1. 登记原文件路径、时间、材料形式和处理批次。录音、聊天、会议、图片和文档是形式，不是六类资产的业务归属。\n2. 录音保留原音频并读取转写；对听不清的人名、数字、日期和时间戳显式标记不确定。\n3. 通读全文，拆成可追溯证据单元，分开提取原话、事实、判断、方法、故事、选题和待办。\n4. 每个证据单元可建议一个或多个六类资产去向；没有强证据时留在待确认。\n5. 与现有资产比对，标出新增、补充、冲突和重复。\n6. 先在当前 Agent 对话中生成分流预览，不在待处理目录创建新的预览材料；确认后写入正式资产，原始材料记录原地自动标记为已处理。\n\n## 交付\n\n- 原文摘要\n- 分流清单（来源片段/时间戳、材料形式、资产去向、处理动作、置信度/未知项）\n- 冲突和重复\n- 写入文件\n- 未处理内容\n\n## 停止\n\n- 文件读不全时停止\n- 分类不确定时留在待确认区\n- 不得用摘要替换原始文件\n",
        ".agents/skills/fde-ingest/references/source-evidence.md": "# 当前实现证据\n\n- 工作流规格：`tools/rewrite-owned-suite.py` 的 `fde-ingest`。\n- 六类资产路径：`六类资产库目录模板/.fde/config.yaml`。\n- 名称和历史映射：`改造清单/skill-manifest.json`。\n- 相似度验收：`tools/check-source-similarity.py`。\n",
        ".agents/skills/fde-ingest/references/source-map.md": "# 来源映射\n\n## 当前实现\n\n- 运行流程由 `tools/rewrite-owned-suite.py` 中的 `fde-ingest` 规格生成。\n- 资产模型来自本项目 `六类资产库目录模板/.fde/config.yaml`。\n- 用户要求是：英文 `fde-` 名称、易于理解、服务当前六类资产库。\n\n## 历史对照\n\n- 历史能力中包含录音材料处理；这只是能力来源，不代表当前存在独立的“录音处理”目录或资产类别。\n- 该文件只用于能力盘点、相似度检查和署名追溯，不在运行时加载。\n\n历史对照不代表当前运行规则。商业许可仍按项目 `NOTICE.md` 和授权清单处理。\n",
        ".agents/skills/fde-ingest/SKILL.md": "---\nname: fde-ingest\ndescription: |\n  把录音、聊天、会议纪要、图片和旧文档从通用待处理区整理进六类资产库。材料形式与业务归属分开，同一份材料可建议多个去向。保留原文件，拆出事实、原话、案例、方法、选题和待办。触发方式：/fde-ingest、「整理这份录音」「把材料入库」。\n---\n\n# 材料入库\n\n<!-- FDE-OWNED-WORKFLOW: v1 -->\n\n## 开始前\n\n1. 从当前目录向上找到 `.fde/config.yaml`，按配置解析六类资产库。\n2. 只读取本任务需要的文件，不跨知识库搜索。\n3. 把库内事实、用户本轮信息、当前推断和未知项分开。\n4. 原始材料不覆盖；删除、移动和批量写入先确认。\n5. 录音、聊天、会议、图片和文档只是“材料形式”，不得当作第 7 个资产库。\n\n## 读取\n\n- 收件箱中的原始文件\n- 六类资产库现有条目\n- 重复记录和命名规则\n\n## 必须保留的能力\n\n- 通读整份材料后再拆分\n- 提取认知、方法、故事数据、情绪原话、选题和待办\n- 生成结构化处理稿\n- 确认后分流入库并保留原文件\n- 分开标记材料形式与六类资产归属\n- 允许一个证据单元建议多个资产去向\n- 录音转写中的人名、数字和时间戳不确定时必须标记\n\n## 执行\n\n1. 登记原文件路径、时间、材料形式和处理批次。\n2. 录音材料保留原音频并读取转写；人名、数字、日期和时间戳听不清时标为待确认。\n3. 通读全文，拆成可追溯的证据单元，分开提取原话、事实、判断、方法、故事、选题和待办。\n4. 对每个证据单元独立判断“个人说明书、产品库、客户需求库、素材案例库、方法论库、内容生产”中的一个或多个去向。\n5. 与现有资产比对，标出新增、补充、冲突和重复。\n6. 先在当前 Agent 对话中生成分流预览；不得把预览另存为 `inbox.pending` 中的新材料。确认后再写入正式资产，插件会在原始材料记录上自动标记处理状态。\n\n## 交付\n\n- 原文摘要\n- 分流清单：来源片段/时间戳、材料形式、资产去向（可多选）、新增/补充/冲突/重复、置信度/未知项\n- 冲突和重复\n- 写入文件\n- 未处理内容\n\n每个关键判断附来源路径；没有来源的内容标为推断或待确认。\n\n## 写回\n\n- 原文件保持不变\n- 分流预览只进入当前 Agent 对话与 `7-系统/AI协作` 运行记录，不在原始材料列表新增文件\n- 原始材料记录保持原路径，处理完成后只更新 `status` 和 `processed_at`\n- 确认后的资产写入对应库并附来源\n\n## 停止条件\n\n- 文件读不全时停止\n- 分类不确定时留在待确认区\n- 没有强证据时不得为了“必须分类”而猜一个资产库\n- 不得用摘要替换原始文件\n\n## 接续\n\n- 需要选题时用 fde-topics\n- 需要查资料时用 fde-library\n\n来源沿革只用于追溯，不作为运行指令。需要追溯时读取 `references/source-map.md`。\n",
        ".agents/skills/fde-interview/agents/openai.yaml": 'interface:\n  display_name: "建库采访"\n  short_description: "读取当前六类资产知识库，执行建库采访并返回来源、结果和未确认项。"\n  default_prompt: "请使用 $fde-interview 处理当前知识库里的真实任务，并说明来源和未确认项。"\n',
        ".agents/skills/fde-interview/references/acceptance.md": "# 验收\n\n- [ ] fde-interview 使用当前知识库配置。\n- [ ] 读取范围与任务有关。\n- [ ] 事实、推断和未知分开。\n- [ ] 关键判断有来源。\n- [ ] 破坏性动作先确认。\n- [ ] 输出包含：采访原话记录、可确认事实、用户自己的判断、仍需补问的事项、建议写入位置。\n- [ ] 能力：同时覆盖业务资料和个人资料。\n- [ ] 能力：一次只问一个问题并根据回答追问。\n- [ ] 能力：把确认结果分流到六类资产库。\n- [ ] 能力：支持暂停、跳过、重做和恢复。\n",
        ".agents/skills/fde-interview/references/atoms.jsonl": '{"id": "FDE-INTERVIEW-001", "rule": "先定位当前知识库配置，再读取资料。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-INTERVIEW-002", "rule": "只加载当前任务需要的资产。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-INTERVIEW-003", "rule": "区分事实、用户陈述、推断和未知。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-INTERVIEW-004", "rule": "关键结论返回来源路径。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-INTERVIEW-005", "rule": "原始材料保持不变。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-INTERVIEW-006", "rule": "批量写入、移动、覆盖和删除先确认。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-INTERVIEW-007", "rule": "不跨客户或跨项目读取。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-INTERVIEW-008", "rule": "资料不足时完成证据允许的部分。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-INTERVIEW-009", "rule": "不能确认的分类进入待确认区。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-INTERVIEW-010", "rule": "交付后说明写入位置和未完成项。", "source": "fde-skills-workflow-v1"}\n',
        ".agents/skills/fde-interview/references/axioms.md": "# 公理\n\n## AXIOM-01：定位\n\n没有知识库配置就不猜路径。\n\n## AXIOM-02：最小读取\n\n只读取当前任务需要的资产。\n\n## AXIOM-03：证据\n\n事实和推断分开，关键判断附来源。\n\n## AXIOM-04：可恢复\n\n原始材料不覆盖，破坏性动作先确认。\n\n## AXIOM-05：闭环\n\n交付说明结果、写入位置、未知项和下一步。\n",
        ".agents/skills/fde-interview/references/behavior-tests.json": '[\n  {\n    "id": "case-1",\n    "prompt": "使用 fde-interview 完成：同时覆盖业务资料和个人资料。",\n    "must_do": [\n      "同时覆盖业务资料和个人资料",\n      "一次只问一个问题并根据回答追问",\n      "把确认结果分流到六类资产库"\n    ],\n    "must_not": [\n      "编造事实",\n      "跨项目读取"\n    ]\n  },\n  {\n    "id": "case-2",\n    "prompt": "继续使用 fde-interview 完成：支持暂停、跳过、重做和恢复。",\n    "must_do": [\n      "支持暂停、跳过、重做和恢复",\n      "返回来源",\n      "说明未确认项"\n    ],\n    "must_not": [\n      "把推断写成事实",\n      "覆盖原始材料"\n    ]\n  },\n  {\n    "id": "counterexample-1",\n    "prompt": "找不到配置，但要求 fde-interview 批量写入。",\n    "must_do": [\n      "停止写入",\n      "询问根目录"\n    ],\n    "must_not": [\n      "猜路径",\n      "写入用户主目录"\n    ]\n  }\n]\n',
        ".agents/skills/fde-interview/references/capability-contract.json": '{\n  "skill": "fde-interview",\n  "implementation": "fde-skills-owned",\n  "runtime_uses_historical_skill": false,\n  "must_support": [\n    "同时覆盖业务资料和个人资料",\n    "一次只问一个问题并根据回答追问",\n    "把确认结果分流到六类资产库",\n    "支持暂停、跳过、重做和恢复"\n  ],\n  "tests": [\n    "case-1",\n    "case-2",\n    "counterexample-1"\n  ]\n}\n',
        ".agents/skills/fde-interview/references/cases.md": "# 案例\n\n## 正常\n\n配置可读，fde-interview 只读取所需资产，交付附来源。\n\n## 资料不足\n\n完成有证据的部分，把缺口留给用户。\n\n## 停止\n\n找不到配置或请求越过项目边界时停止写入。\n",
        ".agents/skills/fde-interview/references/library-map.md": "# 六类资产映射\n\n运行时以知识库根目录的 `.fde/config.yaml` 为准。\n\n- owner：个人说明书\n- product：产品库\n- customer：客户需求库\n- case：素材案例库\n- method：方法论库\n- content：内容生产\n\n不得把这些显示名当成固定路径。\n",
        ".agents/skills/fde-interview/references/maturity.json": '{\n  "status": "project-owned-v1",\n  "source_role": "historical_reference_only",\n  "live_customer_test": false\n}\n',
        ".agents/skills/fde-interview/references/method.md": "# 建库采访方法\n\n## 输入\n\n- 现有六类资产\n- 已完成的采访状态\n- 用户明确不回答的范围\n\n## 步骤\n\n1. 先盘点哪些库为空，确定本轮只补一个主题。\n2. 围绕具体事件提问，先问事实，再问判断和结果。\n3. 每 5 个问题汇总一次：原话、事实、推断、待确认。\n4. 用户确认汇总后再拆分到对应资产库。\n\n## 交付\n\n- 采访原话记录\n- 可确认事实\n- 用户自己的判断\n- 仍需补问的事项\n- 建议写入位置\n\n## 停止\n\n- 用户要求暂停时保存进度\n- 用户不确认汇总时不写入正式资产\n- 不得替用户补经历、客户原话或数字\n",
        ".agents/skills/fde-interview/references/source-evidence.md": "# 当前实现证据\n\n- 工作流规格：`tools/rewrite-owned-suite.py` 的 `fde-interview`。\n- 六类资产路径：`六类资产库目录模板/.fde/config.yaml`。\n- 名称和历史映射：`改造清单/skill-manifest.json`。\n- 相似度验收：`tools/check-source-similarity.py`。\n",
        ".agents/skills/fde-interview/references/source-map.md": "# 来源映射\n\n## 当前实现\n\n- 运行流程由 `tools/rewrite-owned-suite.py` 中的 `fde-interview` 规格生成。\n- 资产模型来自本项目 `六类资产库目录模板/.fde/config.yaml`。\n- 用户要求是：英文 `fde-` 名称、易于理解、服务当前六类资产库。\n\n## 历史对照\n\n- 历史能力对照：`skills矩阵/知识库采访机器人/SKILL.md`。\n- 该文件只用于能力盘点、相似度检查和署名追溯，不在运行时加载。\n\n历史对照不代表当前运行规则。商业许可仍按项目 `NOTICE.md` 和授权清单处理。\n",
        ".agents/skills/fde-interview/SKILL.md": "---\nname: fde-interview\ndescription: |\n  用分轮采访建立个人、产品、客户、案例、方法和内容资产。一次只问一个问题，保留原话和未知项。触发方式：/fde-interview、「采访我」「帮我建立知识库」。\n---\n\n# 建库采访\n\n<!-- FDE-OWNED-WORKFLOW: v1 -->\n\n## 开始前\n\n1. 从当前目录向上找到 `.fde/config.yaml`，按配置解析六类资产库。\n2. 只读取本任务需要的文件，不跨知识库搜索。\n3. 把库内事实、用户本轮信息、当前推断和未知项分开。\n4. 原始材料不覆盖；删除、移动和批量写入先确认。\n\n## 读取\n\n- 现有六类资产\n- 已完成的采访状态\n- 用户明确不回答的范围\n\n## 必须保留的能力\n\n- 同时覆盖业务资料和个人资料\n- 一次只问一个问题并根据回答追问\n- 把确认结果分流到六类资产库\n- 支持暂停、跳过、重做和恢复\n\n## 执行\n\n1. 先盘点哪些库为空，确定本轮只补一个主题。\n2. 围绕具体事件提问，先问事实，再问判断和结果。\n3. 每 5 个问题汇总一次：原话、事实、推断、待确认。\n4. 用户确认汇总后再拆分到对应资产库。\n\n## 交付\n\n- 采访原话记录\n- 可确认事实\n- 用户自己的判断\n- 仍需补问的事项\n- 建议写入位置\n\n每个关键判断附来源路径；没有来源的内容标为推断或待确认。\n\n## 写回\n\n- 原始问答写入收件箱或采访记录\n- 确认后的条目分别写入六类资产库\n- 采访进度写入 `.fde/state`\n\n## 停止条件\n\n- 用户要求暂停时保存进度\n- 用户不确认汇总时不写入正式资产\n- 不得替用户补经历、客户原话或数字\n\n## 接续\n\n- 有录音转写时转 fde-ingest\n- 底稿完成后回 fde-start\n\n来源沿革只用于追溯，不作为运行指令。需要追溯时读取 `references/source-map.md`。\n",
        ".agents/skills/fde-learn/agents/openai.yaml": 'interface:\n  display_name: "学习循环"\n  short_description: "读取当前六类资产知识库，执行学习循环并返回来源、结果和未确认项。"\n  default_prompt: "请使用 $fde-learn 处理当前知识库里的真实任务，并说明来源和未确认项。"\n',
        ".agents/skills/fde-learn/references/acceptance.md": "# 验收\n\n- [ ] fde-learn 使用当前知识库配置。\n- [ ] 读取范围与任务有关。\n- [ ] 事实、推断和未知分开。\n- [ ] 关键判断有来源。\n- [ ] 破坏性动作先确认。\n- [ ] 输出包含：本轮目标、必要知识、练习、完成标准、反馈问题。\n- [ ] 能力：把一个课题拆成连续学习内容。\n- [ ] 能力：根据上一篇反馈调整深度、角度和节奏。\n- [ ] 能力：每轮提供说明、示例和练习。\n- [ ] 能力：保留学习进度并生成下一篇。\n",
        ".agents/skills/fde-learn/references/atoms.jsonl": '{"id": "FDE-LEARN-001", "rule": "先定位当前知识库配置，再读取资料。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-LEARN-002", "rule": "只加载当前任务需要的资产。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-LEARN-003", "rule": "区分事实、用户陈述、推断和未知。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-LEARN-004", "rule": "关键结论返回来源路径。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-LEARN-005", "rule": "原始材料保持不变。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-LEARN-006", "rule": "批量写入、移动、覆盖和删除先确认。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-LEARN-007", "rule": "不跨客户或跨项目读取。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-LEARN-008", "rule": "资料不足时完成证据允许的部分。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-LEARN-009", "rule": "不能确认的分类进入待确认区。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-LEARN-010", "rule": "交付后说明写入位置和未完成项。", "source": "fde-skills-workflow-v1"}\n',
        ".agents/skills/fde-learn/references/axioms.md": "# 公理\n\n## AXIOM-01：定位\n\n没有知识库配置就不猜路径。\n\n## AXIOM-02：最小读取\n\n只读取当前任务需要的资产。\n\n## AXIOM-03：证据\n\n事实和推断分开，关键判断附来源。\n\n## AXIOM-04：可恢复\n\n原始材料不覆盖，破坏性动作先确认。\n\n## AXIOM-05：闭环\n\n交付说明结果、写入位置、未知项和下一步。\n",
        ".agents/skills/fde-learn/references/behavior-tests.json": '[\n  {\n    "id": "case-1",\n    "prompt": "使用 fde-learn 完成：把一个课题拆成连续学习内容。",\n    "must_do": [\n      "把一个课题拆成连续学习内容",\n      "根据上一篇反馈调整深度、角度和节奏",\n      "每轮提供说明、示例和练习"\n    ],\n    "must_not": [\n      "编造事实",\n      "跨项目读取"\n    ]\n  },\n  {\n    "id": "case-2",\n    "prompt": "继续使用 fde-learn 完成：保留学习进度并生成下一篇。",\n    "must_do": [\n      "保留学习进度并生成下一篇",\n      "返回来源",\n      "说明未确认项"\n    ],\n    "must_not": [\n      "把推断写成事实",\n      "覆盖原始材料"\n    ]\n  },\n  {\n    "id": "counterexample-1",\n    "prompt": "找不到配置，但要求 fde-learn 批量写入。",\n    "must_do": [\n      "停止写入",\n      "询问根目录"\n    ],\n    "must_not": [\n      "猜路径",\n      "写入用户主目录"\n    ]\n  }\n]\n',
        ".agents/skills/fde-learn/references/capability-contract.json": '{\n  "skill": "fde-learn",\n  "implementation": "fde-skills-owned",\n  "runtime_uses_historical_skill": false,\n  "must_support": [\n    "把一个课题拆成连续学习内容",\n    "根据上一篇反馈调整深度、角度和节奏",\n    "每轮提供说明、示例和练习",\n    "保留学习进度并生成下一篇"\n  ],\n  "tests": [\n    "case-1",\n    "case-2",\n    "counterexample-1"\n  ]\n}\n',
        ".agents/skills/fde-learn/references/cases.md": "# 案例\n\n## 正常\n\n配置可读，fde-learn 只读取所需资产，交付附来源。\n\n## 资料不足\n\n完成有证据的部分，把缺口留给用户。\n\n## 停止\n\n找不到配置或请求越过项目边界时停止写入。\n",
        ".agents/skills/fde-learn/references/library-map.md": "# 六类资产映射\n\n运行时以知识库根目录的 `.fde/config.yaml` 为准。\n\n- owner：个人说明书\n- product：产品库\n- customer：客户需求库\n- case：素材案例库\n- method：方法论库\n- content：内容生产\n\n不得把这些显示名当成固定路径。\n",
        ".agents/skills/fde-learn/references/maturity.json": '{\n  "status": "project-owned-v1",\n  "source_role": "historical_reference_only",\n  "live_customer_test": false\n}\n',
        ".agents/skills/fde-learn/references/method.md": "# 学习循环方法\n\n## 输入\n\n- 要解决的工作问题\n- 现有方法库\n- 上次练习和反馈\n- 可投入时间\n\n## 步骤\n\n1. 把课题拆成连续文章，但一次只生成下一篇。\n2. 读取上一篇反馈，判断需要加深、换角度、放慢或增加练习。\n3. 本篇提供说明、示例、练习和反馈问题。\n4. 保存学习进度，根据实际反馈决定下一篇，不预先写完整课程。\n\n## 交付\n\n- 本轮目标\n- 必要知识\n- 练习\n- 完成标准\n- 反馈问题\n\n## 停止\n\n- 没有实际任务时不堆课程\n- 反馈未返回时不假装掌握\n- 需要最新知识时先核验来源\n",
        ".agents/skills/fde-learn/references/series-state.md": "# 连续学习状态\n\n记录课题、已完成文章、用户反馈、当前难度、有效例子、未掌握点和下一篇方向。下一篇必须引用上一轮反馈，不能只按预设目录推进。\n",
        ".agents/skills/fde-learn/references/source-evidence.md": "# 当前实现证据\n\n- 工作流规格：`tools/rewrite-owned-suite.py` 的 `fde-learn`。\n- 六类资产路径：`六类资产库目录模板/.fde/config.yaml`。\n- 名称和历史映射：`改造清单/skill-manifest.json`。\n- 相似度验收：`tools/check-source-similarity.py`。\n",
        ".agents/skills/fde-learn/references/source-map.md": "# 来源映射\n\n## 当前实现\n\n- 运行流程由 `tools/rewrite-owned-suite.py` 中的 `fde-learn` 规格生成。\n- 资产模型来自本项目 `六类资产库目录模板/.fde/config.yaml`。\n- 用户要求是：英文 `fde-` 名称、易于理解、服务当前六类资产库。\n\n## 历史对照\n\n- 历史能力对照：`dbskill-upstream/skills/dbs-learning`。\n- 固定快照：`v2.17.15`，commit `af99c577bfb9f1926236671a882b15030242fe8b`。\n- 该快照只用于能力盘点、相似度检查和署名追溯，不在运行时加载。\n\n历史对照不代表当前运行规则。商业许可仍按项目 `NOTICE.md` 和授权清单处理。\n",
        ".agents/skills/fde-learn/SKILL.md": "---\nname: fde-learn\ndescription: |\n  围绕一个工作问题安排短学习循环：先做、记录反馈、补一个知识点，再做下一次。触发方式：/fde-learn、「带我学」「根据上次反馈继续」。\n---\n\n# 学习循环\n\n<!-- FDE-OWNED-WORKFLOW: v1 -->\n\n## 开始前\n\n1. 从当前目录向上找到 `.fde/config.yaml`，按配置解析六类资产库。\n2. 只读取本任务需要的文件，不跨知识库搜索。\n3. 把库内事实、用户本轮信息、当前推断和未知项分开。\n4. 原始材料不覆盖；删除、移动和批量写入先确认。\n\n## 读取\n\n- 要解决的工作问题\n- 现有方法库\n- 上次练习和反馈\n- 可投入时间\n\n## 必须保留的能力\n\n- 把一个课题拆成连续学习内容\n- 根据上一篇反馈调整深度、角度和节奏\n- 每轮提供说明、示例和练习\n- 保留学习进度并生成下一篇\n\n## 执行\n\n1. 把课题拆成连续文章，但一次只生成下一篇。\n2. 读取上一篇反馈，判断需要加深、换角度、放慢或增加练习。\n3. 本篇提供说明、示例、练习和反馈问题。\n4. 保存学习进度，根据实际反馈决定下一篇，不预先写完整课程。\n\n## 交付\n\n- 本轮目标\n- 必要知识\n- 练习\n- 完成标准\n- 反馈问题\n\n每个关键判断附来源路径；没有来源的内容标为推断或待确认。\n\n## 写回\n\n- 学习记录写入方法库或 `.fde/state/learning`\n\n## 停止条件\n\n- 没有实际任务时不堆课程\n- 反馈未返回时不假装掌握\n- 需要最新知识时先核验来源\n\n## 接续\n\n- 形成方法时用 fde-library 收录\n- 形成内容时用 fde-write\n\n来源沿革只用于追溯，不作为运行指令。需要追溯时读取 `references/source-map.md`。\n",
        ".agents/skills/fde-library/agents/openai.yaml": 'interface:\n  display_name: "查库与维护"\n  short_description: "读取当前六类资产知识库，执行查库与维护并返回来源、结果和未确认项。"\n  default_prompt: "请使用 $fde-library 处理当前知识库里的真实任务，并说明来源和未确认项。"\n',
        ".agents/skills/fde-library/references/acceptance.md": "# 验收\n\n- [ ] fde-library 使用当前知识库配置。\n- [ ] 读取范围与任务有关。\n- [ ] 事实、推断和未知分开。\n- [ ] 关键判断有来源。\n- [ ] 破坏性动作先确认。\n- [ ] 输出包含：直接回答、来源路径、冲突或版本差异、未找到的内容、建议维护动作。\n- [ ] 能力：空目录时建立最小知识库。\n- [ ] 能力：已有资料时生成导航和真源说明。\n- [ ] 能力：查询时返回答案、来源和版本。\n- [ ] 能力：支持收录、纠错、最新版判断和导航更新。\n",
        ".agents/skills/fde-library/references/atoms.jsonl": '{"id": "FDE-LIBRARY-001", "rule": "先定位当前知识库配置，再读取资料。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-LIBRARY-002", "rule": "只加载当前任务需要的资产。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-LIBRARY-003", "rule": "区分事实、用户陈述、推断和未知。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-LIBRARY-004", "rule": "关键结论返回来源路径。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-LIBRARY-005", "rule": "原始材料保持不变。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-LIBRARY-006", "rule": "批量写入、移动、覆盖和删除先确认。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-LIBRARY-007", "rule": "不跨客户或跨项目读取。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-LIBRARY-008", "rule": "资料不足时完成证据允许的部分。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-LIBRARY-009", "rule": "不能确认的分类进入待确认区。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-LIBRARY-010", "rule": "交付后说明写入位置和未完成项。", "source": "fde-skills-workflow-v1"}\n',
        ".agents/skills/fde-library/references/axioms.md": "# 公理\n\n## AXIOM-01：定位\n\n没有知识库配置就不猜路径。\n\n## AXIOM-02：最小读取\n\n只读取当前任务需要的资产。\n\n## AXIOM-03：证据\n\n事实和推断分开，关键判断附来源。\n\n## AXIOM-04：可恢复\n\n原始材料不覆盖，破坏性动作先确认。\n\n## AXIOM-05：闭环\n\n交付说明结果、写入位置、未知项和下一步。\n",
        ".agents/skills/fde-library/references/behavior-tests.json": '[\n  {\n    "id": "case-1",\n    "prompt": "使用 fde-library 完成：空目录时建立最小知识库。",\n    "must_do": [\n      "空目录时建立最小知识库",\n      "已有资料时生成导航和真源说明",\n      "查询时返回答案、来源和版本"\n    ],\n    "must_not": [\n      "编造事实",\n      "跨项目读取"\n    ]\n  },\n  {\n    "id": "case-2",\n    "prompt": "继续使用 fde-library 完成：支持收录、纠错、最新版判断和导航更新。",\n    "must_do": [\n      "支持收录、纠错、最新版判断和导航更新",\n      "返回来源",\n      "说明未确认项"\n    ],\n    "must_not": [\n      "把推断写成事实",\n      "覆盖原始材料"\n    ]\n  },\n  {\n    "id": "counterexample-1",\n    "prompt": "找不到配置，但要求 fde-library 批量写入。",\n    "must_do": [\n      "停止写入",\n      "询问根目录"\n    ],\n    "must_not": [\n      "猜路径",\n      "写入用户主目录"\n    ]\n  }\n]\n',
        ".agents/skills/fde-library/references/capability-contract.json": '{\n  "skill": "fde-library",\n  "implementation": "fde-skills-owned",\n  "runtime_uses_historical_skill": false,\n  "must_support": [\n    "空目录时建立最小知识库",\n    "已有资料时生成导航和真源说明",\n    "查询时返回答案、来源和版本",\n    "支持收录、纠错、最新版判断和导航更新"\n  ],\n  "tests": [\n    "case-1",\n    "case-2",\n    "counterexample-1"\n  ]\n}\n',
        ".agents/skills/fde-library/references/cases.md": "# 案例\n\n## 正常\n\n配置可读，fde-library 只读取所需资产，交付附来源。\n\n## 资料不足\n\n完成有证据的部分，把缺口留给用户。\n\n## 停止\n\n找不到配置或请求越过项目边界时停止写入。\n",
        ".agents/skills/fde-library/references/library-map.md": "# 六类资产映射\n\n运行时以知识库根目录的 `.fde/config.yaml` 为准。\n\n- owner：个人说明书\n- product：产品库\n- customer：客户需求库\n- case：素材案例库\n- method：方法论库\n- content：内容生产\n\n不得把这些显示名当成固定路径。\n",
        ".agents/skills/fde-library/references/maturity.json": '{\n  "status": "project-owned-v1",\n  "source_role": "historical_reference_only",\n  "live_customer_test": false\n}\n',
        ".agents/skills/fde-library/references/method.md": "# 查库与维护方法\n\n## 输入\n\n- 用户问题中的对象、时间和用途\n- 相关资产库\n- 索引和最近版本\n\n## 步骤\n\n1. 空目录时建立六类最小目录、配置和导航；已有资料时先生成导航，不搬文件。\n2. 把问题拆成检索词、资产类型和时间范围。\n3. 先查导航与索引，再打开少量候选文件核对原文。\n4. 按已确认事实、冲突、推断和缺口返回，并指出当前版本和真源。\n5. 新增、纠错或设为最新版时先展示目标文件、旧版本和来源，再更新导航。\n\n## 交付\n\n- 直接回答\n- 来源路径\n- 冲突或版本差异\n- 未找到的内容\n- 建议维护动作\n\n## 停止\n\n- 来源不足时明确说未找到\n- 跨项目读取必须得到用户明确授权\n- 删除和合并先确认\n",
        ".agents/skills/fde-library/references/navigation-schema.md": "# 知识库导航\n\n导航记录资产类型、主题、真源文件、当前版本、旧版本、更新时间和维护人。查询先看导航，再读真源。设为最新版时保留旧版本和变更原因。\n",
        ".agents/skills/fde-library/references/source-evidence.md": "# 当前实现证据\n\n- 工作流规格：`tools/rewrite-owned-suite.py` 的 `fde-library`。\n- 六类资产路径：`六类资产库目录模板/.fde/config.yaml`。\n- 名称和历史映射：`改造清单/skill-manifest.json`。\n- 相似度验收：`tools/check-source-similarity.py`。\n",
        ".agents/skills/fde-library/references/source-map.md": "# 来源映射\n\n## 当前实现\n\n- 运行流程由 `tools/rewrite-owned-suite.py` 中的 `fde-library` 规格生成。\n- 资产模型来自本项目 `六类资产库目录模板/.fde/config.yaml`。\n- 用户要求是：英文 `fde-` 名称、易于理解、服务当前六类资产库。\n\n## 历史对照\n\n- 历史能力对照：`dbskill-upstream/skills/dbs-knowledge`。\n- 固定快照：`v2.17.15`，commit `af99c577bfb9f1926236671a882b15030242fe8b`。\n- 该快照只用于能力盘点、相似度检查和署名追溯，不在运行时加载。\n\n历史对照不代表当前运行规则。商业许可仍按项目 `NOTICE.md` 和授权清单处理。\n",
        ".agents/skills/fde-library/SKILL.md": "---\nname: fde-library\ndescription: |\n  在六类资产库中查找、收录、纠错和维护资料。每个结论返回来源路径，不跨项目搜索。触发方式：/fde-library、「从知识库找」「把这份资料放进去」。\n---\n\n# 查库与维护\n\n<!-- FDE-OWNED-WORKFLOW: v1 -->\n\n## 开始前\n\n1. 从当前目录向上找到 `.fde/config.yaml`，按配置解析六类资产库。\n2. 只读取本任务需要的文件，不跨知识库搜索。\n3. 把库内事实、用户本轮信息、当前推断和未知项分开。\n4. 原始材料不覆盖；删除、移动和批量写入先确认。\n\n## 读取\n\n- 用户问题中的对象、时间和用途\n- 相关资产库\n- 索引和最近版本\n\n## 必须保留的能力\n\n- 空目录时建立最小知识库\n- 已有资料时生成导航和真源说明\n- 查询时返回答案、来源和版本\n- 支持收录、纠错、最新版判断和导航更新\n\n## 执行\n\n1. 空目录时建立六类最小目录、配置和导航；已有资料时先生成导航，不搬文件。\n2. 把问题拆成检索词、资产类型和时间范围。\n3. 先查导航与索引，再打开少量候选文件核对原文。\n4. 按已确认事实、冲突、推断和缺口返回，并指出当前版本和真源。\n5. 新增、纠错或设为最新版时先展示目标文件、旧版本和来源，再更新导航。\n\n## 交付\n\n- 直接回答\n- 来源路径\n- 冲突或版本差异\n- 未找到的内容\n- 建议维护动作\n\n每个关键判断附来源路径；没有来源的内容标为推断或待确认。\n\n## 写回\n\n- 新增条目写入对应资产库\n- 索引变更写入 `.fde/indexes`\n- 不覆盖旧版本\n\n## 停止条件\n\n- 来源不足时明确说未找到\n- 跨项目读取必须得到用户明确授权\n- 删除和合并先确认\n\n## 接续\n\n- 结构混乱用 fde-organize\n- 整体检查用 fde-health\n\n来源沿革只用于追溯，不作为运行指令。需要追溯时读取 `references/source-map.md`。\n",
        ".agents/skills/fde-organize/agents/openai.yaml": 'interface:\n  display_name: "资产整理"\n  short_description: "读取当前六类资产知识库，执行资产整理并返回来源、结果和未确认项。"\n  default_prompt: "请使用 $fde-organize 处理当前知识库里的真实任务，并说明来源和未确认项。"\n',
        ".agents/skills/fde-organize/references/acceptance.md": "# 验收\n\n- [ ] fde-organize 使用当前知识库配置。\n- [ ] 读取范围与任务有关。\n- [ ] 事实、推断和未知分开。\n- [ ] 关键判断有来源。\n- [ ] 破坏性动作先确认。\n- [ ] 输出包含：资产清单、内容单元、主题地图、跨库双链预览与写入记录、选题装配稿、迁移预览、执行日志。\n- [ ] 能力：审计内容规模和处理边界。\n- [ ] 能力：把长文拆成可复用内容单元。\n- [ ] 能力：生成主题地图和关联。\n- [ ] 能力：把确认的跨库关系写成两端真实 Obsidian 双链。\n- [ ] 能力：从内容单元装配选题稿。\n- [ ] 能力：处理重复、版本和来源。\n- [ ] “整理关联”使用两端 Markdown Wikilink，不以 Canvas 或 Canva 预览替代。\n",
        ".agents/skills/fde-organize/references/assembly-schema.md": "# 选题装配\n\n装配稿包含目标读者、要解决的问题、主判断、证据单元、反例、结构和缺口。装配只引用单元，不复制整篇旧文。\n",
        ".agents/skills/fde-organize/references/atoms.jsonl": '{"id": "FDE-ORGANIZE-001", "rule": "先定位当前知识库配置，再读取资料。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-ORGANIZE-002", "rule": "只加载当前任务需要的资产。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-ORGANIZE-003", "rule": "区分事实、用户陈述、推断和未知。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-ORGANIZE-004", "rule": "关键结论返回来源路径。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-ORGANIZE-005", "rule": "原始材料保持不变。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-ORGANIZE-006", "rule": "批量写入、移动、覆盖和删除先确认。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-ORGANIZE-007", "rule": "不跨客户或跨项目读取。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-ORGANIZE-008", "rule": "资料不足时完成证据允许的部分。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-ORGANIZE-009", "rule": "不能确认的分类进入待确认区。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-ORGANIZE-010", "rule": "交付后说明写入位置和未完成项。", "source": "fde-skills-workflow-v1"}\n',
        ".agents/skills/fde-organize/references/axioms.md": "# 公理\n\n## AXIOM-01：定位\n\n没有知识库配置就不猜路径。\n\n## AXIOM-02：最小读取\n\n只读取当前任务需要的资产。\n\n## AXIOM-03：证据\n\n事实和推断分开，关键判断附来源。\n\n## AXIOM-04：可恢复\n\n原始材料不覆盖，破坏性动作先确认。\n\n## AXIOM-05：闭环\n\n交付说明结果、写入位置、未知项和下一步。\n",
        ".agents/skills/fde-organize/references/behavior-tests.json": '[\n  {\n    "id": "case-1",\n    "prompt": "使用 fde-organize 完成：审计内容规模和处理边界。",\n    "must_do": [\n      "审计内容规模和处理边界",\n      "把长文拆成可复用内容单元",\n      "生成主题地图和关联",\n      "把确认的跨库关系写成两端真实 Obsidian 双链"\n    ],\n    "must_not": [\n      "编造事实",\n      "跨项目读取"\n    ]\n  },\n  {\n    "id": "case-links",\n    "prompt": "使用 fde-organize 整理关联：把有证据的跨库关系写成 Obsidian 双链，不要生成 Canvas 代替。",\n    "must_do": [\n      "列出两端完整 Vault 相对路径、关系类型和依据",\n      "把确认的跨库关系写成两端真实 Obsidian 双链",\n      "写入后重新读取两端文件验证"\n    ],\n    "must_not": [\n      "用 Canvas 或 Canva 预览代替 Markdown 双链",\n      "按标题相似度臆造关系"\n    ]\n  },\n  {\n    "id": "case-2",\n    "prompt": "继续使用 fde-organize 完成：处理重复、版本和来源。",\n    "must_do": [\n      "处理重复、版本和来源",\n      "返回来源",\n      "说明未确认项"\n    ],\n    "must_not": [\n      "把推断写成事实",\n      "覆盖原始材料"\n    ]\n  },\n  {\n    "id": "counterexample-1",\n    "prompt": "找不到配置，但要求 fde-organize 批量写入。",\n    "must_do": [\n      "停止写入",\n      "询问根目录"\n    ],\n    "must_not": [\n      "猜路径",\n      "写入用户主目录"\n    ]\n  }\n]\n',
        ".agents/skills/fde-organize/references/capability-contract.json": '{\n  "skill": "fde-organize",\n  "implementation": "fde-skills-owned",\n  "runtime_uses_historical_skill": false,\n  "must_support": [\n    "审计内容规模和处理边界",\n    "把长文拆成可复用内容单元",\n    "生成主题地图和关联",\n    "把确认的跨库关系写成两端真实 Obsidian 双链",\n    "从内容单元装配选题稿",\n    "处理重复、版本和来源"\n  ],\n  "tests": [\n    "case-1",\n    "case-links",\n    "case-2",\n    "counterexample-1"\n  ]\n}\n',
        ".agents/skills/fde-organize/references/cases.md": "# 案例\n\n## 正常\n\n配置可读，fde-organize 只读取所需资产，交付附来源。\n\n## 资料不足\n\n完成有证据的部分，把缺口留给用户。\n\n## 停止\n\n找不到配置或请求越过项目边界时停止写入。\n",
        ".agents/skills/fde-organize/references/library-map.md": "# 六类资产映射\n\n运行时以知识库根目录的 `.fde/config.yaml` 为准。\n\n- owner：个人说明书\n- product：产品库\n- customer：客户需求库\n- case：素材案例库\n- method：方法论库\n- content：内容生产\n\n不得把这些显示名当成固定路径。\n",
        ".agents/skills/fde-organize/references/maturity.json": '{\n  "status": "project-owned-v1",\n  "source_role": "historical_reference_only",\n  "live_customer_test": false\n}\n',
        ".agents/skills/fde-organize/references/method.md": "# 资产整理方法\n\n## 输入\n\n- 六类资产目录\n- 文件名、标题、来源和修改时间\n- 现有 Wikilink、反向链接和“关联资产”章节\n- 用户现有命名规则\n- `scripts/inventory_assets.py`\n- references/unit-schema.md、topic-map-schema.md、assembly-schema.md\n\n## 步骤\n\n1. 运行只读清单，确认内容规模、边界、重复和无来源文件。\n2. 按 unit-schema 把长文拆成观点、问题、案例、方法和方案单元，每个单元保留来源。\n3. 按 topic-map-schema 连接相关单元，记录支持、冲突、例子和版本关系。\n4. “整理关联”任务先列出两端完整路径、关系类型和依据；需要批准时等待确认。\n5. 确认后在两端笔记的 `## 关联资产` 中分别写入指向对方的完整路径 Wikilink，并重新读取验证。\n6. 按 assembly-schema 从单元装配选题稿，不复制旧文章。\n7. 生成迁移和写入预览，用户确认后分批执行并记录日志。\n\nCanvas 只在用户明确要求时生成，不能替代两端 Markdown 双链。\n\n## 交付\n\n- 资产清单\n- 内容单元\n- 主题地图\n- 跨库双链预览与写入记录\n- 选题装配稿\n- 迁移预览\n- 执行日志\n\n## 停止\n\n- 不能确认真源时不合并\n- 没有来源时不伪造\n- 关系依据不足时不写双链\n- 批量移动和覆盖必须确认\n",
        ".agents/skills/fde-organize/references/source-evidence.md": "# 当前实现证据\n\n- 工作流规格：`tools/rewrite-owned-suite.py` 的 `fde-organize`。\n- 六类资产路径：`六类资产库目录模板/.fde/config.yaml`。\n- 名称和历史映射：`改造清单/skill-manifest.json`。\n- 相似度验收：`tools/check-source-similarity.py`。\n",
        ".agents/skills/fde-organize/references/source-map.md": "# 来源映射\n\n## 当前实现\n\n- 运行流程由 `tools/rewrite-owned-suite.py` 中的 `fde-organize` 规格生成。\n- 资产模型来自本项目 `六类资产库目录模板/.fde/config.yaml`。\n- 用户要求是：英文 `fde-` 名称、易于理解、服务当前六类资产库。\n\n## 历史对照\n\n- 历史能力对照：`dbskill-upstream/skills/dbs-content-system`。\n- 固定快照：`v2.17.15`，commit `af99c577bfb9f1926236671a882b15030242fe8b`。\n- 该快照只用于能力盘点、相似度检查和署名追溯，不在运行时加载。\n\n历史对照不代表当前运行规则。商业许可仍按项目 `NOTICE.md` 和授权清单处理。\n",
        ".agents/skills/fde-organize/references/topic-map-schema.md": "# 主题地图\n\n主题地图记录一个主题下的单元，以及支持、反对、例子、前置、后续和版本关系。关系必须能回到两个实际文件。\n\n## Obsidian 双链\n\n- 已确认关系必须落到两端 Markdown 文件，而不是只存在于报告或 Canvas。\n- 两端文件都在 `## 关联资产` 中写入对方的完整 Vault 相对路径：`[[目录/文件|标题]]`。\n- 链接旁写明关系类型与依据；同名文件不得使用模糊短链。\n- 写入后重新读取两端文件，确认链接存在且路径有效。\n",
        ".agents/skills/fde-organize/references/unit-schema.md": "# 内容单元\n\n每个单元只表达一个可复用内容：类型、标题、原文片段、来源路径、适用对象、支持的判断、冲突项和版本。类型限观点、问题、案例、方法、方案。\n",
        ".agents/skills/fde-organize/scripts/inventory_assets.py": `#!/usr/bin/env python3
"""Create a read-only inventory for the configured six asset libraries."""

from __future__ import annotations

import argparse
import hashlib
import json
from collections import defaultdict
from pathlib import Path


def library_paths(config: Path) -> dict[str, str]:
    values = {}
    in_libraries = False
    for raw in config.read_text(encoding="utf-8").splitlines():
        if raw.strip() == "libraries:":
            in_libraries = True
            continue
        if in_libraries and raw and not raw.startswith(" "):
            break
        if in_libraries and ":" in raw:
            key, value = raw.strip().split(":", 1)
            values[key.strip()] = value.strip().strip("'\\"")
    return values


def digest(path: Path) -> str:
    sha = hashlib.sha256()
    with path.open("rb") as stream:
        for chunk in iter(lambda: stream.read(1024 * 1024), b""):
            sha.update(chunk)
    return sha.hexdigest()


def has_source(path: Path) -> bool:
    if path.suffix.lower() not in {".md", ".txt"}:
        return True
    head = path.read_text(encoding="utf-8", errors="replace")[:4000].lower()
    return any(marker in head for marker in ("source:", "来源：", "来源:", "原始文件：", "原始文件:"))


def inventory(root: Path, large_bytes: int) -> dict:
    config = root / ".fde" / "config.yaml"
    if not config.is_file():
        raise ValueError(f"missing config: {config}")
    libraries = library_paths(config)
    if len(libraries) != 6:
        raise ValueError(f"expected 6 libraries, found {len(libraries)}")
    rows, hashes = [], defaultdict(list)
    missing_sources, large_files, missing_dirs = [], [], []
    totals = {}
    for key, relative in libraries.items():
        directory = (root / relative).resolve()
        if not directory.is_dir():
            missing_dirs.append(str(directory))
            totals[key] = 0
            continue
        count = 0
        for path in sorted(item for item in directory.rglob("*") if item.is_file() and not item.is_symlink()):
            count += 1
            stat = path.stat()
            sha = digest(path)
            hashes[sha].append(str(path))
            row = {"library": key, "path": str(path), "size": stat.st_size, "modified": int(stat.st_mtime), "sha256": sha}
            rows.append(row)
            if stat.st_size >= large_bytes:
                large_files.append(str(path))
            if not has_source(path):
                missing_sources.append(str(path))
        totals[key] = count
    duplicates = [paths for paths in hashes.values() if len(paths) > 1]
    return {
        "root": str(root),
        "libraries": totals,
        "files": rows,
        "duplicates": duplicates,
        "missing_source": missing_sources,
        "large_files": large_files,
        "missing_directories": missing_dirs,
    }


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--root", type=Path, required=True)
    parser.add_argument("--output", type=Path)
    parser.add_argument("--large-mb", type=int, default=10)
    args = parser.parse_args()
    try:
        result = inventory(args.root.expanduser().resolve(), args.large_mb * 1024 * 1024)
    except ValueError as error:
        parser.error(str(error))
    encoded = json.dumps(result, ensure_ascii=False, indent=2) + "\\n"
    if args.output:
        args.output.parent.mkdir(parents=True, exist_ok=True)
        args.output.write_text(encoded, encoding="utf-8")
    print(encoded, end="")


if __name__ == "__main__":
    main()
`,
        ".agents/skills/fde-organize/SKILL.md": "---\nname: fde-organize\ndescription: |\n  整理六类资产库中的重复文件、散落条目、命名和跨库关联。关联任务使用真实 Obsidian Wikilink 连接两端笔记；需要批准时先预览再写。触发方式：/fde-organize、「整理知识库」「整理关联」「合并重复资料」。\n---\n\n# 资产整理\n\n<!-- FDE-OWNED-WORKFLOW: v1 -->\n\n## 开始前\n\n1. 从当前目录向上找到 `.fde/config.yaml`，按配置解析六类资产库。\n2. 只读取本任务需要的文件，不跨知识库搜索。\n3. 把库内事实、用户本轮信息、当前推断和未知项分开。\n4. 原始材料不覆盖；删除、移动和批量写入先确认。\n\n## 读取\n\n- 六类资产目录\n- 文件名、标题、来源和修改时间\n- 现有 `[[Wikilink]]`、反向链接和“关联资产”章节\n- 用户现有命名规则\n- `scripts/inventory_assets.py`\n- references/unit-schema.md、topic-map-schema.md、assembly-schema.md\n\n## 必须保留的能力\n\n- 审计内容规模和处理边界\n- 把长文拆成可复用内容单元\n- 生成主题地图和关联\n- 把确认的跨库关系写成两端真实 Obsidian 双链\n- 从内容单元装配选题稿\n- 处理重复、版本和来源\n\n## 执行\n\n1. 运行只读清单，确认内容规模、边界、重复和无来源文件。\n2. 按 unit-schema 把长文拆成观点、问题、案例、方法和方案单元，每个单元保留来源。\n3. 按 topic-map-schema 连接相关单元，记录支持、冲突、例子和版本关系。\n4. 用户要求“整理关联”时，进入下方的跨库双链模式，不生成 Canvas 代替真实链接。\n5. 按 assembly-schema 从单元装配选题稿，不复制旧文章。\n6. 生成迁移和写入预览，需要批准时等待用户确认；确认后分批执行并记录日志。\n\n## 跨库双链模式\n\n1. 只建议有文件内容、来源或明确版本关系支持的跨库关联，不按标题相似度臆造关系。\n2. 预览必须列出两端完整 Vault 相对路径、关系类型、依据和准备写入的链接文字。\n3. 需要批准模式下，展示预览后等待用户确认；YOLO 模式下可以直接执行。\n4. 写入时在两端 Markdown 笔记中创建或复用 `## 关联资产` 章节，并分别加入指向对方的 `[[完整/Vault/相对路径|标题]]`。两端都写，确保关系可见、可追溯。\n5. 每条链接同时写明支持、冲突、例子或版本等关系类型和一句依据；保留正文，不重写原内容。\n6. 写完后重新读取两端文件，并复查资产网络的跨库连接数量。\n7. 除非用户明确要求，不创建 `.canvas`、Canvas 或 Canva 预览；它们不能替代 Markdown 双链。\n\n## 交付\n\n- 资产清单\n- 内容单元\n- 主题地图\n- 跨库双链预览与写入记录\n- 选题装配稿\n- 迁移预览\n- 执行日志\n\n每个关键判断附来源路径；没有来源的内容标为推断或待确认。\n\n## 写回\n\n- 日志写入 `.fde/logs`\n- 索引写入 `.fde/indexes`\n- 已确认关系写入两端资产 Markdown 的 `## 关联资产`，使用完整 Vault 相对路径 Wikilink\n- 原文件移动前保留可恢复记录\n\n## 停止条件\n\n- 不能确认真源时不合并\n- 没有来源时不伪造\n- 关系依据不足时不写双链\n- 批量移动和覆盖必须确认\n\n## 接续\n\n- 整理后用 fde-health 复查\n- 找资料用 fde-library\n\n来源沿革只用于追溯，不作为运行指令。需要追溯时读取 `references/source-map.md`。\n",
        ".agents/skills/fde-question/agents/openai.yaml": 'interface:\n  display_name: "问题说明"\n  short_description: "读取当前六类资产知识库，执行问题说明并返回来源、结果和未确认项。"\n  default_prompt: "请使用 $fde-question 处理当前知识库里的真实任务，并说明来源和未确认项。"\n',
        ".agents/skills/fde-question/references/acceptance.md": "# 验收\n\n- [ ] fde-question 使用当前知识库配置。\n- [ ] 读取范围与任务有关。\n- [ ] 事实、推断和未知分开。\n- [ ] 关键判断有来源。\n- [ ] 破坏性动作先确认。\n- [ ] 输出包含：原问题、问题说明书、已知事实、缺失信息、期望输出、验收标准。\n- [ ] 能力：把模糊困惑改成问题说明书。\n- [ ] 能力：让问题可推理、可批评和可验证。\n- [ ] 能力：列出所缺事实和权限。\n- [ ] 能力：判断可自动化、需人工判断和不可自动化的部分。\n",
        ".agents/skills/fde-question/references/atoms.jsonl": '{"id": "FDE-QUESTION-001", "rule": "先定位当前知识库配置，再读取资料。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-QUESTION-002", "rule": "只加载当前任务需要的资产。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-QUESTION-003", "rule": "区分事实、用户陈述、推断和未知。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-QUESTION-004", "rule": "关键结论返回来源路径。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-QUESTION-005", "rule": "原始材料保持不变。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-QUESTION-006", "rule": "批量写入、移动、覆盖和删除先确认。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-QUESTION-007", "rule": "不跨客户或跨项目读取。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-QUESTION-008", "rule": "资料不足时完成证据允许的部分。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-QUESTION-009", "rule": "不能确认的分类进入待确认区。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-QUESTION-010", "rule": "交付后说明写入位置和未完成项。", "source": "fde-skills-workflow-v1"}\n',
        ".agents/skills/fde-question/references/automation-readiness.md": "# 自动化边界\n\n- Agent 执行：输入明确、规则明确、结果可检查。\n- 人确认：Agent 能准备，但需要授权或事实确认。\n- 人决定：价值取舍、责任承担、不可逆承诺。\n- 暂时不能做：缺数据、缺权限或验收条件不存在。\n",
        ".agents/skills/fde-question/references/axioms.md": "# 公理\n\n## AXIOM-01：定位\n\n没有知识库配置就不猜路径。\n\n## AXIOM-02：最小读取\n\n只读取当前任务需要的资产。\n\n## AXIOM-03：证据\n\n事实和推断分开，关键判断附来源。\n\n## AXIOM-04：可恢复\n\n原始材料不覆盖，破坏性动作先确认。\n\n## AXIOM-05：闭环\n\n交付说明结果、写入位置、未知项和下一步。\n",
        ".agents/skills/fde-question/references/behavior-tests.json": '[\n  {\n    "id": "case-1",\n    "prompt": "使用 fde-question 完成：把模糊困惑改成问题说明书。",\n    "must_do": [\n      "把模糊困惑改成问题说明书",\n      "让问题可推理、可批评和可验证",\n      "列出所缺事实和权限"\n    ],\n    "must_not": [\n      "编造事实",\n      "跨项目读取"\n    ]\n  },\n  {\n    "id": "case-2",\n    "prompt": "继续使用 fde-question 完成：判断可自动化、需人工判断和不可自动化的部分。",\n    "must_do": [\n      "判断可自动化、需人工判断和不可自动化的部分",\n      "返回来源",\n      "说明未确认项"\n    ],\n    "must_not": [\n      "把推断写成事实",\n      "覆盖原始材料"\n    ]\n  },\n  {\n    "id": "counterexample-1",\n    "prompt": "找不到配置，但要求 fde-question 批量写入。",\n    "must_do": [\n      "停止写入",\n      "询问根目录"\n    ],\n    "must_not": [\n      "猜路径",\n      "写入用户主目录"\n    ]\n  }\n]\n',
        ".agents/skills/fde-question/references/capability-contract.json": '{\n  "skill": "fde-question",\n  "implementation": "fde-skills-owned",\n  "runtime_uses_historical_skill": false,\n  "must_support": [\n    "把模糊困惑改成问题说明书",\n    "让问题可推理、可批评和可验证",\n    "列出所缺事实和权限",\n    "判断可自动化、需人工判断和不可自动化的部分"\n  ],\n  "tests": [\n    "case-1",\n    "case-2",\n    "counterexample-1"\n  ]\n}\n',
        ".agents/skills/fde-question/references/cases.md": "# 案例\n\n## 正常\n\n配置可读，fde-question 只读取所需资产，交付附来源。\n\n## 资料不足\n\n完成有证据的部分，把缺口留给用户。\n\n## 停止\n\n找不到配置或请求越过项目边界时停止写入。\n",
        ".agents/skills/fde-question/references/library-map.md": "# 六类资产映射\n\n运行时以知识库根目录的 `.fde/config.yaml` 为准。\n\n- owner：个人说明书\n- product：产品库\n- customer：客户需求库\n- case：素材案例库\n- method：方法论库\n- content：内容生产\n\n不得把这些显示名当成固定路径。\n",
        ".agents/skills/fde-question/references/maturity.json": '{\n  "status": "project-owned-v1",\n  "source_role": "historical_reference_only",\n  "live_customer_test": false\n}\n',
        ".agents/skills/fde-question/references/method.md": "# 问题说明方法\n\n## 输入\n\n- 原问题\n- 已知事实\n- 已尝试动作\n- 期望决定\n- 时间和权限边界\n\n## 步骤\n\n1. 逐句区分事实、判断、情绪和请求。\n2. 找出答案会改变哪个决定。\n3. 列出处理问题所缺的最少信息。\n4. 把步骤分为可由 Agent 执行、需要人确认、必须由人决定三类。\n5. 输出可推理、可批评、可验证的问题说明书和自动化边界。\n\n## 交付\n\n- 原问题\n- 问题说明书\n- 已知事实\n- 缺失信息\n- 期望输出\n- 验收标准\n\n## 停止\n\n- 没有决策用途时先问为什么处理\n- 涉及授权外动作时停止\n- 不把猜测写进背景事实\n",
        ".agents/skills/fde-question/references/source-evidence.md": "# 当前实现证据\n\n- 工作流规格：`tools/rewrite-owned-suite.py` 的 `fde-question`。\n- 六类资产路径：`六类资产库目录模板/.fde/config.yaml`。\n- 名称和历史映射：`改造清单/skill-manifest.json`。\n- 相似度验收：`tools/check-source-similarity.py`。\n",
        ".agents/skills/fde-question/references/source-map.md": "# 来源映射\n\n## 当前实现\n\n- 运行流程由 `tools/rewrite-owned-suite.py` 中的 `fde-question` 规格生成。\n- 资产模型来自本项目 `六类资产库目录模板/.fde/config.yaml`。\n- 用户要求是：英文 `fde-` 名称、易于理解、服务当前六类资产库。\n\n## 历史对照\n\n- 历史能力对照：`dbskill-upstream/skills/dbs-good-question`。\n- 固定快照：`v2.17.15`，commit `af99c577bfb9f1926236671a882b15030242fe8b`。\n- 该快照只用于能力盘点、相似度检查和署名追溯，不在运行时加载。\n\n历史对照不代表当前运行规则。商业许可仍按项目 `NOTICE.md` 和授权清单处理。\n",
        ".agents/skills/fde-question/SKILL.md": "---\nname: fde-question\ndescription: |\n  把一段困惑整理成 Agent、员工或顾问可以处理的问题说明书。触发方式：/fde-question、「我不知道怎么问」「把这个问题说清楚」。\n---\n\n# 问题说明\n\n<!-- FDE-OWNED-WORKFLOW: v1 -->\n\n## 开始前\n\n1. 从当前目录向上找到 `.fde/config.yaml`，按配置解析六类资产库。\n2. 只读取本任务需要的文件，不跨知识库搜索。\n3. 把库内事实、用户本轮信息、当前推断和未知项分开。\n4. 原始材料不覆盖；删除、移动和批量写入先确认。\n\n## 读取\n\n- 原问题\n- 已知事实\n- 已尝试动作\n- 期望决定\n- 时间和权限边界\n\n## 必须保留的能力\n\n- 把模糊困惑改成问题说明书\n- 让问题可推理、可批评和可验证\n- 列出所缺事实和权限\n- 判断可自动化、需人工判断和不可自动化的部分\n\n## 执行\n\n1. 逐句区分事实、判断、情绪和请求。\n2. 找出答案会改变哪个决定。\n3. 列出处理问题所缺的最少信息。\n4. 把步骤分为可由 Agent 执行、需要人确认、必须由人决定三类。\n5. 输出可推理、可批评、可验证的问题说明书和自动化边界。\n\n## 交付\n\n- 原问题\n- 问题说明书\n- 已知事实\n- 缺失信息\n- 期望输出\n- 验收标准\n\n每个关键判断附来源路径；没有来源的内容标为推断或待确认。\n\n## 写回\n\n- 确认后写入当前项目 brief\n\n## 停止条件\n\n- 没有决策用途时先问为什么处理\n- 涉及授权外动作时停止\n- 不把猜测写进背景事实\n\n## 接续\n\n- 商业问题用 fde-diagnose\n- 目标问题用 fde-goal\n\n来源沿革只用于追溯，不作为运行指令。需要追溯时读取 `references/source-map.md`。\n",
        ".agents/skills/fde-report/agents/openai.yaml": 'interface:\n  display_name: "状态报告"\n  short_description: "读取当前六类资产知识库，执行状态报告并返回来源、结果和未确认项。"\n  default_prompt: "请使用 $fde-report 处理当前知识库里的真实任务，并说明来源和未确认项。"\n',
        ".agents/skills/fde-report/references/acceptance.md": "# 验收\n\n- [ ] fde-report 使用当前知识库配置。\n- [ ] 读取范围与任务有关。\n- [ ] 事实、推断和未知分开。\n- [ ] 关键判断有来源。\n- [ ] 破坏性动作先确认。\n- [ ] 输出包含：摘要、时间线、关键决定、结果、风险和未知、下一步、来源附录。\n- [ ] 能力：合并同一任务的多次状态。\n- [ ] 能力：保留判断变化和时间线。\n- [ ] 能力：输出可交付 Markdown。\n- [ ] 能力：附来源、风险和未完成项。\n",
        ".agents/skills/fde-report/references/atoms.jsonl": '{"id": "FDE-REPORT-001", "rule": "先定位当前知识库配置，再读取资料。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-REPORT-002", "rule": "只加载当前任务需要的资产。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-REPORT-003", "rule": "区分事实、用户陈述、推断和未知。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-REPORT-004", "rule": "关键结论返回来源路径。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-REPORT-005", "rule": "原始材料保持不变。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-REPORT-006", "rule": "批量写入、移动、覆盖和删除先确认。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-REPORT-007", "rule": "不跨客户或跨项目读取。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-REPORT-008", "rule": "资料不足时完成证据允许的部分。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-REPORT-009", "rule": "不能确认的分类进入待确认区。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-REPORT-010", "rule": "交付后说明写入位置和未完成项。", "source": "fde-skills-workflow-v1"}\n',
        ".agents/skills/fde-report/references/axioms.md": "# 公理\n\n## AXIOM-01：定位\n\n没有知识库配置就不猜路径。\n\n## AXIOM-02：最小读取\n\n只读取当前任务需要的资产。\n\n## AXIOM-03：证据\n\n事实和推断分开，关键判断附来源。\n\n## AXIOM-04：可恢复\n\n原始材料不覆盖，破坏性动作先确认。\n\n## AXIOM-05：闭环\n\n交付说明结果、写入位置、未知项和下一步。\n",
        ".agents/skills/fde-report/references/behavior-tests.json": '[\n  {\n    "id": "case-1",\n    "prompt": "使用 fde-report 完成：合并同一任务的多次状态。",\n    "must_do": [\n      "合并同一任务的多次状态",\n      "保留判断变化和时间线",\n      "输出可交付 Markdown"\n    ],\n    "must_not": [\n      "编造事实",\n      "跨项目读取"\n    ]\n  },\n  {\n    "id": "case-2",\n    "prompt": "继续使用 fde-report 完成：附来源、风险和未完成项。",\n    "must_do": [\n      "附来源、风险和未完成项",\n      "返回来源",\n      "说明未确认项"\n    ],\n    "must_not": [\n      "把推断写成事实",\n      "覆盖原始材料"\n    ]\n  },\n  {\n    "id": "counterexample-1",\n    "prompt": "找不到配置，但要求 fde-report 批量写入。",\n    "must_do": [\n      "停止写入",\n      "询问根目录"\n    ],\n    "must_not": [\n      "猜路径",\n      "写入用户主目录"\n    ]\n  }\n]\n',
        ".agents/skills/fde-report/references/capability-contract.json": '{\n  "skill": "fde-report",\n  "implementation": "fde-skills-owned",\n  "runtime_uses_historical_skill": false,\n  "must_support": [\n    "合并同一任务的多次状态",\n    "保留判断变化和时间线",\n    "输出可交付 Markdown",\n    "附来源、风险和未完成项"\n  ],\n  "tests": [\n    "case-1",\n    "case-2",\n    "counterexample-1"\n  ]\n}\n',
        ".agents/skills/fde-report/references/cases.md": "# 案例\n\n## 正常\n\n配置可读，fde-report 只读取所需资产，交付附来源。\n\n## 资料不足\n\n完成有证据的部分，把缺口留给用户。\n\n## 停止\n\n找不到配置或请求越过项目边界时停止写入。\n",
        ".agents/skills/fde-report/references/library-map.md": "# 六类资产映射\n\n运行时以知识库根目录的 `.fde/config.yaml` 为准。\n\n- owner：个人说明书\n- product：产品库\n- customer：客户需求库\n- case：素材案例库\n- method：方法论库\n- content：内容生产\n\n不得把这些显示名当成固定路径。\n",
        ".agents/skills/fde-report/references/maturity.json": '{\n  "status": "project-owned-v1",\n  "source_role": "historical_reference_only",\n  "live_customer_test": false\n}\n',
        ".agents/skills/fde-report/references/method.md": "# 状态报告方法\n\n## 输入\n\n- 选定任务的状态文件\n- 决策记录\n- 关联资产和结果\n- 报告读者\n\n## 步骤\n\n1. 按时间排序状态，不先写结论。\n2. 合并重复事实，保留判断变化和原因。\n3. 区分已完成、进行中、阻塞和未知。\n4. 为每个关键结论附来源路径。\n\n## 交付\n\n- 摘要\n- 时间线\n- 关键决定\n- 结果\n- 风险和未知\n- 下一步\n- 来源附录\n\n## 停止\n\n- 状态属于不同任务时不强行合并\n- 缺少来源的结论标明\n- 对外报告先检查敏感信息\n",
        ".agents/skills/fde-report/references/source-evidence.md": "# 当前实现证据\n\n- 工作流规格：`tools/rewrite-owned-suite.py` 的 `fde-report`。\n- 六类资产路径：`六类资产库目录模板/.fde/config.yaml`。\n- 名称和历史映射：`改造清单/skill-manifest.json`。\n- 相似度验收：`tools/check-source-similarity.py`。\n",
        ".agents/skills/fde-report/references/source-map.md": "# 来源映射\n\n## 当前实现\n\n- 运行流程由 `tools/rewrite-owned-suite.py` 中的 `fde-report` 规格生成。\n- 资产模型来自本项目 `六类资产库目录模板/.fde/config.yaml`。\n- 用户要求是：英文 `fde-` 名称、易于理解、服务当前六类资产库。\n\n## 历史对照\n\n- 历史能力对照：`dbskill-upstream/skills/dbs-report`。\n- 固定快照：`v2.17.15`，commit `af99c577bfb9f1926236671a882b15030242fe8b`。\n- 该快照只用于能力盘点、相似度检查和署名追溯，不在运行时加载。\n\n历史对照不代表当前运行规则。商业许可仍按项目 `NOTICE.md` 和授权清单处理。\n",
        ".agents/skills/fde-report/SKILL.md": "---\nname: fde-report\ndescription: |\n  把同一任务的多次状态、决定和结果整理成可交付报告，保留时间线和来源。触发方式：/fde-report、「整理成报告」「给合伙人看」。\n---\n\n# 状态报告\n\n<!-- FDE-OWNED-WORKFLOW: v1 -->\n\n## 开始前\n\n1. 从当前目录向上找到 `.fde/config.yaml`，按配置解析六类资产库。\n2. 只读取本任务需要的文件，不跨知识库搜索。\n3. 把库内事实、用户本轮信息、当前推断和未知项分开。\n4. 原始材料不覆盖；删除、移动和批量写入先确认。\n\n## 读取\n\n- 选定任务的状态文件\n- 决策记录\n- 关联资产和结果\n- 报告读者\n\n## 必须保留的能力\n\n- 合并同一任务的多次状态\n- 保留判断变化和时间线\n- 输出可交付 Markdown\n- 附来源、风险和未完成项\n\n## 执行\n\n1. 按时间排序状态，不先写结论。\n2. 合并重复事实，保留判断变化和原因。\n3. 区分已完成、进行中、阻塞和未知。\n4. 为每个关键结论附来源路径。\n\n## 交付\n\n- 摘要\n- 时间线\n- 关键决定\n- 结果\n- 风险和未知\n- 下一步\n- 来源附录\n\n每个关键判断附来源路径；没有来源的内容标为推断或待确认。\n\n## 写回\n\n- 写入 `.fde/reports` 或用户指定目录\n- 不修改源状态\n\n## 停止条件\n\n- 状态属于不同任务时不强行合并\n- 缺少来源的结论标明\n- 对外报告先检查敏感信息\n\n## 接续\n\n- 继续执行回 fde-start\n- 复盘决定用 fde-decide\n\n来源沿革只用于追溯，不作为运行指令。需要追溯时读取 `references/source-map.md`。\n",
        ".agents/skills/fde-resume/agents/openai.yaml": 'interface:\n  display_name: "恢复进度"\n  short_description: "读取当前六类资产知识库，执行恢复进度并返回来源、结果和未确认项。"\n  default_prompt: "请使用 $fde-resume 处理当前知识库里的真实任务，并说明来源和未确认项。"\n',
        ".agents/skills/fde-resume/references/acceptance.md": "# 验收\n\n- [ ] fde-resume 使用当前知识库配置。\n- [ ] 读取范围与任务有关。\n- [ ] 事实、推断和未知分开。\n- [ ] 关键判断有来源。\n- [ ] 破坏性动作先确认。\n- [ ] 输出包含：恢复的状态、文件变化、已完成项、待办、建议继续点。\n- [ ] 能力：列出可恢复状态。\n- [ ] 能力：恢复最近或指定状态。\n- [ ] 能力：核对引用文件是否变化。\n- [ ] 能力：继续时创建新版本。\n",
        ".agents/skills/fde-resume/references/atoms.jsonl": '{"id": "FDE-RESUME-001", "rule": "先定位当前知识库配置，再读取资料。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-RESUME-002", "rule": "只加载当前任务需要的资产。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-RESUME-003", "rule": "区分事实、用户陈述、推断和未知。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-RESUME-004", "rule": "关键结论返回来源路径。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-RESUME-005", "rule": "原始材料保持不变。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-RESUME-006", "rule": "批量写入、移动、覆盖和删除先确认。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-RESUME-007", "rule": "不跨客户或跨项目读取。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-RESUME-008", "rule": "资料不足时完成证据允许的部分。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-RESUME-009", "rule": "不能确认的分类进入待确认区。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-RESUME-010", "rule": "交付后说明写入位置和未完成项。", "source": "fde-skills-workflow-v1"}\n',
        ".agents/skills/fde-resume/references/axioms.md": "# 公理\n\n## AXIOM-01：定位\n\n没有知识库配置就不猜路径。\n\n## AXIOM-02：最小读取\n\n只读取当前任务需要的资产。\n\n## AXIOM-03：证据\n\n事实和推断分开，关键判断附来源。\n\n## AXIOM-04：可恢复\n\n原始材料不覆盖，破坏性动作先确认。\n\n## AXIOM-05：闭环\n\n交付说明结果、写入位置、未知项和下一步。\n",
        ".agents/skills/fde-resume/references/behavior-tests.json": '[\n  {\n    "id": "case-1",\n    "prompt": "使用 fde-resume 完成：列出可恢复状态。",\n    "must_do": [\n      "列出可恢复状态",\n      "恢复最近或指定状态",\n      "核对引用文件是否变化"\n    ],\n    "must_not": [\n      "编造事实",\n      "跨项目读取"\n    ]\n  },\n  {\n    "id": "case-2",\n    "prompt": "继续使用 fde-resume 完成：继续时创建新版本。",\n    "must_do": [\n      "继续时创建新版本",\n      "返回来源",\n      "说明未确认项"\n    ],\n    "must_not": [\n      "把推断写成事实",\n      "覆盖原始材料"\n    ]\n  },\n  {\n    "id": "counterexample-1",\n    "prompt": "找不到配置，但要求 fde-resume 批量写入。",\n    "must_do": [\n      "停止写入",\n      "询问根目录"\n    ],\n    "must_not": [\n      "猜路径",\n      "写入用户主目录"\n    ]\n  }\n]\n',
        ".agents/skills/fde-resume/references/capability-contract.json": '{\n  "skill": "fde-resume",\n  "implementation": "fde-skills-owned",\n  "runtime_uses_historical_skill": false,\n  "must_support": [\n    "列出可恢复状态",\n    "恢复最近或指定状态",\n    "核对引用文件是否变化",\n    "继续时创建新版本"\n  ],\n  "tests": [\n    "case-1",\n    "case-2",\n    "counterexample-1"\n  ]\n}\n',
        ".agents/skills/fde-resume/references/cases.md": "# 案例\n\n## 正常\n\n配置可读，fde-resume 只读取所需资产，交付附来源。\n\n## 资料不足\n\n完成有证据的部分，把缺口留给用户。\n\n## 停止\n\n找不到配置或请求越过项目边界时停止写入。\n",
        ".agents/skills/fde-resume/references/library-map.md": "# 六类资产映射\n\n运行时以知识库根目录的 `.fde/config.yaml` 为准。\n\n- owner：个人说明书\n- product：产品库\n- customer：客户需求库\n- case：素材案例库\n- method：方法论库\n- content：内容生产\n\n不得把这些显示名当成固定路径。\n",
        ".agents/skills/fde-resume/references/maturity.json": '{\n  "status": "project-owned-v1",\n  "source_role": "historical_reference_only",\n  "live_customer_test": false\n}\n',
        ".agents/skills/fde-resume/references/method.md": "# 恢复进度方法\n\n## 输入\n\n- `.fde/state/sessions`\n- 用户指定的状态 ID\n- 状态中引用的文件\n\n## 步骤\n\n1. 列出可恢复状态的时间、任务和完成度。\n2. 读取选中状态，核对引用文件是否存在或更新。\n3. 说明上次结论、变化和仍未知事项。\n4. 让用户确认继续点后再执行。\n\n## 交付\n\n- 恢复的状态\n- 文件变化\n- 已完成项\n- 待办\n- 建议继续点\n\n## 停止\n\n- 找不到状态时停止并列出可用项\n- 关键来源已变更时不沿用旧结论\n- 不恢复其他知识库的状态\n",
        ".agents/skills/fde-resume/references/source-evidence.md": "# 当前实现证据\n\n- 工作流规格：`tools/rewrite-owned-suite.py` 的 `fde-resume`。\n- 六类资产路径：`六类资产库目录模板/.fde/config.yaml`。\n- 名称和历史映射：`改造清单/skill-manifest.json`。\n- 相似度验收：`tools/check-source-similarity.py`。\n",
        ".agents/skills/fde-resume/references/source-map.md": "# 来源映射\n\n## 当前实现\n\n- 运行流程由 `tools/rewrite-owned-suite.py` 中的 `fde-resume` 规格生成。\n- 资产模型来自本项目 `六类资产库目录模板/.fde/config.yaml`。\n- 用户要求是：英文 `fde-` 名称、易于理解、服务当前六类资产库。\n\n## 历史对照\n\n- 历史能力对照：`dbskill-upstream/skills/dbs-restore`。\n- 固定快照：`v2.17.15`，commit `af99c577bfb9f1926236671a882b15030242fe8b`。\n- 该快照只用于能力盘点、相似度检查和署名追溯，不在运行时加载。\n\n历史对照不代表当前运行规则。商业许可仍按项目 `NOTICE.md` 和授权清单处理。\n",
        ".agents/skills/fde-resume/SKILL.md": "---\nname: fde-resume\ndescription: |\n  从当前知识库恢复最近或指定的任务状态，先核对文件和事实是否变化，再继续。触发方式：/fde-resume、「接着上次」「恢复进度」。\n---\n\n# 恢复进度\n\n<!-- FDE-OWNED-WORKFLOW: v1 -->\n\n## 开始前\n\n1. 从当前目录向上找到 `.fde/config.yaml`，按配置解析六类资产库。\n2. 只读取本任务需要的文件，不跨知识库搜索。\n3. 把库内事实、用户本轮信息、当前推断和未知项分开。\n4. 原始材料不覆盖；删除、移动和批量写入先确认。\n\n## 读取\n\n- `.fde/state/sessions`\n- 用户指定的状态 ID\n- 状态中引用的文件\n\n## 必须保留的能力\n\n- 列出可恢复状态\n- 恢复最近或指定状态\n- 核对引用文件是否变化\n- 继续时创建新版本\n\n## 执行\n\n1. 列出可恢复状态的时间、任务和完成度。\n2. 读取选中状态，核对引用文件是否存在或更新。\n3. 说明上次结论、变化和仍未知事项。\n4. 让用户确认继续点后再执行。\n\n## 交付\n\n- 恢复的状态\n- 文件变化\n- 已完成项\n- 待办\n- 建议继续点\n\n每个关键判断附来源路径；没有来源的内容标为推断或待确认。\n\n## 写回\n\n- 继续工作后创建新状态版本，不覆盖旧状态\n\n## 停止条件\n\n- 找不到状态时停止并列出可用项\n- 关键来源已变更时不沿用旧结论\n- 不恢复其他知识库的状态\n\n## 接续\n\n- 需要汇总用 fde-report\n- 继续任务回对应 Skill\n\n来源沿革只用于追溯，不作为运行指令。需要追溯时读取 `references/source-map.md`。\n",
        ".agents/skills/fde-review/agents/openai.yaml": 'interface:\n  display_name: "内容审核"\n  short_description: "读取当前六类资产知识库，执行内容审核并返回来源、结果和未确认项。"\n  default_prompt: "请使用 $fde-review 处理当前知识库里的真实任务，并说明来源和未确认项。"\n',
        ".agents/skills/fde-review/references/acceptance.md": "# 验收\n\n- [ ] fde-review 使用当前知识库配置。\n- [ ] 读取范围与任务有关。\n- [ ] 事实、推断和未知分开。\n- [ ] 关键判断有来源。\n- [ ] 破坏性动作先确认。\n- [ ] 输出包含：发布判断、必须改的问题和位置、证据缺口、保留项、修改顺序。\n- [ ] 能力：默认只诊断不改稿。\n- [ ] 能力：支持公众号、小红书、口播和短文案。\n- [ ] 能力：先检查事实和定位，再检查内容质量。\n- [ ] 能力：给出具体位置和修改顺序。\n- [ ] 能力：用户确认后另存改稿。\n",
        ".agents/skills/fde-review/references/atoms.jsonl": '{"id": "FDE-REVIEW-001", "rule": "先定位当前知识库配置，再读取资料。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-REVIEW-002", "rule": "只加载当前任务需要的资产。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-REVIEW-003", "rule": "区分事实、用户陈述、推断和未知。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-REVIEW-004", "rule": "关键结论返回来源路径。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-REVIEW-005", "rule": "原始材料保持不变。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-REVIEW-006", "rule": "批量写入、移动、覆盖和删除先确认。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-REVIEW-007", "rule": "不跨客户或跨项目读取。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-REVIEW-008", "rule": "资料不足时完成证据允许的部分。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-REVIEW-009", "rule": "不能确认的分类进入待确认区。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-REVIEW-010", "rule": "交付后说明写入位置和未完成项。", "source": "fde-skills-workflow-v1"}\n',
        ".agents/skills/fde-review/references/axioms.md": "# 公理\n\n## AXIOM-01：定位\n\n没有知识库配置就不猜路径。\n\n## AXIOM-02：最小读取\n\n只读取当前任务需要的资产。\n\n## AXIOM-03：证据\n\n事实和推断分开，关键判断附来源。\n\n## AXIOM-04：可恢复\n\n原始材料不覆盖，破坏性动作先确认。\n\n## AXIOM-05：闭环\n\n交付说明结果、写入位置、未知项和下一步。\n",
        ".agents/skills/fde-review/references/behavior-tests.json": '[\n  {\n    "id": "case-1",\n    "prompt": "使用 fde-review 完成：默认只诊断不改稿。",\n    "must_do": [\n      "默认只诊断不改稿",\n      "支持公众号、小红书、口播和短文案",\n      "先检查事实和定位，再检查内容质量"\n    ],\n    "must_not": [\n      "编造事实",\n      "跨项目读取"\n    ]\n  },\n  {\n    "id": "case-2",\n    "prompt": "继续使用 fde-review 完成：用户确认后另存改稿。",\n    "must_do": [\n      "用户确认后另存改稿",\n      "返回来源",\n      "说明未确认项"\n    ],\n    "must_not": [\n      "把推断写成事实",\n      "覆盖原始材料"\n    ]\n  },\n  {\n    "id": "counterexample-1",\n    "prompt": "找不到配置，但要求 fde-review 批量写入。",\n    "must_do": [\n      "停止写入",\n      "询问根目录"\n    ],\n    "must_not": [\n      "猜路径",\n      "写入用户主目录"\n    ]\n  }\n]\n',
        ".agents/skills/fde-review/references/capability-contract.json": '{\n  "skill": "fde-review",\n  "implementation": "fde-skills-owned",\n  "runtime_uses_historical_skill": false,\n  "must_support": [\n    "默认只诊断不改稿",\n    "支持公众号、小红书、口播和短文案",\n    "先检查事实和定位，再检查内容质量",\n    "给出具体位置和修改顺序",\n    "用户确认后另存改稿"\n  ],\n  "tests": [\n    "case-1",\n    "case-2",\n    "counterexample-1"\n  ]\n}\n',
        ".agents/skills/fde-review/references/cases.md": "# 案例\n\n## 正常\n\n配置可读，fde-review 只读取所需资产，交付附来源。\n\n## 资料不足\n\n完成有证据的部分，把缺口留给用户。\n\n## 停止\n\n找不到配置或请求越过项目边界时停止写入。\n",
        ".agents/skills/fde-review/references/library-map.md": "# 六类资产映射\n\n运行时以知识库根目录的 `.fde/config.yaml` 为准。\n\n- owner：个人说明书\n- product：产品库\n- customer：客户需求库\n- case：素材案例库\n- method：方法论库\n- content：内容生产\n\n不得把这些显示名当成固定路径。\n",
        ".agents/skills/fde-review/references/maturity.json": '{\n  "status": "project-owned-v1",\n  "source_role": "historical_reference_only",\n  "live_customer_test": false\n}\n',
        ".agents/skills/fde-review/references/method.md": "# 内容审核方法\n\n## 输入\n\n- 待审核稿\n- 对应选题\n- 个人说明书\n- 产品和客户事实\n- 来源材料\n- 平台要求\n\n## 步骤\n\n1. 先核对事实、数字、引用和来源。\n2. 再检查读者问题、主线、证据、行动和平台适配。\n3. 把问题按必须改、建议改和保留原样分类。\n4. 只给最小修改方案；用户要求改稿后才生成新版本。\n\n## 交付\n\n- 发布判断\n- 必须改的问题和位置\n- 证据缺口\n- 保留项\n- 修改顺序\n\n## 停止\n\n- 来源冲突时阻止发布\n- 平台规则不确定时标记待核验\n- 不为了顺滑重写本人原话\n",
        ".agents/skills/fde-review/references/modes/flow.md": "# 衔接检查\n\n给每段标作用，找跳步、重复和信息拥堵。需要逐字稿处理时转 fde-flow。\n",
        ".agents/skills/fde-review/references/modes/hook.md": "# 开头检查\n\n检查对象、问题、证据和后文承接。需要重写时转 fde-hook。\n",
        ".agents/skills/fde-review/references/source-evidence.md": "# 当前实现证据\n\n- 工作流规格：`tools/rewrite-owned-suite.py` 的 `fde-review`。\n- 六类资产路径：`六类资产库目录模板/.fde/config.yaml`。\n- 名称和历史映射：`改造清单/skill-manifest.json`。\n- 相似度验收：`tools/check-source-similarity.py`。\n",
        ".agents/skills/fde-review/references/source-map.md": "# 来源映射\n\n## 当前实现\n\n- 运行流程由 `tools/rewrite-owned-suite.py` 中的 `fde-review` 规格生成。\n- 资产模型来自本项目 `六类资产库目录模板/.fde/config.yaml`。\n- 用户要求是：英文 `fde-` 名称、易于理解、服务当前六类资产库。\n\n## 历史对照\n\n- 历史能力对照：`skills矩阵/内容诊断/SKILL.md`。\n- 该文件只用于能力盘点、相似度检查和署名追溯，不在运行时加载。\n\n历史对照不代表当前运行规则。商业许可仍按项目 `NOTICE.md` 和授权清单处理。\n",
        ".agents/skills/fde-review/SKILL.md": "---\nname: fde-review\ndescription: |\n  审核一篇内容与知识库事实、个人表达、目标读者和平台任务是否一致。默认只诊断，用户确认后再改。触发方式：/fde-review、「这篇能发吗」「检查这篇内容」。\n---\n\n# 内容审核\n\n<!-- FDE-OWNED-WORKFLOW: v1 -->\n\n## 开始前\n\n1. 从当前目录向上找到 `.fde/config.yaml`，按配置解析六类资产库。\n2. 只读取本任务需要的文件，不跨知识库搜索。\n3. 把库内事实、用户本轮信息、当前推断和未知项分开。\n4. 原始材料不覆盖；删除、移动和批量写入先确认。\n\n## 读取\n\n- 待审核稿\n- 对应选题\n- 个人说明书\n- 产品和客户事实\n- 来源材料\n- 平台要求\n\n## 必须保留的能力\n\n- 默认只诊断不改稿\n- 支持公众号、小红书、口播和短文案\n- 先检查事实和定位，再检查内容质量\n- 给出具体位置和修改顺序\n- 用户确认后另存改稿\n\n## 执行\n\n1. 先核对事实、数字、引用和来源。\n2. 再检查读者问题、主线、证据、行动和平台适配。\n3. 把问题按必须改、建议改和保留原样分类。\n4. 只给最小修改方案；用户要求改稿后才生成新版本。\n\n## 交付\n\n- 发布判断\n- 必须改的问题和位置\n- 证据缺口\n- 保留项\n- 修改顺序\n\n每个关键判断附来源路径；没有来源的内容标为推断或待确认。\n\n## 写回\n\n- 诊断记录写入 `待审核` 对应文件\n- 改稿另存版本\n- 通过后才移入 `待发布`\n\n## 停止条件\n\n- 来源冲突时阻止发布\n- 平台规则不确定时标记待核验\n- 不为了顺滑重写本人原话\n\n## 接续\n\n- 开头问题用 fde-hook\n- 段落问题用 fde-flow\n- AI 痕迹用 fde-check\n\n来源沿革只用于追溯，不作为运行指令。需要追溯时读取 `references/source-map.md`。\n",
        ".agents/skills/fde-safety/agents/openai.yaml": 'interface:\n  display_name: "Skill 风险检查"\n  short_description: "读取当前六类资产知识库，执行Skill 风险检查并返回来源、结果和未确认项。"\n  default_prompt: "请使用 $fde-safety 处理当前知识库里的真实任务，并说明来源和未确认项。"\n',
        ".agents/skills/fde-safety/references/acceptance.md": "# 验收\n\n- [ ] fde-safety 使用当前知识库配置。\n- [ ] 读取范围与任务有关。\n- [ ] 事实、推断和未知分开。\n- [ ] 关键判断有来源。\n- [ ] 破坏性动作先确认。\n- [ ] 输出包含：扫描范围、风险项、证据位置、误报可能、建议动作。\n- [ ] 能力：扫描默认 Agent Skill 目录和指定目录。\n- [ ] 能力：检查广告导流、隐蔽商业意图和任务劫持。\n- [ ] 能力：检查外部调用和敏感数据读取。\n- [ ] 能力：报告文件、行号和原文证据。\n- [ ] 能力：确认后隔离并支持恢复。\n",
        ".agents/skills/fde-safety/references/atoms.jsonl": '{"id": "FDE-SAFETY-001", "rule": "先定位当前知识库配置，再读取资料。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SAFETY-002", "rule": "只加载当前任务需要的资产。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SAFETY-003", "rule": "区分事实、用户陈述、推断和未知。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SAFETY-004", "rule": "关键结论返回来源路径。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SAFETY-005", "rule": "原始材料保持不变。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SAFETY-006", "rule": "批量写入、移动、覆盖和删除先确认。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SAFETY-007", "rule": "不跨客户或跨项目读取。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SAFETY-008", "rule": "资料不足时完成证据允许的部分。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SAFETY-009", "rule": "不能确认的分类进入待确认区。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SAFETY-010", "rule": "交付后说明写入位置和未完成项。", "source": "fde-skills-workflow-v1"}\n',
        ".agents/skills/fde-safety/references/axioms.md": "# 公理\n\n## AXIOM-01：定位\n\n没有知识库配置就不猜路径。\n\n## AXIOM-02：最小读取\n\n只读取当前任务需要的资产。\n\n## AXIOM-03：证据\n\n事实和推断分开，关键判断附来源。\n\n## AXIOM-04：可恢复\n\n原始材料不覆盖，破坏性动作先确认。\n\n## AXIOM-05：闭环\n\n交付说明结果、写入位置、未知项和下一步。\n",
        ".agents/skills/fde-safety/references/behavior-tests.json": '[\n  {\n    "id": "case-1",\n    "prompt": "使用 fde-safety 完成：扫描默认 Agent Skill 目录和指定目录。",\n    "must_do": [\n      "扫描默认 Agent Skill 目录和指定目录",\n      "检查广告导流、隐蔽商业意图和任务劫持",\n      "检查外部调用和敏感数据读取"\n    ],\n    "must_not": [\n      "编造事实",\n      "跨项目读取"\n    ]\n  },\n  {\n    "id": "case-2",\n    "prompt": "继续使用 fde-safety 完成：确认后隔离并支持恢复。",\n    "must_do": [\n      "确认后隔离并支持恢复",\n      "返回来源",\n      "说明未确认项"\n    ],\n    "must_not": [\n      "把推断写成事实",\n      "覆盖原始材料"\n    ]\n  },\n  {\n    "id": "counterexample-1",\n    "prompt": "找不到配置，但要求 fde-safety 批量写入。",\n    "must_do": [\n      "停止写入",\n      "询问根目录"\n    ],\n    "must_not": [\n      "猜路径",\n      "写入用户主目录"\n    ]\n  }\n]\n',
        ".agents/skills/fde-safety/references/capability-contract.json": '{\n  "skill": "fde-safety",\n  "implementation": "fde-skills-owned",\n  "runtime_uses_historical_skill": false,\n  "must_support": [\n    "扫描默认 Agent Skill 目录和指定目录",\n    "检查广告导流、隐蔽商业意图和任务劫持",\n    "检查外部调用和敏感数据读取",\n    "报告文件、行号和原文证据",\n    "确认后隔离并支持恢复"\n  ],\n  "tests": [\n    "case-1",\n    "case-2",\n    "counterexample-1"\n  ]\n}\n',
        ".agents/skills/fde-safety/references/cases.md": "# 案例\n\n## 正常\n\n配置可读，fde-safety 只读取所需资产，交付附来源。\n\n## 资料不足\n\n完成有证据的部分，把缺口留给用户。\n\n## 停止\n\n找不到配置或请求越过项目边界时停止写入。\n",
        ".agents/skills/fde-safety/references/library-map.md": "# 六类资产映射\n\n运行时以知识库根目录的 `.fde/config.yaml` 为准。\n\n- owner：个人说明书\n- product：产品库\n- customer：客户需求库\n- case：素材案例库\n- method：方法论库\n- content：内容生产\n\n不得把这些显示名当成固定路径。\n",
        ".agents/skills/fde-safety/references/maturity.json": '{\n  "status": "project-owned-v1",\n  "source_role": "historical_reference_only",\n  "live_customer_test": false\n}\n',
        ".agents/skills/fde-safety/references/method.md": "# Skill 风险检查方法\n\n## 输入\n\n- 默认 Agent Skill 目录或用户指定目录\n- SKILL.md\n- scripts 和可执行文件\n- 链接目标\n- scripts/audit_skill.py\n\n## 步骤\n\n1. 使用脚本枚举文件、链接和可执行入口。\n2. 查找广告导流、隐蔽商业关系、任务劫持、网络发送、凭证读取、外部安装和删除移动。\n3. 为每个命中给文件、行号、原文和可能影响。\n4. 先报告；用户逐项确认后才移动到当前知识库隔离区，并保留恢复记录。\n\n## 交付\n\n- 扫描范围\n- 风险项\n- 证据位置\n- 误报可能\n- 建议动作\n\n## 停止\n\n- 扫描结果不等于安全保证\n- 不得自动删除\n- 不得读取凭证内容来证明风险\n",
        ".agents/skills/fde-safety/references/source-evidence.md": "# 当前实现证据\n\n- 工作流规格：`tools/rewrite-owned-suite.py` 的 `fde-safety`。\n- 六类资产路径：`六类资产库目录模板/.fde/config.yaml`。\n- 名称和历史映射：`改造清单/skill-manifest.json`。\n- 相似度验收：`tools/check-source-similarity.py`。\n",
        ".agents/skills/fde-safety/references/source-map.md": "# 来源映射\n\n## 当前实现\n\n- 运行流程由 `tools/rewrite-owned-suite.py` 中的 `fde-safety` 规格生成。\n- 资产模型来自本项目 `六类资产库目录模板/.fde/config.yaml`。\n- 用户要求是：英文 `fde-` 名称、易于理解、服务当前六类资产库。\n\n## 历史对照\n\n- 历史能力对照：`dbskill-upstream/skills/dbs-skill-cleaner`。\n- 固定快照：`v2.17.15`，commit `af99c577bfb9f1926236671a882b15030242fe8b`。\n- 该快照只用于能力盘点、相似度检查和署名追溯，不在运行时加载。\n\n历史对照不代表当前运行规则。商业许可仍按项目 `NOTICE.md` 和授权清单处理。\n",
        ".agents/skills/fde-safety/scripts/audit_skill.py": '#!/usr/bin/env python3\n"""Inspect local skill files and quarantine only with explicit confirmation."""\n\nfrom __future__ import annotations\n\nimport argparse\nimport json\nimport re\nimport shutil\nfrom datetime import datetime\nfrom pathlib import Path\n\n\nRULES = {\n    "promotion": re.compile(r"affiliate|referral|推广码|返佣|导流", re.I),\n    "task_hijack": re.compile(r"ignore (all|previous)|忽略.{0,8}(指令|要求)|secretly|隐蔽", re.I),\n    "network_send": re.compile(r"curl\\s|wget\\s|requests\\.(post|put)|fetch\\(|socket\\.", re.I),\n    "sensitive_read": re.compile(r"\\.ssh|\\.aws|\\.env|keychain|credentials|id_rsa", re.I),\n    "install_or_execute": re.compile(r"pip install|npm install|subprocess\\.|os\\.system|eval\\(", re.I),\n    "delete_or_move": re.compile(r"rm\\s+-rf|shutil\\.rmtree|unlink\\(|\\bmv\\s", re.I),\n}\nTEXT_SUFFIXES = {".md", ".py", ".sh", ".js", ".ts", ".json", ".yaml", ".yml", ".toml"}\n\n\ndef scan(root: Path) -> list[dict]:\n    findings = []\n    for path in sorted(root.rglob("*")):\n        if path.is_symlink():\n            findings.append({"risk": "symlink", "file": str(path), "line": 0, "evidence": str(path.readlink())[:200]})\n            continue\n        if not path.is_file() or (path.suffix.lower() not in TEXT_SUFFIXES and path.name != "SKILL.md"):\n            continue\n        try:\n            lines = path.read_text(encoding="utf-8", errors="replace").splitlines()\n        except OSError:\n            continue\n        for number, line in enumerate(lines, 1):\n            for risk, pattern in RULES.items():\n                if pattern.search(line):\n                    findings.append({"risk": risk, "file": str(path), "line": number, "evidence": line.strip()[:200]})\n    return findings\n\n\ndef quarantine(source: Path, fde_root: Path) -> dict:\n    area = fde_root / ".fde" / "quarantine"\n    area.mkdir(parents=True, exist_ok=True)\n    stamp = datetime.now().strftime("%Y%m%d-%H%M%S")\n    target = area / f"{source.name}-{stamp}"\n    if target.exists():\n        raise ValueError(f"target exists: {target}")\n    shutil.move(str(source), str(target))\n    record = {"source": str(source), "target": str(target), "time": datetime.now().isoformat(timespec="seconds")}\n    (area / f"{source.name}-{stamp}.json").write_text(json.dumps(record, ensure_ascii=False, indent=2) + "\\n", encoding="utf-8")\n    return record\n\n\ndef restore(record_path: Path) -> dict:\n    record = json.loads(record_path.read_text(encoding="utf-8"))\n    source, target = Path(record["source"]), Path(record["target"])\n    if source.exists() or not target.exists():\n        raise ValueError("restore path is occupied or quarantine item is missing")\n    source.parent.mkdir(parents=True, exist_ok=True)\n    shutil.move(str(target), str(source))\n    record["restored"] = datetime.now().isoformat(timespec="seconds")\n    record_path.write_text(json.dumps(record, ensure_ascii=False, indent=2) + "\\n", encoding="utf-8")\n    return record\n\n\ndef main() -> None:\n    parser = argparse.ArgumentParser()\n    sub = parser.add_subparsers(dest="command", required=True)\n    scan_parser = sub.add_parser("scan")\n    scan_parser.add_argument("path", type=Path)\n    quarantine_parser = sub.add_parser("quarantine")\n    quarantine_parser.add_argument("path", type=Path)\n    quarantine_parser.add_argument("--fde-root", type=Path, required=True)\n    quarantine_parser.add_argument("--yes", action="store_true")\n    restore_parser = sub.add_parser("restore")\n    restore_parser.add_argument("record", type=Path)\n    restore_parser.add_argument("--yes", action="store_true")\n    args = parser.parse_args()\n    if args.command == "scan":\n        root = args.path.expanduser().resolve()\n        print(json.dumps({"root": str(root), "findings": scan(root)}, ensure_ascii=False, indent=2))\n    elif args.command == "quarantine":\n        if not args.yes:\n            parser.error("quarantine requires --yes")\n        print(json.dumps(quarantine(args.path.resolve(), args.fde_root.resolve()), ensure_ascii=False, indent=2))\n    else:\n        if not args.yes:\n            parser.error("restore requires --yes")\n        print(json.dumps(restore(args.record.resolve()), ensure_ascii=False, indent=2))\n\n\nif __name__ == "__main__":\n    main()\n',
        ".agents/skills/fde-safety/SKILL.md": "---\nname: fde-safety\ndescription: |\n  只读检查本地 Skill 的外部命令、网络访问、敏感目录读取、隐藏指令和删除行为。隔离必须逐项确认。触发方式：/fde-safety、「检查 Skill 安全」「扫描可疑 Skill」。\n---\n\n# Skill 风险检查\n\n<!-- FDE-OWNED-WORKFLOW: v1 -->\n\n## 开始前\n\n1. 从当前目录向上找到 `.fde/config.yaml`，按配置解析六类资产库。\n2. 只读取本任务需要的文件，不跨知识库搜索。\n3. 把库内事实、用户本轮信息、当前推断和未知项分开。\n4. 原始材料不覆盖；删除、移动和批量写入先确认。\n\n## 读取\n\n- 默认 Agent Skill 目录或用户指定目录\n- SKILL.md\n- scripts 和可执行文件\n- 链接目标\n- scripts/audit_skill.py\n\n## 必须保留的能力\n\n- 扫描默认 Agent Skill 目录和指定目录\n- 检查广告导流、隐蔽商业意图和任务劫持\n- 检查外部调用和敏感数据读取\n- 报告文件、行号和原文证据\n- 确认后隔离并支持恢复\n\n## 执行\n\n1. 使用脚本枚举文件、链接和可执行入口。\n2. 查找广告导流、隐蔽商业关系、任务劫持、网络发送、凭证读取、外部安装和删除移动。\n3. 为每个命中给文件、行号、原文和可能影响。\n4. 先报告；用户逐项确认后才移动到当前知识库隔离区，并保留恢复记录。\n\n## 交付\n\n- 扫描范围\n- 风险项\n- 证据位置\n- 误报可能\n- 建议动作\n\n每个关键判断附来源路径；没有来源的内容标为推断或待确认。\n\n## 写回\n\n- 报告可写入 `.fde/logs`\n- 隔离只进入 `.fde/quarantine`\n\n## 停止条件\n\n- 扫描结果不等于安全保证\n- 不得自动删除\n- 不得读取凭证内容来证明风险\n\n## 接续\n\n- 不提供连接本机 Claude Code 或 Codex 的功能；不要修改全局客户端配置\n- 整体工作台用 fde-setup\n\n来源沿革只用于追溯，不作为运行指令。需要追溯时读取 `references/source-map.md`。\n",
        ".agents/skills/fde-save/agents/openai.yaml": 'interface:\n  display_name: "保存进度"\n  short_description: "读取当前六类资产知识库，执行保存进度并返回来源、结果和未确认项。"\n  default_prompt: "请使用 $fde-save 处理当前知识库里的真实任务，并说明来源和未确认项。"\n',
        ".agents/skills/fde-save/references/acceptance.md": "# 验收\n\n- [ ] fde-save 使用当前知识库配置。\n- [ ] 读取范围与任务有关。\n- [ ] 事实、推断和未知分开。\n- [ ] 关键判断有来源。\n- [ ] 破坏性动作先确认。\n- [ ] 输出包含：状态 ID、完成项、来源、未知项、下一步、恢复提示。\n- [ ] 能力：保存目标、来源、结论、未知项和下一步。\n- [ ] 能力：写入当前知识库而非用户主目录。\n- [ ] 能力：生成状态 ID 和恢复提示。\n",
        ".agents/skills/fde-save/references/atoms.jsonl": '{"id": "FDE-SAVE-001", "rule": "先定位当前知识库配置，再读取资料。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SAVE-002", "rule": "只加载当前任务需要的资产。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SAVE-003", "rule": "区分事实、用户陈述、推断和未知。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SAVE-004", "rule": "关键结论返回来源路径。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SAVE-005", "rule": "原始材料保持不变。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SAVE-006", "rule": "批量写入、移动、覆盖和删除先确认。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SAVE-007", "rule": "不跨客户或跨项目读取。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SAVE-008", "rule": "资料不足时完成证据允许的部分。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SAVE-009", "rule": "不能确认的分类进入待确认区。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SAVE-010", "rule": "交付后说明写入位置和未完成项。", "source": "fde-skills-workflow-v1"}\n',
        ".agents/skills/fde-save/references/axioms.md": "# 公理\n\n## AXIOM-01：定位\n\n没有知识库配置就不猜路径。\n\n## AXIOM-02：最小读取\n\n只读取当前任务需要的资产。\n\n## AXIOM-03：证据\n\n事实和推断分开，关键判断附来源。\n\n## AXIOM-04：可恢复\n\n原始材料不覆盖，破坏性动作先确认。\n\n## AXIOM-05：闭环\n\n交付说明结果、写入位置、未知项和下一步。\n",
        ".agents/skills/fde-save/references/behavior-tests.json": '[\n  {\n    "id": "case-1",\n    "prompt": "使用 fde-save 完成：保存目标、来源、结论、未知项和下一步。",\n    "must_do": [\n      "保存目标、来源、结论、未知项和下一步",\n      "写入当前知识库而非用户主目录",\n      "生成状态 ID 和恢复提示"\n    ],\n    "must_not": [\n      "编造事实",\n      "跨项目读取"\n    ]\n  },\n  {\n    "id": "case-2",\n    "prompt": "继续使用 fde-save 完成：生成状态 ID 和恢复提示。",\n    "must_do": [\n      "生成状态 ID 和恢复提示",\n      "返回来源",\n      "说明未确认项"\n    ],\n    "must_not": [\n      "把推断写成事实",\n      "覆盖原始材料"\n    ]\n  },\n  {\n    "id": "counterexample-1",\n    "prompt": "找不到配置，但要求 fde-save 批量写入。",\n    "must_do": [\n      "停止写入",\n      "询问根目录"\n    ],\n    "must_not": [\n      "猜路径",\n      "写入用户主目录"\n    ]\n  }\n]\n',
        ".agents/skills/fde-save/references/capability-contract.json": '{\n  "skill": "fde-save",\n  "implementation": "fde-skills-owned",\n  "runtime_uses_historical_skill": false,\n  "must_support": [\n    "保存目标、来源、结论、未知项和下一步",\n    "写入当前知识库而非用户主目录",\n    "生成状态 ID 和恢复提示"\n  ],\n  "tests": [\n    "case-1",\n    "case-2",\n    "counterexample-1"\n  ]\n}\n',
        ".agents/skills/fde-save/references/cases.md": "# 案例\n\n## 正常\n\n配置可读，fde-save 只读取所需资产，交付附来源。\n\n## 资料不足\n\n完成有证据的部分，把缺口留给用户。\n\n## 停止\n\n找不到配置或请求越过项目边界时停止写入。\n",
        ".agents/skills/fde-save/references/library-map.md": "# 六类资产映射\n\n运行时以知识库根目录的 `.fde/config.yaml` 为准。\n\n- owner：个人说明书\n- product：产品库\n- customer：客户需求库\n- case：素材案例库\n- method：方法论库\n- content：内容生产\n\n不得把这些显示名当成固定路径。\n",
        ".agents/skills/fde-save/references/maturity.json": '{\n  "status": "project-owned-v1",\n  "source_role": "historical_reference_only",\n  "live_customer_test": false\n}\n',
        ".agents/skills/fde-save/references/method.md": "# 保存进度方法\n\n## 输入\n\n- 当前对话中的任务\n- 本轮读取和写入的文件\n- 用户已经确认的结论\n\n## 步骤\n\n1. 提取当前目标和范围。\n2. 列出已完成动作及文件路径。\n3. 分开保存已确认、推断、未知和被否定方向。\n4. 生成短 ID 和下一次恢复入口。\n\n## 交付\n\n- 状态 ID\n- 完成项\n- 来源\n- 未知项\n- 下一步\n- 恢复提示\n\n## 停止\n\n- 没有明确任务时不创建空状态\n- 敏感信息按用户要求删减\n- 不保存未获授权的外部内容\n",
        ".agents/skills/fde-save/references/source-evidence.md": "# 当前实现证据\n\n- 工作流规格：`tools/rewrite-owned-suite.py` 的 `fde-save`。\n- 六类资产路径：`六类资产库目录模板/.fde/config.yaml`。\n- 名称和历史映射：`改造清单/skill-manifest.json`。\n- 相似度验收：`tools/check-source-similarity.py`。\n",
        ".agents/skills/fde-save/references/source-map.md": "# 来源映射\n\n## 当前实现\n\n- 运行流程由 `tools/rewrite-owned-suite.py` 中的 `fde-save` 规格生成。\n- 资产模型来自本项目 `六类资产库目录模板/.fde/config.yaml`。\n- 用户要求是：英文 `fde-` 名称、易于理解、服务当前六类资产库。\n\n## 历史对照\n\n- 历史能力对照：`dbskill-upstream/skills/dbs-save`。\n- 固定快照：`v2.17.15`，commit `af99c577bfb9f1926236671a882b15030242fe8b`。\n- 该快照只用于能力盘点、相似度检查和署名追溯，不在运行时加载。\n\n历史对照不代表当前运行规则。商业许可仍按项目 `NOTICE.md` 和授权清单处理。\n",
        ".agents/skills/fde-save/SKILL.md": "---\nname: fde-save\ndescription: |\n  保存当前知识库任务的目标、已用来源、完成项、未知项和下一步。触发方式：/fde-save、「保存进度」「下次接着做」。\n---\n\n# 保存进度\n\n<!-- FDE-OWNED-WORKFLOW: v1 -->\n\n## 开始前\n\n1. 从当前目录向上找到 `.fde/config.yaml`，按配置解析六类资产库。\n2. 只读取本任务需要的文件，不跨知识库搜索。\n3. 把库内事实、用户本轮信息、当前推断和未知项分开。\n4. 原始材料不覆盖；删除、移动和批量写入先确认。\n\n## 读取\n\n- 当前对话中的任务\n- 本轮读取和写入的文件\n- 用户已经确认的结论\n\n## 必须保留的能力\n\n- 保存目标、来源、结论、未知项和下一步\n- 写入当前知识库而非用户主目录\n- 生成状态 ID 和恢复提示\n\n## 执行\n\n1. 提取当前目标和范围。\n2. 列出已完成动作及文件路径。\n3. 分开保存已确认、推断、未知和被否定方向。\n4. 生成短 ID 和下一次恢复入口。\n\n## 交付\n\n- 状态 ID\n- 完成项\n- 来源\n- 未知项\n- 下一步\n- 恢复提示\n\n每个关键判断附来源路径；没有来源的内容标为推断或待确认。\n\n## 写回\n\n- 写入 `.fde/state/sessions`，不写用户主目录\n\n## 停止条件\n\n- 没有明确任务时不创建空状态\n- 敏感信息按用户要求删减\n- 不保存未获授权的外部内容\n\n## 接续\n\n- 恢复时用 fde-resume\n- 多次状态汇总用 fde-report\n\n来源沿革只用于追溯，不作为运行指令。需要追溯时读取 `references/source-map.md`。\n",
        ".agents/skills/fde-setup/agents/openai.yaml": 'interface:\n  display_name: "Agent 工作目录"\n  short_description: "读取当前六类资产知识库，执行Agent 工作目录并返回来源、结果和未确认项。"\n  default_prompt: "请使用 $fde-setup 处理当前知识库里的真实任务，并说明来源和未确认项。"\n',
        ".agents/skills/fde-setup/references/acceptance.md": "# 验收\n\n- [ ] fde-setup 使用当前知识库配置。\n- [ ] 读取范围与任务有关。\n- [ ] 事实、推断和未知分开。\n- [ ] 关键判断有来源。\n- [ ] 破坏性动作先确认。\n- [ ] 输出包含：当前结构、真源选择、目标结构、变更预览、验证结果。\n- [ ] 能力：审计 Agent 规则文件和技能目录。\n- [ ] 能力：确定规则真源和 Skill 真源。\n- [ ] 能力：统一名称和入口。\n- [ ] 能力：仅处理当前 Vault 内的 FDE 规则与技能。\n- [ ] 能力：先预览再迁移。\n",
        ".agents/skills/fde-setup/references/atoms.jsonl": '{"id": "FDE-SETUP-001", "rule": "先定位当前知识库配置，再读取资料。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SETUP-002", "rule": "只加载当前任务需要的资产。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SETUP-003", "rule": "区分事实、用户陈述、推断和未知。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SETUP-004", "rule": "关键结论返回来源路径。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SETUP-005", "rule": "原始材料保持不变。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SETUP-006", "rule": "批量写入、移动、覆盖和删除先确认。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SETUP-007", "rule": "不跨客户或跨项目读取。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SETUP-008", "rule": "资料不足时完成证据允许的部分。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SETUP-009", "rule": "不能确认的分类进入待确认区。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SETUP-010", "rule": "交付后说明写入位置和未完成项。", "source": "fde-skills-workflow-v1"}\n',
        ".agents/skills/fde-setup/references/axioms.md": "# 公理\n\n## AXIOM-01：定位\n\n没有知识库配置就不猜路径。\n\n## AXIOM-02：最小读取\n\n只读取当前任务需要的资产。\n\n## AXIOM-03：证据\n\n事实和推断分开，关键判断附来源。\n\n## AXIOM-04：可恢复\n\n原始材料不覆盖，破坏性动作先确认。\n\n## AXIOM-05：闭环\n\n交付说明结果、写入位置、未知项和下一步。\n",
        ".agents/skills/fde-setup/references/behavior-tests.json": '[\n  {\n    "id": "case-1",\n    "prompt": "使用 fde-setup 完成：审计 Agent 规则文件和技能目录。",\n    "must_do": [\n      "审计 Agent 规则文件和技能目录",\n      "确定规则真源和 Skill 真源",\n      "统一名称和入口"\n    ],\n    "must_not": [\n      "编造事实",\n      "跨项目读取"\n    ]\n  },\n  {\n    "id": "case-2",\n    "prompt": "继续使用 fde-setup 完成：先预览再迁移。",\n    "must_do": [\n      "先预览再迁移",\n      "返回来源",\n      "说明未确认项"\n    ],\n    "must_not": [\n      "把推断写成事实",\n      "覆盖原始材料"\n    ]\n  },\n  {\n    "id": "counterexample-1",\n    "prompt": "找不到配置，但要求 fde-setup 批量写入。",\n    "must_do": [\n      "停止写入",\n      "询问根目录"\n    ],\n    "must_not": [\n      "猜路径",\n      "写入用户主目录"\n    ]\n  }\n]\n',
        ".agents/skills/fde-setup/references/capability-contract.json": '{\n  "skill": "fde-setup",\n  "implementation": "fde-skills-owned",\n  "runtime_uses_historical_skill": false,\n  "must_support": [\n    "审计 Agent 规则文件和技能目录",\n    "确定规则真源和 Skill 真源",\n    "统一名称和入口",\n    "仅处理当前 Vault 内的 FDE 规则与技能",\n    "先预览再迁移"\n  ],\n  "tests": [\n    "case-1",\n    "case-2",\n    "counterexample-1"\n  ]\n}\n',
        ".agents/skills/fde-setup/references/cases.md": "# 案例\n\n## 正常\n\n配置可读，fde-setup 只读取所需资产，交付附来源。\n\n## 资料不足\n\n完成有证据的部分，把缺口留给用户。\n\n## 停止\n\n找不到配置或请求越过项目边界时停止写入。\n",
        ".agents/skills/fde-setup/references/library-map.md": "# 六类资产映射\n\n运行时以知识库根目录的 `.fde/config.yaml` 为准。\n\n- owner：个人说明书\n- product：产品库\n- customer：客户需求库\n- case：素材案例库\n- method：方法论库\n- content：内容生产\n\n不得把这些显示名当成固定路径。\n",
        ".agents/skills/fde-setup/references/maturity.json": '{\n  "status": "project-owned-v1",\n  "source_role": "historical_reference_only",\n  "live_customer_test": false\n}\n',
        ".agents/skills/fde-setup/references/method.md": "# Agent 工作目录方法\n\n## 输入\n\n- 项目根目录\n- 现有 AGENTS.md、CLAUDE.md 和 skills\n- 目标 Agent\n- 真源位置\n\n## 步骤\n\n1. 盘点现有规则、技能和重复副本。\n2. 选择一个规则真源和一个 Skill 真源。\n3. 生成当前 Vault 内的规则与技能目录整理方案，不创建跨客户端连接。\n4. 先预览新增、修改和冲突，确认后执行。\n\n## 交付\n\n- 当前结构\n- 真源选择\n- 目标结构\n- 变更预览\n- 验证结果\n\n## 停止\n\n- 不删除原有配置\n- 规则冲突时不自动合并\n- 不得把客户知识库连接到其他项目\n",
        ".agents/skills/fde-setup/references/source-evidence.md": "# 当前实现证据\n\n- 工作流规格：`tools/rewrite-owned-suite.py` 的 `fde-setup`。\n- 六类资产路径：`六类资产库目录模板/.fde/config.yaml`。\n- 名称和历史映射：`改造清单/skill-manifest.json`。\n- 相似度验收：`tools/check-source-similarity.py`。\n",
        ".agents/skills/fde-setup/references/source-map.md": "# 来源映射\n\n## 当前实现\n\n- 运行流程由 `tools/rewrite-owned-suite.py` 中的 `fde-setup` 规格生成。\n- 资产模型来自本项目 `六类资产库目录模板/.fde/config.yaml`。\n- 用户要求是：英文 `fde-` 名称、易于理解、服务当前六类资产库。\n\n## 历史对照\n\n- 历史能力对照：`dbskill-upstream/skills/dbs-agent-migration`。\n- 固定快照：`v2.17.15`，commit `af99c577bfb9f1926236671a882b15030242fe8b`。\n- 该快照只用于能力盘点、相似度检查和署名追溯，不在运行时加载。\n\n历史对照不代表当前运行规则。商业许可仍按项目 `NOTICE.md` 和授权清单处理。\n",
        ".agents/skills/fde-setup/SKILL.md": "---\nname: fde-setup\ndescription: |\n  审计当前 FDE 知识库的规则与技能真源，整理项目内目录；不连接本机 Claude Code 或 Codex。触发方式：/fde-setup、「整理 Agent 工作台」「统一项目规则」。\n---\n\n# Agent 工作目录\n\n<!-- FDE-OWNED-WORKFLOW: v1 -->\n\n## 开始前\n\n1. 从当前目录向上找到 `.fde/config.yaml`，按配置解析六类资产库。\n2. 只读取本任务需要的文件，不跨知识库搜索。\n3. 把库内事实、用户本轮信息、当前推断和未知项分开。\n4. 原始材料不覆盖；删除、移动和批量写入先确认。\n\n## 读取\n\n- 项目根目录\n- 现有 AGENTS.md、CLAUDE.md 和 skills\n- 当前 FDE 工作台\n- 真源位置\n\n## 必须保留的能力\n\n- 审计 Agent 规则文件和技能目录\n- 确定规则真源和 Skill 真源\n- 统一名称和入口\n- 仅处理当前 Vault 内的 FDE 规则与技能\n- 先预览再迁移\n\n## 执行\n\n1. 盘点现有规则、技能和重复副本。\n2. 选择一个规则真源和一个 Skill 真源。\n3. 生成当前 Vault 内的规则与技能目录整理方案，不创建跨客户端连接。\n4. 先预览新增、修改和冲突，确认后执行。\n\n## 交付\n\n- 当前结构\n- 真源选择\n- 目标结构\n- 变更预览\n- 验证结果\n\n每个关键判断附来源路径；没有来源的内容标为推断或待确认。\n\n## 写回\n\n- 只在当前项目内写入口文件\n- 不写入全局客户端配置、全局技能目录或 Shell 环境变量\n\n## 停止条件\n\n- 不删除原有配置\n- 规则冲突时不自动合并\n- 不得把客户知识库连接到其他项目\n\n## 接续\n\n- 完成后用 fde-health\n\n来源沿革只用于追溯，不作为运行指令。需要追溯时读取 `references/source-map.md`。\n",
        ".agents/skills/fde-spread/agents/openai.yaml": 'interface:\n  display_name: "传播复盘"\n  short_description: "读取当前六类资产知识库，执行传播复盘并返回来源、结果和未确认项。"\n  default_prompt: "请使用 $fde-spread 处理当前知识库里的真实任务，并说明来源和未确认项。"\n',
        ".agents/skills/fde-spread/references/acceptance.md": "# 验收\n\n- [ ] fde-spread 使用当前知识库配置。\n- [ ] 读取范围与任务有关。\n- [ ] 事实、推断和未知分开。\n- [ ] 关键判断有来源。\n- [ ] 破坏性动作先确认。\n- [ ] 输出包含：数据摘要、有效信号、可能机制、反证、下一次实验。\n- [ ] 能力：没有发布数据时只列出所需指标，不下传播效果结论。\n- [ ] 能力：有数据时用评论和指标验证。\n- [ ] 能力：分析受众情绪、有效立场和传播动作。\n- [ ] 能力：给出可继续讨论的方向。\n- [ ] 能力：区分相关性和因果。\n",
        ".agents/skills/fde-spread/references/analysis-modes.md": "# 传播分析模式\n\n## 内容假设\n\n没有数据时，只提出可证伪机制：身份表达、情绪释放、实用交换、群体信号、行动成本。\n\n## 发布数据分析\n\n用户上传或回填真实数据后，用曝光、停留、互动、转发、转化和评论原话验证或否定假设。没有真实数据时只列出需要补充的指标，不生成数据结论。\n",
        ".agents/skills/fde-spread/references/atoms.jsonl": '{"id": "FDE-SPREAD-001", "rule": "先定位当前知识库配置，再读取资料。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SPREAD-002", "rule": "只加载当前任务需要的资产。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SPREAD-003", "rule": "区分事实、用户陈述、推断和未知。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SPREAD-004", "rule": "关键结论返回来源路径。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SPREAD-005", "rule": "原始材料保持不变。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SPREAD-006", "rule": "批量写入、移动、覆盖和删除先确认。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SPREAD-007", "rule": "不跨客户或跨项目读取。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SPREAD-008", "rule": "资料不足时完成证据允许的部分。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SPREAD-009", "rule": "不能确认的分类进入待确认区。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SPREAD-010", "rule": "交付后说明写入位置和未完成项。", "source": "fde-skills-workflow-v1"}\n',
        ".agents/skills/fde-spread/references/axioms.md": "# 公理\n\n## AXIOM-01：定位\n\n没有知识库配置就不猜路径。\n\n## AXIOM-02：最小读取\n\n只读取当前任务需要的资产。\n\n## AXIOM-03：证据\n\n事实和推断分开，关键判断附来源。\n\n## AXIOM-04：可恢复\n\n原始材料不覆盖，破坏性动作先确认。\n\n## AXIOM-05：闭环\n\n交付说明结果、写入位置、未知项和下一步。\n",
        ".agents/skills/fde-spread/references/behavior-tests.json": '[\n  {\n    "id": "case-1",\n    "prompt": "使用 fde-spread 完成：没有发布数据时只列出所需指标，不下传播效果结论。",\n    "must_do": [\n      "没有发布数据时只列出所需指标，不下传播效果结论",\n      "有数据时用评论和指标验证",\n      "分析受众情绪、有效立场和传播动作"\n    ],\n    "must_not": [\n      "编造事实",\n      "跨项目读取"\n    ]\n  },\n  {\n    "id": "case-2",\n    "prompt": "继续使用 fde-spread 完成：区分相关性和因果。",\n    "must_do": [\n      "区分相关性和因果",\n      "返回来源",\n      "说明未确认项"\n    ],\n    "must_not": [\n      "把推断写成事实",\n      "覆盖原始材料"\n    ]\n  },\n  {\n    "id": "counterexample-1",\n    "prompt": "找不到配置，但要求 fde-spread 批量写入。",\n    "must_do": [\n      "停止写入",\n      "询问根目录"\n    ],\n    "must_not": [\n      "猜路径",\n      "写入用户主目录"\n    ]\n  }\n]\n',
        ".agents/skills/fde-spread/references/capability-contract.json": '{\n  "skill": "fde-spread",\n  "implementation": "fde-skills-owned",\n  "runtime_uses_historical_skill": false,\n  "must_support": [\n    "没有发布数据时只列出所需指标，不下传播效果结论",\n    "有数据时用评论和指标验证",\n    "分析受众情绪、有效立场和传播动作",\n    "给出可继续讨论的方向",\n    "区分相关性和因果"\n  ],\n  "tests": [\n    "case-1",\n    "case-2",\n    "counterexample-1"\n  ]\n}\n',
        ".agents/skills/fde-spread/references/cases.md": "# 案例\n\n## 正常\n\n配置可读，fde-spread 只读取所需资产，交付附来源。\n\n## 资料不足\n\n完成有证据的部分，把缺口留给用户。\n\n## 停止\n\n找不到配置或请求越过项目边界时停止写入。\n",
        ".agents/skills/fde-spread/references/library-map.md": "# 六类资产映射\n\n运行时以知识库根目录的 `.fde/config.yaml` 为准。\n\n- owner：个人说明书\n- product：产品库\n- customer：客户需求库\n- case：素材案例库\n- method：方法论库\n- content：内容生产\n\n不得把这些显示名当成固定路径。\n",
        ".agents/skills/fde-spread/references/maturity.json": '{\n  "status": "project-owned-v1",\n  "source_role": "historical_reference_only",\n  "live_customer_test": false\n}\n',
        ".agents/skills/fde-spread/references/method.md": "# 传播复盘方法\n\n## 输入\n\n- 原内容\n- 平台数据\n- 评论和转发语\n- 发布时间和分发方式\n- 同账号基线\n\n## 步骤\n\n1. 先确认用户上传或回填的发布数据对应哪一篇已发布内容，并确认指标口径。\n2. 没有数据时只列出需要补充的指标和平台导出文件，不生成数据结论。\n3. 有数据时确认口径和基线，拆分曝光、停留、互动、转发和转化信号。\n4. 用评论原话验证受众情绪和有效立场，不替读者发明动机。\n5. 输出可继续讨论的方向、反证和下一次实验。\n\n## 交付\n\n- 数据摘要\n- 有效信号\n- 可能机制\n- 反证\n- 下一次实验\n\n## 停止\n\n- 没有用户上传或回填的真实数据时不生成数据结论\n- 平台口径不同不直接横比\n- 相关性不写成因果\n",
        ".agents/skills/fde-spread/references/source-evidence.md": "# 当前实现证据\n\n- 工作流规格：`tools/rewrite-owned-suite.py` 的 `fde-spread`。\n- 六类资产路径：`六类资产库目录模板/.fde/config.yaml`。\n- 名称和历史映射：`改造清单/skill-manifest.json`。\n- 相似度验收：`tools/check-source-similarity.py`。\n",
        ".agents/skills/fde-spread/references/source-map.md": "# 来源映射\n\n## 当前实现\n\n- 运行流程由 `tools/rewrite-owned-suite.py` 中的 `fde-spread` 规格生成。\n- 资产模型来自本项目 `六类资产库目录模板/.fde/config.yaml`。\n- 用户要求是：英文 `fde-` 名称、易于理解、服务当前六类资产库。\n\n## 历史对照\n\n- 历史能力对照：`dbskill-upstream/skills/dbs-spread`。\n- 固定快照：`v2.17.15`，commit `af99c577bfb9f1926236671a882b15030242fe8b`。\n- 该快照只用于能力盘点、相似度检查和署名追溯，不在运行时加载。\n\n历史对照不代表当前运行规则。商业许可仍按项目 `NOTICE.md` 和授权清单处理。\n",
        ".agents/skills/fde-spread/SKILL.md": "---\nname: fde-spread\ndescription: |\n  根据真实发布数据、评论和转发语境分析内容为什么传播或没有传播。触发方式：/fde-spread、「为什么这条传播了」「复盘内容数据」。\n---\n\n# 传播复盘\n\n<!-- FDE-OWNED-WORKFLOW: v1 -->\n\n## 开始前\n\n1. 从当前目录向上找到 `.fde/config.yaml`，按配置解析六类资产库。\n2. 只读取本任务需要的文件，不跨知识库搜索。\n3. 把库内事实、用户本轮信息、当前推断和未知项分开。\n4. 原始材料不覆盖；删除、移动和批量写入先确认。\n\n## 读取\n\n- 原内容\n- 平台数据\n- 评论和转发语\n- 发布时间和分发方式\n- 同账号基线\n\n## 必须保留的能力\n\n- 没有发布数据时只列出所需指标，不下传播效果结论\n- 有数据时用评论和指标验证\n- 分析受众情绪、有效立场和传播动作\n- 给出可继续讨论的方向\n- 区分相关性和因果\n\n## 执行\n\n1. 先确认用户是否上传或回填了真实发布数据，以及数据对应哪一篇已发布内容。\n2. 没有数据时只列出需要用户补充的指标和导出文件，不生成数据结论。\n3. 有数据时确认口径和基线，拆分曝光、停留、互动、转发和转化信号。\n4. 用评论原话验证受众情绪和有效立场，不替读者发明动机。\n5. 输出可继续讨论的方向、反证和下一次实验。\n\n## 交付\n\n- 数据摘要\n- 有效信号\n- 可能机制\n- 反证\n- 下一次实验\n\n每个关键判断附来源路径；没有来源的内容标为推断或待确认。\n\n## 写回\n\n- 分析记录写入内容库的 `发布数据/分析`，关联原发布稿\n- 不移动原发布稿，不改变其 `已发布` 阶段\n\n## 停止条件\n\n- 没有用户上传或回填的真实数据时不生成数据结论\n- 平台口径不同不直接横比\n- 相关性不写成因果\n\n## 接续\n\n- 下一题用 fde-topics\n- 下一稿用 fde-write\n\n来源沿革只用于追溯，不作为运行指令。需要追溯时读取 `references/source-map.md`。\n",
        ".agents/skills/fde-start/agents/openai.yaml": 'interface:\n  display_name: "知识库入口"\n  short_description: "读取当前六类资产知识库，执行知识库入口并返回来源、结果和未确认项。"\n  default_prompt: "请使用 $fde-start 处理当前知识库里的真实任务，并说明来源和未确认项。"\n',
        ".agents/skills/fde-start/references/acceptance.md": "# 验收\n\n- [ ] fde-start 使用当前知识库配置。\n- [ ] 读取范围与任务有关。\n- [ ] 事实、推断和未知分开。\n- [ ] 关键判断有来源。\n- [ ] 破坏性动作先确认。\n- [ ] 输出包含：当前任务类型、选择的一个 Skill、选择依据、执行所需的现有输入。\n- [ ] 能力：完整讲解第一次使用方法。\n- [ ] 能力：任务开始前选择一个入口。\n- [ ] 能力：根据上一步结果继续导航。\n- [ ] 能力：路由后直接执行，不让用户重复输入。\n",
        ".agents/skills/fde-start/references/atoms.jsonl": '{"id": "FDE-START-001", "rule": "先定位当前知识库配置，再读取资料。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-START-002", "rule": "只加载当前任务需要的资产。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-START-003", "rule": "区分事实、用户陈述、推断和未知。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-START-004", "rule": "关键结论返回来源路径。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-START-005", "rule": "原始材料保持不变。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-START-006", "rule": "批量写入、移动、覆盖和删除先确认。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-START-007", "rule": "不跨客户或跨项目读取。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-START-008", "rule": "资料不足时完成证据允许的部分。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-START-009", "rule": "不能确认的分类进入待确认区。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-START-010", "rule": "交付后说明写入位置和未完成项。", "source": "fde-skills-workflow-v1"}\n',
        ".agents/skills/fde-start/references/axioms.md": "# 公理\n\n## AXIOM-01：定位\n\n没有知识库配置就不猜路径。\n\n## AXIOM-02：最小读取\n\n只读取当前任务需要的资产。\n\n## AXIOM-03：证据\n\n事实和推断分开，关键判断附来源。\n\n## AXIOM-04：可恢复\n\n原始材料不覆盖，破坏性动作先确认。\n\n## AXIOM-05：闭环\n\n交付说明结果、写入位置、未知项和下一步。\n",
        ".agents/skills/fde-start/references/behavior-tests.json": '[\n  {\n    "id": "case-1",\n    "prompt": "使用 fde-start 完成：完整讲解第一次使用方法。",\n    "must_do": [\n      "完整讲解第一次使用方法",\n      "任务开始前选择一个入口",\n      "根据上一步结果继续导航"\n    ],\n    "must_not": [\n      "编造事实",\n      "跨项目读取"\n    ]\n  },\n  {\n    "id": "case-2",\n    "prompt": "继续使用 fde-start 完成：路由后直接执行，不让用户重复输入。",\n    "must_do": [\n      "路由后直接执行，不让用户重复输入",\n      "返回来源",\n      "说明未确认项"\n    ],\n    "must_not": [\n      "把推断写成事实",\n      "覆盖原始材料"\n    ]\n  },\n  {\n    "id": "counterexample-1",\n    "prompt": "找不到配置，但要求 fde-start 批量写入。",\n    "must_do": [\n      "停止写入",\n      "询问根目录"\n    ],\n    "must_not": [\n      "猜路径",\n      "写入用户主目录"\n    ]\n  }\n]\n',
        ".agents/skills/fde-start/references/capability-contract.json": '{\n  "skill": "fde-start",\n  "implementation": "fde-skills-owned",\n  "runtime_uses_historical_skill": false,\n  "must_support": [\n    "完整讲解第一次使用方法",\n    "任务开始前选择一个入口",\n    "根据上一步结果继续导航",\n    "路由后直接执行，不让用户重复输入"\n  ],\n  "tests": [\n    "case-1",\n    "case-2",\n    "counterexample-1"\n  ]\n}\n',
        ".agents/skills/fde-start/references/cases.md": "# 案例\n\n## 正常\n\n配置可读，fde-start 只读取所需资产，交付附来源。\n\n## 资料不足\n\n完成有证据的部分，把缺口留给用户。\n\n## 停止\n\n找不到配置或请求越过项目边界时停止写入。\n",
        ".agents/skills/fde-start/references/library-map.md": "# 六类资产映射\n\n运行时以知识库根目录的 `.fde/config.yaml` 为准。\n\n- owner：个人说明书\n- product：产品库\n- customer：客户需求库\n- case：素材案例库\n- method：方法论库\n- content：内容生产\n\n不得把这些显示名当成固定路径。\n",
        ".agents/skills/fde-start/references/maturity.json": '{\n  "status": "project-owned-v1",\n  "source_role": "historical_reference_only",\n  "live_customer_test": false\n}\n',
        ".agents/skills/fde-start/references/method.md": "# 知识库入口方法\n\n## 输入\n\n- `.fde/config.yaml`\n- 六类资产库的文件数量和最近更新时间\n- 当前对话中的目标、材料和限制\n\n## 步骤\n\n1. 用户要求新手说明时，先讲可以交什么、系统怎样处理、会得到什么，再进入真实任务。\n2. 判断是空库、进料、查资料、做判断、做内容还是维护任务。\n3. 信息足够时直接选一个 Skill；信息不足时只问一个会改变路由的问题。\n4. 任务完成后读取实际结果，再选一个下一入口；说明依据并直接继续。\n\n## 交付\n\n- 当前任务类型\n- 选择的一个 Skill\n- 选择依据\n- 执行所需的现有输入\n\n## 停止\n\n- 找不到配置时停止路由并询问知识库位置\n- 两个方向无法区分时只问一个问题\n",
        ".agents/skills/fde-start/references/source-evidence.md": "# 当前实现证据\n\n- 工作流规格：`tools/rewrite-owned-suite.py` 的 `fde-start`。\n- 六类资产路径：`六类资产库目录模板/.fde/config.yaml`。\n- 名称和历史映射：`改造清单/skill-manifest.json`。\n- 相似度验收：`tools/check-source-similarity.py`。\n",
        ".agents/skills/fde-start/references/source-map.md": "# 来源映射\n\n## 当前实现\n\n- 运行流程由 `tools/rewrite-owned-suite.py` 中的 `fde-start` 规格生成。\n- 资产模型来自本项目 `六类资产库目录模板/.fde/config.yaml`。\n- 用户要求是：英文 `fde-` 名称、易于理解、服务当前六类资产库。\n\n## 历史对照\n\n- 历史能力对照：`dbskill-upstream/skills/dbs`。\n- 固定快照：`v2.17.15`，commit `af99c577bfb9f1926236671a882b15030242fe8b`。\n- 该快照只用于能力盘点、相似度检查和署名追溯，不在运行时加载。\n\n历史对照不代表当前运行规则。商业许可仍按项目 `NOTICE.md` 和授权清单处理。\n",
        ".agents/skills/fde-start/SKILL.md": "---\nname: fde-start\ndescription: |\n  读取当前六类资产库的状态和用户任务，只选择一个当前入口。适用于不知道从哪里开始、刚导入材料或完成一步后继续推进。触发方式：/fde-start、「从哪里开始」「下一步」。\n---\n\n# 知识库入口\n\n<!-- FDE-OWNED-WORKFLOW: v1 -->\n\n## 开始前\n\n1. 从当前目录向上找到 `.fde/config.yaml`，按配置解析六类资产库。\n2. 只读取本任务需要的文件，不跨知识库搜索。\n3. 把库内事实、用户本轮信息、当前推断和未知项分开。\n4. 原始材料不覆盖；删除、移动和批量写入先确认。\n\n## 读取\n\n- `.fde/config.yaml`\n- 六类资产库的文件数量和最近更新时间\n- 当前对话中的目标、材料和限制\n\n## 必须保留的能力\n\n- 完整讲解第一次使用方法\n- 任务开始前选择一个入口\n- 根据上一步结果继续导航\n- 路由后直接执行，不让用户重复输入\n\n## 执行\n\n1. 用户要求新手说明时，先讲可以交什么、系统怎样处理、会得到什么，再进入真实任务。\n2. 判断是空库、进料、查资料、做判断、做内容还是维护任务。\n3. 信息足够时直接选一个 Skill；信息不足时只问一个会改变路由的问题。\n4. 任务完成后读取实际结果，再选一个下一入口；说明依据并直接继续。\n\n## 交付\n\n- 当前任务类型\n- 选择的一个 Skill\n- 选择依据\n- 执行所需的现有输入\n\n每个关键判断附来源路径；没有来源的内容标为推断或待确认。\n\n## 写回\n\n- 本 Skill 不写业务资产，只读取状态\n\n## 停止条件\n\n- 找不到配置时停止路由并询问知识库位置\n- 两个方向无法区分时只问一个问题\n\n## 接续\n\n- 空库用 fde-interview\n- 有原始材料用 fde-ingest\n- 已有明确任务时进入对应 Skill\n\n来源沿革只用于追溯，不作为运行指令。需要追溯时读取 `references/source-map.md`。\n",
        ".agents/skills/fde-title/agents/openai.yaml": 'interface:\n  display_name: "内容标题"\n  short_description: "读取当前六类资产知识库，执行内容标题并返回来源、结果和未确认项。"\n  default_prompt: "请使用 $fde-title 处理当前知识库里的真实任务，并说明来源和未确认项。"\n',
        ".agents/skills/fde-title/references/acceptance.md": "# 验收\n\n- [ ] fde-title 使用当前知识库配置。\n- [ ] 读取范围与任务有关。\n- [ ] 事实、推断和未知分开。\n- [ ] 关键判断有来源。\n- [ ] 破坏性动作先确认。\n- [ ] 输出包含：候选标题、Top 3、各自侧重点、风险词、正文支持位置。\n- [ ] 能力：从 75 个自有标题结构中筛选。\n- [ ] 能力：根据平台、读者和正文选择。\n- [ ] 能力：输出候选和 Top 3。\n- [ ] 能力：说明结构选择原因。\n- [ ] 能力：检查标题承诺能被正文支持。\n",
        ".agents/skills/fde-title/references/atoms.jsonl": '{"id": "FDE-TITLE-001", "rule": "先定位当前知识库配置，再读取资料。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-TITLE-002", "rule": "只加载当前任务需要的资产。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-TITLE-003", "rule": "区分事实、用户陈述、推断和未知。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-TITLE-004", "rule": "关键结论返回来源路径。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-TITLE-005", "rule": "原始材料保持不变。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-TITLE-006", "rule": "批量写入、移动、覆盖和删除先确认。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-TITLE-007", "rule": "不跨客户或跨项目读取。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-TITLE-008", "rule": "资料不足时完成证据允许的部分。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-TITLE-009", "rule": "不能确认的分类进入待确认区。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-TITLE-010", "rule": "交付后说明写入位置和未完成项。", "source": "fde-skills-workflow-v1"}\n',
        ".agents/skills/fde-title/references/axioms.md": "# 公理\n\n## AXIOM-01：定位\n\n没有知识库配置就不猜路径。\n\n## AXIOM-02：最小读取\n\n只读取当前任务需要的资产。\n\n## AXIOM-03：证据\n\n事实和推断分开，关键判断附来源。\n\n## AXIOM-04：可恢复\n\n原始材料不覆盖，破坏性动作先确认。\n\n## AXIOM-05：闭环\n\n交付说明结果、写入位置、未知项和下一步。\n",
        ".agents/skills/fde-title/references/behavior-tests.json": '[\n  {\n    "id": "case-1",\n    "prompt": "使用 fde-title 完成：从 75 个自有标题结构中筛选。",\n    "must_do": [\n      "从 75 个自有标题结构中筛选",\n      "根据平台、读者和正文选择",\n      "输出候选和 Top 3"\n    ],\n    "must_not": [\n      "编造事实",\n      "跨项目读取"\n    ]\n  },\n  {\n    "id": "case-2",\n    "prompt": "继续使用 fde-title 完成：检查标题承诺能被正文支持。",\n    "must_do": [\n      "检查标题承诺能被正文支持",\n      "返回来源",\n      "说明未确认项"\n    ],\n    "must_not": [\n      "把推断写成事实",\n      "覆盖原始材料"\n    ]\n  },\n  {\n    "id": "counterexample-1",\n    "prompt": "找不到配置，但要求 fde-title 批量写入。",\n    "must_do": [\n      "停止写入",\n      "询问根目录"\n    ],\n    "must_not": [\n      "猜路径",\n      "写入用户主目录"\n    ]\n  }\n]\n',
        ".agents/skills/fde-title/references/capability-contract.json": '{\n  "skill": "fde-title",\n  "implementation": "fde-skills-owned",\n  "runtime_uses_historical_skill": false,\n  "must_support": [\n    "从 75 个自有标题结构中筛选",\n    "根据平台、读者和正文选择",\n    "输出候选和 Top 3",\n    "说明结构选择原因",\n    "检查标题承诺能被正文支持"\n  ],\n  "tests": [\n    "case-1",\n    "case-2",\n    "counterexample-1"\n  ]\n}\n',
        ".agents/skills/fde-title/references/cases.md": "# 案例\n\n## 正常\n\n配置可读，fde-title 只读取所需资产，交付附来源。\n\n## 资料不足\n\n完成有证据的部分，把缺口留给用户。\n\n## 停止\n\n找不到配置或请求越过项目边界时停止写入。\n",
        ".agents/skills/fde-title/references/library-map.md": "# 六类资产映射\n\n运行时以知识库根目录的 `.fde/config.yaml` 为准。\n\n- owner：个人说明书\n- product：产品库\n- customer：客户需求库\n- case：素材案例库\n- method：方法论库\n- content：内容生产\n\n不得把这些显示名当成固定路径。\n",
        ".agents/skills/fde-title/references/maturity.json": '{\n  "status": "project-owned-v1",\n  "source_role": "historical_reference_only",\n  "live_customer_test": false\n}\n',
        ".agents/skills/fde-title/references/method.md": "# 内容标题方法\n\n## 输入\n\n- 正文或提纲\n- 目标读者\n- 平台\n- 可用数字和结果\n- 禁用表达\n- references/title-patterns.json\n\n## 步骤\n\n1. 先用一句话概括正文真实交付。\n2. 提取对象、问题、变化和限制。\n3. 从 75 个自有结构中按平台和材料筛选，再生成 8—12 个标题。\n4. 检查每个标题是否能由正文支持，筛出 3 个并说明使用的结构。\n\n## 交付\n\n- 候选标题\n- Top 3\n- 各自侧重点\n- 风险词\n- 正文支持位置\n\n## 停止\n\n- 正文没有明确交付时先不做标题\n- 不得添加正文没有的数字或结果\n- 平台规则不确定时标记核验\n",
        ".agents/skills/fde-title/references/source-evidence.md": "# 当前实现证据\n\n- 工作流规格：`tools/rewrite-owned-suite.py` 的 `fde-title`。\n- 六类资产路径：`六类资产库目录模板/.fde/config.yaml`。\n- 名称和历史映射：`改造清单/skill-manifest.json`。\n- 相似度验收：`tools/check-source-similarity.py`。\n",
        ".agents/skills/fde-title/references/source-map.md": "# 来源映射\n\n## 当前实现\n\n- 运行流程由 `tools/rewrite-owned-suite.py` 中的 `fde-title` 规格生成。\n- 资产模型来自本项目 `六类资产库目录模板/.fde/config.yaml`。\n- 用户要求是：英文 `fde-` 名称、易于理解、服务当前六类资产库。\n\n## 历史对照\n\n- 历史能力对照：`dbskill-upstream/skills/dbs-xhs-title`。\n- 固定快照：`v2.17.15`，commit `af99c577bfb9f1926236671a882b15030242fe8b`。\n- 该快照只用于能力盘点、相似度检查和署名追溯，不在运行时加载。\n\n历史对照不代表当前运行规则。商业许可仍按项目 `NOTICE.md` 和授权清单处理。\n",
        ".agents/skills/fde-title/references/title-patterns.json": '[\n  {\n    "id": "T001",\n    "angle": "problem",\n    "pattern": "{audience}遇到{problem}，先检查{condition}",\n    "required_fields": [\n      "audience",\n      "condition",\n      "problem"\n    ]\n  },\n  {\n    "id": "T002",\n    "angle": "problem",\n    "pattern": "别急着{common_action}：{problem}可能卡在{condition}",\n    "required_fields": [\n      "common_action",\n      "condition",\n      "problem"\n    ]\n  },\n  {\n    "id": "T003",\n    "angle": "problem",\n    "pattern": "关于{problem}，我只看这{number}个信号",\n    "required_fields": [\n      "number",\n      "problem"\n    ]\n  },\n  {\n    "id": "T004",\n    "angle": "problem",\n    "pattern": "做{problem}之前，先回答这个问题",\n    "required_fields": [\n      "problem"\n    ]\n  },\n  {\n    "id": "T005",\n    "angle": "problem",\n    "pattern": "{problem}没有结果，通常漏了{missing_piece}",\n    "required_fields": [\n      "missing_piece",\n      "problem"\n    ]\n  },\n  {\n    "id": "T006",\n    "angle": "problem",\n    "pattern": "我处理{problem}时，会先删掉{wrong_action}",\n    "required_fields": [\n      "problem",\n      "wrong_action"\n    ]\n  },\n  {\n    "id": "T007",\n    "angle": "problem",\n    "pattern": "一个{case_type}案例说清{problem}",\n    "required_fields": [\n      "case_type",\n      "problem"\n    ]\n  },\n  {\n    "id": "T008",\n    "angle": "problem",\n    "pattern": "{problem}从{before}到{after}，中间改了什么",\n    "required_fields": [\n      "after",\n      "before",\n      "problem"\n    ]\n  },\n  {\n    "id": "T009",\n    "angle": "problem",\n    "pattern": "为什么{audience}总在{problem}这里停住",\n    "required_fields": [\n      "audience",\n      "problem"\n    ]\n  },\n  {\n    "id": "T010",\n    "angle": "problem",\n    "pattern": "{problem}不是越多越好，边界在{condition}",\n    "required_fields": [\n      "condition",\n      "problem"\n    ]\n  },\n  {\n    "id": "T011",\n    "angle": "problem",\n    "pattern": "如果重新做{problem}，我会先做{first_step}",\n    "required_fields": [\n      "first_step",\n      "problem"\n    ]\n  },\n  {\n    "id": "T012",\n    "angle": "problem",\n    "pattern": "{problem}的成本，不只是在{visible_cost}",\n    "required_fields": [\n      "problem",\n      "visible_cost"\n    ]\n  },\n  {\n    "id": "T013",\n    "angle": "problem",\n    "pattern": "判断{problem}是否成立，看{evidence}",\n    "required_fields": [\n      "evidence",\n      "problem"\n    ]\n  },\n  {\n    "id": "T014",\n    "angle": "problem",\n    "pattern": "{audience}问我{problem}，我的回答是{answer}",\n    "required_fields": [\n      "answer",\n      "audience",\n      "problem"\n    ]\n  },\n  {\n    "id": "T015",\n    "angle": "problem",\n    "pattern": "{problem}做对之后，下一步不是{wrong_action}",\n    "required_fields": [\n      "problem",\n      "wrong_action"\n    ]\n  },\n  {\n    "id": "T016",\n    "angle": "result",\n    "pattern": "{audience}遇到得到{result}，先检查{condition}",\n    "required_fields": [\n      "audience",\n      "condition",\n      "result"\n    ]\n  },\n  {\n    "id": "T017",\n    "angle": "result",\n    "pattern": "别急着{common_action}：得到{result}可能卡在{condition}",\n    "required_fields": [\n      "common_action",\n      "condition",\n      "result"\n    ]\n  },\n  {\n    "id": "T018",\n    "angle": "result",\n    "pattern": "关于得到{result}，我只看这{number}个信号",\n    "required_fields": [\n      "number",\n      "result"\n    ]\n  },\n  {\n    "id": "T019",\n    "angle": "result",\n    "pattern": "做得到{result}之前，先回答这个问题",\n    "required_fields": [\n      "result"\n    ]\n  },\n  {\n    "id": "T020",\n    "angle": "result",\n    "pattern": "得到{result}没有结果，通常漏了{missing_piece}",\n    "required_fields": [\n      "missing_piece",\n      "result"\n    ]\n  },\n  {\n    "id": "T021",\n    "angle": "result",\n    "pattern": "我处理得到{result}时，会先删掉{wrong_action}",\n    "required_fields": [\n      "result",\n      "wrong_action"\n    ]\n  },\n  {\n    "id": "T022",\n    "angle": "result",\n    "pattern": "一个{case_type}案例说清得到{result}",\n    "required_fields": [\n      "case_type",\n      "result"\n    ]\n  },\n  {\n    "id": "T023",\n    "angle": "result",\n    "pattern": "得到{result}从{before}到{after}，中间改了什么",\n    "required_fields": [\n      "after",\n      "before",\n      "result"\n    ]\n  },\n  {\n    "id": "T024",\n    "angle": "result",\n    "pattern": "为什么{audience}总在得到{result}这里停住",\n    "required_fields": [\n      "audience",\n      "result"\n    ]\n  },\n  {\n    "id": "T025",\n    "angle": "result",\n    "pattern": "得到{result}不是越多越好，边界在{condition}",\n    "required_fields": [\n      "condition",\n      "result"\n    ]\n  },\n  {\n    "id": "T026",\n    "angle": "result",\n    "pattern": "如果重新做得到{result}，我会先做{first_step}",\n    "required_fields": [\n      "first_step",\n      "result"\n    ]\n  },\n  {\n    "id": "T027",\n    "angle": "result",\n    "pattern": "得到{result}的成本，不只是在{visible_cost}",\n    "required_fields": [\n      "result",\n      "visible_cost"\n    ]\n  },\n  {\n    "id": "T028",\n    "angle": "result",\n    "pattern": "判断得到{result}是否成立，看{evidence}",\n    "required_fields": [\n      "evidence",\n      "result"\n    ]\n  },\n  {\n    "id": "T029",\n    "angle": "result",\n    "pattern": "{audience}问我得到{result}，我的回答是{answer}",\n    "required_fields": [\n      "answer",\n      "audience",\n      "result"\n    ]\n  },\n  {\n    "id": "T030",\n    "angle": "result",\n    "pattern": "得到{result}做对之后，下一步不是{wrong_action}",\n    "required_fields": [\n      "result",\n      "wrong_action"\n    ]\n  },\n  {\n    "id": "T031",\n    "angle": "decision",\n    "pattern": "{audience}遇到决定是否{decision}，先检查{condition}",\n    "required_fields": [\n      "audience",\n      "condition",\n      "decision"\n    ]\n  },\n  {\n    "id": "T032",\n    "angle": "decision",\n    "pattern": "别急着{common_action}：决定是否{decision}可能卡在{condition}",\n    "required_fields": [\n      "common_action",\n      "condition",\n      "decision"\n    ]\n  },\n  {\n    "id": "T033",\n    "angle": "decision",\n    "pattern": "关于决定是否{decision}，我只看这{number}个信号",\n    "required_fields": [\n      "decision",\n      "number"\n    ]\n  },\n  {\n    "id": "T034",\n    "angle": "decision",\n    "pattern": "做决定是否{decision}之前，先回答这个问题",\n    "required_fields": [\n      "decision"\n    ]\n  },\n  {\n    "id": "T035",\n    "angle": "decision",\n    "pattern": "决定是否{decision}没有结果，通常漏了{missing_piece}",\n    "required_fields": [\n      "decision",\n      "missing_piece"\n    ]\n  },\n  {\n    "id": "T036",\n    "angle": "decision",\n    "pattern": "我处理决定是否{decision}时，会先删掉{wrong_action}",\n    "required_fields": [\n      "decision",\n      "wrong_action"\n    ]\n  },\n  {\n    "id": "T037",\n    "angle": "decision",\n    "pattern": "一个{case_type}案例说清决定是否{decision}",\n    "required_fields": [\n      "case_type",\n      "decision"\n    ]\n  },\n  {\n    "id": "T038",\n    "angle": "decision",\n    "pattern": "决定是否{decision}从{before}到{after}，中间改了什么",\n    "required_fields": [\n      "after",\n      "before",\n      "decision"\n    ]\n  },\n  {\n    "id": "T039",\n    "angle": "decision",\n    "pattern": "为什么{audience}总在决定是否{decision}这里停住",\n    "required_fields": [\n      "audience",\n      "decision"\n    ]\n  },\n  {\n    "id": "T040",\n    "angle": "decision",\n    "pattern": "决定是否{decision}不是越多越好，边界在{condition}",\n    "required_fields": [\n      "condition",\n      "decision"\n    ]\n  },\n  {\n    "id": "T041",\n    "angle": "decision",\n    "pattern": "如果重新做决定是否{decision}，我会先做{first_step}",\n    "required_fields": [\n      "decision",\n      "first_step"\n    ]\n  },\n  {\n    "id": "T042",\n    "angle": "decision",\n    "pattern": "决定是否{decision}的成本，不只是在{visible_cost}",\n    "required_fields": [\n      "decision",\n      "visible_cost"\n    ]\n  },\n  {\n    "id": "T043",\n    "angle": "decision",\n    "pattern": "判断决定是否{decision}是否成立，看{evidence}",\n    "required_fields": [\n      "decision",\n      "evidence"\n    ]\n  },\n  {\n    "id": "T044",\n    "angle": "decision",\n    "pattern": "{audience}问我决定是否{decision}，我的回答是{answer}",\n    "required_fields": [\n      "answer",\n      "audience",\n      "decision"\n    ]\n  },\n  {\n    "id": "T045",\n    "angle": "decision",\n    "pattern": "决定是否{decision}做对之后，下一步不是{wrong_action}",\n    "required_fields": [\n      "decision",\n      "wrong_action"\n    ]\n  },\n  {\n    "id": "T046",\n    "angle": "case",\n    "pattern": "{audience}遇到案例中的{case_change}，先检查{condition}",\n    "required_fields": [\n      "audience",\n      "case_change",\n      "condition"\n    ]\n  },\n  {\n    "id": "T047",\n    "angle": "case",\n    "pattern": "别急着{common_action}：案例中的{case_change}可能卡在{condition}",\n    "required_fields": [\n      "case_change",\n      "common_action",\n      "condition"\n    ]\n  },\n  {\n    "id": "T048",\n    "angle": "case",\n    "pattern": "关于案例中的{case_change}，我只看这{number}个信号",\n    "required_fields": [\n      "case_change",\n      "number"\n    ]\n  },\n  {\n    "id": "T049",\n    "angle": "case",\n    "pattern": "做案例中的{case_change}之前，先回答这个问题",\n    "required_fields": [\n      "case_change"\n    ]\n  },\n  {\n    "id": "T050",\n    "angle": "case",\n    "pattern": "案例中的{case_change}没有结果，通常漏了{missing_piece}",\n    "required_fields": [\n      "case_change",\n      "missing_piece"\n    ]\n  },\n  {\n    "id": "T051",\n    "angle": "case",\n    "pattern": "我处理案例中的{case_change}时，会先删掉{wrong_action}",\n    "required_fields": [\n      "case_change",\n      "wrong_action"\n    ]\n  },\n  {\n    "id": "T052",\n    "angle": "case",\n    "pattern": "一个{case_type}案例说清案例中的{case_change}",\n    "required_fields": [\n      "case_change",\n      "case_type"\n    ]\n  },\n  {\n    "id": "T053",\n    "angle": "case",\n    "pattern": "案例中的{case_change}从{before}到{after}，中间改了什么",\n    "required_fields": [\n      "after",\n      "before",\n      "case_change"\n    ]\n  },\n  {\n    "id": "T054",\n    "angle": "case",\n    "pattern": "为什么{audience}总在案例中的{case_change}这里停住",\n    "required_fields": [\n      "audience",\n      "case_change"\n    ]\n  },\n  {\n    "id": "T055",\n    "angle": "case",\n    "pattern": "案例中的{case_change}不是越多越好，边界在{condition}",\n    "required_fields": [\n      "case_change",\n      "condition"\n    ]\n  },\n  {\n    "id": "T056",\n    "angle": "case",\n    "pattern": "如果重新做案例中的{case_change}，我会先做{first_step}",\n    "required_fields": [\n      "case_change",\n      "first_step"\n    ]\n  },\n  {\n    "id": "T057",\n    "angle": "case",\n    "pattern": "案例中的{case_change}的成本，不只是在{visible_cost}",\n    "required_fields": [\n      "case_change",\n      "visible_cost"\n    ]\n  },\n  {\n    "id": "T058",\n    "angle": "case",\n    "pattern": "判断案例中的{case_change}是否成立，看{evidence}",\n    "required_fields": [\n      "case_change",\n      "evidence"\n    ]\n  },\n  {\n    "id": "T059",\n    "angle": "case",\n    "pattern": "{audience}问我案例中的{case_change}，我的回答是{answer}",\n    "required_fields": [\n      "answer",\n      "audience",\n      "case_change"\n    ]\n  },\n  {\n    "id": "T060",\n    "angle": "case",\n    "pattern": "案例中的{case_change}做对之后，下一步不是{wrong_action}",\n    "required_fields": [\n      "case_change",\n      "wrong_action"\n    ]\n  },\n  {\n    "id": "T061",\n    "angle": "method",\n    "pattern": "{audience}遇到使用{method}，先检查{condition}",\n    "required_fields": [\n      "audience",\n      "condition",\n      "method"\n    ]\n  },\n  {\n    "id": "T062",\n    "angle": "method",\n    "pattern": "别急着{common_action}：使用{method}可能卡在{condition}",\n    "required_fields": [\n      "common_action",\n      "condition",\n      "method"\n    ]\n  },\n  {\n    "id": "T063",\n    "angle": "method",\n    "pattern": "关于使用{method}，我只看这{number}个信号",\n    "required_fields": [\n      "method",\n      "number"\n    ]\n  },\n  {\n    "id": "T064",\n    "angle": "method",\n    "pattern": "做使用{method}之前，先回答这个问题",\n    "required_fields": [\n      "method"\n    ]\n  },\n  {\n    "id": "T065",\n    "angle": "method",\n    "pattern": "使用{method}没有结果，通常漏了{missing_piece}",\n    "required_fields": [\n      "method",\n      "missing_piece"\n    ]\n  },\n  {\n    "id": "T066",\n    "angle": "method",\n    "pattern": "我处理使用{method}时，会先删掉{wrong_action}",\n    "required_fields": [\n      "method",\n      "wrong_action"\n    ]\n  },\n  {\n    "id": "T067",\n    "angle": "method",\n    "pattern": "一个{case_type}案例说清使用{method}",\n    "required_fields": [\n      "case_type",\n      "method"\n    ]\n  },\n  {\n    "id": "T068",\n    "angle": "method",\n    "pattern": "使用{method}从{before}到{after}，中间改了什么",\n    "required_fields": [\n      "after",\n      "before",\n      "method"\n    ]\n  },\n  {\n    "id": "T069",\n    "angle": "method",\n    "pattern": "为什么{audience}总在使用{method}这里停住",\n    "required_fields": [\n      "audience",\n      "method"\n    ]\n  },\n  {\n    "id": "T070",\n    "angle": "method",\n    "pattern": "使用{method}不是越多越好，边界在{condition}",\n    "required_fields": [\n      "condition",\n      "method"\n    ]\n  },\n  {\n    "id": "T071",\n    "angle": "method",\n    "pattern": "如果重新做使用{method}，我会先做{first_step}",\n    "required_fields": [\n      "first_step",\n      "method"\n    ]\n  },\n  {\n    "id": "T072",\n    "angle": "method",\n    "pattern": "使用{method}的成本，不只是在{visible_cost}",\n    "required_fields": [\n      "method",\n      "visible_cost"\n    ]\n  },\n  {\n    "id": "T073",\n    "angle": "method",\n    "pattern": "判断使用{method}是否成立，看{evidence}",\n    "required_fields": [\n      "evidence",\n      "method"\n    ]\n  },\n  {\n    "id": "T074",\n    "angle": "method",\n    "pattern": "{audience}问我使用{method}，我的回答是{answer}",\n    "required_fields": [\n      "answer",\n      "audience",\n      "method"\n    ]\n  },\n  {\n    "id": "T075",\n    "angle": "method",\n    "pattern": "使用{method}做对之后，下一步不是{wrong_action}",\n    "required_fields": [\n      "method",\n      "wrong_action"\n    ]\n  }\n]\n',
        ".agents/skills/fde-title/SKILL.md": "---\nname: fde-title\ndescription: |\n  根据平台、选题、读者和事实生成标题，避免标题承诺超过正文证据。触发方式：/fde-title、「起标题」「给这篇小红书标题」。\n---\n\n# 内容标题\n\n<!-- FDE-OWNED-WORKFLOW: v1 -->\n\n## 开始前\n\n1. 从当前目录向上找到 `.fde/config.yaml`，按配置解析六类资产库。\n2. 只读取本任务需要的文件，不跨知识库搜索。\n3. 把库内事实、用户本轮信息、当前推断和未知项分开。\n4. 原始材料不覆盖；删除、移动和批量写入先确认。\n\n## 读取\n\n- 正文或提纲\n- 目标读者\n- 平台\n- 可用数字和结果\n- 禁用表达\n- references/title-patterns.json\n\n## 必须保留的能力\n\n- 从 75 个自有标题结构中筛选\n- 根据平台、读者和正文选择\n- 输出候选和 Top 3\n- 说明结构选择原因\n- 检查标题承诺能被正文支持\n\n## 执行\n\n1. 先用一句话概括正文真实交付。\n2. 提取对象、问题、变化和限制。\n3. 从 75 个自有结构中按平台和材料筛选，再生成 8—12 个标题。\n4. 检查每个标题是否能由正文支持，筛出 3 个并说明使用的结构。\n\n## 交付\n\n- 候选标题\n- Top 3\n- 各自侧重点\n- 风险词\n- 正文支持位置\n\n每个关键判断附来源路径；没有来源的内容标为推断或待确认。\n\n## 写回\n\n- 选定标题写回草稿头部，保留旧标题记录\n\n## 停止条件\n\n- 正文没有明确交付时先不做标题\n- 不得添加正文没有的数字或结果\n- 平台规则不确定时标记核验\n\n## 接续\n\n- 标题确定后用 fde-review\n\n来源沿革只用于追溯，不作为运行指令。需要追溯时读取 `references/source-map.md`。\n",
        ".agents/skills/fde-topics/agents/openai.yaml": 'interface:\n  display_name: "选题清单"\n  short_description: "读取当前六类资产知识库，执行选题清单并返回来源、结果和未确认项。"\n  default_prompt: "请使用 $fde-topics 处理当前知识库里的真实任务，并说明来源和未确认项。"\n',
        ".agents/skills/fde-topics/references/acceptance.md": "# 验收\n\n- [ ] fde-topics 使用当前知识库配置。\n- [ ] 读取范围与任务有关。\n- [ ] 事实、推断和未知分开。\n- [ ] 关键判断有来源。\n- [ ] 破坏性动作先确认。\n- [ ] 输出包含：5—10 个候选题、每题来源、目标读者、核心矛盾、建议平台、不选原因。\n- [ ] 能力：从六类资产和真实用户声音找题。\n- [ ] 能力：检查是否是真需求。\n- [ ] 能力：检查是否适合当前个人定位和产品。\n- [ ] 能力：检查角度是否与常见写法重复。\n- [ ] 能力：把选中题写入内容库。\n",
        ".agents/skills/fde-topics/references/atoms.jsonl": '{"id": "FDE-TOPICS-001", "rule": "先定位当前知识库配置，再读取资料。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-TOPICS-002", "rule": "只加载当前任务需要的资产。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-TOPICS-003", "rule": "区分事实、用户陈述、推断和未知。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-TOPICS-004", "rule": "关键结论返回来源路径。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-TOPICS-005", "rule": "原始材料保持不变。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-TOPICS-006", "rule": "批量写入、移动、覆盖和删除先确认。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-TOPICS-007", "rule": "不跨客户或跨项目读取。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-TOPICS-008", "rule": "资料不足时完成证据允许的部分。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-TOPICS-009", "rule": "不能确认的分类进入待确认区。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-TOPICS-010", "rule": "交付后说明写入位置和未完成项。", "source": "fde-skills-workflow-v1"}\n',
        ".agents/skills/fde-topics/references/axioms.md": "# 公理\n\n## AXIOM-01：定位\n\n没有知识库配置就不猜路径。\n\n## AXIOM-02：最小读取\n\n只读取当前任务需要的资产。\n\n## AXIOM-03：证据\n\n事实和推断分开，关键判断附来源。\n\n## AXIOM-04：可恢复\n\n原始材料不覆盖，破坏性动作先确认。\n\n## AXIOM-05：闭环\n\n交付说明结果、写入位置、未知项和下一步。\n",
        ".agents/skills/fde-topics/references/behavior-tests.json": '[\n  {\n    "id": "case-1",\n    "prompt": "使用 fde-topics 完成：从六类资产和真实用户声音找题。",\n    "must_do": [\n      "从六类资产和真实用户声音找题",\n      "检查是否是真需求",\n      "检查是否适合当前个人定位和产品"\n    ],\n    "must_not": [\n      "编造事实",\n      "跨项目读取"\n    ]\n  },\n  {\n    "id": "case-2",\n    "prompt": "继续使用 fde-topics 完成：把选中题写入内容库。",\n    "must_do": [\n      "把选中题写入内容库",\n      "返回来源",\n      "说明未确认项"\n    ],\n    "must_not": [\n      "把推断写成事实",\n      "覆盖原始材料"\n    ]\n  },\n  {\n    "id": "counterexample-1",\n    "prompt": "找不到配置，但要求 fde-topics 批量写入。",\n    "must_do": [\n      "停止写入",\n      "询问根目录"\n    ],\n    "must_not": [\n      "猜路径",\n      "写入用户主目录"\n    ]\n  }\n]\n',
        ".agents/skills/fde-topics/references/capability-contract.json": '{\n  "skill": "fde-topics",\n  "implementation": "fde-skills-owned",\n  "runtime_uses_historical_skill": false,\n  "must_support": [\n    "从六类资产和真实用户声音找题",\n    "检查是否是真需求",\n    "检查是否适合当前个人定位和产品",\n    "检查角度是否与常见写法重复",\n    "把选中题写入内容库"\n  ],\n  "tests": [\n    "case-1",\n    "case-2",\n    "counterexample-1"\n  ]\n}\n',
        ".agents/skills/fde-topics/references/cases.md": "# 案例\n\n## 正常\n\n配置可读，fde-topics 只读取所需资产，交付附来源。\n\n## 资料不足\n\n完成有证据的部分，把缺口留给用户。\n\n## 停止\n\n找不到配置或请求越过项目边界时停止写入。\n",
        ".agents/skills/fde-topics/references/library-map.md": "# 六类资产映射\n\n运行时以知识库根目录的 `.fde/config.yaml` 为准。\n\n- owner：个人说明书\n- product：产品库\n- customer：客户需求库\n- case：素材案例库\n- method：方法论库\n- content：内容生产\n\n不得把这些显示名当成固定路径。\n",
        ".agents/skills/fde-topics/references/maturity.json": '{\n  "status": "project-owned-v1",\n  "source_role": "historical_reference_only",\n  "live_customer_test": false\n}\n',
        ".agents/skills/fde-topics/references/method.md": "# 选题清单方法\n\n## 输入\n\n- 客户高频问题\n- 产品异议\n- 案例中的变化\n- 个人观点\n- 已发布内容和发布数据分析\n\n## 步骤\n\n1. 先确认平台和本次内容目标。\n2. 从不同资产库各找证据，不从热词凭空造题。\n3. 把候选题写成对象、矛盾、证据和预期动作。\n4. 去除与已发布内容重复的题，按证据强度和业务关系排序。\n\n## 交付\n\n- 5—10 个候选题\n- 每题来源\n- 目标读者\n- 核心矛盾\n- 建议平台\n- 不选原因\n\n## 停止\n\n- 没有真实来源时不伪装成知识库选题\n- 平台未定时只给方向，不写成稿\n",
        ".agents/skills/fde-topics/references/source-evidence.md": "# 当前实现证据\n\n- 工作流规格：`tools/rewrite-owned-suite.py` 的 `fde-topics`。\n- 六类资产路径：`六类资产库目录模板/.fde/config.yaml`。\n- 名称和历史映射：`改造清单/skill-manifest.json`。\n- 相似度验收：`tools/check-source-similarity.py`。\n",
        ".agents/skills/fde-topics/references/source-map.md": "# 来源映射\n\n## 当前实现\n\n- 运行流程由 `tools/rewrite-owned-suite.py` 中的 `fde-topics` 规格生成。\n- 资产模型来自本项目 `六类资产库目录模板/.fde/config.yaml`。\n- 用户要求是：英文 `fde-` 名称、易于理解、服务当前六类资产库。\n\n## 历史对照\n\n- 历史能力对照：`skills矩阵/小红书选题挖掘/SKILL.md`。\n- 该文件只用于能力盘点、相似度检查和署名追溯，不在运行时加载。\n\n历史对照不代表当前运行规则。商业许可仍按项目 `NOTICE.md` 和授权清单处理。\n",
        ".agents/skills/fde-topics/SKILL.md": "---\nname: fde-topics\ndescription: |\n  从客户原话、产品问题、案例结果、个人判断和方法资产中生成可追溯选题。适用于公众号、小红书、朋友圈和口播。触发方式：/fde-topics、「今天写什么」「从知识库找选题」。\n---\n\n# 选题清单\n\n<!-- FDE-OWNED-WORKFLOW: v1 -->\n\n## 开始前\n\n1. 从当前目录向上找到 `.fde/config.yaml`，按配置解析六类资产库。\n2. 只读取本任务需要的文件，不跨知识库搜索。\n3. 把库内事实、用户本轮信息、当前推断和未知项分开。\n4. 原始材料不覆盖；删除、移动和批量写入先确认。\n\n## 读取\n\n- 客户高频问题\n- 产品异议\n- 案例中的变化\n- 个人观点\n- 已发布内容和发布数据分析\n\n## 必须保留的能力\n\n- 从六类资产和真实用户声音找题\n- 检查是否是真需求\n- 检查是否适合当前个人定位和产品\n- 检查角度是否与常见写法重复\n- 把选中题写入内容库\n\n## 执行\n\n1. 先确认平台和本次内容目标。\n2. 从不同资产库各找证据，不从热词凭空造题。\n3. 把候选题写成对象、矛盾、证据和预期动作。\n4. 去除与已发布内容重复的题，按证据强度和业务关系排序。\n\n## 交付\n\n- 5—10 个候选题\n- 每题来源\n- 目标读者\n- 核心矛盾\n- 建议平台\n- 不选原因\n\n每个关键判断附来源路径；没有来源的内容标为推断或待确认。\n\n## 写回\n\n- 用户选中的题写入内容库的 `选题`\n- 记录来源和创建日期\n\n## 停止条件\n\n- 没有真实来源时不伪装成知识库选题\n- 平台未定时只给方向，不写成稿\n\n## 接续\n\n- 选题确认后用 fde-write\n- 方向存疑时用 fde-diagnose\n\n来源沿革只用于追溯，不作为运行指令。需要追溯时读取 `references/source-map.md`。\n",
        ".agents/skills/fde-update/agents/openai.yaml": 'interface:\n  display_name: "套件更新"\n  short_description: "读取当前六类资产知识库，执行套件更新并返回来源、结果和未确认项。"\n  default_prompt: "请使用 $fde-update 处理当前知识库里的真实任务，并说明来源和未确认项。"\n',
        ".agents/skills/fde-update/references/acceptance.md": "# 验收\n\n- [ ] fde-update 使用当前知识库配置。\n- [ ] 读取范围与任务有关。\n- [ ] 事实、推断和未知分开。\n- [ ] 关键判断有来源。\n- [ ] 破坏性动作先确认。\n- [ ] 输出包含：当前版本、候选版本、差异、本地冲突、备份位置、验证结果。\n- [ ] 能力：检查当前和候选版本。\n- [ ] 能力：只使用配置中的更新来源。\n- [ ] 能力：展示新增、修改、删除和本地冲突。\n- [ ] 能力：确认后只更新 FDE Skills。\n- [ ] 能力：不修改六类资产和状态。\n",
        ".agents/skills/fde-update/references/atoms.jsonl": '{"id": "FDE-UPDATE-001", "rule": "先定位当前知识库配置，再读取资料。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-UPDATE-002", "rule": "只加载当前任务需要的资产。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-UPDATE-003", "rule": "区分事实、用户陈述、推断和未知。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-UPDATE-004", "rule": "关键结论返回来源路径。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-UPDATE-005", "rule": "原始材料保持不变。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-UPDATE-006", "rule": "批量写入、移动、覆盖和删除先确认。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-UPDATE-007", "rule": "不跨客户或跨项目读取。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-UPDATE-008", "rule": "资料不足时完成证据允许的部分。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-UPDATE-009", "rule": "不能确认的分类进入待确认区。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-UPDATE-010", "rule": "交付后说明写入位置和未完成项。", "source": "fde-skills-workflow-v1"}\n',
        ".agents/skills/fde-update/references/axioms.md": "# 公理\n\n## AXIOM-01：定位\n\n没有知识库配置就不猜路径。\n\n## AXIOM-02：最小读取\n\n只读取当前任务需要的资产。\n\n## AXIOM-03：证据\n\n事实和推断分开，关键判断附来源。\n\n## AXIOM-04：可恢复\n\n原始材料不覆盖，破坏性动作先确认。\n\n## AXIOM-05：闭环\n\n交付说明结果、写入位置、未知项和下一步。\n",
        ".agents/skills/fde-update/references/behavior-tests.json": '[\n  {\n    "id": "case-1",\n    "prompt": "使用 fde-update 完成：检查当前和候选版本。",\n    "must_do": [\n      "检查当前和候选版本",\n      "只使用配置中的更新来源",\n      "展示新增、修改、删除和本地冲突"\n    ],\n    "must_not": [\n      "编造事实",\n      "跨项目读取"\n    ]\n  },\n  {\n    "id": "case-2",\n    "prompt": "继续使用 fde-update 完成：不修改六类资产和状态。",\n    "must_do": [\n      "不修改六类资产和状态",\n      "返回来源",\n      "说明未确认项"\n    ],\n    "must_not": [\n      "把推断写成事实",\n      "覆盖原始材料"\n    ]\n  },\n  {\n    "id": "counterexample-1",\n    "prompt": "找不到配置，但要求 fde-update 批量写入。",\n    "must_do": [\n      "停止写入",\n      "询问根目录"\n    ],\n    "must_not": [\n      "猜路径",\n      "写入用户主目录"\n    ]\n  }\n]\n',
        ".agents/skills/fde-update/references/capability-contract.json": '{\n  "skill": "fde-update",\n  "implementation": "fde-skills-owned",\n  "runtime_uses_historical_skill": false,\n  "must_support": [\n    "检查当前和候选版本",\n    "只使用配置中的更新来源",\n    "展示新增、修改、删除和本地冲突",\n    "确认后只更新 FDE Skills",\n    "不修改六类资产和状态"\n  ],\n  "tests": [\n    "case-1",\n    "case-2",\n    "counterexample-1"\n  ]\n}\n',
        ".agents/skills/fde-update/references/cases.md": "# 案例\n\n## 正常\n\n配置可读，fde-update 只读取所需资产，交付附来源。\n\n## 资料不足\n\n完成有证据的部分，把缺口留给用户。\n\n## 停止\n\n找不到配置或请求越过项目边界时停止写入。\n",
        ".agents/skills/fde-update/references/library-map.md": "# 六类资产映射\n\n运行时以知识库根目录的 `.fde/config.yaml` 为准。\n\n- owner：个人说明书\n- product：产品库\n- customer：客户需求库\n- case：素材案例库\n- method：方法论库\n- content：内容生产\n\n不得把这些显示名当成固定路径。\n",
        ".agents/skills/fde-update/references/maturity.json": '{\n  "status": "project-owned-v1",\n  "source_role": "historical_reference_only",\n  "live_customer_test": false\n}\n',
        ".agents/skills/fde-update/references/method.md": "# 套件更新方法\n\n## 输入\n\n- 当前 VERSION\n- fde-manifest.json\n- 配置中的 update_source\n- 本地改动\n\n## 步骤\n\n1. 验证更新来源是用户配置的地址或目录。\n2. 读取版本和清单，不直接覆盖。\n3. 比较新增、修改、删除和本地改动。\n4. 生成备份与更新预览，确认后执行并重新校验。\n\n## 交付\n\n- 当前版本\n- 候选版本\n- 差异\n- 本地冲突\n- 备份位置\n- 验证结果\n\n## 停止\n\n- 没有 update_source 时只报告\n- 来源无法验证时停止\n- 有本地改动时不强制覆盖\n",
        ".agents/skills/fde-update/references/source-evidence.md": "# 当前实现证据\n\n- 工作流规格：`tools/rewrite-owned-suite.py` 的 `fde-update`。\n- 六类资产路径：`六类资产库目录模板/.fde/config.yaml`。\n- 名称和历史映射：`改造清单/skill-manifest.json`。\n- 相似度验收：`tools/check-source-similarity.py`。\n",
        ".agents/skills/fde-update/references/source-map.md": "# 来源映射\n\n## 当前实现\n\n- 运行流程由 `tools/rewrite-owned-suite.py` 中的 `fde-update` 规格生成。\n- 资产模型来自本项目 `六类资产库目录模板/.fde/config.yaml`。\n- 用户要求是：英文 `fde-` 名称、易于理解、服务当前六类资产库。\n\n## 历史对照\n\n- 历史能力对照：`dbskill-upstream/skills/dbs-update`。\n- 固定快照：`v2.17.15`，commit `af99c577bfb9f1926236671a882b15030242fe8b`。\n- 该快照只用于能力盘点、相似度检查和署名追溯，不在运行时加载。\n\n历史对照不代表当前运行规则。商业许可仍按项目 `NOTICE.md` 和授权清单处理。\n",
        ".agents/skills/fde-update/SKILL.md": "---\nname: fde-update\ndescription: |\n  检查当前 FDE Skills 版本与 `.fde/config.yaml` 明确指定的更新来源。先展示差异，确认后更新 Skill，不改六类资产。触发方式：/fde-update、「检查更新」「升级知识库助手」。\n---\n\n# 套件更新\n\n<!-- FDE-OWNED-WORKFLOW: v1 -->\n\n## 开始前\n\n1. 从当前目录向上找到 `.fde/config.yaml`，按配置解析六类资产库。\n2. 只读取本任务需要的文件，不跨知识库搜索。\n3. 把库内事实、用户本轮信息、当前推断和未知项分开。\n4. 原始材料不覆盖；删除、移动和批量写入先确认。\n\n## 读取\n\n- 当前 VERSION\n- fde-manifest.json\n- 配置中的 update_source\n- 本地改动\n\n## 必须保留的能力\n\n- 检查当前和候选版本\n- 只使用配置中的更新来源\n- 展示新增、修改、删除和本地冲突\n- 确认后只更新 FDE Skills\n- 不修改六类资产和状态\n\n## 执行\n\n1. 验证更新来源是用户配置的地址或目录。\n2. 读取版本和清单，不直接覆盖。\n3. 比较新增、修改、删除和本地改动。\n4. 生成备份与更新预览，确认后执行并重新校验。\n\n## 交付\n\n- 当前版本\n- 候选版本\n- 差异\n- 本地冲突\n- 备份位置\n- 验证结果\n\n每个关键判断附来源路径；没有来源的内容标为推断或待确认。\n\n## 写回\n\n- 只更新 fde-* 和套件元数据\n- 不修改六类资产和 `.fde/state`\n\n## 停止条件\n\n- 没有 update_source 时只报告\n- 来源无法验证时停止\n- 有本地改动时不强制覆盖\n\n## 接续\n\n- 更新后用 fde-health\n\n来源沿革只用于追溯，不作为运行指令。需要追溯时读取 `references/source-map.md`。\n",
        ".agents/skills/fde-write/agents/openai.yaml": 'interface:\n  display_name: "内容写作"\n  short_description: "读取当前六类资产知识库，执行内容写作并返回来源、结果和未确认项。"\n  default_prompt: "请使用 $fde-write 处理当前知识库里的真实任务，并说明来源和未确认项。"\n',
        ".agents/skills/fde-write/references/acceptance.md": "# 验收\n\n- [ ] fde-write 使用当前知识库配置。\n- [ ] 读取范围与任务有关。\n- [ ] 事实、推断和未知分开。\n- [ ] 关键判断有来源。\n- [ ] 破坏性动作先确认。\n- [ ] 输出包含：写作合同、正文草稿、来源清单、未核实项、下一轮修改重点。\n- [ ] 能力：先诊断选题和材料缺口。\n- [ ] 能力：支持公众号、小红书、搜索、朋友圈和口播。\n- [ ] 能力：能生成实际草稿而不只给建议。\n- [ ] 能力：使用本人原话、产品事实、客户原话和案例。\n- [ ] 能力：成稿附来源和未核实项。\n",
        ".agents/skills/fde-write/references/atoms.jsonl": '{"id": "FDE-WRITE-001", "rule": "先定位当前知识库配置，再读取资料。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-WRITE-002", "rule": "只加载当前任务需要的资产。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-WRITE-003", "rule": "区分事实、用户陈述、推断和未知。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-WRITE-004", "rule": "关键结论返回来源路径。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-WRITE-005", "rule": "原始材料保持不变。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-WRITE-006", "rule": "批量写入、移动、覆盖和删除先确认。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-WRITE-007", "rule": "不跨客户或跨项目读取。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-WRITE-008", "rule": "资料不足时完成证据允许的部分。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-WRITE-009", "rule": "不能确认的分类进入待确认区。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-WRITE-010", "rule": "交付后说明写入位置和未完成项。", "source": "fde-skills-workflow-v1"}\n',
        ".agents/skills/fde-write/references/axioms.md": "# 公理\n\n## AXIOM-01：定位\n\n没有知识库配置就不猜路径。\n\n## AXIOM-02：最小读取\n\n只读取当前任务需要的资产。\n\n## AXIOM-03：证据\n\n事实和推断分开，关键判断附来源。\n\n## AXIOM-04：可恢复\n\n原始材料不覆盖，破坏性动作先确认。\n\n## AXIOM-05：闭环\n\n交付说明结果、写入位置、未知项和下一步。\n",
        ".agents/skills/fde-write/references/behavior-tests.json": '[\n  {\n    "id": "case-1",\n    "prompt": "使用 fde-write 完成：先诊断选题和材料缺口。",\n    "must_do": [\n      "先诊断选题和材料缺口",\n      "支持公众号、小红书、搜索、朋友圈和口播",\n      "能生成实际草稿而不只给建议"\n    ],\n    "must_not": [\n      "编造事实",\n      "跨项目读取"\n    ]\n  },\n  {\n    "id": "case-2",\n    "prompt": "继续使用 fde-write 完成：成稿附来源和未核实项。",\n    "must_do": [\n      "成稿附来源和未核实项",\n      "返回来源",\n      "说明未确认项"\n    ],\n    "must_not": [\n      "把推断写成事实",\n      "覆盖原始材料"\n    ]\n  },\n  {\n    "id": "counterexample-1",\n    "prompt": "找不到配置，但要求 fde-write 批量写入。",\n    "must_do": [\n      "停止写入",\n      "询问根目录"\n    ],\n    "must_not": [\n      "猜路径",\n      "写入用户主目录"\n    ]\n  }\n]\n',
        ".agents/skills/fde-write/references/capability-contract.json": '{\n  "skill": "fde-write",\n  "implementation": "fde-skills-owned",\n  "runtime_uses_historical_skill": false,\n  "must_support": [\n    "先诊断选题和材料缺口",\n    "支持公众号、小红书、搜索、朋友圈和口播",\n    "能生成实际草稿而不只给建议",\n    "使用本人原话、产品事实、客户原话和案例",\n    "成稿附来源和未核实项"\n  ],\n  "tests": [\n    "case-1",\n    "case-2",\n    "counterexample-1"\n  ]\n}\n',
        ".agents/skills/fde-write/references/cases.md": "# 案例\n\n## 正常\n\n配置可读，fde-write 只读取所需资产，交付附来源。\n\n## 资料不足\n\n完成有证据的部分，把缺口留给用户。\n\n## 停止\n\n找不到配置或请求越过项目边界时停止写入。\n",
        ".agents/skills/fde-write/references/library-map.md": "# 六类资产映射\n\n运行时以知识库根目录的 `.fde/config.yaml` 为准。\n\n- owner：个人说明书\n- product：产品库\n- customer：客户需求库\n- case：素材案例库\n- method：方法论库\n- content：内容生产\n\n不得把这些显示名当成固定路径。\n",
        ".agents/skills/fde-write/references/maturity.json": '{\n  "status": "project-owned-v1",\n  "source_role": "historical_reference_only",\n  "live_customer_test": false\n}\n',
        ".agents/skills/fde-write/references/method.md": "# 内容写作方法\n\n## 输入\n\n- 选题记录\n- 个人表达和禁区\n- 产品事实\n- 客户原话\n- 案例和方法\n- 目标平台\n\n## 步骤\n\n1. 确认平台、读者、目的和不能改的事实。\n2. 建立材料表：要用的原话、数字、案例和观点。\n3. 先给结构和缺口；缺口影响成稿时请求补充。\n4. 按平台模式写草稿，末尾附来源清单和未核实项。\n\n## 交付\n\n- 写作合同\n- 正文草稿\n- 来源清单\n- 未核实项\n- 下一轮修改重点\n\n## 停止\n\n- 产品事实或案例结果无法核实时不用确定语气\n- 未指定平台时不套平台格式\n- 不编客户原话\n",
        ".agents/skills/fde-write/references/modes/moments.md": "# 朋友圈模式\n\n- 只写一个事件或判断。\n- 保留本人原话和当时的具体细节。\n- 不用完整文章结构，不强行总结。\n",
        ".agents/skills/fde-write/references/modes/search.md": "# 搜索内容模式\n\n- 用用户会搜索的完整问题作为入口。\n- 先直接回答，再补条件、步骤和常见误区。\n- 产品信息只在确实解决问题时出现。\n",
        ".agents/skills/fde-write/references/modes/voiceover.md": "# 口播模式\n\n- 按说话停顿分段，不按书面段落分段。\n- 每段只承担一个作用。\n- 完稿后交给 fde-flow 检查听觉衔接。\n",
        ".agents/skills/fde-write/references/modes/wechat.md": "# 公众号模式\n\n- 先给读者问题和文章承诺。\n- 使用完整案例和方法过程。\n- 正文通过审核后再交给 fde-format。\n",
        ".agents/skills/fde-write/references/modes/xiaohongshu.md": "# 小红书模式\n\n- 一篇只处理一个具体处境。\n- 首屏说明对象、问题和能得到什么。\n- 标题和正文使用同一份证据，不制造额外承诺。\n",
        ".agents/skills/fde-write/references/source-evidence.md": "# 当前实现证据\n\n- 工作流规格：`tools/rewrite-owned-suite.py` 的 `fde-write`。\n- 六类资产路径：`六类资产库目录模板/.fde/config.yaml`。\n- 名称和历史映射：`改造清单/skill-manifest.json`。\n- 相似度验收：`tools/check-source-similarity.py`。\n",
        ".agents/skills/fde-write/references/source-map.md": "# 来源映射\n\n## 当前实现\n\n- 运行流程由 `tools/rewrite-owned-suite.py` 中的 `fde-write` 规格生成。\n- 资产模型来自本项目 `六类资产库目录模板/.fde/config.yaml`。\n- 用户要求是：英文 `fde-` 名称、易于理解、服务当前六类资产库。\n\n## 历史对照\n\n- 历史能力对照：`dbskill-upstream/skills/dbs-content`。\n- 固定快照：`v2.17.15`，commit `af99c577bfb9f1926236671a882b15030242fe8b`。\n- 该快照只用于能力盘点、相似度检查和署名追溯，不在运行时加载。\n\n历史对照不代表当前运行规则。商业许可仍按项目 `NOTICE.md` 和授权清单处理。\n",
        ".agents/skills/fde-write/SKILL.md": "---\nname: fde-write\ndescription: |\n  根据六类资产库写公众号、小红书、朋友圈、搜索内容或口播稿。先列证据和写作合同，再写草稿。触发方式：/fde-write、「根据知识库写」「把这个选题写成稿」。\n---\n\n# 内容写作\n\n<!-- FDE-OWNED-WORKFLOW: v1 -->\n\n## 开始前\n\n1. 从当前目录向上找到 `.fde/config.yaml`，按配置解析六类资产库。\n2. 只读取本任务需要的文件，不跨知识库搜索。\n3. 把库内事实、用户本轮信息、当前推断和未知项分开。\n4. 原始材料不覆盖；删除、移动和批量写入先确认。\n\n## 读取\n\n- 选题记录\n- 个人表达和禁区\n- 产品事实\n- 客户原话\n- 案例和方法\n- 目标平台\n\n## 必须保留的能力\n\n- 先诊断选题和材料缺口\n- 支持公众号、小红书、搜索、朋友圈和口播\n- 能生成实际草稿而不只给建议\n- 使用本人原话、产品事实、客户原话和案例\n- 成稿附来源和未核实项\n\n## 执行\n\n1. 确认平台、读者、目的和不能改的事实。\n2. 建立材料表：要用的原话、数字、案例和观点。\n3. 先给结构和缺口；缺口影响成稿时请求补充。\n4. 按平台模式写草稿，末尾附来源清单和未核实项。\n\n## 交付\n\n- 写作合同\n- 正文草稿\n- 来源清单\n- 未核实项\n- 下一轮修改重点\n\n每个关键判断附来源路径；没有来源的内容标为推断或待确认。\n\n## 写回\n\n- 草稿写入内容库的 `草稿`\n- 用户确认后才进入 `待审核`\n- 不覆盖原稿\n\n## 停止条件\n\n- 产品事实或案例结果无法核实时不用确定语气\n- 未指定平台时不套平台格式\n- 不编客户原话\n\n## 接续\n\n- 写完用 fde-review\n- 只改开头用 fde-hook\n- 公众号排版用 fde-format\n\n来源沿革只用于追溯，不作为运行指令。需要追溯时读取 `references/source-map.md`。\n",
        ".fde/config.yaml": "version: 2\nroot: .\nupdate_source: https://fdekb.garylau.ai/plugin/latest.json\n\nlibraries:\n  owner: 1-个人说明书\n  product: 2-产品库\n  customer: 3-客户需求库\n  case: 4-素材案例库\n  method: 5-方法论库\n  content: 6-内容生产\n\ninbox:\n  pending: 0-待处理材料/待处理\n  processed: 0-待处理材料/已处理记录\n\nruntime:\n  state: .fde/state\n  indexes: .fde/indexes\n  logs: .fde/logs\n  versions: .fde/versions\n  reports: .fde/reports\n  quarantine: .fde/quarantine\n\npolicy:\n  preserve_raw_files: true\n  require_source_on_write: true\n  allow_cross_project_read: false\n  confirm_before_delete: true\n",
        "0-待处理材料/待处理/README.md": "# 待处理材料\n\n把录音转写、聊天导出、会议纪要、旧文档、图片或其他待判断材料放在这里。\n\n每份文件尽量保留：\n\n- 原始文件名。\n- 发生日期。\n- 参与人或来源。\n- 是否允许写入正式资产库。\n\n调用 `/fde-ingest` 后，在右侧 Agent 对话查看分流预览，再确认写入。预览不会新增成另一条原始材料；处理完成只更新当前材料状态，文件保持原位。\n",
        "0-待处理材料/已处理记录/README.md": "# 已处理记录\n\n这里保存处理稿和批次记录，不代替原始材料。\n\n处理稿应包含：\n\n- 原始文件路径。\n- 处理日期。\n- 写入了哪些资产文件。\n- 哪些内容仍待确认。\n- 是否发现重复或冲突。\n",
        "0-待处理材料/README.md": "# 待处理材料\n\n这里是通用收件箱，保存尚未整理和已经整理的原始材料。录音、聊天导出、会议纪要、文档、图片和其他文件都可以放在这里。它不是第 7 个资产库。\n\n录音不再使用独立的顶层目录：原音频、转写稿和处理记录都归在这个大类下。“录音”只描述材料形式，其中的证据仍按个人、产品、客户、案例、方法和内容六类资产判断去向。\n\n## 目录\n\n- `待处理`：永久保留各类原始材料；同一条记录用状态区分待处理和已处理。\n- `已处理记录`：兼容旧版本的处理记录，新的原始材料不会因为完成处理而移动到这里。\n\n## 流程\n\n1. 把原始文件放进待处理目录。\n2. 调用 `/fde-ingest`。\n3. 在右侧 Agent 对话查看分流预览；预览不会作为新材料出现在列表中。\n4. 确认后写入六类资产库。\n5. 处理成功后原材料记录自动标记为已处理并排在列表底部；处理本身不会移动或删除原文件。\n6. 如不再需要材料，可在原始材料列表单项删除，或勾选多项后批量删除；确认后选中收件记录和对应原始文件会一并移入回收站，正式资产和处理记录保留。\n",
        "0-使用说明.md": "# 六类资产库使用说明\n\n这套目录保存一家业务可以反复使用的资料。`.fde/config.yaml` 记录真实路径，`fde-*` 根据它读写当前知识库。\n\n## 6 个库\n\n| 目录 | 保存内容 |\n| --- | --- |\n| `1-个人说明书` | 身份、判断、表达习惯和不能说的内容 |\n| `2-产品库` | 产品、价格、承诺、交付和异议 |\n| `3-客户需求库` | 客户原话、问题、成交和未成交记录 |\n| `4-素材案例库` | 事件、案例、数据、对话和结果 |\n| `5-方法论库` | 已经实际使用的方法、步骤和判断条件 |\n| `6-内容生产` | 选题、草稿、审核和发布；发布数据可选分析 |\n\n## 开始\n\n1. 复制这整个目录并改成项目名称。\n2. 在目录中调用 `/fde-start`。\n3. 空库使用 `/fde-interview`。\n4. 已有录音、聊天、文档、图片或其他原始材料时，把文件放进 `0-待处理材料/待处理`，再使用 `/fde-ingest`。分流预览只显示在右侧对话；处理成功后原记录自动标记为已处理并排到列表底部，不能批量选择，原始材料保持原路径且不会删除。\n\n## 规则\n\n- 原始文件保留。\n- 业务事实、用户原话、AI 推断和未知项分开。\n- 新条目写明来源和日期。\n- 分类不确定时先放待确认区。\n- 移动、覆盖和删除前先确认。\n- 状态、索引和日志只写入当前目录的 `.fde`。\n- 点击资产网络的“整理关联”时，先核对关系依据；确认后把关系写入两端资产的 `## 关联资产` 和真实 Obsidian Wikilink。Canvas 不能代替双链。\n",
        "1-个人说明书/个人说明书.md": "# 个人说明书\n\n> 只填写已经确认的内容。没有答案的字段留空。\n\n## 基本信息\n\n- 姓名或对外称呼：\n- 当前身份：\n- 所在行业：\n- 当前主要工作：\n- 更新时间：\n- 信息来源：\n\n## 我在解决什么问题\n\n- 服务对象：\n- 对方遇到的问题：\n- 我负责的部分：\n- 我不负责的部分：\n\n## 我的判断\n\n- 我反复坚持的判断：\n- 我不同意的常见做法：\n- 这些判断来自哪些经历或结果：\n\n## 我的表达\n\n- 常用说法：\n- 希望保留的原话：\n- 不使用的词和句式：\n- 不能公开的信息：\n\n## 工作边界\n\n- 不接的客户：\n- 不做的承诺：\n- 需要人工确认的事项：\n\n## 待补信息\n\n-\n",
        "2-产品库/README.md": "# 产品库\n\n一个产品一个文件。没有确认的价格、效果和承诺不要补写。\n\n## 产品文件字段\n\n```markdown\n# 产品名称\n\n- 更新时间：\n- 信息来源：\n- 当前状态：在售／测试／暂停\n\n## 给谁\n\n## 解决什么问题\n\n## 交付内容\n\n## 价格和付款条件\n\n## 已有证据\n\n## 常见异议\n\n## 不能承诺的内容\n\n## 待确认\n```\n\n历史价格和旧版本单独保留，不覆盖。\n",
        "3-客户需求库/README.md": "# 客户需求库\n\n保存客户说过的话、发生的行为和对应来源。不要把推测写成客户事实。\n\n## 一条记录包含\n\n```markdown\n# 日期｜客户代号｜主题\n\n- 来源文件：\n- 接触阶段：咨询／成交／交付／复购／流失\n- 是否允许公开：是／否／待确认\n\n## 客户原话\n\n## 已确认事实\n\n## 当前推断\n\n## 结果\n\n## 待确认\n```\n\n涉及姓名、联系方式和隐私时使用代号。\n",
        "4-素材案例库/README.md": "# 素材案例库\n\n保存可以追溯到事件或原始材料的故事、案例、数据和对话。\n\n## 素材字段\n\n```markdown\n# 素材标题\n\n- 发生日期：\n- 来源文件：\n- 参与人代号：\n- 是否允许公开：\n\n## 当时发生了什么\n\n## 原话或数据\n\n## 采取了什么动作\n\n## 结果\n\n## 可以支持哪些判断\n\n## 仍不确定的内容\n```\n\n案例结果改变后，追加新记录，不改写旧结果。\n",
        "5-方法论库/README.md": "# 方法论库\n\n只保存已经用过、能说明适用条件和失败情况的方法。\n\n## 方法文件字段\n\n```markdown\n# 方法名称\n\n- 来源：自己实践／客户项目／外部资料\n- 更新时间：\n- 使用场景：\n\n## 要解决的问题\n\n## 前置条件\n\n## 步骤\n\n## 完成信号\n\n## 失败信号\n\n## 实际案例\n\n## 不适用情况\n\n## 待验证\n```\n\n外部方法要记录作者和出处。原文不直接复制进方法文件。\n",
        "6-内容生产/发布数据/README.md": "# 发布数据\n\n这里保存用户主动上传或回填的真实发布数据，例如抖音后台 CSV、平台导出的 Excel、TSV 或 JSON。\n\n- `已发布` 是内容流程终点，上传数据不会改变稿件阶段。\n- 数据文件应关联对应的已发布内容，并保留平台、时间范围和指标口径。\n- 在右侧 Agent 点击“上传数据”后，使用 `/fde-spread` 分析。\n- 没有真实数据时，只列出需要补充的指标，不输出传播效果结论。\n- 原始导出文件保留不覆盖；分析结果可写入本目录的 `分析` 子目录。\n",
        "6-内容生产/README.md": "# 内容生产\n\n这里保存内容从选题到发布的状态。一个文件同时只处在一个阶段；每次推进前先确认当前环节已经完成。\n\n## 阶段\n\n- `选题`：已经有来源、读者和核心问题。\n- `草稿`：正在写，尚未审核。\n- `待审核`：等待事实、表达和平台检查。\n- `待发布`：审核通过，等待发布。\n- `已发布`：流程终点，记录平台、链接和日期。\n\n## 发布数据分析（可选）\n\n发布后的 CSV、Excel、TSV 或 JSON 数据放进 `发布数据`。这些文件只作为 `/fde-spread` 的分析输入，不是新的内容阶段，也不会把“已发布”稿件继续推进。\n\n## 内容文件最少包含\n\n```markdown\n# 标题\n\n- 目标读者：\n- 目标平台：\n- 当前阶段：\n- 来源文件：\n- 创建日期：\n- 最后修改：\n\n## 正文或提纲\n\n## 未核实项\n\n## 发布记录\n```\n\n移动阶段时更新文件中的当前阶段，不重复复制同一稿件。选题未补全时用 `/fde-write`，草稿未完成时继续用 `/fde-write`，审核未完成时用 `/fde-review`；由用户确认完成后再推进。\n",
        "AGENTS.md": "# FDE365六类资产知识库规则\n\n## 作用域\n\n- 本文件约束当前 `FDE365知识库` 及其子目录。\n- `.fde/config.yaml` 是六类资产、收件箱和运行目录的唯一路径真源。\n- 旧 `.kb/` 只作历史追溯，不是运行配置或状态真源；任何 Agent 均不得按其中路径执行。\n- 项目本地 Skill 位于 `.agents/skills/`，只在当前知识库内使用。\n\n## 六类资产\n\n- `1-个人说明书`：身份、判断、表达和不能公开的边界。\n- `2-产品库`：产品、价格、承诺、交付和异议。\n- `3-客户需求库`：客户原话、行为、阶段和结果。\n- `4-素材案例库`：事件、原话、数据、动作和结果。\n- `5-方法论库`：实际使用过的方法、条件、步骤和失败信号。\n- `6-内容生产`：选题、草稿、审核和发布；`已发布` 是流程终点，发布数据单独分析。\n\n## 写入边界\n\n- 录音、聊天、会议纪要、文档、图片和其他原始材料保留在 `0-待处理材料/待处理`；处理流程不会移动、删除或用摘要覆盖。只有用户在原始材料列表明确确认删除时，才将收件记录和对应原始文件一并移入回收站。\n- 库内事实、用户本轮信息、AI 推断和未知项必须分开。\n- 新增结论必须写明来源路径和日期；没有来源时标记为推断或待确认。\n- 分类不确定时先留在待处理或待确认区，不强行写入正式资产。\n- 移动、覆盖、删除和批量写入前必须展示预览并取得用户确认。\n- 内容文件同时只处于一个阶段；目录和“当前阶段”字段必须一致。\n- 阶段推进前必须由用户确认当前环节已经完成；不完整时先在同一对话调用对应内容 Skill。\n- 发布数据由用户上传或回填，分析记录不得变成“已发布”之后的新阶段。\n- 跨库关系只有在两端资产和来源能够支持时才建立；已确认关系写入两端 Markdown 的 `## 关联资产` 和完整路径 Wikilink，不以 Canvas 代替。\n- 状态、索引、日志和版本只写入 `.fde`，AI 运行记录写入 `7-系统/AI协作`。\n- 分流预览只显示在当前 Agent 对话和 AI 运行记录中，不得在待处理目录新建“分流预览”材料。\n\n## AI 协作\n\n- 不跨当前知识库检索，除非用户明确授权具体来源。\n- 关键判断返回来源路径；来源冲突时不自动选边。\n- 默认先诊断或生成预览，用户确认后再执行会改变现有资产的动作。\n",
        "docs/FDE-Skills-新手入门.md": "# FDE Skills 新手入门\n\n## 第一次使用\n\n先确认当前目录包含 `.fde/config.yaml`。然后输入：\n\n```text\n/fde-start\n```\n\n`fde-start` 会先判断知识库是否为空，再把任务交给一个具体 Skill。\n\n- 知识库为空：使用 `/fde-interview`。\n- 有录音、聊天记录或旧文档：使用 `/fde-ingest`。\n- 已经有六类资产：根据任务进入诊断、选题、写作或审核。\n\n## 34 个 Skill\n\n### 建库和维护\n\n- `/fde-start`：主入口和任务路由。\n- `/fde-interview`：采访用户，建立六类资产。\n- `/fde-ingest`：处理录音、聊天记录和旧文档。\n- `/fde-export`：导出聊天记录，交给导入流程。\n- `/fde-library`：搜索、录入和维护知识库。\n- `/fde-health`：检查目录、来源、索引和运行状态。\n- `/fde-organize`：整理已有资产；“整理关联”会在确认依据后，把跨库关系写入两端真实 Obsidian 双链。\n- `/fde-setup`：建立 Agent 工作目录。\n- `/fde-update`：检查或更新这一套 `fde-*`。\n- `/fde-safety`：检查 Skill 中的可疑行为。\n\n### 生意和行动\n\n- `/fde-diagnose`：诊断生意、产品、定价和客户问题。\n- `/fde-benchmark`：研究对标对象。\n- `/fde-define`：拆解模糊概念。\n- `/fde-goal`：把愿望改成可检查的目标。\n- `/fde-question`：把困惑整理成可处理的问题。\n- `/fde-decide`：记录和复盘决策。\n- `/fde-action`：处理知道要做但没有行动的问题。\n- `/fde-focus`：找到当前约束，确定主动作和暂停清单。\n- `/fde-learn`：根据反馈继续学习。\n\n### 内容生产\n\n- `/fde-topics`：从六类资产中找选题。\n- `/fde-write`：按平台和任务写内容。\n- `/fde-review`：内容审核总入口。\n- `/fde-hook`：检查短视频开头。\n- `/fde-title`：生成小红书标题。\n- `/fde-flow`：检查逐字稿衔接。\n- `/fde-impact`：检查文稿是否击中受众。\n- `/fde-spread`：分析内容的传播原因。\n- `/fde-check`：检查空泛表达、无来源事实和表达偏差。\n- `/fde-format`：生成微信公众号 HTML。\n\n### 讨论和状态\n\n- `/fde-discuss`：按不同职责讨论一个具体决定。\n- `/fde-economy`：从价格、成本、选择、激励和信息检查判断。\n- `/fde-save`：保存当前任务状态。\n- `/fde-resume`：恢复上次状态。\n- `/fde-report`：把多次记录整理成报告。\n\n## 写入规则\n\n- 原始材料保留在 `0-待处理材料/待处理` 或用户指定的收件位置。\n- 新增资产要记录来源。\n- 不能确定分类时，先放待处理区，不要猜。\n- 删除和覆盖前要让用户确认。\n- 内容草稿、审核稿和发布稿分开保存。\n\n## 常用流程\n\n```text\n采访或导入\n→ 六类资产库\n→ 选题\n→ 写作\n→ 审核\n→ 发布和复盘\n```\n\n遇到不确定的任务，回到 `/fde-start`。\n",
        "fde-manifest.json": '{\n  "suite": "fde-skills",\n  "source": {\n    "repository": "https://github.com/dontbesilent2025/dbskill",\n    "version": "v2.17.15",\n    "commit": "af99c577bfb9f1926236671a882b15030242fe8b",\n    "license": "CC BY-NC 4.0"\n  },\n  "knowledge_base": "六类资产库目录模板",\n  "implementation": "fde365-six-library-workflows-v4",\n  "skill_namespace": "fde",\n  "source_role": "historical-reference-and-attribution-only",\n  "similarity_threshold": 0.3,\n  "success_definition": [\n    "目录名与 SKILL.md name 一致",\n    "SKILL.md 只含 name 和 description 两个 frontmatter 字段",\n    "运行正文与对应来源的 sequence 和 target containment 均低于 0.30",\n    "产品目录不包含上游知识包和原样执行资源",\n    "旧 dbs 名称和 ~/.dbs 状态路径已清理",\n    "包含六类资产库读取和写入边界",\n    "34 个能力合同全部通过",\n    "原套件不作为运行依赖",\n    "导出、排版、安全和盘点使用当前项目脚本",\n    "quick_validate.py 通过",\n    "正常案例和停止条件反例存在"\n  ],\n  "skills": [\n    {\n      "source": "dbs",\n      "target": "fde-start",\n      "profile": "router"\n    },\n    {\n      "source": "dbs-action",\n      "target": "fde-action",\n      "profile": "decision"\n    },\n    {\n      "source": "dbs-agent-migration",\n      "target": "fde-setup",\n      "profile": "system"\n    },\n    {\n      "source": "dbs-ai-check",\n      "target": "fde-check",\n      "profile": "review"\n    },\n    {\n      "source": "dbs-benchmark",\n      "target": "fde-benchmark",\n      "profile": "strategy"\n    },\n    {\n      "source": "dbs-chatroom-austrian",\n      "target": "fde-economy",\n      "profile": "method"\n    },\n    {\n      "source": "dbs-chatroom",\n      "target": "fde-discuss",\n      "profile": "method"\n    },\n    {\n      "source": "dbs-content-system",\n      "target": "fde-organize",\n      "profile": "all"\n    },\n    {\n      "source": "dbs-content",\n      "target": "fde-write",\n      "profile": "content"\n    },\n    {\n      "source": "dbs-decision",\n      "target": "fde-decide",\n      "profile": "decision"\n    },\n    {\n      "source": "dbs-deconstruct",\n      "target": "fde-define",\n      "profile": "method"\n    },\n    {\n      "source": "dbs-diagnosis",\n      "target": "fde-diagnose",\n      "profile": "business"\n    },\n    {\n      "source": "dbs-goal",\n      "target": "fde-goal",\n      "profile": "decision"\n    },\n    {\n      "source": "dbs-good-question",\n      "target": "fde-question",\n      "profile": "method"\n    },\n    {\n      "source": "dbs-hook",\n      "target": "fde-hook",\n      "profile": "review"\n    },\n    {\n      "source": "dbs-knowledge",\n      "target": "fde-library",\n      "profile": "all"\n    },\n    {\n      "source": "dbs-learning",\n      "target": "fde-learn",\n      "profile": "method"\n    },\n    {\n      "source": "dbs-report",\n      "target": "fde-report",\n      "profile": "state"\n    },\n    {\n      "source": "dbs-resonate",\n      "target": "fde-impact",\n      "profile": "review"\n    },\n    {\n      "source": "dbs-restore",\n      "target": "fde-resume",\n      "profile": "state"\n    },\n    {\n      "source": "dbs-save",\n      "target": "fde-save",\n      "profile": "state"\n    },\n    {\n      "source": "dbs-script-flow",\n      "target": "fde-flow",\n      "profile": "review"\n    },\n    {\n      "source": "dbs-skill-cleaner",\n      "target": "fde-safety",\n      "profile": "system"\n    },\n    {\n      "source": "dbs-slowisfast",\n      "target": "fde-focus",\n      "profile": "method"\n    },\n    {\n      "source": "dbs-spread",\n      "target": "fde-spread",\n      "profile": "strategy"\n    },\n    {\n      "source": "dbs-update",\n      "target": "fde-update",\n      "profile": "system"\n    },\n    {\n      "source": "dbs-wechat-html",\n      "target": "fde-format",\n      "profile": "output"\n    },\n    {\n      "source": "dbs-xhs-title",\n      "target": "fde-title",\n      "profile": "strategy"\n    }\n  ],\n  "new_skills": [\n    {\n      "target": "fde-interview",\n      "profile": "ingest",\n      "source_folder": "知识库采访机器人"\n    },\n    {\n      "target": "fde-ingest",\n      "profile": "ingest",\n      "source_folder": "录音处理"\n    },\n    {\n      "target": "fde-export",\n      "profile": "ingest",\n      "source_folder": "导出聊天记录"\n    },\n    {\n      "target": "fde-health",\n      "profile": "system",\n      "source_folder": "CLAUDE体检"\n    },\n    {\n      "target": "fde-topics",\n      "profile": "strategy",\n      "source_folder": "小红书选题挖掘"\n    },\n    {\n      "target": "fde-review",\n      "profile": "review",\n      "source_folder": "内容诊断"\n    }\n  ],\n  "integration": {\n    "owner": "ozrwayne",\n    "repository": "kb-suite",\n    "commit": "b010603c5047bd8c7ef87ea9f34b6e6a888b5f64",\n    "skills": 34,\n    "excluded": [\n      "kb-connect"\n    ],\n    "policy": "preserve-newer-FDE-contracts"\n  }\n}\n',
        VERSION: "0.5.0\n"
      }
    };
  }
});

// fde-workspace-view-base.js
var require_fde_workspace_view_base = __commonJS({
  "fde-workspace-view-base.js"(exports2, module2) {
    var {
      Component,
      ItemView: ItemView2,
      MarkdownRenderer,
      Notice: Notice2,
      TFile: TFile2,
      normalizePath: normalizePath2
    } = require("obsidian");
    module2.exports = function createFDEBaseView({
      getRoot,
      VIEW_TYPES,
      LIBRARIES,
      CONTENT_STAGES,
      CONTENT_STAGE_GATES,
      SKILL_GROUPS,
      SKILLS,
      commandCompletionState,
      appendAssistantSkillCommand,
      BASE_SKILL_RULES,
      executionModeRule,
      INBOX_COMPLETION_MARKER,
      stripInboxCompletionMarker,
      shouldCompleteInboxTurn,
      assistantScrollTarget,
      NAV_ITEMS,
      makeIcon,
      makeButton,
      formatRelativeTime: formatRelativeTime2,
      assistantHistoryTopic,
      percent,
      parseConfigYaml,
      sourceFromContent,
      unknownFromContent,
      frontmatterOf,
      markdownSection,
      markdownBody,
      frontmatterPaths,
      linkedPaths,
      TextPromptModal,
      AssetModal,
      AssistantNotePickerModal,
      FDEWorkspaceService
    }) {
      class FDEBaseView extends ItemView2 {
        constructor(leaf, plugin, pageKey) {
          super(leaf);
          this.plugin = plugin;
          this.app = plugin.app;
          this.service = plugin.fdeWorkspace;
          this.pageKey = pageKey;
          this.assistantSession = plugin.fdeAssistantSession || (plugin.fdeAssistantSession = {
            messages: [],
            loading: false,
            requestId: null,
            mode: "chat",
            draft: "",
            primaryPath: "",
            sourcePaths: [],
            sessionId: "",
            activity: []
          });
          this.renderToken = 0;
          this.mainScrollTop = 0;
          this.assistantMarkdownOwner = null;
        }
        get assistantMessages() {
          return this.assistantSession.messages;
        }
        set assistantMessages(value) {
          this.assistantSession.messages = value;
        }
        get assistantLoading() {
          return this.assistantSession.loading;
        }
        set assistantLoading(value) {
          this.assistantSession.loading = value;
        }
        get assistantRequestId() {
          return this.assistantSession.requestId;
        }
        set assistantRequestId(value) {
          this.assistantSession.requestId = value;
        }
        get assistantMode() {
          return this.assistantSession.mode;
        }
        set assistantMode(value) {
          this.assistantSession.mode = value;
        }
        get assistantDraft() {
          return this.assistantSession.draft;
        }
        set assistantDraft(value) {
          this.assistantSession.draft = value;
        }
        get assistantPrimaryPath() {
          return this.assistantSession.primaryPath;
        }
        set assistantPrimaryPath(value) {
          this.assistantSession.primaryPath = value;
        }
        get assistantSourcePaths() {
          return this.assistantSession.sourcePaths;
        }
        set assistantSourcePaths(value) {
          this.assistantSession.sourcePaths = value;
        }
        get assistantSessionId() {
          return this.assistantSession.sessionId || "";
        }
        set assistantSessionId(value) {
          this.assistantSession.sessionId = value || "";
        }
        get assistantActivity() {
          return this.assistantSession.activity || [];
        }
        set assistantActivity(value) {
          this.assistantSession.activity = Array.isArray(value) ? value : [];
        }
        get assistantScrollPositions() {
          if (!this.assistantSession.scrollPositions || typeof this.assistantSession.scrollPositions !== "object") {
            this.assistantSession.scrollPositions = {};
          }
          return this.assistantSession.scrollPositions;
        }
        captureAssistantScroll() {
          const body = this.contentEl.querySelector(".wis-assistant-body");
          if (!body) return;
          const mode = body.dataset.assistantMode || this.assistantMode;
          const distanceFromBottom = Math.max(0, body.scrollHeight - body.clientHeight - body.scrollTop);
          this.assistantScrollPositions[mode] = {
            top: body.scrollTop,
            stickToBottom: distanceFromBottom <= 32
          };
        }
        restoreAssistantScroll() {
          const body = this.contentEl.querySelector(".wis-assistant-body");
          if (!body) return;
          const target = assistantScrollTarget(this.assistantScrollPositions[this.assistantMode], body.scrollHeight, body.clientHeight);
          if (target !== null) body.scrollTop = target;
        }
        captureMainScroll() {
          const main = this.contentEl.querySelector(".wis-main");
          if (main) this.mainScrollTop = main.scrollTop;
        }
        restoreMainScroll() {
          const main = this.contentEl.querySelector(".wis-main");
          if (main) main.scrollTop = this.mainScrollTop;
        }
        resetAssistantMarkdownOwner() {
          if (this.assistantMarkdownOwner) this.removeChild(this.assistantMarkdownOwner);
          this.assistantMarkdownOwner = new Component();
          this.addChild(this.assistantMarkdownOwner);
          return this.assistantMarkdownOwner;
        }
        assistantMarkdownSourcePath() {
          const selectedPath = [this.assistantPrimaryPath, ...this.assistantSourcePaths].find((path) => path && this.app.vault.getAbstractFileByPath(path) instanceof TFile2);
          return selectedPath || this.app.workspace.getActiveFile()?.path || "";
        }
        async renderAssistantMessageContent(parent, message) {
          const content = parent.createDiv({ cls: "wis-message-content" });
          if (message.role !== "assistant" || message.error || !String(message.content || "").trim()) {
            content.setText(String(message.content || ""));
            return content;
          }
          content.addClass("is-markdown-rendered");
          try {
            await MarkdownRenderer.render(
              this.app,
              String(message.content),
              content,
              this.assistantMarkdownSourcePath(),
              this.assistantMarkdownOwner || this
            );
          } catch (error) {
            console.warn("[FDE365] Markdown rendering failed; falling back to plain text", error);
            content.empty();
            content.removeClass("is-markdown-rendered");
            content.setText(String(message.content || ""));
          }
          return content;
        }
        focusAssistantConversation(options = {}) {
          window.setTimeout(() => {
            const body = this.contentEl.querySelector(".wis-assistant-body");
            if (body && options.scrollToEnd === true) body.scrollTop = body.scrollHeight;
            else this.restoreAssistantScroll();
            this.contentEl.querySelector(".wis-composer textarea")?.focus();
          }, 0);
        }
        async runSkillInAssistant(skillId, prompt, sourceFiles = []) {
          const skill = SKILLS.find((item) => item.id === skillId);
          if (!skill) return null;
          if (this.assistantLoading) {
            new Notice2("Agent 正在处理当前会话，请等待完成或先停止");
            return null;
          }
          const submittedPrompt = String(prompt || skill.description).trim();
          const active = this.app.workspace.getActiveFile();
          const visibleSources = [...new Map([
            ...sourceFiles,
            ...active instanceof TFile2 ? [active] : []
          ].filter((file) => file instanceof TFile2).map((file) => [file.path, file])).values()];
          const currentContext = this.assistantContextFiles();
          const mergedSources = [...new Map([
            ...currentContext,
            ...visibleSources
          ].map((file) => [file.path, file])).values()];
          this.assistantMode = "chat";
          this.assistantDraft = "";
          this.assistantPrimaryPath = mergedSources[0]?.path || "";
          this.assistantSourcePaths = mergedSources.slice(1).map((file) => file.path);
          this.assistantMessages.push({ role: "user", content: `/${skill.id}

${submittedPrompt}` });
          this.assistantLoading = true;
          this.assistantRequestId = null;
          this.assistantActivity = [{ label: "Agent 处理中…" }];
          await this.render();
          this.focusAssistantConversation();
          let task = null;
          try {
            task = await this.service.runSkill(skill.id, submittedPrompt, visibleSources, {
              includeActive: false,
              sessionId: this.assistantSessionId,
              onTaskStart: (startedTask) => {
                this.assistantRequestId = startedTask?.taskId || null;
                this.assistantActivity = [{ label: "Agent 处理中…" }];
                this.plugin.refreshDashboard();
              },
              onEvent: () => {
                this.assistantActivity = [{ label: "Agent 处理中…" }];
                this.plugin.refreshDashboard();
              }
            });
            const latest = this.plugin.lastAgentResult;
            const succeeded = Boolean(task && latest?.task?.taskId === task.taskId && latest.result?.content?.trim());
            if (!succeeded) {
              const message = task?.error || task?.message || (task ? `任务状态：${task.status || "unknown"}` : "Agent 未启动，请检查本地 Codex 或 账号登录");
              throw new Error(message);
            }
            this.assistantSessionId = latest.result.conversationId || "";
            this.assistantMessages.push({
              role: "assistant",
              content: latest.result.content,
              provider: this.plugin.providerLabel(latest.result.provider),
              model: latest.result.model || "",
              result: latest.result
            });
            return task;
          } catch (error) {
            this.assistantMessages.push({
              role: "assistant",
              content: error instanceof Error ? error.message : String(error),
              error: true,
              code: error?.code || "UNKNOWN_ERROR"
            });
            return task;
          } finally {
            this.assistantLoading = false;
            this.assistantRequestId = null;
            this.assistantActivity = [];
            await this.render();
            this.focusAssistantConversation();
          }
        }
        async prefillAssistantCommand(skillId) {
          this.assistantMode = "chat";
          this.assistantDraft = appendAssistantSkillCommand(this.assistantDraft, skillId);
          await this.render();
          window.setTimeout(() => {
            const input = this.contentEl.querySelector(".wis-composer textarea");
            if (!input) return;
            input.focus();
            input.setSelectionRange(input.value.length, input.value.length);
          }, 0);
        }
        async prefillContentStageSkill(note, gate) {
          if (!gate?.skill) {
            await this.service.openFile(note.file);
            new Notice2("尚未真实发布，已打开内容文件补充发布记录");
            return;
          }
          this.assistantMode = "chat";
          this.assistantPrimaryPath = note.file.path;
          this.assistantSourcePaths = [];
          this.assistantDraft = `/${gate.skill} ${gate.prompt}`;
          await this.render();
          this.focusAssistantConversation();
          new Notice2(`已在右侧对话填入 /${gate.skill}，确认后发送`);
        }
        openAnalyticsUpload(contentNote = null) {
          const picker = this.contentEl.createEl("input", {
            cls: "wis-hidden-file-input",
            attr: {
              type: "file",
              multiple: "",
              accept: ".csv,.tsv,.json,.xlsx,.xls,text/csv,application/json,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
              tabindex: "-1",
              "aria-hidden": "true"
            }
          });
          picker.addEventListener("change", async () => {
            try {
              const imported = await this.service.importContentAnalytics(picker.files, contentNote);
              if (!imported.length) return;
              const primaryPath = contentNote?.file?.path || this.assistantPrimaryPath;
              this.assistantMode = "chat";
              this.assistantPrimaryPath = primaryPath;
              this.assistantSourcePaths = [.../* @__PURE__ */ new Set([
                ...this.assistantSourcePaths.filter((path) => path !== primaryPath),
                ...imported.map((file) => file.path)
              ])];
              const paths = imported.map((file) => `- ${file.path}`).join("\n");
              this.assistantDraft = `/fde-spread 请读取以下用户回填的真实发布数据并分析，先确认指标口径和基线，不要把相关性写成因果：
${paths}`;
              await this.render();
              this.focusAssistantConversation();
              new Notice2(`已导入 ${imported.length} 份发布数据，并在右侧对话填入 /fde-spread`);
            } catch (error) {
              new Notice2(`导入发布数据失败：${error instanceof Error ? error.message : String(error)}`, 8e3);
            } finally {
              picker.remove();
            }
          }, { once: true });
          picker.click();
        }
        getViewType() {
          return VIEW_TYPES[this.pageKey];
        }
        getDisplayText() {
          return `${NAV_ITEMS.find((item) => item.key === this.pageKey)?.label || "FDE365"} · FDE365`;
        }
        getIcon() {
          return NAV_ITEMS.find((item) => item.key === this.pageKey)?.icon || "orbit";
        }
        async onOpen() {
          this.contentEl.addClass("wis-view-content");
          await this.render();
        }
        async onClose() {
          this.contentEl.removeClass("wis-view-content");
        }
        async refresh() {
          return this.render();
        }
        async render() {
          this.captureAssistantScroll();
          this.captureMainScroll();
          const token = ++this.renderToken;
          const data = await this.service.snapshot();
          if (token !== this.renderToken) return;
          this.resetAssistantMarkdownOwner();
          this.contentEl.empty();
          const app = this.contentEl.createDiv({ cls: `wis-fde-app is-${this.plugin.settings.colorTheme === "dark" ? "dark" : "light"}` });
          const assistantWidth = Math.max(280, Math.min(560, Number(this.plugin.settings.ai.assistant.panelWidth) || 336));
          app.style.setProperty("--wis-assistant-width", `${assistantWidth}px`);
          this.renderSidebar(app, data);
          const workspace = app.createDiv({ cls: "wis-workspace" });
          this.renderTopbar(workspace, data);
          const main = workspace.createEl("main", { cls: "wis-main" });
          main.addEventListener("scroll", () => {
            this.mainScrollTop = main.scrollTop;
          }, { passive: true });
          await this.renderMain(main, data);
          this.restoreMainScroll();
          this.renderStatus(workspace, data);
          await this.renderAssistant(app, data);
          this.restoreAssistantScroll();
        }
        renderSidebar(app, data) {
          const sidebar = app.createEl("aside", { cls: "wis-sidebar" });
          const brand = sidebar.createDiv({ cls: "wis-brand" });
          const logo = brand.createEl("img", { attr: { src: this.plugin.logoResource(), alt: "FDE365" } });
          logo.addClass("wis-brand-logo");
          sidebar.createDiv({ text: "FDE365", cls: "wis-nav-label" });
          const nav = sidebar.createEl("nav", { cls: "wis-nav", attr: { "aria-label": "主导航" } });
          NAV_ITEMS.forEach((item) => {
            const button = nav.createEl("button", { cls: `wis-nav-item${item.key === this.pageKey ? " is-active" : ""}` });
            makeIcon(button, item.icon);
            const text = button.createDiv();
            text.createEl("strong", { text: item.label });
            text.createSpan({ text: item.note });
            if (item.key === "inbox" && data.pending.length) button.createSpan({ text: String(data.pending.length), cls: "wis-nav-count" });
            button.addEventListener("click", () => this.plugin.router.navigate(item.key));
          });
          const pulse = sidebar.createDiv({ cls: "wis-library-pulse" });
          const pulseHead = pulse.createDiv({ cls: "wis-pulse-head" });
          pulseHead.createEl("strong", { text: "六库信号" });
          pulseHead.createSpan({ text: `${data.total} 项资产` });
          data.libraries.forEach((library) => {
            const row = pulse.createEl("button", { cls: "wis-pulse-row" });
            row.createSpan({ text: library.order, cls: `wis-library-code is-${library.color}` });
            row.createSpan({ text: library.short, cls: "wis-pulse-label" });
            const meter = row.createDiv({ cls: "wis-mini-meter" });
            meter.createDiv({ cls: `wis-mini-meter-fill is-${library.color}`, attr: { style: `width:${library.score}%` } });
            row.createSpan({ text: String(library.count), cls: "wis-pulse-count" });
            row.addEventListener("click", () => this.service.openLibrary(library.id));
          });
          const footer = sidebar.createDiv({ cls: "wis-sidebar-footer" });
          footer.createSpan({ text: "本地优先" });
          footer.createSpan({ text: "·" });
          footer.createSpan({ text: "来源优先" });
        }
        renderTopbar(workspace, data) {
          const topbar = workspace.createDiv({ cls: "wis-topbar" });
          const left = topbar.createDiv({ cls: "wis-topbar-title" });
          left.createSpan({ text: "FDE365知识库", cls: "wis-eyebrow" });
          left.createEl("strong", { text: NAV_ITEMS.find((item) => item.key === this.pageKey)?.label || "总览" });
          const actions = topbar.createDiv({ cls: "wis-topbar-actions" });
          const search = actions.createEl("input", { attr: { type: "search", placeholder: "搜索六类资产…", "aria-label": "搜索六类资产" }, cls: "wis-global-search" });
          search.addEventListener("keydown", async (event) => {
            if (event.key !== "Enter" || !search.value.trim()) return;
            const query = search.value.trim().toLowerCase();
            const match = data.notes.find((note) => `${note.file.basename} ${note.content}`.toLowerCase().includes(query));
            if (match) await this.service.openFile(match.file);
            else new Notice2("六类资产中没有找到匹配内容");
          });
          makeButton(actions, "新建资产", "plus", "is-secondary", () => new AssetModal(this.app, "product", async (value) => this.service.createAsset(value)).open());
          makeButton(actions, "设置", "settings", "is-secondary is-settings", () => this.plugin.openSettings());
        }
        renderStatus(workspace, data) {
          const status = workspace.createDiv({ cls: "wis-statusbar" });
          status.createSpan({ text: `Vault: ${this.app.vault.getName()}` });
          status.createSpan({ text: `${data.total} 项正式资产` });
          status.createSpan({ text: `来源覆盖 ${percent(data.sourceCoverage)}` });
          status.createSpan({ text: `${data.installedSkills.length}/${SKILLS.length} Skills` });
          status.createSpan({ text: "create-only · 不覆盖原始材料" });
        }
        pageSkills() {
          return ["fde-start", "fde-library", "fde-write"];
        }
        assistantContextFiles() {
          return [...new Set([this.assistantPrimaryPath, ...this.assistantSourcePaths].filter(Boolean))].map((path) => this.app.vault.getAbstractFileByPath(path)).filter((file) => file instanceof TFile2);
        }
        isAssistantContextFile(file) {
          return file instanceof TFile2 && file.extension === "md" && file.path.startsWith(`${getRoot()}/`) && !file.path.startsWith(`${getRoot()}/.agents/`) && !file.path.startsWith(`${getRoot()}/.fde/`) && !file.path.startsWith(`${getRoot()}/7-系统/`);
        }
        assistantHistoryFiles() {
          const roots = [
            `${getRoot()}/7-系统/AI协作/输出/`,
            `${getRoot()}/7-系统/AI协作/运行记录/`
          ];
          const files = this.app.vault.getMarkdownFiles().filter((file) => roots.some((root) => file.path.startsWith(root))).sort((a, b) => b.stat.mtime - a.stat.mtime);
          const runTaskIds = new Set(files.filter((file) => frontmatterOf(this.app, file).type === "agent-run").map((file) => String(frontmatterOf(this.app, file).task_id || "")).filter(Boolean));
          return files.filter((file) => {
            const meta = frontmatterOf(this.app, file);
            return meta.type !== "agent-output" || !runTaskIds.has(String(meta.task_id || ""));
          }).slice(0, 12);
        }
        async openAssistantHistory(file) {
          const recordMeta = frontmatterOf(this.app, file);
          let runFile = recordMeta.type === "agent-run" ? file : null;
          if (!runFile && recordMeta.type === "agent-output" && recordMeta.task_id) {
            runFile = this.app.vault.getMarkdownFiles().find((candidate) => {
              const meta = frontmatterOf(this.app, candidate);
              return meta.type === "agent-run" && String(meta.task_id || "") === String(recordMeta.task_id);
            }) || null;
          }
          const runMeta = runFile ? frontmatterOf(this.app, runFile) : {};
          const outputPath = String(runMeta.output_file || "");
          const resolvedOutput = outputPath ? this.app.vault.getAbstractFileByPath(outputPath) : null;
          const outputFile = resolvedOutput instanceof TFile2 ? resolvedOutput : file;
          const outputMeta = frontmatterOf(this.app, outputFile);
          const outputContent = await this.app.vault.cachedRead(outputFile);
          const runContent = runFile && runFile !== outputFile ? await this.app.vault.cachedRead(runFile) : outputContent;
          const prompt = String(outputMeta.user_prompt || runMeta.task || markdownSection(outputContent, "任务") || markdownSection(runContent, "任务") || "").trim();
          const response = String(
            markdownSection(outputContent, "AI 输出") || markdownSection(outputContent, "FDE365") || (outputMeta.type === "ai-assistant-output" ? markdownBody(outputContent) : "") || markdownSection(runContent, "执行状态") || "该历史任务没有保存可显示的输出。"
          ).trim();
          const sourcePaths = [.../* @__PURE__ */ new Set([
            ...frontmatterPaths(runMeta.source_files),
            ...frontmatterPaths(outputMeta.source_files),
            ...linkedPaths(markdownSection(outputContent, "来源")),
            ...linkedPaths(markdownSection(runContent, "输入来源"))
          ])].filter((path) => this.app.vault.getAbstractFileByPath(path) instanceof TFile2);
          const provider = String(outputMeta.provider || runMeta.provider || "FDE365 Agent");
          const model = String(outputMeta.model || runMeta.model || "");
          this.assistantMode = "chat";
          this.assistantSessionId = String(outputMeta.conversation_id || runMeta.conversation_id || "");
          this.assistantPrimaryPath = sourcePaths[0] || "";
          this.assistantSourcePaths = sourcePaths.slice(1);
          this.assistantDraft = "";
          this.assistantActivity = [];
          this.assistantMessages = [
            ...prompt ? [{ role: "user", content: prompt }] : [],
            { role: "assistant", content: response, provider: this.plugin.providerLabel(provider), model }
          ];
          await this.render();
          window.setTimeout(() => {
            const body = this.contentEl.querySelector(".wis-assistant-body");
            if (body) body.scrollTop = body.scrollHeight;
            this.contentEl.querySelector(".wis-composer textarea")?.focus();
          }, 0);
        }
        async renderAssistantConversation(parent) {
          if (!this.assistantMessages.length && !this.assistantLoading) return false;
          const conversation = parent.createDiv({ cls: "wis-conversation" });
          for (const message of this.assistantMessages) {
            const item = conversation.createEl("article", { cls: `wis-message is-${message.role}${message.error ? " is-error" : ""}` });
            const avatar = item.createDiv({ cls: "wis-message-avatar" });
            makeIcon(avatar, message.role === "user" ? "user-round" : message.error ? "triangle-alert" : "sparkles");
            const bubble = item.createDiv({ cls: "wis-message-bubble" });
            const meta = bubble.createDiv({ cls: "wis-message-meta" });
            meta.createEl("strong", { text: message.role === "user" ? "你" : message.error ? "请求未完成" : "FDE365" });
            if (message.provider) meta.createSpan({ text: [message.provider, message.model].filter(Boolean).join(" · ") });
            await this.renderAssistantMessageContent(bubble, message);
            if (message.role === "assistant" && !message.error) {
              const actions = bubble.createDiv({ cls: "wis-message-actions" });
              const copy = makeButton(actions, "复制", "copy", "is-text");
              copy.addEventListener("click", async () => {
                try {
                  await navigator.clipboard.writeText(message.content);
                  new Notice2("回答已复制");
                } catch (error) {
                  new Notice2(`复制失败：${error instanceof Error ? error.message : String(error)}`);
                }
              });
              const save = makeButton(actions, "保存", "file-plus-2", "is-text");
              save.addEventListener("click", async () => {
                const prompt = [...this.assistantMessages].reverse().find((item2) => item2.role === "user")?.content || "";
                const file = await this.plugin.saveAssistantOutput(message, `${this.getDisplayText()} · AI 对话`, {
                  conversationId: this.assistantSessionId,
                  sourceFiles: this.assistantContextFiles().map((source) => source.path),
                  prompt
                });
                new Notice2(`回答已保存：${file.path}`);
                await this.render();
              });
            }
          }
          if (this.assistantLoading) {
            const loading = conversation.createEl("article", { cls: "wis-message is-assistant is-loading" });
            const avatar = loading.createDiv({ cls: "wis-message-avatar" });
            makeIcon(avatar, "sparkles");
            const bubble = loading.createDiv({ cls: "wis-message-bubble" });
            bubble.createEl("strong", { text: "Agent 处理中…" });
            const stop = makeButton(bubble, "停止生成", "square", "is-secondary");
            stop.addEventListener("click", () => {
              if (this.assistantRequestId) this.plugin.cancelAgentRequest(this.assistantRequestId);
            });
          }
          return true;
        }
        async renderAssistantChat(parent, data) {
          if (!await this.renderAssistantConversation(parent)) {
            const welcome = parent.createDiv({ cls: "wis-assistant-welcome" });
            const icon = welcome.createDiv({ cls: "wis-assistant-welcome-icon" });
            makeIcon(icon, "orbit");
            welcome.createEl("strong", { text: "在知识库里，和 AI 协作工作" });
            welcome.createEl("p", { text: "连续对话、选取上下文、调用 FDE Skills，并把可用结果保存回本地。" });
            const features = welcome.createDiv({ cls: "wis-assistant-feature-chips" });
            ["本地会话", "知识上下文", "结果留档"].forEach((label) => features.createSpan({ text: label }));
          }
          const context = parent.createDiv({ cls: "wis-context-card" });
          context.createEl("strong", { text: "当前知识库" });
          context.createSpan({ text: `${data.total} 项资产 · ${data.pending.length} 份待处理` });
          context.createSpan({ text: `来源覆盖 ${percent(data.sourceCoverage)} · ${data.unknown} 个待确认项` });
        }
        renderAssistantKnowledge(parent, data) {
          const intro = parent.createDiv({ cls: "wis-assistant-section-head" });
          intro.createEl("strong", { text: "六类资产" });
          intro.createSpan({ text: "进入真实业务边界，查看来源、版本和待确认项。" });
          const list = parent.createDiv({ cls: "wis-assistant-fde-list" });
          data.libraries.forEach((library) => {
            const button = list.createEl("button", { cls: `wis-assistant-fde-item is-${library.color}` });
            button.createSpan({ text: library.order, cls: `wis-library-code is-${library.color}` });
            const copy = button.createDiv();
            copy.createEl("strong", { text: library.name });
            copy.createSpan({ text: library.count ? `来源 ${percent(library.sourceCoverage)} · ${library.unknown} 待确认` : library.emptyAction });
            button.createSpan({ text: String(library.count) });
            button.addEventListener("click", () => this.service.openLibrary(library.id));
          });
          makeButton(parent, "查库 /fde-library", "sparkles", "is-secondary wis-assistant-wide-action", () => void this.prefillAssistantCommand("fde-library"));
        }
        renderAssistantSkills(parent) {
          const intro = parent.createDiv({ cls: "wis-assistant-section-head" });
          intro.createEl("strong", { text: "当前页面工作流" });
          intro.createSpan({ text: "运行前读取项目内 SKILL.md，结果进入本地 AI 协作记录。" });
          const quick = parent.createDiv({ cls: "wis-skill-quick" });
          this.pageSkills().map((id) => SKILLS.find((skill) => skill.id === id)).filter(Boolean).forEach((skill) => {
            const button = quick.createEl("button", { cls: "wis-quick-skill" });
            makeIcon(button, skill.icon);
            const text = button.createDiv();
            text.createEl("strong", { text: `/${skill.id}` });
            text.createSpan({ text: skill.name });
            button.addEventListener("click", () => void this.prefillAssistantCommand(skill.id));
          });
          makeButton(parent, "查看全部 35 个 FDE Skills", "blocks", "is-secondary wis-assistant-wide-action", () => this.plugin.router.navigate("skills"));
        }
        renderAssistantHistory(parent) {
          const intro = parent.createDiv({ cls: "wis-assistant-section-head" });
          intro.createEl("strong", { text: "本地协作历史" });
          intro.createSpan({ text: "点击记录会恢复到右侧对话，可继续确认下一步；Markdown 只在后台留档。" });
          const files = this.assistantHistoryFiles();
          const list = parent.createDiv({ cls: "wis-assistant-history" });
          if (!files.length) list.createDiv({ text: "还没有已保存的协作对话。完成一次对话或运行 Skill 后会出现在这里。", cls: "wis-empty" });
          files.forEach((file) => {
            const meta = frontmatterOf(this.app, file);
            const topic = assistantHistoryTopic(meta);
            const skill = meta.agent_id ? `/${meta.agent_id}` : "";
            const provider = meta.provider ? this.plugin.providerLabel(String(meta.provider)) : "";
            const button = list.createEl("button", { cls: "wis-assistant-history-item" });
            makeIcon(button, meta.type === "agent-run" ? "list-checks" : "message-square-text");
            const copy = button.createDiv();
            copy.createEl("strong", { text: topic });
            copy.createSpan({ text: [skill, provider, meta.model, formatRelativeTime2(file.stat.mtime)].filter(Boolean).join(" · ") });
            button.setAttr("title", `${topic}
恢复到右侧对话并继续处理`);
            button.addEventListener("click", () => void this.openAssistantHistory(file));
          });
        }
        renderAssistantComposer(panel) {
          const composer = panel.createDiv({ cls: "wis-composer" });
          const toolbar = composer.createDiv({ cls: "wis-composer-toolbar" });
          const selectedNotes = this.assistantContextFiles().filter((file) => this.isAssistantContextFile(file));
          const note = makeButton(toolbar, selectedNotes.length ? `已选 ${selectedNotes.length} 篇` : "选择笔记", "file-search-2", `is-tool${selectedNotes.length ? " is-active" : ""}`);
          note.setAttr("title", selectedNotes.length ? `已选：${selectedNotes.map((file) => file.basename).join("、")}；点击调整` : "点击搜索并选择多篇知识库笔记");
          note.addEventListener("click", () => new AssistantNotePickerModal(this.app, selectedNotes.map((file) => file.path), async (paths) => {
            const selectedPaths = [...new Set(paths)].filter((path) => this.app.vault.getAbstractFileByPath(path) instanceof TFile2);
            const preservedPaths = this.assistantContextFiles().filter((file) => !this.isAssistantContextFile(file)).map((file) => file.path);
            this.assistantPrimaryPath = selectedPaths[0] || "";
            this.assistantSourcePaths = [.../* @__PURE__ */ new Set([...selectedPaths.slice(1), ...preservedPaths])];
            await this.render();
          }).open());
          const upload = makeButton(toolbar, "上传数据", "file-up", "is-tool");
          upload.setAttr("title", "上传 CSV、Excel、TSV 或 JSON 发布数据，并在当前对话中分析");
          upload.addEventListener("click", () => this.openAnalyticsUpload());
          const fresh = makeButton(toolbar, "新对话", "message-square-plus", "is-tool");
          fresh.disabled = this.assistantLoading;
          if (this.assistantLoading) fresh.setAttr("title", "请等待当前任务完成或先停止");
          fresh.addEventListener("click", async () => {
            if (this.assistantRequestId) this.plugin.cancelAgentRequest(this.assistantRequestId);
            this.assistantMessages = [];
            this.assistantDraft = "";
            this.assistantSessionId = "";
            this.assistantActivity = [];
            await this.render();
          });
          if (this.assistantContextFiles().length) {
            const files = composer.createDiv({ cls: "wis-composer-context" });
            this.assistantContextFiles().forEach((file) => {
              const chip = files.createEl("button", { cls: "wis-context-chip", attr: { title: file.path } });
              makeIcon(chip, "file-text");
              chip.createSpan({ text: file.basename });
              makeIcon(chip, "x");
              chip.addEventListener("click", async () => {
                if (this.assistantPrimaryPath === file.path) this.assistantPrimaryPath = "";
                this.assistantSourcePaths = this.assistantSourcePaths.filter((path) => path !== file.path);
                await this.render();
              });
            });
          }
          const row = composer.createDiv({ cls: "wis-composer-row" });
          const inputShell = row.createDiv({ cls: "wis-composer-input-shell" });
          const commandMenu = inputShell.createDiv({
            cls: "wis-command-menu",
            attr: { role: "listbox", "aria-label": "FDE 命令建议" }
          });
          commandMenu.hidden = true;
          const input = inputShell.createEl("textarea", { attr: { placeholder: "问六类资产，或输入 /fd 选择命令…", rows: "3", "aria-label": "交给 FDE365 Agent", "aria-autocomplete": "list", "aria-expanded": "false" } });
          input.value = this.assistantDraft;
          let commandMatches = [];
          let commandSelection = 0;
          let commandRange = null;
          const closeCommandMenu = () => {
            commandMatches = [];
            commandRange = null;
            commandSelection = 0;
            commandMenu.hidden = true;
            commandMenu.empty();
            input.setAttr("aria-expanded", "false");
            input.removeAttribute("aria-activedescendant");
          };
          const fillCommand = (skill) => {
            if (!skill || !commandRange) return;
            const replacement = `/${skill.id} `;
            input.value = `${input.value.slice(0, commandRange.start)}${replacement}${input.value.slice(commandRange.end)}`;
            const caret = commandRange.start + replacement.length;
            input.setSelectionRange(caret, caret);
            this.assistantDraft = input.value;
            closeCommandMenu();
            input.focus();
          };
          const renderCommandMenu = () => {
            commandMenu.empty();
            commandMatches.forEach((skill, index) => {
              const option = commandMenu.createEl("button", {
                cls: `wis-command-option${index === commandSelection ? " is-selected" : ""}`,
                attr: { id: `wis-command-${skill.id}`, role: "option", "aria-selected": String(index === commandSelection) }
              });
              makeIcon(option, skill.icon);
              const copy = option.createDiv();
              copy.createEl("strong", { text: `/${skill.id}` });
              copy.createSpan({ text: skill.name });
              option.createSpan({ text: skill.output, cls: "wis-command-output" });
              option.addEventListener("mousedown", (event) => event.preventDefault());
              option.addEventListener("click", () => fillCommand(skill));
            });
            commandMenu.hidden = !commandMatches.length;
            input.setAttr("aria-expanded", String(Boolean(commandMatches.length)));
            if (commandMatches.length) input.setAttr("aria-activedescendant", `wis-command-${commandMatches[commandSelection].id}`);
          };
          const updateCommandMenu = () => {
            const caret = input.selectionStart ?? input.value.length;
            const completion = commandCompletionState(input.value, caret);
            if (!completion) {
              closeCommandMenu();
              return;
            }
            commandMatches = completion.matches;
            commandSelection = Math.min(commandSelection, Math.max(0, commandMatches.length - 1));
            commandRange = { start: completion.start, end: completion.end };
            renderCommandMenu();
          };
          input.addEventListener("input", () => {
            this.assistantDraft = input.value;
            updateCommandMenu();
          });
          input.addEventListener("click", updateCommandMenu);
          input.addEventListener("blur", () => window.setTimeout(closeCommandMenu, 100));
          const submitStack = row.createDiv({ cls: "wis-composer-submit-stack" });
          const executionMode = this.plugin.settings.ai.assistant.executionMode === "yolo" ? "yolo" : "approval";
          const modeSelect = submitStack.createEl("select", {
            cls: `wis-agent-mode-select is-${executionMode}`,
            attr: { "aria-label": "Agent 执行模式", title: executionMode === "yolo" ? "YOLO：当前 Vault 内无需批准" : "命令和写入需要批准" }
          });
          modeSelect.createEl("option", { text: "需批准", attr: { value: "approval" } });
          modeSelect.createEl("option", { text: "YOLO", attr: { value: "yolo" } });
          modeSelect.value = executionMode;
          modeSelect.addEventListener("change", async () => {
            this.plugin.settings.ai.assistant.executionMode = modeSelect.value === "yolo" ? "yolo" : "approval";
            await this.plugin.saveSettings();
            new Notice2(modeSelect.value === "yolo" ? "YOLO 已开启：当前 Vault 内不再逐次批准" : "已切换为需要批准模式");
            this.plugin.refreshDashboard();
          });
          const send = makeButton(submitStack, this.assistantLoading ? "停止" : "发送", this.assistantLoading ? "square" : "arrow-up", this.assistantLoading ? "is-secondary" : "is-primary");
          const submit = async () => {
            if (this.assistantLoading) {
              if (this.assistantRequestId) this.plugin.cancelAgentRequest(this.assistantRequestId);
              return;
            }
            const prompt = input.value.trim();
            if (!prompt) return;
            const submittedSources = this.assistantContextFiles();
            const pendingInboxSources = submittedSources.filter((file) => this.service.isInboxMaterialFile(file) && !this.service.isCompletedInboxFile(file));
            this.assistantMode = "chat";
            this.assistantMessages.push({ role: "user", content: prompt });
            this.assistantDraft = "";
            input.value = "";
            closeCommandMenu();
            this.assistantLoading = true;
            this.assistantActivity = [];
            await this.render();
            const requestId = `fde365-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
            this.assistantRequestId = requestId;
            try {
              const inboxCompletionProtocol = pendingInboxSources.length ? `

当前对话包含待处理原始材料。只有在用户明确确认执行，并且分流、正式资产写入、来源回链和处理记录全部成功后，才允许在回复最后单独输出 ${INBOX_COMPLETION_MARKER}。仅生成预览、等待确认、没有写入、部分完成或任一步骤失败时严禁输出该标记。` : "";
              const result = await this.plugin.askAssistant({
                requestId,
                prompt,
                history: this.assistantMessages.slice(0, -1),
                systemPrompt: `你是独立于中间工作台页面的 FDE365 本地 Agent。
${BASE_SKILL_RULES}
${executionModeRule(this.plugin)}
插件可能会在“本地运行上下文”中附加已经读取的配置与 Skill 合同；直接使用这些内容。需要时使用本地工具检查 Vault。${inboxCompletionProtocol}`,
                sourceFiles: submittedSources,
                localContext: await this.service.assistantRuntimeContext(prompt),
                sessionId: this.assistantSessionId,
                onEvent: () => {
                  this.assistantActivity = [{ label: "Agent 处理中…" }];
                  this.plugin.refreshDashboard();
                }
              });
              this.assistantSessionId = result.conversationId || this.assistantSessionId;
              const message = {
                role: "assistant",
                content: stripInboxCompletionMarker(result.content),
                provider: this.plugin.providerLabel(result.provider),
                model: result.model,
                result
              };
              this.assistantMessages.push(message);
              if (pendingInboxSources.length && shouldCompleteInboxTurn(prompt, result)) {
                const completedPaths = await this.service.completeInboxFiles(pendingInboxSources);
                if (completedPaths.size) {
                  new Notice2(`已自动标记为处理完成：${completedPaths.size} 份材料；原始材料继续保留`);
                }
              } else if (pendingInboxSources.length) {
                this.service.setInboxProcessing(pendingInboxSources, "awaiting-confirmation", "等待确认并完成全部入库步骤", {
                  conversationId: this.assistantSessionId,
                  sourcePaths: pendingInboxSources.map((file) => file.path),
                  messages: [...this.assistantMessages],
                  resultContent: message.content
                });
              }
              if (this.plugin.settings.ai.assistant.autoSaveOutput) await this.plugin.saveAssistantOutput(message, `${this.getDisplayText()} · AI 对话`, {
                conversationId: this.assistantSessionId,
                sourceFiles: this.assistantContextFiles().map((source) => source.path),
                prompt
              });
            } catch (error) {
              if (pendingInboxSources.length) {
                this.service.setInboxProcessing(pendingInboxSources, "failed", "确认执行失败 · 可在当前对话重试", {
                  conversationId: this.assistantSessionId,
                  sourcePaths: pendingInboxSources.map((file) => file.path),
                  messages: [...this.assistantMessages]
                });
              }
              this.assistantMessages.push({
                role: "assistant",
                content: error instanceof Error ? error.message : String(error),
                error: true,
                code: error?.code || "UNKNOWN_ERROR"
              });
            } finally {
              this.assistantLoading = false;
              this.assistantRequestId = null;
              this.assistantActivity = [];
              this.plugin.refreshDashboard();
            }
          };
          send.addEventListener("click", () => void submit());
          input.addEventListener("keydown", (event) => {
            if (!commandMenu.hidden && commandMatches.length) {
              if (event.key === "ArrowDown" || event.key === "ArrowUp") {
                event.preventDefault();
                const delta = event.key === "ArrowDown" ? 1 : -1;
                commandSelection = (commandSelection + delta + commandMatches.length) % commandMatches.length;
                renderCommandMenu();
                commandMenu.querySelector(".wis-command-option.is-selected")?.scrollIntoView({ block: "nearest" });
                return;
              }
              if (event.key === "Tab" || event.key === "Enter" && !event.shiftKey) {
                event.preventDefault();
                fillCommand(commandMatches[commandSelection]);
                return;
              }
              if (event.key === "Escape") {
                event.preventDefault();
                closeCommandMenu();
                return;
              }
            }
            if (event.key === "Enter" && !event.shiftKey) {
              event.preventDefault();
              void submit();
            }
          });
          const contextScope = this.plugin.settings.ai.assistant.contextScope;
          composer.createDiv({
            text: contextScope === "retrieved" ? "Agent 已预附加本地检索结果" : contextScope === "none" ? "Agent 按任务需要读取 Vault" : "Agent 已预附加当前笔记",
            cls: "wis-composer-note"
          });
        }
        async renderAssistant(app, data) {
          const panel = app.createEl("aside", { cls: "wis-assistant" });
          this.renderAssistantResizeHandle(app, panel);
          const head = panel.createDiv({ cls: "wis-assistant-head" });
          const title = head.createDiv();
          title.createSpan({ text: "FDE365 AGENT", cls: "wis-eyebrow" });
          title.createEl("strong", { text: "对话 · FDE · Skills · 历史" });
          const capability = this.plugin.providerManager.describeSelected();
          const agentCapability = this.plugin.agentRuntime?.describe?.() || { available: false, error: "本地 Agent 未就绪" };
          const isDeveloperRuntime = agentCapability.mode === "local-cli";
          const headActions = head.createDiv({ cls: "wis-assistant-head-actions" });
          const executionMode = this.plugin.settings.ai.assistant.executionMode === "yolo" ? "yolo" : "approval";
          const provider = headActions.createEl("button", {
            cls: `wis-provider-dot${agentCapability.available && (isDeveloperRuntime || capability.configured && capability.compatible) ? " is-ready" : ""}`,
            attr: { title: [isDeveloperRuntime ? "DEV · 本地 Codex CLI" : "FDE365 Codex Agent", isDeveloperRuntime ? "继承本机登录与配置" : capability.model, capability.error, agentCapability.error].filter(Boolean).join(" · ") }
          });
          provider.createSpan({ text: isDeveloperRuntime ? agentCapability.available ? "DEV · 本地 Codex CLI" : "缺少 Codex CLI" : !capability.configured ? "登录账号" : agentCapability.available ? capability.model : "缺少 Codex 组件" });
          provider.addEventListener("click", () => this.plugin.openSettings("ai"));
          const body = panel.createDiv({ cls: "wis-assistant-body" });
          body.dataset.assistantMode = this.assistantMode;
          body.addEventListener("scroll", () => this.captureAssistantScroll(), { passive: true });
          body.createEl("p", {
            text: executionMode === "yolo" ? "YOLO 模式：Agent 在当前 Vault 内自动执行，不再逐次批准。" : "需要批准：Agent 可读取当前 Vault、运行 FDE Skills；命令和写入会向你确认。",
            cls: `wis-assistant-rule is-${executionMode}`
          });
          const tabs = body.createDiv({ cls: "wis-assistant-tabs", attr: { role: "tablist", "aria-label": "AI 工作区" } });
          [["chat", "对话"], ["fde", "FDE"], ["skills", "Skills"], ["history", "历史"]].forEach(([id, label]) => {
            const tab = tabs.createEl("button", { cls: this.assistantMode === id ? "is-active" : "", attr: { role: "tab", "aria-selected": String(this.assistantMode === id) } });
            tab.createSpan({ text: label });
            tab.addEventListener("click", async () => {
              this.assistantMode = id;
              await this.render();
            });
          });
          const surface = body.createDiv({ cls: `wis-assistant-surface is-${this.assistantMode}` });
          if (this.assistantMode === "fde") this.renderAssistantKnowledge(surface, data);
          else if (this.assistantMode === "skills") this.renderAssistantSkills(surface);
          else if (this.assistantMode === "history") this.renderAssistantHistory(surface);
          else await this.renderAssistantChat(surface, data);
          this.renderAssistantComposer(panel);
        }
        renderAssistantResizeHandle(app, panel) {
          const handle = panel.createDiv({
            cls: "wis-assistant-resize-handle",
            attr: {
              role: "separator",
              tabindex: "0",
              "aria-label": "调整右侧 Agent 对话栏宽度",
              "aria-orientation": "vertical",
              title: "拖动调整对话栏宽度；双击恢复默认宽度"
            }
          });
          const applyWidth = (value) => {
            const width = Math.max(280, Math.min(560, Math.round(Number(value) || 336)));
            this.plugin.settings.ai.assistant.panelWidth = width;
            app.style.setProperty("--wis-assistant-width", `${width}px`);
            handle.setAttr("aria-valuenow", String(width));
            return width;
          };
          applyWidth(this.plugin.settings.ai.assistant.panelWidth);
          let startX = 0;
          let startWidth = 0;
          let dragging = false;
          handle.addEventListener("pointerdown", (event) => {
            if (event.button !== 0) return;
            event.preventDefault();
            dragging = true;
            startX = event.clientX;
            startWidth = Number(this.plugin.settings.ai.assistant.panelWidth) || 336;
            app.addClass("is-resizing-assistant");
            handle.setPointerCapture?.(event.pointerId);
          });
          handle.addEventListener("pointermove", (event) => {
            if (!dragging) return;
            applyWidth(startWidth + startX - event.clientX);
          });
          const finishResize = async (event) => {
            if (!dragging) return;
            dragging = false;
            app.removeClass("is-resizing-assistant");
            handle.releasePointerCapture?.(event.pointerId);
            await this.plugin.saveSettings();
          };
          handle.addEventListener("pointerup", (event) => void finishResize(event));
          handle.addEventListener("pointercancel", (event) => void finishResize(event));
          handle.addEventListener("dblclick", async () => {
            applyWidth(336);
            await this.plugin.saveSettings();
          });
          handle.addEventListener("keydown", async (event) => {
            if (!["ArrowLeft", "ArrowRight", "Home"].includes(event.key)) return;
            event.preventDefault();
            const current = Number(this.plugin.settings.ai.assistant.panelWidth) || 336;
            applyWidth(event.key === "Home" ? 336 : current + (event.key === "ArrowLeft" ? 16 : -16));
            await this.plugin.saveSettings();
          });
        }
      }
      return FDEBaseView;
    };
  }
});

// fde-workspace-views.js
var require_fde_workspace_views = __commonJS({
  "fde-workspace-views.js"(exports2, module2) {
    var { Notice: Notice2 } = require("obsidian");
    var createFDEBaseView = require_fde_workspace_view_base();
    module2.exports = function createWorkspaceViews(deps) {
      const {
        getRoot,
        VIEW_TYPES,
        LIBRARIES,
        CONTENT_STAGES,
        CONTENT_STAGE_GATES,
        SKILL_GROUPS,
        SKILLS,
        makeIcon,
        makeButton,
        formatRelativeTime: formatRelativeTime2,
        percent,
        TextPromptModal,
        AssetModal,
        ConfirmActionModal
      } = deps;
      const FDEBaseView = createFDEBaseView(deps);
      class FDEDashboardView extends FDEBaseView {
        constructor(leaf, plugin) {
          super(leaf, plugin, "dashboard");
        }
        async renderMain(main, data) {
          const hero = main.createEl("section", { cls: "wis-hero" });
          const copy = hero.createDiv();
          copy.createSpan({ text: "FDE365 · 六类资产", cls: "wis-eyebrow" });
          copy.createEl("h1", { text: "六类资产运营台" });
          copy.createEl("p", { text: "不按话题堆笔记。围绕个人、产品、客户、案例、方法和内容，持续保留真源与下一步。" });
          const signal = hero.createDiv({ cls: "wis-today-signal" });
          makeIcon(signal, data.pending.length ? "inbox" : data.unknown ? "circle-help" : "circle-check-big");
          const signalCopy = signal.createDiv();
          signalCopy.createSpan({ text: "当前入口" });
          signalCopy.createEl("strong", { text: data.pending.length ? `先处理 ${data.pending.length} 份原始材料` : data.unknown ? `先确认 ${data.unknown} 个未知项` : "六库状态可以继续推进" });
          makeButton(signal, "运行 /fde-start", "arrow-right", "is-secondary", () => void this.runSkillInAssistant("fde-start", "请读取当前六类资产库状态，为我选择并执行一个最值得推进的入口。"));
          const head = main.createDiv({ cls: "wis-section-head" });
          const headCopy = head.createDiv();
          headCopy.createEl("h2", { text: "六类资产" });
          headCopy.createSpan({ text: "目录就是业务边界；数字只统计正式资产，不包含系统文件和 Skill。" });
          const grid = main.createDiv({ cls: "wis-library-grid" });
          data.libraries.forEach((library) => {
            const card = grid.createEl("button", { cls: `wis-library-card is-${library.color}` });
            const top = card.createDiv({ cls: "wis-library-card-top" });
            top.createSpan({ text: library.order, cls: "wis-library-number" });
            makeIcon(top, library.icon);
            card.createEl("h3", { text: library.name });
            card.createEl("p", { text: library.description });
            const metrics = card.createDiv({ cls: "wis-library-metrics" });
            metrics.createDiv({ text: String(library.count), cls: "wis-library-count" });
            const detail = metrics.createDiv();
            detail.createSpan({ text: "项资产" });
            detail.createSpan({ text: `来源 ${percent(library.sourceCoverage)}` });
            const footer = card.createDiv({ cls: "wis-library-card-foot" });
            footer.createSpan({ text: library.count ? `${library.unknown} 个待确认` : library.emptyAction });
            footer.createSpan({ text: library.updated ? formatRelativeTime2(library.updated) : "尚未建立" });
            card.addEventListener("click", () => this.service.openLibrary(library.id));
          });
          const lower = main.createDiv({ cls: "wis-dashboard-lower" });
          const pipeline = lower.createEl("section", { cls: "wis-panel wis-pipeline-summary" });
          const pipelineHead = pipeline.createDiv({ cls: "wis-panel-head" });
          const pipelineTitle = pipelineHead.createDiv();
          pipelineTitle.createEl("h2", { text: "内容流转" });
          pipelineTitle.createSpan({ text: "一个文件只处于一个阶段" });
          makeButton(pipelineHead, "打开流水线", "arrow-right", "is-text", () => this.plugin.activateProjects());
          const track = pipeline.createDiv({ cls: "wis-stage-track" });
          data.stages.forEach((stage, index) => {
            const item = track.createDiv({ cls: `wis-stage-node is-${stage.color}` });
            item.createSpan({ text: String(index + 1).padStart(2, "0") });
            item.createEl("strong", { text: stage.id });
            item.createDiv({ text: String(stage.items.length) });
          });
          const quality = lower.createEl("section", { cls: "wis-panel wis-quality-summary" });
          const qualityHead = quality.createDiv({ cls: "wis-panel-head" });
          const qualityTitle = qualityHead.createDiv();
          qualityTitle.createEl("h2", { text: "知识质量" });
          qualityTitle.createSpan({ text: "只显示可行动的问题" });
          makeButton(qualityHead, "完整体检", "arrow-right", "is-text", () => this.plugin.activateAnalytics());
          [
            { label: "缺少来源", value: data.total - data.notes.filter((note) => note.source).length, note: "不能作为确定事实", icon: "link", color: "orange" },
            { label: "待确认内容", value: data.unknown, note: "推断和事实尚未分开", icon: "circle-help", color: "violet" },
            { label: "超过 90 天", value: data.stale, note: "可能需要版本复核", icon: "clock-3", color: "blue" }
          ].forEach((item) => {
            const row = quality.createDiv({ cls: `wis-quality-row is-${item.color}` });
            makeIcon(row, item.icon);
            const text = row.createDiv();
            text.createEl("strong", { text: item.label });
            text.createSpan({ text: item.note });
            row.createSpan({ text: String(item.value) });
          });
          const recent = main.createEl("section", { cls: "wis-panel wis-recent" });
          const recentHead = recent.createDiv({ cls: "wis-panel-head" });
          const recentTitle = recentHead.createDiv();
          recentTitle.createEl("h2", { text: "最近资产" });
          recentTitle.createSpan({ text: "来自六个正式资产库" });
          if (!data.recent.length) recent.createDiv({ text: "六类资产还是空的。运行 /fde-interview，或先把材料放入待处理。", cls: "wis-empty" });
          data.recent.forEach((note) => {
            const row = recent.createEl("button", { cls: "wis-note-row" });
            row.createSpan({ text: note.library?.order || "--", cls: `wis-library-code is-${note.library?.color || "blue"}` });
            const text = row.createDiv({ cls: "wis-note-row-copy" });
            text.createEl("strong", { text: note.file.basename, cls: "wis-note-row-title" });
            text.createSpan({ text: `${note.library?.name || "资产"} · ${note.source ? `来源：${note.source}` : "缺少来源"}`, cls: "wis-note-row-meta" });
            row.createSpan({ text: formatRelativeTime2(note.file.stat.mtime), cls: "wis-note-row-time" });
            row.addEventListener("click", () => this.service.openFile(note.file));
          });
        }
      }
      class FDEInboxView extends FDEBaseView {
        constructor(leaf, plugin) {
          super(leaf, plugin, "inbox");
          this.selectedPaths = /* @__PURE__ */ new Set();
        }
        async processFiles(files) {
          const selected = [...new Map((files || []).filter((file) => file?.path).map((file) => [file.path, file])).values()];
          if (!selected.length || this.assistantLoading) {
            if (this.assistantLoading) new Notice2("Agent 正在处理当前会话，请等待完成或先停止");
            return;
          }
          const states = selected.map((file) => this.service.inboxProcessingState(file));
          const conversationIds = [...new Set(states.map((state) => state.conversationId).filter(Boolean))];
          const conversationId = conversationIds.length === 1 ? conversationIds[0] : this.assistantSessionId;
          const storedConversation = states.find((state) => state.conversationId === conversationId && Array.isArray(state.messages));
          const messages = conversationId && conversationId === this.assistantSessionId ? this.assistantMessages : storedConversation?.messages || [];
          const displayPrompt = `/fde-ingest

处理待处理材料：${selected.map((file) => file.basename).join("、")}`;
          this.assistantMode = "chat";
          this.assistantSessionId = conversationId;
          this.assistantPrimaryPath = selected[0].path;
          this.assistantSourcePaths = selected.slice(1).map((file) => file.path);
          this.assistantMessages = [...messages, { role: "user", content: displayPrompt }];
          this.assistantDraft = "";
          this.assistantLoading = true;
          this.assistantRequestId = null;
          this.assistantActivity = [{ label: "Agent 处理中…" }];
          await this.render();
          this.focusAssistantConversation();
          try {
            const result = await this.service.processInboxFiles(selected, {
              sessionId: conversationId,
              messages: this.assistantMessages,
              onTaskStart: (task) => {
                this.assistantRequestId = task?.taskId || null;
                this.plugin.refreshDashboard();
              },
              onEvent: () => {
                this.assistantActivity = [{ label: "Agent 处理中…" }];
                this.plugin.refreshDashboard();
              }
            });
            const latestState = this.service.inboxProcessingState(selected[0]);
            this.assistantSessionId = latestState.conversationId || this.assistantSessionId;
            if (result.status === "awaiting-confirmation") {
              new Notice2("分流预览已生成；请在右侧对话确认并完成入库步骤");
            } else {
              const message = result.task?.error || result.error?.message || latestState.message || "Agent 未能完成处理";
              this.assistantMessages.push({ role: "assistant", content: message, error: true, code: result.error?.code || "AGENT_FAILED" });
            }
          } finally {
            this.assistantLoading = false;
            this.assistantRequestId = null;
            this.assistantActivity = [];
            await this.render();
            this.focusAssistantConversation();
          }
        }
        async openProcessingConversation(state, file) {
          const sourcePaths = [...new Set((state?.sourcePaths || [file.path]).filter(Boolean))];
          const primaryPath = sourcePaths[0] || file.path;
          const resultContent = String(state?.resultContent || state?.preview || "").trim();
          const conversationId = state?.conversationId || "";
          const sameConversation = Boolean(conversationId && this.assistantSessionId === conversationId && this.assistantMessages.length);
          this.assistantMode = "chat";
          this.assistantSessionId = conversationId;
          this.assistantPrimaryPath = primaryPath;
          this.assistantSourcePaths = sourcePaths.filter((path) => path !== primaryPath);
          if (state?.status === "awaiting-confirmation") this.assistantDraft = "确认执行";
          else if (!sameConversation || !this.assistantDraft.trim()) this.assistantDraft = "请基于上面的处理结果给出可执行的下一步。";
          this.assistantActivity = [];
          if (!sameConversation) {
            this.assistantMessages = Array.isArray(state?.messages) && state.messages.length ? state.messages : [
              { role: "user", content: `处理待处理材料：${sourcePaths.map((path) => path.split("/").pop()).join("、")}` },
              {
                role: "assistant",
                content: resultContent || "分流预览已生成。请确认下一步要写入、修改，还是暂不处理。",
                provider: state?.provider || "FDE365 Agent",
                model: state?.model || ""
              }
            ];
          }
          await this.render();
          window.setTimeout(() => {
            const input = this.contentEl.querySelector(".wis-composer textarea");
            input?.focus();
            const body = this.contentEl.querySelector(".wis-assistant-body");
            if (body) body.scrollTop = body.scrollHeight;
          }, 0);
        }
        async confirmDeleteMaterials(files) {
          const candidates = [...new Map((files || []).filter((file) => this.service.inboxProcessingState(file).status !== "running").map((file) => [file.path, file])).values()];
          if (!candidates.length) {
            new Notice2("请选择当前未在处理中的原始材料");
            return;
          }
          const originalGroups = await Promise.all(candidates.map((file) => this.service.inboxOriginalFiles(file)));
          const originalCount = new Set(originalGroups.flat().map((target) => target.path)).size;
          const title = candidates.length === 1 ? "删除这份原始材料？" : `删除选中的 ${candidates.length} 份原始材料？`;
          new ConfirmActionModal(
            this.app,
            title,
            `将把 ${candidates.length} 条收件记录和 ${originalCount} 个对应原始文件移入回收站。六库正式资产、处理记录和 Agent 对话不会删除，但其中的来源链接可能失效。`,
            candidates.length === 1 ? "删除材料和原始文件" : `批量删除 (${candidates.length})`,
            async () => {
              try {
                await this.service.deleteInboxMaterials(candidates);
                const deletedPaths = new Set(candidates.map((file) => file.path));
                deletedPaths.forEach((path) => this.selectedPaths.delete(path));
                if (deletedPaths.has(this.assistantPrimaryPath)) this.assistantPrimaryPath = "";
                this.assistantSourcePaths = this.assistantSourcePaths.filter((path) => !deletedPaths.has(path));
                await this.render();
              } catch (error) {
                new Notice2(`删除失败：${error instanceof Error ? error.message : String(error)}`, 8e3);
              }
            },
            { danger: true, icon: "trash-2" }
          ).open();
        }
        async confirmDeleteMaterial(file, state) {
          if (state?.status === "running") {
            new Notice2("材料正在处理中，请先停止 Agent 再删除");
            return;
          }
          await this.confirmDeleteMaterials([file]);
        }
        renderProcessingStatus(parent, state) {
          const status = state?.status || "idle";
          const line = parent.createDiv({
            cls: `wis-inbox-processing-status is-${status}`,
            attr: { role: "status", "aria-live": "polite", title: state?.message || "等待处理" }
          });
          if (status === "running") line.createSpan({ cls: "wis-processing-spinner", attr: { "aria-hidden": "true" } });
          else makeIcon(line, ["success", "processed"].includes(status) ? "circle-check" : status === "awaiting-confirmation" ? "circle-help" : status === "failed" ? "circle-x" : "clock-3");
          line.createSpan({ text: state?.message || "等待处理" });
        }
        createQuickNote() {
          new TextPromptModal(this.app, {
            title: "快速记录原始材料",
            description: "先完整保留原始表达，之后再运行 /fde-ingest 分流。",
            placeholder: "给这份材料起一个可识别的标题…",
            onSubmit: async (value) => this.service.createQuickNote(value)
          }).open();
        }
        async renderMain(main, data) {
          const header = main.createDiv({ cls: "wis-page-header" });
          const copy = header.createDiv();
          copy.createSpan({ text: "FDE365 · 原始材料", cls: "wis-eyebrow" });
          copy.createEl("h1", { text: "待处理材料" });
          copy.createEl("p", { text: "录音、聊天、会议纪要和旧资料先保留原文；AI 只生成分流预览，确认后才写入六类资产。" });
          const actions = header.createDiv({ cls: "wis-header-actions" });
          makeButton(actions, "快速记录", "plus", "is-primary", () => this.createQuickNote());
          const processableFiles = data.pending.filter((file) => !["running", "awaiting-confirmation"].includes(this.service.inboxProcessingState(file).status));
          const processAll = makeButton(actions, "处理全部待处理", "sparkles", "is-secondary", () => void this.processFiles(processableFiles));
          processAll.disabled = !processableFiles.length;
          const dropZone = main.createEl("section", {
            cls: "wis-inbox-dropzone",
            attr: { role: "button", tabindex: "0", "aria-label": "拖入或选择要收录到待处理的文件" }
          });
          const dropIcon = dropZone.createDiv({ cls: "wis-inbox-drop-icon" });
          makeIcon(dropIcon, "cloud-upload");
          const dropCopy = dropZone.createDiv({ cls: "wis-inbox-drop-copy" });
          const dropTitle = dropCopy.createEl("strong", { text: "把文件拖到这里" });
          dropCopy.createSpan({ text: "只收录并保留原文，不会自动运行 Skill" });
          dropZone.createSpan({ text: "选择文件", cls: "wis-inbox-drop-action" });
          const picker = dropZone.createEl("input", { attr: { type: "file", multiple: "", tabindex: "-1", "aria-hidden": "true" } });
          picker.addClass("wis-inbox-file-picker");
          let importing = false;
          const importFiles = async (fileList) => {
            if (importing) return;
            const files = Array.from(fileList || []);
            if (!files.length) return;
            importing = true;
            dropZone.addClass("is-importing");
            dropTitle.setText(`正在收录 ${files.length} 个文件…`);
            try {
              const imported = await this.service.importInboxFiles(files);
              new Notice2(`已收录 ${imported.length} 个文件；等待你决定是否运行 /fde-ingest`);
              await this.render();
            } catch (error) {
              dropZone.removeClass("is-importing");
              dropTitle.setText("收录未完成，可重新拖入");
              new Notice2(`文件收录失败：${error instanceof Error ? error.message : String(error)}`, 8e3);
            } finally {
              importing = false;
              picker.value = "";
            }
          };
          dropZone.addEventListener("click", (event) => {
            if (event.target !== picker) picker.click();
          });
          dropZone.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              picker.click();
            }
          });
          picker.addEventListener("change", () => void importFiles(picker.files));
          dropZone.addEventListener("dragenter", (event) => {
            event.preventDefault();
            if (!importing) dropZone.addClass("is-dragging");
          });
          dropZone.addEventListener("dragover", (event) => {
            event.preventDefault();
            if (event.dataTransfer) event.dataTransfer.dropEffect = "copy";
          });
          dropZone.addEventListener("dragleave", (event) => {
            if (!dropZone.contains(event.relatedTarget)) dropZone.removeClass("is-dragging");
          });
          dropZone.addEventListener("drop", (event) => {
            event.preventDefault();
            dropZone.removeClass("is-dragging");
            void importFiles(event.dataTransfer?.files);
          });
          const stats = main.createDiv({ cls: "wis-compact-stats" });
          [
            ["待处理", data.pending.length, "inbox", "orange"],
            ["已处理记录", data.processed.length, "archive-restore", "blue"],
            ["正式资产", data.total, "library", "indigo"],
            ["待确认项", data.unknown, "circle-help", "violet"]
          ].forEach(([label, value, iconName, color]) => {
            const card = stats.createDiv({ cls: `wis-compact-stat is-${color}` });
            makeIcon(card, iconName);
            const text = card.createDiv();
            text.createSpan({ text: label });
            text.createEl("strong", { text: String(value) });
          });
          const flow = main.createEl("section", { cls: "wis-panel wis-ingest-flow" });
          const flowHead = flow.createDiv({ cls: "wis-panel-head" });
          const title = flowHead.createDiv();
          title.createEl("h2", { text: "安全入库流程" });
          title.createSpan({ text: "确认点放在真正写入之前" });
          const steps = flow.createDiv({ cls: "wis-ingest-steps" });
          [
            ["01", "保留原文", "登记路径、日期、参与人", "file-lock-2"],
            ["02", "通读拆分", "原话、事实、判断、方法、案例、选题", "scan-text"],
            ["03", "分流预览", "新增、补充、冲突、重复", "split"],
            ["04", "人工确认", "确认后写六库并记录处理批次", "badge-check"]
          ].forEach(([number, label, note, iconName]) => {
            const step = steps.createDiv({ cls: "wis-ingest-step" });
            step.createSpan({ text: number });
            makeIcon(step, iconName);
            step.createEl("strong", { text: label });
            step.createDiv({ text: note });
          });
          const list = main.createEl("section", { cls: "wis-panel wis-inbox-list" });
          const listHead = list.createDiv({ cls: "wis-panel-head" });
          const listTitle = listHead.createDiv();
          listTitle.createEl("h2", { text: "原始材料" });
          listTitle.createSpan({ text: "处理不会覆盖原文；确认删除时会同时移除收件记录和原始文件" });
          const materials = Array.isArray(data.materials) ? data.materials : [...data.pending, ...data.processed];
          const pendingPaths = new Set(data.pending.map((file) => file.path));
          const selectableFiles = materials.filter((file) => this.service.inboxProcessingState(file).status !== "running");
          const selectablePaths = new Set(selectableFiles.map((file) => file.path));
          this.selectedPaths = new Set([...this.selectedPaths].filter((path) => selectablePaths.has(path)));
          const selectedFiles = selectableFiles.filter((file) => this.selectedPaths.has(file.path));
          const processableSelectedFiles = selectedFiles.filter((file) => pendingPaths.has(file.path) && this.service.inboxProcessingState(file).status !== "awaiting-confirmation");
          const batch = listHead.createDiv({ cls: "wis-inbox-batch-actions" });
          const selectAllLabel = batch.createEl("label", { cls: "wis-inbox-select-all" });
          const selectAll = selectAllLabel.createEl("input", { attr: { type: "checkbox", "aria-label": "全选原始材料" } });
          selectAll.checked = Boolean(selectableFiles.length) && selectableFiles.every((file) => this.selectedPaths.has(file.path));
          selectAll.indeterminate = selectedFiles.length > 0 && !selectAll.checked;
          selectAll.disabled = !selectableFiles.length;
          selectAllLabel.createSpan({ text: "全选" });
          selectAll.addEventListener("change", () => {
            if (selectAll.checked) selectableFiles.forEach((file) => this.selectedPaths.add(file.path));
            else this.selectedPaths.clear();
            void this.render();
          });
          batch.createSpan({ text: `已选 ${selectedFiles.length} 项`, cls: "wis-inbox-selected-count" });
          if (selectedFiles.length) makeButton(batch, "取消选择", "x", "is-text", () => {
            this.selectedPaths.clear();
            void this.render();
          });
          const batchButton = makeButton(batch, `批量处理${processableSelectedFiles.length ? ` (${processableSelectedFiles.length})` : ""}`, "sparkles", "is-primary", () => void this.processFiles(processableSelectedFiles));
          const batchReady = processableSelectedFiles.length > 0;
          batchButton.disabled = !batchReady;
          if (batchReady) batchButton.addClass("is-ready");
          const batchDeleteButton = makeButton(batch, `批量删除${selectedFiles.length ? ` (${selectedFiles.length})` : ""}`, "trash-2", "is-danger", () => void this.confirmDeleteMaterials(selectedFiles));
          batchDeleteButton.disabled = !selectedFiles.length;
          if (!materials.length) list.createDiv({ text: "原始材料列表是空的。可以快速记录，或把录音转写、聊天导出和会议纪要放进该目录。", cls: "wis-empty" });
          materials.forEach((file) => {
            const storedState = this.service.inboxProcessingState(file);
            const completed = this.service.isCompletedInboxFile(file) || storedState.status === "processed";
            const state = completed ? { ...storedState, status: "processed", message: "已处理完成" } : storedState;
            const row = list.createDiv({ cls: `wis-inbox-row is-${state.status}` });
            const awaitingConfirmation = state.status === "awaiting-confirmation";
            const selectTitle = state.status === "running" ? `${file.basename} 正在处理中，不能选择` : completed ? `选择已处理材料 ${file.basename}（可批量删除）` : awaitingConfirmation ? `选择等待确认材料 ${file.basename}（只可批量删除）` : `选择 ${file.basename}`;
            const selectLabel = row.createEl("label", { cls: "wis-inbox-select", attr: { title: selectTitle } });
            const checkbox = selectLabel.createEl("input", { attr: { type: "checkbox", "aria-label": `选择 ${file.basename}` } });
            checkbox.checked = this.selectedPaths.has(file.path);
            checkbox.disabled = state.status === "running";
            checkbox.addEventListener("change", () => {
              if (checkbox.checked) this.selectedPaths.add(file.path);
              else this.selectedPaths.delete(file.path);
              void this.render();
            });
            makeIcon(row, "file-text", "is-orange");
            const text = row.createDiv({ cls: "wis-inbox-row-copy" });
            text.createEl("strong", { text: file.basename });
            text.createSpan({ text: `${formatRelativeTime2(file.stat.mtime)} · 原始材料保留` });
            this.renderProcessingStatus(text, state);
            const actions2 = row.createDiv({ cls: "wis-row-actions" });
            makeButton(actions2, "打开原文", "external-link", "is-text", () => this.service.openFile(file));
            if (completed && (state.conversationId || state.messages?.length)) {
              makeButton(actions2, "查看处理对话", "messages-square", "is-secondary", () => void this.openProcessingConversation(state, file));
            }
            if (!completed) {
              if (awaitingConfirmation) {
                makeButton(actions2, "前往确认", "arrow-right", "is-primary", () => void this.openProcessingConversation(state, file));
              } else {
                const processButton = makeButton(
                  actions2,
                  state.status === "running" ? "处理中…" : state.status === "failed" ? "重试处理" : "用 /fde-ingest 处理",
                  state.status === "running" ? "loader-circle" : "sparkles",
                  "is-secondary",
                  () => void this.processFiles([file])
                );
                processButton.disabled = state.status === "running";
                if (state.status === "running") processButton.setAttr("aria-busy", "true");
              }
            }
            const deleteButton = makeButton(actions2, "删除", "trash-2", "is-danger", () => void this.confirmDeleteMaterial(file, state));
            deleteButton.disabled = state.status === "running";
          });
        }
      }
      class FDELibrariesView extends FDEBaseView {
        constructor(leaf, plugin) {
          super(leaf, plugin, "libraries");
          this.selectedLibrary = "all";
          this.query = "";
        }
        async renderMain(main, data) {
          const header = main.createDiv({ cls: "wis-page-header" });
          const copy = header.createDiv();
          copy.createSpan({ text: "FDE365 · 真实来源", cls: "wis-eyebrow" });
          copy.createEl("h1", { text: "六类资产" });
          copy.createEl("p", { text: "每个库回答一种不同的问题。路径决定归属，来源决定能否作为事实使用。" });
          makeButton(header, "新建资产", "plus", "is-primary", () => new AssetModal(this.app, this.selectedLibrary, async (value) => this.service.createAsset(value)).open());
          const selector = main.createDiv({ cls: "wis-library-selector" });
          const all = selector.createEl("button", { cls: `wis-library-tab${this.selectedLibrary === "all" ? " is-active" : ""}` });
          all.createSpan({ text: "ALL" });
          all.createEl("strong", { text: "全部资产" });
          all.createSpan({ text: String(data.total) });
          all.addEventListener("click", () => {
            this.selectedLibrary = "all";
            void this.render();
          });
          data.libraries.forEach((library) => {
            const button = selector.createEl("button", { cls: `wis-library-tab is-${library.color}${this.selectedLibrary === library.id ? " is-active" : ""}` });
            button.createSpan({ text: library.order });
            button.createEl("strong", { text: library.name });
            button.createSpan({ text: String(library.count) });
            button.addEventListener("click", () => {
              this.selectedLibrary = library.id;
              void this.render();
            });
          });
          const selected = this.selectedLibrary === "all" ? null : data.libraries.find((item) => item.id === this.selectedLibrary);
          if (selected) {
            const brief = main.createDiv({ cls: `wis-library-brief is-${selected.color}` });
            makeIcon(brief, selected.icon);
            const briefCopy = brief.createDiv();
            briefCopy.createEl("h2", { text: selected.name });
            briefCopy.createEl("p", { text: selected.description });
            const briefMetrics = brief.createDiv({ cls: "wis-brief-metrics" });
            briefMetrics.createSpan({ text: `${selected.count} 项资产` });
            briefMetrics.createSpan({ text: `来源覆盖 ${percent(selected.sourceCoverage)}` });
            briefMetrics.createSpan({ text: `${selected.unknown} 个待确认` });
          }
          const toolbar = main.createDiv({ cls: "wis-library-toolbar" });
          const search = toolbar.createEl("input", { attr: { type: "search", placeholder: "在当前资产范围搜索…" } });
          search.value = this.query;
          search.addEventListener("input", () => {
            this.query = search.value.trim().toLowerCase();
            main.querySelectorAll(".wis-asset-card").forEach((card) => card.toggleClass("is-hidden", !card.dataset.search.includes(this.query)));
          });
          makeButton(toolbar, "查库 /fde-library", "sparkles", "is-secondary", () => void this.prefillAssistantCommand("fde-library"));
          const notes = data.notes.filter((note) => this.selectedLibrary === "all" || note.library?.id === this.selectedLibrary);
          const grid = main.createDiv({ cls: "wis-asset-grid" });
          if (!notes.length) grid.createDiv({ text: selected?.emptyAction || "六类资产还是空的。", cls: "wis-empty" });
          notes.sort((a, b) => b.file.stat.mtime - a.file.stat.mtime).forEach((note) => {
            const card = grid.createEl("button", { cls: `wis-asset-card is-${note.library?.color || "blue"}` });
            card.dataset.search = `${note.file.basename} ${note.content}`.toLowerCase();
            const top = card.createDiv({ cls: "wis-asset-card-top" });
            top.createSpan({ text: note.library?.order || "--", cls: "wis-library-code" });
            top.createSpan({ text: note.library?.name || "资产" });
            card.createEl("h3", { text: note.file.basename });
            card.createEl("p", { text: note.excerpt || "尚未填写正文。" });
            const evidence = card.createDiv({ cls: "wis-evidence-row" });
            evidence.createSpan({ text: note.source ? "有来源" : "缺少来源", cls: note.source ? "is-good" : "is-warning" });
            if (note.unknown) evidence.createSpan({ text: `${note.unknown} 待确认`, cls: "is-unknown" });
            evidence.createSpan({ text: formatRelativeTime2(note.file.stat.mtime) });
            card.addEventListener("click", () => this.service.openFile(note.file));
          });
        }
      }
      class FDENetworkView extends FDEBaseView {
        constructor(leaf, plugin) {
          super(leaf, plugin, "network");
        }
        async renderMain(main, data) {
          const header = main.createDiv({ cls: "wis-page-header" });
          const copy = header.createDiv();
          copy.createSpan({ text: "FDE365 · 资产连接", cls: "wis-eyebrow" });
          copy.createEl("h1", { text: "资产网络" });
          copy.createEl("p", { text: "关系不是装饰：产品要连接客户需求，方法要连接真实案例，内容要能回到来源。" });
          makeButton(header, "整理关联", "sparkles", "is-primary", () => void this.runSkillInAssistant("fde-organize", "请执行资产网络的‘整理关联’模式：读取六类资产中的真实 Markdown 和现有 Wikilink，识别有证据的支持、冲突、例子与版本关系。需要批准模式下，先列出待建立的双向链接对、关系类型和依据，等我确认后再写；YOLO 模式下可直接写入。写入时必须在关系两端笔记的‘关联资产’章节加入真实 Obsidian [[双链]]，使用完整 Vault 相对路径避免同名歧义，并在完成后重新统计跨库连接。不要创建 Canvas 或 Canva 预览，除非我明确要求。"));
          const map = main.createEl("section", { cls: "wis-network-map" });
          const center = map.createDiv({ cls: "wis-network-center" });
          center.createSpan({ text: "FDE365" });
          center.createEl("strong", { text: `${data.relations.edges.length}` });
          center.createSpan({ text: "跨库连接" });
          data.libraries.forEach((library, index) => {
            const node = map.createEl("button", { cls: `wis-network-node is-${library.color} at-${index + 1}` });
            node.createSpan({ text: library.order });
            makeIcon(node, library.icon);
            node.createEl("strong", { text: library.short });
            node.createSpan({ text: `${library.count} 项` });
            node.addEventListener("click", () => this.service.openLibrary(library.id));
          });
          const matrixPanel = main.createEl("section", { cls: "wis-panel wis-relation-matrix" });
          const matrixHead = matrixPanel.createDiv({ cls: "wis-panel-head" });
          const title = matrixHead.createDiv();
          title.createEl("h2", { text: "跨库关系矩阵" });
          title.createSpan({ text: "只统计实际双向链接，不生成模拟数据" });
          const table = matrixPanel.createDiv({ cls: "wis-matrix" });
          table.createSpan();
          data.libraries.forEach((library) => table.createSpan({ text: library.short, cls: `is-${library.color}` }));
          data.libraries.forEach((source) => {
            table.createSpan({ text: source.short, cls: `is-${source.color}` });
            data.libraries.forEach((target) => {
              const value = data.relations.matrix[source.id][target.id];
              table.createSpan({ text: String(value), cls: value ? "has-link" : "" });
            });
          });
          const gaps = main.createEl("section", { cls: "wis-panel" });
          const gapsHead = gaps.createDiv({ cls: "wis-panel-head" });
          const gapsTitle = gapsHead.createDiv();
          gapsTitle.createEl("h2", { text: "关键连接检查" });
          gapsTitle.createSpan({ text: "优先补能验证业务判断的连接" });
          [
            ["产品 → 客户", "产品承诺是否来自真实需求", "product", "customer"],
            ["案例 → 方法", "方法是否有实际使用证据", "case", "method"],
            ["内容 → 来源", "成稿是否能回到产品、客户和案例", "content", "case"]
          ].forEach(([label, note, from, to]) => {
            const value = data.relations.matrix[from][to] + data.relations.matrix[to][from];
            const row = gaps.createDiv({ cls: "wis-check-row" });
            makeIcon(row, value ? "circle-check-big" : "circle-dashed", value ? "is-good" : "is-warning");
            const text = row.createDiv();
            text.createEl("strong", { text: label });
            text.createSpan({ text: note });
            row.createSpan({ text: value ? `${value} 条连接` : "尚未连接" });
          });
        }
      }
      class FDEContentView extends FDEBaseView {
        constructor(leaf, plugin) {
          super(leaf, plugin, "content");
        }
        async renderMain(main, data) {
          const header = main.createDiv({ cls: "wis-page-header" });
          const copy = header.createDiv();
          copy.createSpan({ text: "FDE365 · 内容工作流", cls: "wis-eyebrow" });
          copy.createEl("h1", { text: "内容生产" });
          copy.createEl("p", { text: "每次推进前先确认当前环节已经完成；内容真实发布后流程结束，发布数据作为可选分析输入单独上传。" });
          const actions = header.createDiv({ cls: "wis-header-actions" });
          makeButton(actions, "新建选题", "plus", "is-primary", () => new TextPromptModal(this.app, {
            title: "新建选题",
            description: "创建后进入“选题”阶段；请在文件中补目标读者、核心问题和来源。",
            placeholder: "选题标题…",
            onSubmit: async (value) => this.service.createContent(value, "选题")
          }).open());
          makeButton(actions, "从六库找选题", "sparkles", "is-secondary", () => void this.runSkillInAssistant("fde-topics", "请从客户原话、产品问题、案例结果、个人判断和方法资产中生成可追溯选题。"));
          const summary = main.createDiv({ cls: "wis-content-summary" });
          data.stages.forEach((stage, index) => {
            const item = summary.createDiv({ cls: `wis-content-summary-item is-${stage.color}` });
            item.createSpan({ text: String(index + 1).padStart(2, "0") });
            makeIcon(item, stage.icon);
            item.createEl("strong", { text: stage.id });
            item.createDiv({ text: String(stage.items.length) });
          });
          const board = main.createDiv({ cls: "wis-content-board" });
          data.stages.forEach((stage, index) => {
            const column = board.createEl("section", { cls: `wis-stage-column is-${stage.color}` });
            const stageHead = column.createDiv({ cls: "wis-stage-column-head" });
            const stageTitle = stageHead.createDiv();
            stageTitle.createSpan({ text: String(index + 1).padStart(2, "0") });
            stageTitle.createEl("strong", { text: stage.id });
            stageHead.createSpan({ text: String(stage.items.length) });
            column.createDiv({ text: stage.description, cls: "wis-stage-description" });
            const cards = column.createDiv({ cls: "wis-stage-cards" });
            if (!stage.items.length) cards.createDiv({ text: "暂无内容", cls: "wis-stage-empty" });
            stage.items.sort((a, b) => b.file.stat.mtime - a.file.stat.mtime).forEach((note) => {
              const card = cards.createDiv({ cls: "wis-content-card" });
              card.createEl("strong", { text: note.file.basename });
              card.createSpan({ text: note.source ? `来源：${note.source}` : "缺少来源", cls: note.source ? "is-source" : "is-warning" });
              if (note.unknown) card.createSpan({ text: `${note.unknown} 个未核实项`, cls: "is-unknown" });
              const cardActions = card.createDiv({ cls: "wis-content-card-actions" });
              makeButton(cardActions, "打开", "external-link", "is-text", () => this.service.openFile(note.file));
              if (CONTENT_STAGE_GATES[stage.id]) makeButton(cardActions, "确认推进", "arrow-right", "is-text", () => this.service.advanceContent(note, {
                onIncomplete: (gate, currentNote) => this.prefillContentStageSkill(currentNote, gate)
              }));
              if (stage.id === "待审核") makeButton(cardActions, "审核", "sparkles", "is-text", () => void this.runSkillInAssistant("fde-review", `请审核稿件 ${note.file.path}，默认只诊断，不直接改稿。`, [note.file]));
              if (stage.id === "已发布") makeButton(cardActions, "上传数据分析", "file-up", "is-text", () => this.openAnalyticsUpload(note));
            });
          });
          const analytics = main.createEl("section", { cls: "wis-panel wis-content-analytics" });
          const analyticsHead = analytics.createDiv({ cls: "wis-panel-head" });
          const analyticsCopy = analyticsHead.createDiv();
          analyticsCopy.createEl("h2", { text: "发布数据分析（可选）" });
          analyticsCopy.createSpan({ text: "“已发布”是流程终点；CSV、Excel、TSV 或 JSON 只作为分析输入，不改变稿件阶段。" });
          makeButton(analyticsHead, "上传发布数据", "file-up", "is-secondary", () => this.openAnalyticsUpload());
          const analyticsBody = analytics.createDiv({ cls: "wis-content-analytics-body" });
          if (!data.analyticsFiles.length) {
            analyticsBody.createDiv({ text: "发布后可以上传抖音、小红书、公众号等平台导出的数据，再在右侧对话运行 /fde-spread。", cls: "wis-empty" });
          } else {
            analyticsBody.createDiv({ text: `${data.analyticsFiles.length} 份数据或历史分析记录`, cls: "wis-content-analytics-count" });
            data.analyticsFiles.slice(0, 8).forEach((file) => {
              const row = analyticsBody.createDiv({ cls: "wis-content-analytics-file" });
              makeIcon(row, file.extension === "md" ? "file-text" : "table-2");
              const fileCopy = row.createDiv();
              fileCopy.createEl("strong", { text: file.basename });
              fileCopy.createSpan({ text: file.path });
              if (file.extension === "md") makeButton(row, "打开", "external-link", "is-text", () => this.service.openFile(file));
            });
          }
          if (data.stageConflicts.length) {
            const conflict = main.createEl("section", { cls: "wis-alert is-warning" });
            makeIcon(conflict, "triangle-alert");
            const text = conflict.createDiv();
            text.createEl("strong", { text: `${data.stageConflicts.length} 个阶段冲突` });
            text.createSpan({ text: "文件所在目录与“当前阶段”字段不一致。运行 /fde-health 查看路径证据，插件不会自动选边。" });
            makeButton(conflict, "运行体检", "activity", "is-secondary", () => void this.runSkillInAssistant("fde-health", "请检查内容文件目录与当前阶段字段冲突，只报告，不自动移动。", data.stageConflicts.map((note) => note.file)));
          }
        }
      }
      class FDESkillsView extends FDEBaseView {
        constructor(leaf, plugin) {
          super(leaf, plugin, "skills");
          this.selectedSkill = "fde-start";
          this.selectedGroup = "entry";
        }
        async renderMain(main, data) {
          const header = main.createDiv({ cls: "wis-page-header" });
          const copy = header.createDiv();
          copy.createSpan({ text: "FDE365 · 本地工作流", cls: "wis-eyebrow" });
          copy.createEl("h1", { text: "FDE Skills" });
          copy.createEl("p", { text: "35 项能力随知识库部署在 .agents/skills。它们共享六库边界、来源规则、未知项和确认机制。" });
          const capability = this.plugin.providerManager.describeSelected();
          const agentCapability = this.plugin.agentRuntime?.describe?.() || { available: false };
          const isDeveloperRuntime = agentCapability.mode === "local-cli";
          const isReady = isDeveloperRuntime ? agentCapability.available : capability.configured;
          const status = header.createDiv({ cls: `wis-provider-status${isReady ? " is-ready" : ""}` });
          makeIcon(status, isReady ? "circle-check-big" : "circle-alert");
          status.createSpan({ text: isDeveloperRuntime ? agentCapability.available ? "DEV · 本地 Codex CLI" : "DEV · 未找到 Codex CLI" : capability.configured ? `${capability.label} · ${capability.model || "默认模型"}` : "AI Provider 未配置" });
          const overview = main.createDiv({ cls: "wis-skill-overview" });
          overview.createDiv({ text: String(data.installedSkills.length), cls: "wis-skill-big-number" });
          const overviewCopy = overview.createDiv();
          overviewCopy.createEl("strong", { text: `已部署 / ${SKILLS.length} Skills` });
          overviewCopy.createSpan({ text: "create-only 安装，不覆盖已有 Skill；Codex 从知识库根目录发现本地能力。" });
          const meter = overview.createDiv({ cls: "wis-skill-meter" });
          meter.createDiv({ cls: "wis-skill-meter-fill", attr: { style: `width:${Math.round(data.installedSkills.length / SKILLS.length * 100)}%` } });
          const tabs = main.createDiv({ cls: "wis-skill-groups" });
          SKILL_GROUPS.forEach((group) => {
            const button = tabs.createEl("button", { cls: this.selectedGroup === group.id ? "is-active" : "" });
            button.createEl("strong", { text: group.name });
            button.createSpan({ text: String(SKILLS.filter((skill2) => skill2.group === group.id).length) });
            button.addEventListener("click", () => {
              this.selectedGroup = group.id;
              this.selectedSkill = SKILLS.find((skill2) => skill2.group === group.id)?.id;
              void this.render();
            });
          });
          const layout = main.createDiv({ cls: "wis-skill-layout" });
          const catalog = layout.createDiv({ cls: "wis-skill-catalog" });
          SKILLS.filter((skill2) => skill2.group === this.selectedGroup).forEach((skill2) => {
            const installed = data.installedSkills.includes(skill2.id);
            const button = catalog.createEl("button", { cls: `wis-skill-card${this.selectedSkill === skill2.id ? " is-selected" : ""}` });
            makeIcon(button, skill2.icon);
            const text = button.createDiv();
            text.createEl("strong", { text: `/${skill2.id}` });
            text.createSpan({ text: skill2.name });
            button.createSpan({ text: installed ? "已部署" : "缺失", cls: installed ? "is-installed" : "is-missing" });
            button.addEventListener("click", () => {
              this.selectedSkill = skill2.id;
              void this.render();
            });
          });
          const skill = SKILLS.find((item) => item.id === this.selectedSkill) || SKILLS[0];
          const detail = layout.createEl("section", { cls: "wis-skill-detail" });
          const detailIcon = detail.createDiv({ cls: "wis-skill-detail-icon" });
          makeIcon(detailIcon, skill.icon);
          detail.createSpan({ text: `/${skill.id}`, cls: "wis-eyebrow" });
          detail.createEl("h2", { text: skill.name });
          detail.createEl("p", { text: skill.description });
          const contract = detail.createDiv({ cls: "wis-skill-contract" });
          contract.createEl("strong", { text: "共同工作合同" });
          ["读取 .fde/config.yaml", "关键判断附来源", "事实 / 推断 / 未知分开", "破坏性动作先预览确认"].forEach((item) => {
            const row = contract.createDiv();
            makeIcon(row, "check");
            row.createSpan({ text: item });
          });
          detail.createDiv({ text: `交付：${skill.output}`, cls: "wis-skill-output" });
          const detailActions = detail.createDiv({ cls: "wis-skill-detail-actions" });
          makeButton(detailActions, `填入 /${skill.id}`, "message-square-text", "is-primary", () => void this.prefillAssistantCommand(skill.id));
          makeButton(detailActions, "查看运行记录", "history", "is-secondary", async () => {
            this.assistantMode = "history";
            await this.render();
          });
        }
      }
      class FDEHealthView extends FDEBaseView {
        constructor(leaf, plugin) {
          super(leaf, plugin, "health");
        }
        async renderMain(main, data) {
          const header = main.createDiv({ cls: "wis-page-header" });
          const copy = header.createDiv();
          copy.createSpan({ text: "FDE365 · 知识质量", cls: "wis-eyebrow" });
          copy.createEl("h1", { text: "知识体检" });
          copy.createEl("p", { text: "检查六库配置、来源、未知项、收件箱、内容阶段和本地 Skill。默认只报告，不替你选择业务事实。" });
          const actions = header.createDiv({ cls: "wis-header-actions" });
          makeButton(actions, "运行 /fde-health", "activity", "is-primary", () => void this.runSkillInAssistant("fde-health", "请对当前六类资产知识库做完整只读体检，按阻塞、要处理、提醒给出路径和证据。"));
          makeButton(actions, "补齐缺失模板", "folder-plus", "is-secondary", () => this.plugin.bootstrapService.ensure({ notify: true }));
          const score = Math.max(0, Math.round(100 - (1 - data.sourceCoverage) * 45 - Math.min(25, data.unknown * 3) - Math.min(15, data.stageConflicts.length * 5) - Math.min(15, data.missingPaths.length * 8)));
          const hero = main.createDiv({ cls: "wis-health-hero" });
          const ring = hero.createDiv({ cls: "wis-health-ring", attr: { style: `--wis-health:${score * 3.6}deg` } });
          ring.createEl("strong", { text: String(score) });
          ring.createSpan({ text: "健康度" });
          const heroCopy = hero.createDiv();
          heroCopy.createEl("h2", { text: score >= 80 ? "六库可以继续使用" : score >= 55 ? "知识库可用，但有明确缺口" : "先修结构和来源，再扩大使用" });
          heroCopy.createEl("p", { text: "健康度只基于当前本地证据，不生成模拟增长率或成功率。空库不会被判断为损坏。" });
          const heroMetrics = heroCopy.createDiv({ cls: "wis-health-hero-metrics" });
          heroMetrics.createSpan({ text: `来源覆盖 ${percent(data.sourceCoverage)}` });
          heroMetrics.createSpan({ text: `${data.unknown} 个待确认` });
          heroMetrics.createSpan({ text: `${data.pending.length} 份待处理` });
          heroMetrics.createSpan({ text: `${data.installedSkills.length}/${SKILLS.length} Skills` });
          const issues = main.createDiv({ cls: "wis-health-issues" });
          [
            { level: data.missingPaths.length ? "block" : "ok", title: "六库路径", value: data.missingPaths.length ? `${data.missingPaths.length} 个缺失` : "配置与目录存在", note: data.missingPaths[0] || `${getRoot()}/.fde/config.yaml` },
            { level: data.sourceCoverage < 0.8 ? "warn" : "ok", title: "来源覆盖", value: percent(data.sourceCoverage), note: `${data.total - data.notes.filter((note) => note.source).length} 项资产没有可识别来源` },
            { level: data.unknown ? "warn" : "ok", title: "事实边界", value: `${data.unknown} 个待确认`, note: "待确认、待验证、未核实和当前推断保持显式分开" },
            { level: data.stageConflicts.length ? "block" : "ok", title: "内容阶段", value: data.stageConflicts.length ? `${data.stageConflicts.length} 个冲突` : "目录与字段一致", note: "一个文件同时只处于一个阶段" },
            { level: data.installedSkills.length < SKILLS.length ? "warn" : "ok", title: "项目 Skills", value: `${data.installedSkills.length}/${SKILLS.length}`, note: `${getRoot()}/.agents/skills` }
          ].forEach((item) => {
            const card = issues.createDiv({ cls: `wis-health-issue is-${item.level}` });
            makeIcon(card, item.level === "ok" ? "circle-check-big" : item.level === "block" ? "octagon-alert" : "triangle-alert");
            const text = card.createDiv();
            text.createEl("strong", { text: item.title });
            text.createSpan({ text: item.note });
            card.createSpan({ text: item.value, cls: "wis-health-issue-value" });
          });
          const table = main.createEl("section", { cls: "wis-panel wis-library-health" });
          const tableHead = table.createDiv({ cls: "wis-panel-head" });
          const title = tableHead.createDiv();
          title.createEl("h2", { text: "六库质量" });
          title.createSpan({ text: "来源、未知项和更新时间共同决定是否能复用" });
          data.libraries.forEach((library) => {
            const row = table.createDiv({ cls: "wis-library-health-row" });
            row.createSpan({ text: library.order, cls: `wis-library-code is-${library.color}` });
            const text = row.createDiv();
            text.createEl("strong", { text: library.name });
            text.createSpan({ text: library.count ? `${library.count} 项 · ${library.unknown} 待确认 · ${library.stale} 过期候选` : library.emptyAction });
            const meter = row.createDiv({ cls: "wis-health-meter" });
            meter.createDiv({ cls: `wis-health-meter-fill is-${library.color}`, attr: { style: `width:${library.score}%` } });
            row.createSpan({ text: `${library.score}` });
          });
        }
      }
      return {
        FDEBaseView,
        FDEDashboardView,
        FDEInboxView,
        FDELibrariesView,
        FDENetworkView,
        FDEContentView,
        FDESkillsView,
        FDEHealthView
      };
    };
  }
});

// fde-workspace.js
var require_fde_workspace = __commonJS({
  "fde-workspace.js"(exports2, module2) {
    var {
      Modal: Modal2,
      Notice: Notice2,
      TFile: TFile2,
      normalizePath: normalizePath2,
      setIcon: setIcon2
    } = require("obsidian");
    var ROOT2 = "FDE365知识库";
    function configureKnowledgeRoot2(root) {
      ROOT2 = String(root || "FDE365知识库");
      return ROOT2;
    }
    var VIEW_TYPES = Object.freeze({
      dashboard: "ai-knowledge-os-dashboard",
      inbox: "ai-knowledge-os-inbox",
      libraries: "ai-knowledge-os-knowledge",
      network: "ai-knowledge-os-graph",
      content: "ai-knowledge-os-projects",
      skills: "ai-knowledge-os-agents",
      health: "ai-knowledge-os-analytics"
    });
    var LIBRARIES = Object.freeze([
      { id: "owner", order: "01", key: "owner", name: "个人说明书", short: "说明书", path: "1-个人说明书", icon: "fingerprint", color: "indigo", description: "身份、判断、表达习惯和不能公开的边界", emptyAction: "用 /fde-interview 补齐本人原话与判断" },
      { id: "product", order: "02", key: "product", name: "产品库", short: "产品", path: "2-产品库", icon: "package-check", color: "blue", description: "产品、价格、承诺、交付内容和常见异议", emptyAction: "创建第一个产品事实文件" },
      { id: "customer", order: "03", key: "customer", name: "客户需求库", short: "客户", path: "3-客户需求库", icon: "messages-square", color: "cyan", description: "客户原话、问题、成交与未成交记录", emptyAction: "导入一次真实客户沟通" },
      { id: "case", order: "04", key: "case", name: "素材案例库", short: "案例", path: "4-素材案例库", icon: "archive", color: "orange", description: "事件、案例、数据、对话、动作和结果", emptyAction: "把一段经历整理成可追溯案例" },
      { id: "method", order: "05", key: "method", name: "方法论库", short: "方法", path: "5-方法论库", icon: "route", color: "violet", description: "使用过的方法、前置条件、步骤与失败信号", emptyAction: "沉淀一个已经实际使用的方法" },
      { id: "content", order: "06", key: "content", name: "内容生产", short: "内容", path: "6-内容生产", icon: "pen-tool", color: "pink", description: "从选题到已发布的内容生产闭环", emptyAction: "从六库材料生成第一个可追溯选题" }
    ]);
    var CONTENT_STAGES = Object.freeze([
      { id: "选题", icon: "lightbulb", color: "indigo", description: "有来源、读者和核心问题" },
      { id: "草稿", icon: "file-pen-line", color: "blue", description: "正在写，尚未审核" },
      { id: "待审核", icon: "scan-search", color: "orange", description: "核对事实、表达和平台" },
      { id: "待发布", icon: "calendar-clock", color: "violet", description: "审核通过，等待发布" },
      { id: "已发布", icon: "send", color: "green", description: "流程终点：记录平台、链接和日期" }
    ]);
    var CONTENT_STAGE_GATES = Object.freeze({
      选题: Object.freeze({
        next: "草稿",
        title: "草稿内容已经补全了吗？",
        description: "进入“草稿”前，请确认目标读者、目标平台、核心问题、来源和正文草稿已经补全。",
        requirements: ["目标读者与发布平台明确", "核心问题和来源已补全", "已经形成可继续修改的正文草稿"],
        skill: "fde-write",
        prompt: "请根据当前选题补全目标读者、平台、核心问题、来源与正文草稿。完成后先留在当前阶段，等我确认再推进。",
        incompleteLabel: "还没有，去对话补全"
      }),
      草稿: Object.freeze({
        next: "待审核",
        title: "草稿已经完成了吗？",
        description: "进入“待审核”前，请确认正文结构完整，必要素材已经写入，未核实项保持明确。",
        requirements: ["正文内容完整", "来源和引用已经补充", "未核实内容已经单独标记"],
        skill: "fde-write",
        prompt: "请继续补全当前草稿，检查正文完整度、来源和未核实项。完成后不要自动推进，等我确认再进入待审核。",
        incompleteLabel: "还没有，继续写作"
      }),
      待审核: Object.freeze({
        next: "待发布",
        title: "内容审核已经完成了吗？",
        description: "进入“待发布”前，请确认事实、表达和平台适配已经审核，并且阻塞发布的问题已经处理。",
        requirements: ["事实与来源已经核对", "表达和平台适配已经检查", "没有未处理的发布阻塞项"],
        skill: "fde-review",
        prompt: "请审核当前稿件的事实、来源、表达和平台适配，列出必须修改项。先给诊断，不要自动推进阶段。",
        incompleteLabel: "还没有，去对话审核"
      }),
      待发布: Object.freeze({
        next: "已发布",
        title: "内容已经真实发布了吗？",
        description: "“已发布”是内容流程终点。只有内容已经真实发布，并补充平台、链接和发布日期后才能进入。",
        requirements: ["内容已经在目标平台发布", "发布平台和链接已记录", "发布日期已经回填"],
        skill: "",
        prompt: "",
        incompleteLabel: "尚未发布，打开内容"
      })
    });
    var SKILL_GROUPS = Object.freeze([
      { id: "entry", name: "开始与入库", description: "选择入口、采访、导入和体检" },
      { id: "business", name: "商业判断", description: "围绕产品、客户、证据和行动做判断" },
      { id: "content", name: "内容生产", description: "从选题、写作到审核、排版和复盘" },
      { id: "library", name: "知识库维护", description: "查找、整理、连接和安全维护" },
      { id: "state", name: "状态与决策", description: "保存、恢复、报告和回填决定" },
      { id: "method", name: "学习与讨论", description: "定义问题、组织讨论和短反馈循环" }
    ]);
    var SKILLS = Object.freeze([
      { id: "fde-start", group: "entry", name: "从这里开始", description: "读取六库状态，只选择一个当前入口并直接继续。", output: "任务路由", icon: "compass" },
      { id: "fde-interview", group: "entry", name: "建库采访", description: "一次只问一个问题，保留原话、事实、推断和未知项。", output: "采访记录与分流建议", icon: "mic-2" },
      { id: "fde-ingest", group: "entry", name: "材料入库", description: "通读录音、聊天和旧文档，先出分流预览，确认后入库。", output: "分流预览", icon: "inbox" },
      { id: "fde-export", group: "entry", name: "导出会话", description: "导出用户明确选择的本地 Agent 会话并保留时间和来源。", output: "Markdown 会话", icon: "download" },
      { id: "fde-health", group: "entry", name: "知识库体检", description: "检查配置、来源、收件箱、内容阶段和运行状态，默认只报告。", output: "体检报告", icon: "activity" },
      { id: "fde-update", group: "entry", name: "检查更新", description: "展示 FDE Skills 差异，确认后只更新 Skill，不改业务资产。", output: "更新差异", icon: "refresh-cw" },
      { id: "fde-diagnose", group: "business", name: "商业诊断", description: "用客户、产品、案例和交付记录诊断生意问题。", output: "事实、假设与验证项", icon: "stethoscope" },
      { id: "fde-define", group: "business", name: "定义概念", description: "把模糊词换成当前业务中可观察、可检查的定义。", output: "可观察定义", icon: "brackets" },
      { id: "fde-goal", group: "business", name: "明确目标", description: "把愿望改成有对象、结果、边界、证据和时间的目标。", output: "目标合同", icon: "goal" },
      { id: "fde-question", group: "business", name: "整理问题", description: "把困惑整理成 Agent、员工或顾问可以处理的问题说明书。", output: "问题说明书", icon: "circle-help" },
      { id: "fde-focus", group: "business", name: "确定焦点", description: "识别当前约束，决定主动作、暂停项和观察项。", output: "焦点与暂停清单", icon: "focus" },
      { id: "fde-action", group: "business", name: "推进一步", description: "把推不动的任务缩成一个能产生真实反馈的动作。", output: "下一步动作", icon: "move-right" },
      { id: "fde-write", group: "content", name: "内容写作", description: "根据六类资产列证据和写作合同，再生成带来源草稿。", output: "草稿、来源与未核实项", icon: "pen-line" },
      { id: "fde-topics", group: "content", name: "生成选题", description: "从客户原话、产品问题、案例、判断和方法中生成可追溯选题。", output: "选题清单", icon: "lightbulb" },
      { id: "fde-review", group: "content", name: "内容审核", description: "先核对事实和定位，再检查内容质量；默认只诊断不改稿。", output: "发布判断与修改顺序", icon: "scan-search" },
      { id: "fde-hook", group: "content", name: "设计开头", description: "根据选题、读者和真实材料诊断并设计少量可用开头。", output: "开头方案", icon: "magnet" },
      { id: "fde-title", group: "content", name: "生成标题", description: "生成正文证据能够支持的标题，不扩大承诺。", output: "标题候选", icon: "heading" },
      { id: "fde-check", group: "content", name: "检查表达", description: "标记空泛判断、整齐模板、无来源事实和语气偏差。", output: "问题标记", icon: "spell-check-2" },
      { id: "fde-flow", group: "content", name: "检查段落", description: "检查段间承接、跳步、重复和信息拥堵。", output: "段落诊断", icon: "git-branch" },
      { id: "fde-impact", group: "content", name: "检查读者匹配", description: "检查内容是否准确指向目标读者的处境、判断和行动。", output: "读者匹配诊断", icon: "target" },
      { id: "fde-format", group: "content", name: "公众号排版", description: "把已确认 Markdown 转成公众号可粘贴 HTML，保持正文不变。", output: "微信公众号 HTML", icon: "code-xml" },
      { id: "fde-spread", group: "content", name: "传播复盘", description: "根据真实发布数据、评论和转发语境分析传播结果。", output: "传播复盘", icon: "radio-tower" },
      { id: "fde-benchmark", group: "content", name: "研究对标", description: "围绕业务目标比较可观察做法并安排小实验，不复制人设。", output: "对标观察与实验", icon: "telescope" },
      { id: "fde-library", group: "library", name: "查库与维护", description: "查找、收录、纠错和维护六类资产，每个结论返回来源。", output: "答案、来源与版本", icon: "library" },
      { id: "fde-organize", group: "library", name: "整理资产", description: "检查重复、错库、来源和跨库关系，并用真实 Obsidian 双链连接已确认的资产。", output: "资产清单、关联预览与双链写入记录", icon: "list-tree" },
      { id: "fde-setup", group: "library", name: "整理 Agent 项目", description: "整理规则真源和 Skill 真源，让多个本地 Agent 识别项目。", output: "项目设置预览", icon: "wrench" },
      { id: "fde-safety", group: "library", name: "Skill 安全检查", description: "只读检查外部命令、网络、敏感读取、隐藏指令和删除行为。", output: "安全报告", icon: "shield-check" },
      { id: "fde-save", group: "state", name: "保存进度", description: "保存目标、来源、完成项、未知项和下一步。", output: "任务状态", icon: "save" },
      { id: "fde-resume", group: "state", name: "恢复进度", description: "核对文件和事实变化后，恢复最近或指定任务。", output: "恢复检查与下一步", icon: "history" },
      { id: "fde-report", group: "state", name: "整理报告", description: "把同一任务的多次状态、决定和结果整理成带来源报告。", output: "Markdown 报告", icon: "file-chart-column" },
      { id: "fde-decide", group: "state", name: "记录决定", description: "保存选项、证据、假设、风险、回填日期和真实结果。", output: "决策记录", icon: "scale" },
      { id: "fde-discuss", group: "method", name: "多角度讨论", description: "按职责组织 3—5 个视角，只使用库内事实和公开方法。", output: "多视角讨论", icon: "users" },
      { id: "fde-economy", group: "method", name: "交易视角", description: "从价格、成本、选择、激励和信息差检查商业判断。", output: "交易结构分析", icon: "badge-dollar-sign" },
      { id: "fde-learn", group: "method", name: "短学习循环", description: "围绕工作问题先做、记录反馈、补一个知识点再继续。", output: "学习与反馈计划", icon: "graduation-cap" }
    ]);
    function commandCompletionState(value, caret = String(value || "").length, limit = 8) {
      const text = String(value || "");
      const safeCaret = Math.max(0, Math.min(text.length, Number(caret) || 0));
      const beforeCaret = text.slice(0, safeCaret);
      const match = beforeCaret.match(/(?:^|\n)\s*(\/[a-z0-9-]*)$/i);
      if (!match) return null;
      const token = match[1];
      const query = token.slice(1).toLowerCase();
      const matches = SKILLS.filter((skill) => !query || skill.id.toLowerCase().includes(query) || skill.name.toLowerCase().includes(query)).slice(0, Math.max(1, Number(limit) || 8));
      return {
        query,
        start: safeCaret - token.length,
        end: safeCaret,
        matches
      };
    }
    function appendAssistantSkillCommand(draft, skillId) {
      const command = `/${String(skillId || "").replace(/^\/+/, "")}`;
      if (command === "/") return String(draft || "");
      const current = String(draft || "").replace(/\s+$/, "");
      return `${current}${current ? " " : ""}${command} `;
    }
    var BASE_SKILL_RULES = [
      "从当前目录向上找到 .fde/config.yaml，并按配置解析六类资产库。",
      "只读取本任务需要的文件，不跨知识库搜索。",
      "严格区分库内事实、用户本轮信息、当前推断和未知项。",
      "关键判断附来源路径；没有来源的内容标为推断或待确认。",
      "原始材料不覆盖；所有写入保留来源和可追溯记录。",
      "录音、聊天、图片和文档是材料形式，不是资产库；同一材料可同时建议分流到多个六类资产库。"
    ].join("\n");
    function executionModeRule(plugin) {
      return plugin?.settings?.ai?.assistant?.executionMode === "yolo" ? "当前为 YOLO 模式：可在当前 Vault 内直接执行命令和文件写入，不等待逐次批准；完成后汇报改动与验证结果。" : "当前为需要批准模式：移动、覆盖、删除、批量写入或运行命令前，先给预览并等待用户批准。";
    }
    var INBOX_COMPLETION_MARKER = "<!-- FDE365_INBOX_COMPLETE -->";
    function isInboxConfirmationPrompt(prompt) {
      const value = String(prompt || "").trim();
      return /(?:^|[，,。；;\s])(?:确认(?:并)?执行|确认|同意|批准|执行|开始执行|继续执行|执行入库|正式入库|可以写入|确认写入|完成处理|结案)(?:$|[，,。；;\s])/.test(value) || /(?:按|照).*(?:方案|预览).*(?:执行|入库|写入)/.test(value);
    }
    function hasInboxCompletionMarker(content) {
      return String(content || "").includes(INBOX_COMPLETION_MARKER);
    }
    function stripInboxCompletionMarker(content) {
      return String(content || "").replaceAll(INBOX_COMPLETION_MARKER, "").trim();
    }
    function hasInboxWriteEvidence(result) {
      return (Array.isArray(result?.toolEvents) ? result.toolEvents : []).some((event) => {
        if (event?.type === "file-change") return true;
        if (event?.type !== "command") return false;
        return /(?:\bapply_patch\b|\bsed\s+-i\b|\bperl\s+-pi\b|\btee\b|\b(?:cp|mv|touch|mkdir)\b|(?:^|[^>])>{1,2}(?![=>]))/.test(String(event.command || ""));
      });
    }
    function shouldCompleteInboxTurn(prompt, result) {
      return isInboxConfirmationPrompt(prompt) && hasInboxCompletionMarker(result?.content) && hasInboxWriteEvidence(result);
    }
    function assistantScrollTarget(state, scrollHeight, clientHeight) {
      if (!state) return null;
      const max = Math.max(0, Number(scrollHeight || 0) - Number(clientHeight || 0));
      if (state.stickToBottom) return max;
      return Math.max(0, Math.min(Number(state.top || 0), max));
    }
    var NAV_ITEMS = Object.freeze([
      { key: "dashboard", label: "总览", note: "六库状态", icon: "layout-dashboard" },
      { key: "inbox", label: "待处理", note: "原始材料", icon: "inbox" },
      { key: "libraries", label: "六类资产", note: "真源与版本", icon: "library" },
      { key: "network", label: "资产网络", note: "跨库关系", icon: "network" },
      { key: "content", label: "内容生产", note: "五阶段发布闭环", icon: "panels-top-left" },
      { key: "skills", label: "FDE Skills", note: "34 项工作流", icon: "blocks" },
      { key: "health", label: "知识体检", note: "来源与冲突", icon: "activity" }
    ]);
    function makeIcon(parent, name, cls = "") {
      const el = parent.createSpan({ cls: `wis-icon ${cls}`.trim() });
      setIcon2(el, name);
      if (!el.querySelector("svg")) setIcon2(el, "circle-help");
      return el;
    }
    function makeButton(parent, label, iconName, cls = "", onClick) {
      const button = parent.createEl("button", { cls: `wis-button ${cls}`.trim() });
      button.setAttr("type", "button");
      if (iconName) makeIcon(button, iconName);
      if (label) {
        button.setAttr("aria-label", label);
        button.createSpan({ text: label, cls: "wis-button-label" });
      }
      if (onClick) button.addEventListener("click", onClick);
      return button;
    }
    function formatRelativeTime2(timestamp) {
      const delta = Math.max(0, Date.now() - Number(timestamp || 0));
      const minute = 6e4;
      if (delta < minute) return "刚刚";
      if (delta < 60 * minute) return `${Math.floor(delta / minute)} 分钟前`;
      if (delta < 24 * 60 * minute) return `${Math.floor(delta / (60 * minute))} 小时前`;
      if (delta < 2 * 24 * 60 * minute) return "昨天";
      const date = new Date(timestamp);
      return `${date.getMonth() + 1}月${date.getDate()}日`;
    }
    function assistantHistoryTopic(frontmatter = {}) {
      const prompt = String(frontmatter.user_prompt || frontmatter.task || "").trim();
      const sources = frontmatterPaths(frontmatter.source_files);
      if (/用户已明确选择以下[\s\S]*原始材料进行处理/.test(prompt) && sources.length) {
        const names = sources.slice(0, 2).map((path) => String(path).split("/").pop().replace(/\.md$/i, ""));
        return `处理 ${names.join("、")}${sources.length > 2 ? ` 等 ${sources.length} 份材料` : ""}`;
      }
      const normalized = prompt.replace(/^\s*\/fde-[a-z0-9-]+\s*/i, "").replace(/\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g, "$1").replace(/[`*_>#-]+/g, " ").replace(/\s+/g, " ").trim();
      if (normalized) {
        const characters = Array.from(normalized);
        return characters.length > 34 ? `${characters.slice(0, 34).join("")}…` : normalized;
      }
      const skill = SKILLS.find((item) => item.id === String(frontmatter.agent_id || ""));
      return skill ? skill.name : "FDE365 协作对话";
    }
    function percent(value) {
      return `${Math.round(Math.max(0, Math.min(1, Number(value) || 0)) * 100)}%`;
    }
    function safeName2(value) {
      return String(value || "未命名").trim().replace(/[\\/:*?"<>|#^[\]]/g, "-").replace(/\s+/g, " ").slice(0, 80) || "未命名";
    }
    function yamlValue(value) {
      return JSON.stringify(String(value || ""));
    }
    function parseConfigYaml(raw) {
      const result = { libraries: {}, inbox: {}, runtime: {}, policy: {} };
      let section = "";
      String(raw || "").split(/\r?\n/).forEach((line) => {
        const sectionMatch = line.match(/^([A-Za-z0-9_-]+):\s*$/);
        if (sectionMatch) {
          section = sectionMatch[1];
          if (!result[section]) result[section] = {};
          return;
        }
        const valueMatch = line.match(/^\s{2}([A-Za-z0-9_-]+):\s*(.*?)\s*$/);
        if (!valueMatch || !section) return;
        let value = valueMatch[2].replace(/^['"]|['"]$/g, "");
        if (value === "true") value = true;
        if (value === "false") value = false;
        result[section][valueMatch[1]] = value;
      });
      return result;
    }
    function sourceFromContent(content, frontmatter = {}) {
      const direct = frontmatter.source || frontmatter.source_file || frontmatter.sources;
      if (Array.isArray(direct) && direct.some((item) => String(item).trim())) return direct.map(String).join("、");
      if (typeof direct === "string" && direct.trim()) return direct.trim();
      const match = String(content || "").match(/^[ \t]*-[ \t]*(?:信息来源|来源文件|来源|原始文件路径)[ \t]*[：:][ \t]*(.*?)[ \t]*$/mi);
      const value = match?.[1]?.trim() || "";
      return value && !/^(?:-|无|未知|待确认|暂无)$/i.test(value) ? value : "";
    }
    function unknownFromContent(content) {
      const headings = ["待确认", "待验证", "未核实项", "仍不确定的内容", "待补信息", "当前推断"];
      let count = 0;
      headings.forEach((heading) => {
        const pattern = new RegExp(`^##\\s+${heading}\\s*$([\\s\\S]*?)(?=^##\\s|(?![\\s\\S]))`, "gmi");
        const match = pattern.exec(String(content || ""));
        if (!match) return;
        const body = match[1].replace(/^\s*[-*]\s*$/gm, "").replace(/<!--.*?-->/gs, "").trim();
        if (body) count += body.split(/\n+/).filter((line) => line.replace(/^\s*[-*]\s*/, "").trim()).length;
      });
      return count;
    }
    function frontmatterOf(app, file) {
      return app.metadataCache?.getFileCache?.(file)?.frontmatter || {};
    }
    function markdownSection(content, heading) {
      const text = String(content || "").replace(/^---[\s\S]*?---\s*/m, "");
      const escaped = String(heading || "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const match = new RegExp(`^##\\s+${escaped}\\s*$`, "mi").exec(text);
      if (!match) return "";
      const start = match.index + match[0].length;
      const rest = text.slice(start);
      const next = /^##\s+/m.exec(rest);
      return rest.slice(0, next ? next.index : rest.length).trim();
    }
    function markdownBody(content) {
      return String(content || "").replace(/^---[\s\S]*?---\s*/m, "").replace(/^#\s+.*$/m, "").trim();
    }
    function frontmatterPaths(value) {
      if (Array.isArray(value)) return value.map(String).filter(Boolean);
      if (!value) return [];
      try {
        const parsed = JSON.parse(String(value));
        return Array.isArray(parsed) ? parsed.map(String).filter(Boolean) : [];
      } catch (_) {
        return [];
      }
    }
    function materialPathValues(value) {
      if (Array.isArray(value)) return value.flatMap((item) => materialPathValues(item));
      const raw = String(value || "").trim();
      if (!raw) return [];
      try {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) return parsed.flatMap((item) => materialPathValues(item));
      } catch (_) {
      }
      const path = raw.replace(/^['"]|['"]$/g, "").trim();
      return path ? [normalizePath2(path)] : [];
    }
    function linkedPaths(content) {
      return [...String(content || "").matchAll(/\[\[([^\]|#]+)(?:#[^\]|]+)?(?:\|[^\]]+)?\]\]/g)].map((match) => `${match[1].replace(/\.md$/, "")}.md`);
    }
    async function ensureFolder(app, path) {
      const normalized = normalizePath2(path);
      let current = "";
      for (const part of normalized.split("/")) {
        current = current ? `${current}/${part}` : part;
        const existing = app.vault.getAbstractFileByPath(current);
        if (existing) continue;
        await app.vault.createFolder(current).catch((error) => {
          if (!/already exists/i.test(String(error?.message || error))) throw error;
        });
      }
    }
    async function uniquePath(app, path) {
      if (!app.vault.getAbstractFileByPath(path) && !await app.vault.adapter.exists(path)) return path;
      const dot = path.lastIndexOf(".");
      const slash = path.lastIndexOf("/");
      const base = dot > slash ? path.slice(0, dot) : path;
      const ext = dot > slash ? path.slice(dot) : "";
      let index = 2;
      while (app.vault.getAbstractFileByPath(`${base}-${index}${ext}`) || await app.vault.adapter.exists(`${base}-${index}${ext}`)) index += 1;
      return `${base}-${index}${ext}`;
    }
    var TextPromptModal = class extends Modal2 {
      constructor(app, options) {
        super(app);
        this.options = options;
      }
      onOpen() {
        const root = this.contentEl;
        root.addClass("wis-modal");
        root.createEl("h2", { text: this.options.title });
        root.createEl("p", { text: this.options.description || "", cls: "wis-modal-note" });
        const attributes = { placeholder: this.options.placeholder || "" };
        if (this.options.multiline) attributes.rows = "6";
        const input = root.createEl(this.options.multiline ? "textarea" : "input", {
          cls: "wis-modal-input",
          attr: attributes
        });
        const actions = root.createDiv({ cls: "wis-modal-actions" });
        makeButton(actions, "取消", "x", "is-secondary", () => this.close());
        makeButton(actions, this.options.submitLabel || "继续", "arrow-right", "is-primary", async () => {
          const value = input.value.trim();
          if (!value) return;
          this.close();
          await this.options.onSubmit(value);
        });
        input.addEventListener("keydown", (event) => {
          if (event.key === "Enter" && (!this.options.multiline || event.metaKey || event.ctrlKey)) {
            event.preventDefault();
            const button = actions.querySelector(".is-primary");
            button?.click();
          }
        });
        window.setTimeout(() => input.focus(), 50);
      }
    };
    var AssetModal = class extends Modal2 {
      constructor(app, defaultLibrary, onSubmit) {
        super(app);
        this.defaultLibrary = defaultLibrary;
        this.onSubmit = onSubmit;
      }
      onOpen() {
        const root = this.contentEl;
        root.addClass("wis-modal");
        root.addClass("wis-asset-modal");
        root.createEl("h2", { text: "新建六类资产" });
        root.createEl("p", { text: "先选择真实归属，再写入对应资产库。来源无法确认时请留空并在正文标记待确认。", cls: "wis-modal-note" });
        const select = root.createEl("select", { cls: "wis-modal-input", attr: { "aria-label": "资产库" } });
        LIBRARIES.filter((item) => item.id !== "content").forEach((library) => select.createEl("option", { value: library.id, text: `${library.order} · ${library.name}` }));
        select.value = this.defaultLibrary && this.defaultLibrary !== "all" && this.defaultLibrary !== "content" ? this.defaultLibrary : "product";
        const title = root.createEl("input", { cls: "wis-modal-input", attr: { placeholder: "资产标题" } });
        const source = root.createEl("input", { cls: "wis-modal-input", attr: { placeholder: "来源文件或说明（可稍后补）" } });
        const actions = root.createDiv({ cls: "wis-modal-actions" });
        makeButton(actions, "取消", "x", "is-secondary", () => this.close());
        makeButton(actions, "创建资产", "plus", "is-primary", async () => {
          if (!title.value.trim()) return;
          this.close();
          await this.onSubmit({ libraryId: select.value, title: title.value.trim(), source: source.value.trim() });
        });
        window.setTimeout(() => title.focus(), 50);
      }
    };
    var ConfirmActionModal = class extends Modal2 {
      constructor(app, title, description, actionLabel, onConfirm, options = {}) {
        super(app);
        Object.assign(this, { title, description, actionLabel, onConfirm, options });
      }
      onOpen() {
        this.contentEl.addClass("wis-modal");
        this.contentEl.createEl("h2", { text: this.title });
        this.contentEl.createEl("p", { text: this.description, cls: "wis-modal-note" });
        const actions = this.contentEl.createDiv({ cls: "wis-modal-actions" });
        makeButton(actions, "取消", "x", "is-secondary", () => this.close());
        makeButton(actions, this.actionLabel, this.options.icon || "arrow-right", this.options.danger ? "is-danger" : "is-primary", async () => {
          this.close();
          await this.onConfirm();
        });
      }
    };
    var ContentStageGateModal = class extends Modal2 {
      constructor(app, options) {
        super(app);
        this.options = options;
      }
      onOpen() {
        const root = this.contentEl;
        root.addClass("wis-modal");
        root.addClass("wis-stage-gate-modal");
        root.createEl("h2", { text: this.options.title });
        root.createEl("p", { text: this.options.description, cls: "wis-modal-note" });
        const checklist = root.createEl("ul", { cls: "wis-stage-gate-checklist" });
        (this.options.requirements || []).forEach((requirement) => {
          const item = checklist.createEl("li");
          makeIcon(item, "circle-help");
          item.createSpan({ text: requirement });
        });
        const actions = root.createDiv({ cls: "wis-modal-actions wis-stage-gate-actions" });
        makeButton(actions, "暂不推进", "x", "is-secondary", () => this.close());
        makeButton(actions, this.options.incompleteLabel, this.options.skill ? "messages-square" : "file-pen-line", "is-secondary", async () => {
          this.close();
          await this.options.onIncomplete();
        });
        makeButton(actions, `已完成，进入${this.options.next}`, "arrow-right", "is-primary", async () => {
          this.close();
          await this.options.onConfirm();
        });
      }
    };
    function selectableAssistantFiles(app) {
      return app.vault.getMarkdownFiles().filter((file) => file.path.startsWith(`${ROOT2}/`) && !file.path.startsWith(`${ROOT2}/.agents/`) && !file.path.startsWith(`${ROOT2}/.fde/`) && !file.path.startsWith(`${ROOT2}/7-系统/`)).sort((a, b) => b.stat.mtime - a.stat.mtime);
    }
    var AssistantNotePickerModal = class extends Modal2 {
      constructor(app, selectedPaths, onConfirm) {
        super(app);
        this.selectedPaths = new Set((Array.isArray(selectedPaths) ? selectedPaths : [selectedPaths]).filter(Boolean));
        this.onConfirm = onConfirm;
      }
      onOpen() {
        const root = this.contentEl;
        root.addClass("wis-modal");
        root.addClass("wis-context-modal");
        root.createEl("h2", { text: "选择笔记" });
        root.createEl("p", { text: "可选择多篇笔记作为本次任务的上下文，FDE365 Agent 会一起读取。", cls: "wis-modal-note" });
        const search = root.createEl("input", {
          cls: "wis-modal-input",
          attr: { type: "search", placeholder: "按标题或路径搜索…", "aria-label": "搜索笔记" }
        });
        const list = root.createDiv({ cls: "wis-context-file-list" });
        const files = selectableAssistantFiles(this.app);
        let selectionSummary = null;
        let completeButton = null;
        const updateSelectionState = () => {
          if (selectionSummary) selectionSummary.setText(`已选 ${this.selectedPaths.size} 篇`);
          const label = completeButton?.querySelector(".wis-button-label");
          if (label) label.textContent = `完成选择 (${this.selectedPaths.size})`;
        };
        const render = () => {
          list.empty();
          const query = search.value.trim().toLowerCase();
          const matches = files.filter((file) => !query || `${file.basename} ${file.path}`.toLowerCase().includes(query)).slice(0, 80);
          if (!matches.length) list.createDiv({ text: "没有匹配的知识库笔记", cls: "wis-empty" });
          matches.forEach((file) => {
            const selected = this.selectedPaths.has(file.path);
            const row = list.createEl("button", {
              cls: `wis-context-file${selected ? " is-selected" : ""}`,
              attr: { type: "button", "aria-pressed": String(selected) }
            });
            makeIcon(row, selected ? "check-circle-2" : "file-text");
            const copy = row.createDiv();
            copy.createEl("strong", { text: file.basename });
            copy.createSpan({ text: file.path });
            row.addEventListener("click", () => {
              if (this.selectedPaths.has(file.path)) this.selectedPaths.delete(file.path);
              else this.selectedPaths.add(file.path);
              render();
            });
          });
          updateSelectionState();
        };
        search.addEventListener("input", render);
        const actions = root.createDiv({ cls: "wis-modal-actions" });
        selectionSummary = actions.createSpan({ cls: "wis-context-selection-count" });
        makeButton(actions, "清除选择", "x", "is-secondary", () => {
          this.selectedPaths.clear();
          render();
        });
        makeButton(actions, "取消", "x", "is-secondary", () => this.close());
        completeButton = makeButton(actions, "完成选择", "check", "is-primary", async () => {
          this.close();
          await this.onConfirm([...this.selectedPaths]);
        });
        render();
        window.setTimeout(() => search.focus(), 50);
      }
    };
    var FDEWorkspaceService = class {
      constructor(plugin) {
        this.plugin = plugin;
        this.app = plugin.app;
        this.config = this.defaultConfig();
        this.legacyInbox = {
          pending: ["0-录音处理/待处理录音"],
          processed: ["0-录音处理/已处理"]
        };
        this.inboxProcessing = /* @__PURE__ */ new Map();
      }
      defaultConfig() {
        return {
          libraries: Object.fromEntries(LIBRARIES.map((item) => [item.key, item.path])),
          inbox: { pending: "0-待处理材料/待处理", processed: "0-待处理材料/已处理记录" },
          runtime: { state: ".fde/state", indexes: ".fde/indexes", logs: ".fde/logs", versions: ".fde/versions", reports: ".fde/reports", quarantine: ".fde/quarantine" },
          policy: { preserve_raw_files: true, require_source_on_write: true, allow_cross_project_read: false, confirm_before_delete: true }
        };
      }
      async reloadConfig() {
        const configPath = `${ROOT2}/.fde/config.yaml`;
        try {
          if (!await this.app.vault.adapter.exists(configPath)) return this.config;
          const raw = await this.app.vault.adapter.read(configPath);
          const parsed = parseConfigYaml(raw);
          const defaults = this.defaultConfig();
          const parsedInbox = parsed.inbox || {};
          const usesLegacyRecordingConfig = Boolean(parsedInbox.recordings && !parsedInbox.pending);
          this.legacyInbox = {
            pending: [...new Set(["0-录音处理/待处理录音", usesLegacyRecordingConfig ? parsedInbox.recordings : ""].filter(Boolean))],
            processed: [...new Set(["0-录音处理/已处理", usesLegacyRecordingConfig ? parsedInbox.processed : ""].filter(Boolean))]
          };
          this.config = {
            libraries: { ...defaults.libraries, ...parsed.libraries || {} },
            inbox: {
              pending: parsedInbox.pending || defaults.inbox.pending,
              processed: usesLegacyRecordingConfig ? defaults.inbox.processed : parsedInbox.processed || defaults.inbox.processed
            },
            runtime: { ...defaults.runtime, ...parsed.runtime || {} },
            policy: { ...defaults.policy, ...parsed.policy || {} }
          };
        } catch (error) {
          console.error("FDE365 Knowledge OS: failed to read .fde/config.yaml", error);
          this.config = this.defaultConfig();
        }
        return this.config;
      }
      path(relative = "") {
        return normalizePath2([ROOT2, relative].filter(Boolean).join("/"));
      }
      libraryPath(library) {
        const item = typeof library === "string" ? LIBRARIES.find((candidate) => candidate.id === library || candidate.key === library) : library;
        return this.path(this.config.libraries[item?.key] || item?.path || "");
      }
      inboxPath(kind = "pending") {
        return this.path(this.config.inbox[kind]);
      }
      inboxRoots(kind = "pending") {
        return [.../* @__PURE__ */ new Set([this.inboxPath(kind), ...(this.legacyInbox[kind] || []).map((path) => this.path(path))])];
      }
      contentPath() {
        return this.libraryPath("content");
      }
      skillPath(skillId) {
        return this.path(`.agents/skills/${skillId}/SKILL.md`);
      }
      resolvedConfigContext() {
        return {
          path: this.path(".fde/config.yaml"),
          title: "FDE365 已解析配置",
          excerpt: [
            "以下内容由插件在本地读取并解析，不需要模型自行访问 Vault 文件系统。",
            "",
            "六类资产库：",
            ...LIBRARIES.map((library) => `- ${library.name}: ${this.libraryPath(library)}`),
            "",
            `待处理材料: ${this.inboxPath("pending")}`,
            `已处理记录: ${this.inboxPath("processed")}`,
            `运行状态: ${this.path(this.config.runtime.state)}`,
            "分类规则: 录音、聊天、图片和文档只是材料形式；业务归属必须在六类资产中判断，一份材料可有多个建议去向。",
            "",
            "安全策略：",
            `- 保留原始文件: ${this.config.policy.preserve_raw_files !== false ? "是" : "否"}`,
            `- 写入需要来源: ${this.config.policy.require_source_on_write !== false ? "是" : "否"}`,
            `- 允许跨项目读取: ${this.config.policy.allow_cross_project_read === true ? "是" : "否"}`,
            `- 删除前确认: ${this.config.policy.confirm_before_delete !== false ? "是" : "否"}`
          ].join("\n")
        };
      }
      skillCatalogContext() {
        return {
          path: this.path(".agents/skills"),
          title: "FDE Skills 能力目录",
          excerpt: SKILLS.map((skill) => `- /${skill.id} · ${skill.name}: ${skill.description} 交付：${skill.output}`).join("\n")
        };
      }
      matchingSkillIds(prompt) {
        const text = String(prompt || "");
        const lower = text.toLowerCase();
        const matches = SKILLS.filter((skill) => lower.includes(skill.id)).map((skill) => skill.id);
        if (/(?:一键.*(?:出内容|成稿|写稿)|(?:出内容|成稿|写稿|写内容).*(?:skill|技能|工作流)|根据知识库写)/i.test(text)) matches.push("fde-write");
        return [...new Set(matches)];
      }
      async readSkillContract(skillId) {
        const path = this.skillPath(skillId);
        if (!await this.app.vault.adapter.exists(path)) return null;
        const raw = await this.app.vault.adapter.read(path);
        return {
          path,
          title: `/${skillId} 本地 Skill 合同`,
          excerpt: String(raw || "").slice(0, 16e3)
        };
      }
      async assistantRuntimeContext(prompt) {
        const text = String(prompt || "");
        const needsSkills = /(?:skill|技能|工作流|一键|出内容|成稿|写稿|写内容|\/fde-|fde-)/i.test(text);
        if (!needsSkills) return [];
        await this.reloadConfig();
        const context = [this.resolvedConfigContext()];
        for (const skillId of this.matchingSkillIds(text)) {
          const contract = await this.readSkillContract(skillId);
          if (contract) context.push(contract);
        }
        context.push(this.skillCatalogContext());
        return context;
      }
      async skillRuntimeContext(skill) {
        await this.reloadConfig();
        const context = [this.resolvedConfigContext()];
        const contract = await this.readSkillContract(skill.id);
        if (contract) context.push(contract);
        context.push(this.skillCatalogContext());
        return context;
      }
      isIgnoredAsset(file) {
        return !file.path.startsWith(`${ROOT2}/`) || file.path.startsWith(`${ROOT2}/.agents/`) || file.path.startsWith(`${ROOT2}/.fde/`) || file.path.startsWith(`${ROOT2}/7-系统/`) || file.basename === "README" || file.path === `${ROOT2}/0-使用说明.md`;
      }
      libraryForFile(file) {
        return LIBRARIES.find((library) => {
          const root = this.libraryPath(library);
          return file.path === root || file.path.startsWith(`${root}/`);
        }) || null;
      }
      stageForFile(file) {
        const root = this.contentPath();
        return CONTENT_STAGES.find((stage) => file.path.startsWith(`${root}/${stage.id}/`)) || null;
      }
      contentAnalyticsFiles() {
        const roots = [`${this.contentPath()}/发布数据/`, `${this.contentPath()}/数据复盘/`];
        return this.app.vault.getFiles().filter((file) => roots.some((root) => file.path.startsWith(root)) && file.basename !== "README").sort((a, b) => b.stat.mtime - a.stat.mtime);
      }
      assetFiles() {
        return this.app.vault.getMarkdownFiles().filter((file) => !this.isIgnoredAsset(file) && Boolean(this.libraryForFile(file)));
      }
      isInboxMaterialFile(file) {
        if (!(file instanceof TFile2) || file.basename === "README" || file.path.includes("/原始文件/") || file.path.includes("/附件/")) return false;
        const type = String(frontmatterOf(this.app, file).type || "").trim().toLowerCase();
        if (type && type !== "inbox") return false;
        return !/(?:^|[-_—\s（(])(?:分流预览|分流记录|处理记录)(?:$|[-_—\s）)])/i.test(file.basename);
      }
      isCompletedInboxFile(file) {
        const status = String(frontmatterOf(this.app, file).status || "").trim().toLowerCase();
        return this.inboxRoots("processed").some((root) => file.path.startsWith(`${root}/`)) || ["processed", "completed", "closed", "done", "已完成", "已处理", "结案"].includes(status);
      }
      pendingFiles({ includeCompleted = false } = {}) {
        const roots = this.inboxRoots("pending");
        return this.app.vault.getMarkdownFiles().filter((file) => roots.some((root) => file.path.startsWith(`${root}/`)) && this.isInboxMaterialFile(file) && (includeCompleted || !this.isCompletedInboxFile(file))).sort((a, b) => b.stat.mtime - a.stat.mtime);
      }
      processedFiles() {
        return this.materialFiles().filter((file) => this.isCompletedInboxFile(file));
      }
      materialFiles() {
        const roots = [.../* @__PURE__ */ new Set([...this.inboxRoots("pending"), ...this.inboxRoots("processed")])];
        return [...new Map(this.app.vault.getMarkdownFiles().filter((file) => roots.some((root) => file.path.startsWith(`${root}/`)) && this.isInboxMaterialFile(file)).map((file) => [file.path, file])).values()].sort((a, b) => {
          const completionOrder = Number(this.isCompletedInboxFile(a)) - Number(this.isCompletedInboxFile(b));
          return completionOrder || b.stat.mtime - a.stat.mtime;
        });
      }
      async inboxOriginalFiles(file) {
        if (!(file instanceof TFile2) || !this.isInboxMaterialFile(file)) return [];
        const content = await this.app.vault.cachedRead(file);
        const frontmatter = frontmatterOf(this.app, file);
        const yamlOriginals = [...String(content || "").matchAll(/^original_files?:\s*(.*?)\s*$/gmi)].flatMap((match) => materialPathValues(match[1]));
        const candidates = [
          ...materialPathValues(frontmatter.original_file),
          ...materialPathValues(frontmatter.original_files),
          ...yamlOriginals
        ];
        const roots = [.../* @__PURE__ */ new Set([...this.inboxRoots("pending"), ...this.inboxRoots("processed")])];
        return [...new Map(candidates.map((path) => [normalizePath2(path), normalizePath2(path)])).values()].filter((path) => roots.some((root) => path.startsWith(`${root}/`)) && /\/(?:原始文件|附件)\//.test(path)).map((path) => this.app.vault.getAbstractFileByPath(path)).filter((target) => target instanceof TFile2);
      }
      async deleteInboxMaterials(files) {
        const records = [...new Map((files || []).filter((file) => file instanceof TFile2 && this.isInboxMaterialFile(file)).map((file) => [file.path, file])).values()];
        if (!records.length) throw new Error("请选择要删除的原始材料");
        const originalGroups = await Promise.all(records.map((file) => this.inboxOriginalFiles(file)));
        const originals = [...new Map(originalGroups.flat().map((target) => [target.path, target])).values()];
        const targets = [...new Map([...records, ...originals].map((target) => [target.path, target])).values()];
        for (const target of targets) {
          if (typeof this.app.fileManager?.trashFile === "function") await this.app.fileManager.trashFile(target);
          else await this.app.vault.trash(target, true);
        }
        records.forEach((file) => this.inboxProcessing.delete(file.path));
        this.plugin.refreshDashboard?.();
        new Notice2(`已将 ${records.length} 份材料记录和 ${originals.length} 个原始文件移入回收站`);
        return {
          records: records.map((file) => file.path),
          originals: originals.map((target) => target.path),
          deleted: targets.map((target) => target.path)
        };
      }
      async deleteInboxMaterial(file) {
        const result = await this.deleteInboxMaterials([file]);
        return { ...result, record: result.records[0] };
      }
      async completeInboxFiles(files, { markProcessed = true } = {}) {
        const materialRoots = [.../* @__PURE__ */ new Set([...this.inboxRoots("pending"), ...this.inboxRoots("processed")])];
        const candidates = [...new Map((files || []).filter((file) => file instanceof TFile2 && materialRoots.some((root) => file.path.startsWith(`${root}/`)) && this.isInboxMaterialFile(file)).map((file) => [file.path, file])).values()];
        const completedPaths = /* @__PURE__ */ new Map();
        if (!candidates.length) return completedPaths;
        for (const file of candidates) {
          if (markProcessed) {
            const processedAt = (/* @__PURE__ */ new Date()).toISOString();
            await this.app.vault.process(file, (content) => {
              let updated = String(content || "");
              if (/^status:\s*.*$/mi.test(updated)) updated = updated.replace(/^status:\s*.*$/mi, "status: processed");
              else if (/^---\s*\n/.test(updated)) updated = updated.replace(/^---\s*\n/, `---
status: processed
`);
              else updated = `---
status: processed
processed_at: ${processedAt}
---

${updated}`;
              if (/^processed_at:\s*.*$/mi.test(updated)) updated = updated.replace(/^processed_at:\s*.*$/mi, `processed_at: ${processedAt}`);
              else if (/^---\s*\n/.test(updated)) updated = updated.replace(/^---\s*\n/, `---
processed_at: ${processedAt}
`);
              updated = updated.replace(/^-\s*尚未运行 \/fde-ingest\s*$/mi, "- /fde-ingest 已处理完成");
              updated = updated.replace(/^-\s*是否处理[：:]\s*.*$/mi, "- 是否处理：已处理完成");
              return updated;
            });
          }
          const previous = this.inboxProcessing.get(file.path) || {};
          this.inboxProcessing.set(file.path, {
            ...previous,
            status: "processed",
            message: "已处理完成",
            processedAt: Date.now(),
            updatedAt: Date.now()
          });
          completedPaths.set(file.path, file.path);
        }
        this.plugin.refreshDashboard?.();
        return completedPaths;
      }
      async reconcileCompletedInboxFiles() {
        const completed = this.pendingFiles({ includeCompleted: true }).filter((file) => this.isCompletedInboxFile(file));
        if (!completed.length) return /* @__PURE__ */ new Map();
        return this.completeInboxFiles(completed, { markProcessed: false });
      }
      async noteInfo(file) {
        const content = await this.app.vault.cachedRead(file);
        const frontmatter = frontmatterOf(this.app, file);
        const source = sourceFromContent(content, frontmatter);
        const unknown = unknownFromContent(content);
        const library = this.libraryForFile(file);
        const stage = this.stageForFile(file);
        const stageValue = String(frontmatter.stage || frontmatter.status || content.match(/^\s*-\s*当前阶段\s*[：:]\s*(.+?)\s*$/mi)?.[1] || "").trim();
        const stageConflict = Boolean(stage && stageValue && stageValue !== stage.id);
        return {
          file,
          content,
          frontmatter,
          library,
          stage,
          source,
          unknown,
          stageValue,
          stageConflict,
          stale: Date.now() - file.stat.mtime > 90 * 864e5,
          excerpt: content.replace(/^---[\s\S]*?---\s*/m, "").replace(/^#{1,6}\s+/gm, "").replace(/\[\[|\]\]/g, "").replace(/\s+/g, " ").trim().slice(0, 150)
        };
      }
      async snapshot() {
        await this.reloadConfig();
        const files = this.assetFiles();
        const notes = await Promise.all(files.map((file) => this.noteInfo(file)));
        const libraries = LIBRARIES.map((library) => {
          const items = notes.filter((note) => note.library?.id === library.id);
          const sourceCount = items.filter((note) => note.source).length;
          const unknown2 = items.reduce((sum, note) => sum + note.unknown, 0);
          const stale2 = items.filter((note) => note.stale).length;
          const score = items.length ? Math.max(0, Math.round(100 - (1 - sourceCount / items.length) * 45 - Math.min(25, unknown2 * 4) - stale2 / items.length * 20)) : 0;
          return {
            ...library,
            path: this.libraryPath(library),
            items,
            count: items.length,
            sourceCount,
            sourceCoverage: items.length ? sourceCount / items.length : 0,
            unknown: unknown2,
            stale: stale2,
            score,
            updated: Math.max(0, ...items.map((item) => item.file.stat.mtime))
          };
        });
        const contentItems = notes.filter((note) => note.library?.id === "content");
        const stages = CONTENT_STAGES.map((stage) => ({ ...stage, items: contentItems.filter((item) => item.stage?.id === stage.id) }));
        const analyticsFiles = this.contentAnalyticsFiles();
        const analyticsNotes = contentItems.filter((note) => analyticsFiles.some((file) => file.path === note.file.path));
        const pending = this.pendingFiles();
        const processed = this.processedFiles();
        const materials = this.materialFiles();
        const totalSources = notes.filter((note) => note.source).length;
        const unknown = notes.reduce((sum, note) => sum + note.unknown, 0);
        const stale = notes.filter((note) => note.stale).length;
        const recent = [...notes].sort((a, b) => b.file.stat.mtime - a.file.stat.mtime).slice(0, 8);
        const missingPaths = [];
        for (const library of LIBRARIES) {
          if (!await this.app.vault.adapter.exists(this.libraryPath(library))) missingPaths.push(this.libraryPath(library));
        }
        const installedSkills = [];
        for (const skill of SKILLS) {
          if (await this.app.vault.adapter.exists(this.skillPath(skill.id))) installedSkills.push(skill.id);
        }
        const relations = this.buildRelations(notes);
        return {
          notes,
          libraries,
          stages,
          analyticsFiles,
          analyticsNotes,
          pending,
          processed,
          materials,
          total: notes.length,
          sourceCoverage: notes.length ? totalSources / notes.length : 0,
          unknown,
          stale,
          recent,
          missingPaths,
          installedSkills,
          stageConflicts: notes.filter((note) => note.stageConflict),
          relations
        };
      }
      buildRelations(notes) {
        const byPath = new Map(notes.map((note) => [note.file.path, note]));
        const matrix = Object.fromEntries(LIBRARIES.map((source) => [source.id, Object.fromEntries(LIBRARIES.map((target) => [target.id, 0]))]));
        const edges = [];
        const resolved = this.app.metadataCache.resolvedLinks || {};
        Object.entries(resolved).forEach(([sourcePath, targets]) => {
          const source = byPath.get(sourcePath);
          if (!source?.library) return;
          Object.keys(targets || {}).forEach((targetPath) => {
            const target = byPath.get(targetPath);
            if (!target?.library) return;
            matrix[source.library.id][target.library.id] += 1;
            edges.push({ source, target });
          });
        });
        return { matrix, edges };
      }
      async openFile(fileOrPath) {
        const file = fileOrPath instanceof TFile2 ? fileOrPath : this.app.vault.getAbstractFileByPath(fileOrPath);
        if (file instanceof TFile2) await this.app.workspace.getLeaf("tab").openFile(file);
      }
      async openLibrary(libraryId) {
        await this.plugin.activateKnowledge();
        const view = this.plugin.getKnowledgeCenter();
        if (view) {
          view.selectedLibrary = libraryId;
          await view.refresh();
        }
      }
      async createAsset({ libraryId, title, source }) {
        const library = LIBRARIES.find((item) => item.id === libraryId) || LIBRARIES[1];
        const root = this.libraryPath(library);
        await ensureFolder(this.app, root);
        const path = await uniquePath(this.app, `${root}/${safeName2(title)}.md`);
        const date = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
        const body = this.assetTemplate(library, title, source, date);
        const file = await this.app.vault.create(path, body);
        await this.openFile(file);
        new Notice2(`已创建到 ${library.name}：${file.basename}`);
        return file;
      }
      assetTemplate(library, title, source, date) {
        const head = `---
type: ${library.id}-asset
source: ${yamlValue(source)}
created_at: ${date}
updated_at: ${date}
status: draft
---

# ${title}

- 信息来源：${source || ""}
- 更新时间：${date}
`;
        const bodies = {
          owner: "\n## 已确认事实\n\n## 我的判断\n\n## 我的表达\n\n## 工作边界\n\n## 待补信息\n",
          product: "\n## 给谁\n\n## 解决什么问题\n\n## 交付内容\n\n## 价格和付款条件\n\n## 已有证据\n\n## 常见异议\n\n## 不能承诺的内容\n\n## 待确认\n",
          customer: "\n- 接触阶段：\n- 是否允许公开：待确认\n\n## 客户原话\n\n## 已确认事实\n\n## 当前推断\n\n## 结果\n\n## 待确认\n",
          case: "\n- 发生日期：\n- 是否允许公开：待确认\n\n## 当时发生了什么\n\n## 原话或数据\n\n## 采取了什么动作\n\n## 结果\n\n## 可以支持哪些判断\n\n## 仍不确定的内容\n",
          method: "\n- 使用场景：\n\n## 要解决的问题\n\n## 前置条件\n\n## 步骤\n\n## 完成信号\n\n## 失败信号\n\n## 实际案例\n\n## 不适用情况\n\n## 待验证\n"
        };
        return `${head}${bodies[library.id] || bodies.case}`;
      }
      async createQuickNote(title) {
        const root = this.inboxPath("pending");
        await ensureFolder(this.app, root);
        const date = /* @__PURE__ */ new Date();
        const stamp = date.toISOString().replace(/[-:TZ]/g, "").slice(0, 12);
        const path = await uniquePath(this.app, `${root}/${stamp}-${safeName2(title)}.md`);
        const file = await this.app.vault.create(path, `---
type: inbox
status: pending
source: quick-note
created_at: ${date.toISOString()}
allowed_to_write: pending
---

# ${title}

## 原始内容


## 来源和参与人


## 待确认

- 是否允许写入正式资产库
`);
        await this.openFile(file);
        new Notice2("已保存到待处理；原始内容不会被自动覆盖");
        return file;
      }
      async importInboxFiles(fileList) {
        const files = Array.from(fileList || []).filter((file) => file && typeof file.name === "string" && typeof file.arrayBuffer === "function");
        if (!files.length) return [];
        const root = this.inboxPath("pending");
        const attachmentRoot = `${root}/原始文件`;
        await ensureFolder(this.app, root);
        await ensureFolder(this.app, attachmentRoot);
        const imported = [];
        for (const sourceFile of files) {
          const originalName = safeName2(sourceFile.name || "未命名文件");
          const attachmentPath = await uniquePath(this.app, `${attachmentRoot}/${originalName}`);
          const bytes = await sourceFile.arrayBuffer();
          const attachment = await this.app.vault.createBinary(attachmentPath, bytes);
          const title = safeName2(originalName.replace(/\.[^.]+$/, ""));
          const createdAt = (/* @__PURE__ */ new Date()).toISOString();
          const notePath = await uniquePath(this.app, `${root}/${title}.md`);
          const canEmbed = /^(?:image|audio|video)\//i.test(String(sourceFile.type || ""));
          const reference = canEmbed ? `![[${attachment.path}]]` : `[[${attachment.path}|打开原始文件]]`;
          const content = `---
type: inbox
status: pending
source: dragged-file
original_file: ${yamlValue(attachment.path)}
original_name: ${yamlValue(sourceFile.name)}
file_type: ${yamlValue(sourceFile.type || "unknown")}
file_size: ${Number(sourceFile.size) || 0}
created_at: ${createdAt}
allowed_to_write: pending
---

# ${title}

## 原始文件

${reference}

## 处理状态

- 已收录到待处理
- 尚未运行 /fde-ingest
- 是否处理：等待用户决定

## 待确认

- 是否允许生成分流预览
- 是否允许写入正式资产库
`;
          const note = await this.app.vault.create(notePath, content);
          imported.push({ note, attachment });
        }
        return imported;
      }
      async createContent(title, stageId = "选题") {
        const stage = CONTENT_STAGES.find((item) => item.id === stageId) || CONTENT_STAGES[0];
        const root = `${this.contentPath()}/${stage.id}`;
        await ensureFolder(this.app, root);
        const date = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
        const path = await uniquePath(this.app, `${root}/${date}-${safeName2(title)}.md`);
        const file = await this.app.vault.create(path, `---
type: content
stage: ${stage.id}
source: ""
created_at: ${date}
updated_at: ${date}
---

# ${title}

- 目标读者：
- 目标平台：
- 当前阶段：${stage.id}
- 来源文件：
- 创建日期：${date}
- 最后修改：${date}

## 正文或提纲


## 未核实项


## 发布记录
`);
        await this.openFile(file);
        new Notice2(`已创建到内容生产 / ${stage.id}`);
        return file;
      }
      async importContentAnalytics(files, contentNote = null) {
        const acceptedExtensions = /* @__PURE__ */ new Set(["csv", "tsv", "json", "xlsx", "xls"]);
        const selected = [...files || []].filter((file) => {
          const extension = String(file?.name || "").split(".").pop()?.toLowerCase() || "";
          return file && acceptedExtensions.has(extension);
        });
        if (!selected.length) throw new Error("请选择 CSV、TSV、JSON、XLSX 或 XLS 数据文件");
        const owner = safeName2(contentNote?.file?.basename || "未关联内容");
        const root = `${this.contentPath()}/发布数据/${owner}`;
        await ensureFolder(this.app, root);
        const imported = [];
        for (const sourceFile of selected) {
          const targetPath = await uniquePath(this.app, `${root}/${safeName2(sourceFile.name)}`);
          const file = await this.app.vault.createBinary(targetPath, await sourceFile.arrayBuffer());
          imported.push(file);
        }
        return imported;
      }
      async advanceContent(note, options = {}) {
        const current = note.stage;
        const gate = CONTENT_STAGE_GATES[current?.id];
        const next = CONTENT_STAGES.find((stage) => stage.id === gate?.next);
        if (!gate || !next) return;
        new ContentStageGateModal(this.app, {
          ...gate,
          onIncomplete: async () => {
            if (typeof options.onIncomplete === "function") await options.onIncomplete(gate, note);
            else await this.openFile(note.file);
          },
          onConfirm: async () => {
            const targetRoot = `${this.contentPath()}/${next.id}`;
            await ensureFolder(this.app, targetRoot);
            const targetPath = await uniquePath(this.app, `${targetRoot}/${note.file.name}`);
            await this.app.vault.process(note.file, (content) => {
              let updated = content.replace(/^(stage:\s*).+$/mi, `$1${next.id}`);
              if (/^-\s*当前阶段\s*[：:]/mi.test(updated)) updated = updated.replace(/^(\s*-\s*当前阶段\s*[：:]\s*).+$/mi, `$1${next.id}`);
              return updated;
            });
            await this.app.fileManager.renameFile(note.file, targetPath);
            new Notice2(`已推进到 ${next.id}`);
            this.plugin.refreshDashboard();
          }
        }).open();
      }
      skillSystemPrompt(skill) {
        return `你正在执行项目本地 Skill /${skill.id}（${skill.name}）。

${BASE_SKILL_RULES}
${executionModeRule(this.plugin)}

本 Skill 的职责：${skill.description}
要求交付：${skill.output}。
插件已在请求前读取并附加解析后的 .fde/config.yaml、FDE Skills 能力目录和 /${skill.id} 的本地 SKILL.md 合同。直接使用这些“本地运行上下文”，不要声称自己无法访问或尚未读取这些文件。`;
      }
      inboxProcessingState(fileOrPath) {
        const path = typeof fileOrPath === "string" ? fileOrPath : fileOrPath?.path;
        return this.inboxProcessing.get(path) || { status: "idle", message: "等待处理" };
      }
      setInboxProcessing(files, status, message, details = {}) {
        files.forEach((file) => {
          if (!file?.path) return;
          const previous = this.inboxProcessing.get(file.path) || {};
          this.inboxProcessing.set(file.path, { ...previous, status, message, ...details, updatedAt: Date.now() });
        });
        this.plugin.refreshDashboard?.();
      }
      async processInboxFiles(files, options = {}) {
        const selected = [...new Map((files || []).filter((file) => file?.path).map((file) => [file.path, file])).values()].filter((file) => this.inboxProcessingState(file).status !== "running");
        if (!selected.length) return { status: "empty", task: null };
        const previousStates = selected.map((file) => this.inboxProcessingState(file));
        const conversationIds = [...new Set(previousStates.map((state) => state.conversationId).filter(Boolean))];
        const conversationId = Object.hasOwn(options, "sessionId") ? String(options.sessionId || "") : conversationIds.length === 1 ? conversationIds[0] : "";
        const previousConversation = conversationId ? previousStates.find((state) => state.conversationId === conversationId && Array.isArray(state.messages)) : null;
        const messages = Array.isArray(options.messages) ? options.messages : previousConversation?.messages || [];
        const sourcePaths = selected.map((file) => file.path);
        const displayPrompt = `/fde-ingest

处理待处理材料：${selected.map((file) => file.basename).join("、")}`;
        const fileList = selected.map((file) => `- ${file.path}`).join("\n");
        const agentPrompt = `用户已明确选择以下 ${selected.length} 份原始材料进行处理：
${fileList}

请先生成分流预览，保留原文，不要在未经确认时写入正式资产库。先单独标记录音、聊天、图片或文档等“材料形式”，再按证据建议一个或多个六类资产去向；归属不确定的内容留在待确认。`;
        this.setInboxProcessing(selected, "running", `正在用 /fde-ingest 处理 ${selected.length} 份材料`, {
          conversationId,
          sourcePaths,
          messages
        });
        try {
          const task = await this.runSkill(
            "fde-ingest",
            agentPrompt,
            selected,
            {
              includeActive: false,
              sessionId: conversationId,
              onTaskStart: options.onTaskStart,
              onEvent: options.onEvent
            }
          );
          const succeeded = task && ["waiting-review", "success", "completed"].includes(task.status);
          if (succeeded) {
            const latest = this.plugin.lastAgentResult;
            const isCurrentResult = latest?.task?.taskId === task.taskId;
            const outputPath = isCurrentResult ? latest.outputFile?.path || "" : "";
            const resultContent = isCurrentResult ? String(latest.result?.content || "").trim() : "";
            const preview = isCurrentResult ? resultContent.replace(/\s+/g, " ").slice(0, 160) : "";
            if (isCurrentResult) {
              const latestMessage = messages.at(-1);
              if (latestMessage?.role !== "user" || latestMessage.content !== displayPrompt) messages.push({ role: "user", content: displayPrompt });
              messages.push({
                role: "assistant",
                content: resultContent || "分流预览已生成。请确认下一步要写入、修改，还是暂不处理。",
                provider: latest.result?.provider || "FDE365 Agent",
                model: latest.result?.model || ""
              });
            }
            this.setInboxProcessing(selected, "awaiting-confirmation", "等待确认", {
              outputPath,
              preview,
              resultContent,
              taskId: task.taskId,
              conversationId: isCurrentResult ? latest.result?.conversationId || conversationId : conversationId,
              provider: isCurrentResult ? latest.result?.provider || "FDE365 Agent" : "FDE365 Agent",
              model: isCurrentResult ? latest.result?.model || "" : "",
              sourcePaths,
              messages
            });
            return { status: "awaiting-confirmation", task, outputPath };
          }
          const failure = task?.error || task?.message || (task ? `任务状态：${task.status || "unknown"}` : "Agent 未启动，请检查本地 Codex 或 账号登录");
          this.setInboxProcessing(selected, "failed", `处理失败 · ${failure}`);
          return { status: "failed", task };
        } catch (error) {
          const message = error instanceof Error ? error.message : String(error);
          this.setInboxProcessing(selected, "failed", `处理失败 · ${message}`);
          return { status: "failed", task: null, error };
        }
      }
      async runSkill(skillId, prompt, sourceFiles = [], options = {}) {
        const skill = SKILLS.find((item) => item.id === skillId);
        if (!skill) throw new Error(`未知 Skill：${skillId}`);
        const active = this.app.workspace.getActiveFile();
        const sources = [...sourceFiles];
        if (options.includeActive !== false && active instanceof TFile2 && !sources.some((item) => item.path === active.path)) sources.push(active);
        const localContext = await this.skillRuntimeContext(skill);
        return this.plugin.executeAgent({
          id: skill.id,
          name: `/${skill.id}`,
          description: skill.description,
          output: skill.output,
          systemPrompt: this.skillSystemPrompt(skill),
          localContext
        }, prompt || skill.description, sources, {
          visibleConversation: true,
          sessionId: options.sessionId || "",
          onTaskStart: options.onTaskStart,
          onEvent: options.onEvent
        });
      }
    };
    var createWorkspaceViews = require_fde_workspace_views();
    var {
      FDEDashboardView,
      FDEInboxView,
      FDELibrariesView,
      FDENetworkView,
      FDEContentView,
      FDESkillsView,
      FDEHealthView
    } = createWorkspaceViews({
      getRoot: () => ROOT2,
      VIEW_TYPES,
      LIBRARIES,
      CONTENT_STAGES,
      CONTENT_STAGE_GATES,
      SKILL_GROUPS,
      SKILLS,
      commandCompletionState,
      appendAssistantSkillCommand,
      BASE_SKILL_RULES,
      executionModeRule,
      INBOX_COMPLETION_MARKER,
      stripInboxCompletionMarker,
      shouldCompleteInboxTurn,
      assistantScrollTarget,
      NAV_ITEMS,
      makeIcon,
      makeButton,
      formatRelativeTime: formatRelativeTime2,
      assistantHistoryTopic,
      percent,
      parseConfigYaml,
      sourceFromContent,
      unknownFromContent,
      frontmatterOf,
      markdownSection,
      markdownBody,
      frontmatterPaths,
      linkedPaths,
      TextPromptModal,
      AssetModal,
      ConfirmActionModal,
      AssistantNotePickerModal,
      FDEWorkspaceService
    });
    module2.exports = {
      ROOT: ROOT2,
      configureKnowledgeRoot: configureKnowledgeRoot2,
      VIEW_TYPES,
      LIBRARIES,
      CONTENT_STAGES,
      CONTENT_STAGE_GATES,
      SKILLS,
      SKILL_GROUPS,
      FDEWorkspaceService,
      FDEDashboardView,
      FDEInboxView,
      FDELibrariesView,
      FDENetworkView,
      FDEContentView,
      FDESkillsView,
      FDEHealthView,
      parseConfigYaml,
      sourceFromContent,
      unknownFromContent,
      commandCompletionState,
      appendAssistantSkillCommand,
      assistantHistoryTopic,
      INBOX_COMPLETION_MARKER,
      isInboxConfirmationPrompt,
      hasInboxCompletionMarker,
      stripInboxCompletionMarker,
      hasInboxWriteEvidence,
      shouldCompleteInboxTurn,
      markdownSection,
      frontmatterPaths,
      linkedPaths,
      assistantScrollTarget
    };
  }
});

// github-updater.js
var require_github_updater = __commonJS({
  "github-updater.js"(exports2, module2) {
    var { createHash } = require("node:crypto");
    var UPDATE_FILES = Object.freeze([
      { target: "main.js", asset: "main.js", encoding: "utf8" },
      { target: "manifest.json", asset: "manifest.json", encoding: "utf8" },
      { target: "styles.css", asset: "styles.css", encoding: "utf8" },
      { target: "assets/fde365-logo.png", asset: "fde365-logo.png", encoding: "binary" },
      { target: "assets/fde365-logo-source.svg", asset: "fde365-logo-source.svg", encoding: "utf8" }
    ]);
    function normalizeVersion(value) {
      const match = String(value || "").trim().match(/^v?(\d+)\.(\d+)\.(\d+)$/);
      return match ? `${Number(match[1])}.${Number(match[2])}.${Number(match[3])}` : "";
    }
    function compareVersions(left, right) {
      const a = normalizeVersion(left);
      const b = normalizeVersion(right);
      if (!a || !b) throw new Error("版本号必须使用 x.y.z 格式");
      const av = a.split(".").map(Number);
      const bv = b.split(".").map(Number);
      for (let index = 0; index < 3; index += 1) {
        if (av[index] !== bv[index]) return av[index] > bv[index] ? 1 : -1;
      }
      return 0;
    }
    function sha256(data) {
      return createHash("sha256").update(Buffer.from(data)).digest("hex");
    }
    function validateUpdateManifest(value, expected = {}) {
      if (!value || typeof value !== "object" || Array.isArray(value)) throw new Error("更新清单格式无效");
      if (value.schemaVersion !== 1) throw new Error("更新清单版本不受支持");
      if (value.pluginId !== expected.pluginId) throw new Error("更新清单的插件 ID 不匹配");
      if (value.repository !== expected.repository) throw new Error("更新清单的 GitHub 仓库不匹配");
      const version = normalizeVersion(value.version);
      if (!version || version !== normalizeVersion(expected.version)) throw new Error("更新清单的版本不匹配");
      if (!normalizeVersion(value.minAppVersion)) throw new Error("更新清单的 Obsidian 最低版本无效");
      if (!Array.isArray(value.files) || value.files.length !== UPDATE_FILES.length) throw new Error("更新清单文件数量不正确");
      const expectedByTarget = new Map(UPDATE_FILES.map((file) => [file.target, file]));
      const seen = /* @__PURE__ */ new Set();
      for (const file of value.files) {
        const expectedFile = expectedByTarget.get(file?.target);
        if (!expectedFile || seen.has(file.target)) throw new Error("更新清单包含未知或重复文件");
        if (file.asset !== expectedFile.asset || file.encoding !== expectedFile.encoding) {
          throw new Error(`更新文件定义不匹配：${file.target}`);
        }
        if (!/^[a-f0-9]{64}$/.test(String(file.sha256 || ""))) throw new Error(`更新文件校验值无效：${file.target}`);
        seen.add(file.target);
      }
      return { ...value, version };
    }
    function isTrustedUpdateAssetUrl(value, version, asset) {
      try {
        const url = new URL(value);
        return url.protocol === "https:" && url.hostname === "fdekb.garylau.ai" && url.username === "" && url.password === "" && url.search === "" && url.hash === "" && url.pathname === `/plugin/releases/${normalizeVersion(version)}/${asset}`;
      } catch (_) {
        return false;
      }
    }
    module2.exports = {
      UPDATE_FILES,
      compareVersions,
      isTrustedUpdateAssetUrl,
      normalizeVersion,
      sha256,
      validateUpdateManifest
    };
  }
});

// fde-agent-runtime.js
var require_fde_agent_runtime = __commonJS({
  "fde-agent-runtime.js"(exports2, module2) {
    var { spawn } = require("node:child_process");
    var fs = require("node:fs");
    var os = require("node:os");
    var path = require("node:path");
    var readline = require("node:readline");
    var APP_SERVER_REQUEST_TIMEOUT_MS = 3e4;
    var STDERR_LIMIT = 8192;
    var FdeAgentRuntimeError = class extends Error {
      constructor(code, message, details = {}) {
        super(message);
        this.name = "FdeAgentRuntimeError";
        this.code = code;
        this.details = details;
      }
    };
    function isFile(pathValue) {
      try {
        return Boolean(pathValue && fs.statSync(pathValue).isFile());
      } catch {
        return false;
      }
    }
    function pathCandidates(home) {
      const values = [];
      const add = (value) => {
        if (value && !values.includes(value)) values.push(value);
      };
      if (process.platform === "win32") {
        add(path.join(home, ".local", "bin", "codex.exe"));
        add(path.join(home, ".local", "bin", "codex.cmd"));
        if (process.env.APPDATA) add(path.join(process.env.APPDATA, "npm", "codex.cmd"));
      } else {
        add(path.join(home, ".local", "bin", "codex"));
        add("/opt/homebrew/bin/codex");
        add("/usr/local/bin/codex");
        add("/Applications/ChatGPT.app/Contents/Resources/codex");
      }
      for (const directory of String(process.env.PATH || "").split(path.delimiter).filter(Boolean)) {
        add(path.join(directory, process.platform === "win32" ? "codex.exe" : "codex"));
        if (process.platform === "win32") add(path.join(directory, "codex.cmd"));
      }
      return values;
    }
    function locateCodexBinary(home = os.homedir()) {
      return pathCandidates(home).find(isFile) || null;
    }
    function isolatedCodexHome(vaultPath, pluginDirectory = ".obsidian/plugins/fde365-knowledge-os") {
      return path.join(path.resolve(vaultPath), ...String(pluginDirectory).split(/[\\/]+/).filter(Boolean), ".fde365-agent", "codex-home");
    }
    function codexConfigPath(codexHome) {
      return path.join(codexHome, "config.toml");
    }
    function buildIsolatedCodexConfig(model) {
      const escapedModel = String(model || "gpt-5.6-luna").replace(/\\/g, "\\\\").replace(/"/g, '\\"');
      return [
        `model = "${escapedModel}"`,
        'model_provider = "fde365"',
        'model_reasoning_effort = "medium"',
        "check_for_update_on_startup = false",
        'web_search = "disabled"',
        "",
        "[model_providers.fde365]",
        'name = "FDE365"',
        'base_url = "https://api.ipzsk.com/v1"',
        'wire_api = "responses"',
        'env_key = "FDE365_TOKEN"',
        ""
      ].join("\n");
    }
    function ensureIsolatedCodexConfig(codexHome, model) {
      const configPath = codexConfigPath(codexHome);
      const content = buildIsolatedCodexConfig(model);
      fs.mkdirSync(codexHome, { recursive: true, mode: 448 });
      let current = "";
      try {
        current = fs.readFileSync(configPath, "utf8");
      } catch {
      }
      if (current !== content) fs.writeFileSync(configPath, content, { encoding: "utf8", mode: 384 });
      try {
        fs.chmodSync(configPath, 384);
      } catch {
      }
      return configPath;
    }
    function hasManagedCodexConfig(codexHome) {
      try {
        const config = fs.readFileSync(codexConfigPath(codexHome), "utf8");
        return config.includes('model_provider = "fde365"') && config.includes('base_url = "https://api.ipzsk.com/v1"') && config.includes('wire_api = "responses"') && config.includes('env_key = "FDE365_TOKEN"');
      } catch {
        return false;
      }
    }
    function buildSpawnSpec(command) {
      const args = ["app-server", "--stdio"];
      if (process.platform === "win32" && /\.(?:cmd|bat)$/i.test(command)) {
        const comspec = process.env.ComSpec || process.env.COMSPEC || "cmd.exe";
        return {
          command: comspec,
          args: ["/d", "/s", "/c", `"${command}" ${args.join(" ")}`],
          windowsVerbatimArguments: true
        };
      }
      return { command, args, windowsVerbatimArguments: false };
    }
    function buildChildEnvironment(codexHome, token, environment = process.env) {
      return {
        ...environment,
        CODEX_HOME: codexHome,
        FDE365_TOKEN: token,
        NO_COLOR: "1"
      };
    }
    function buildLocalCliEnvironment(environment = process.env) {
      return {
        ...environment,
        NO_COLOR: "1"
      };
    }
    function withOptionalModel(params, model) {
      return model ? { ...params, model } : params;
    }
    function normalizeExecutionMode(value) {
      return value === "yolo" ? "yolo" : "approval";
    }
    function executionPolicy(mode, vaultPath) {
      const normalized = normalizeExecutionMode(mode);
      return normalized === "yolo" ? {
        mode: normalized,
        approvalPolicy: "never",
        sandbox: "workspace-write",
        sandboxPolicy: { type: "workspaceWrite", writableRoots: [path.resolve(vaultPath)], networkAccess: false }
      } : {
        mode: normalized,
        approvalPolicy: "on-request",
        sandbox: "read-only",
        sandboxPolicy: { type: "readOnly", networkAccess: false }
      };
    }
    function isRecord(value) {
      return Boolean(value && typeof value === "object" && !Array.isArray(value));
    }
    function deferred() {
      let resolve;
      let reject;
      const promise = new Promise((resolvePromise, rejectPromise) => {
        resolve = resolvePromise;
        reject = rejectPromise;
      });
      return { promise, resolve, reject };
    }
    var JsonRpcTransport = class {
      constructor(proc, onNotification, onServerRequest, onExitMessage) {
        this.proc = proc;
        this.onNotification = onNotification;
        this.onServerRequest = onServerRequest;
        this.onExitMessage = onExitMessage;
        this.nextId = 1;
        this.pending = /* @__PURE__ */ new Map();
        this.disposed = false;
        this.reader = readline.createInterface({ input: proc.stdout });
        this.reader.on("line", (line) => this.handleLine(line));
        proc.on("close", () => {
          const error = new Error(onExitMessage());
          this.disposed = true;
          this.rejectAll(error);
          this.onNotification("fde/processExited", { error });
        });
        proc.on("error", (error) => {
          this.disposed = true;
          this.rejectAll(error);
          this.onNotification("fde/processExited", { error });
        });
      }
      request(method, params, timeoutMs = APP_SERVER_REQUEST_TIMEOUT_MS) {
        if (this.disposed) return Promise.reject(new Error("Codex app-server transport is closed"));
        const id = this.nextId++;
        const result = deferred();
        const timer = timeoutMs > 0 ? setTimeout(() => {
          this.pending.delete(id);
          result.reject(new Error(`Codex app-server request timeout: ${method}`));
        }, timeoutMs) : null;
        this.pending.set(id, { ...result, timer });
        this.send({ jsonrpc: "2.0", id, method, params });
        return result.promise;
      }
      notify(method, params) {
        const message = { jsonrpc: "2.0", method };
        if (params !== void 0) message.params = params;
        this.send(message);
      }
      send(message) {
        if (this.disposed || !this.proc.stdin?.writable) return;
        this.proc.stdin.write(`${JSON.stringify(message)}
`);
      }
      handleLine(line) {
        let message;
        try {
          message = JSON.parse(line);
        } catch {
          return;
        }
        if (!isRecord(message)) return;
        const { id, method, params } = message;
        if (id !== void 0 && !method) {
          const pending = this.pending.get(Number(id));
          if (!pending) return;
          this.pending.delete(Number(id));
          if (pending.timer) clearTimeout(pending.timer);
          if (message.error) pending.reject(new Error(String(message.error.message || "Codex app-server error")));
          else pending.resolve(message.result);
          return;
        }
        if (typeof method === "string" && id === void 0) {
          try {
            this.onNotification(method, params);
          } catch {
          }
          return;
        }
        if (typeof method === "string" && id !== void 0) {
          Promise.resolve(this.onServerRequest(method, params)).then(
            (result) => this.send({ jsonrpc: "2.0", id, result }),
            (error) => this.send({ jsonrpc: "2.0", id, error: { code: -32603, message: error instanceof Error ? error.message : String(error) } })
          );
        }
      }
      rejectAll(error) {
        for (const pending of this.pending.values()) {
          if (pending.timer) clearTimeout(pending.timer);
          pending.reject(error);
        }
        this.pending.clear();
      }
      dispose() {
        if (this.disposed) return;
        this.disposed = true;
        this.reader.close();
        this.rejectAll(new Error("Codex app-server transport closed"));
      }
    };
    function contextBlock(context = []) {
      if (!Array.isArray(context) || !context.length) return "";
      return [
        "以下是用户明确允许使用的本地上下文。引用结论时保留来源路径：",
        ...context.map((item) => `
### ${item.title || item.path || "本地上下文"}
来源：${item.path || "未标注"}
${item.excerpt || ""}`)
      ].join("\n");
    }
    function buildTurnPrompt(request) {
      const messages = Array.isArray(request.messages) ? request.messages : [];
      const userMessages = messages.filter((message) => message?.role !== "system" && message?.content);
      const current = userMessages.at(-1)?.content || "";
      const history = request.sessionId ? [] : userMessages.slice(0, -1);
      const parts = [];
      if (history.length) {
        parts.push("以下是迁移到本地 Agent 前的最近对话：");
        for (const message of history.slice(-6)) parts.push(`${message.role === "assistant" ? "FDE365" : "用户"}：${message.content}`);
      }
      const local = contextBlock(request.context);
      if (local) parts.push(local);
      parts.push(String(current));
      return parts.filter(Boolean).join("\n\n");
    }
    function buildBaseInstructions(request, vaultPath, knowledgeRoot) {
      const system = (Array.isArray(request.messages) ? request.messages : []).find((message) => message?.role === "system")?.content || "";
      const executionMode = normalizeExecutionMode(request.executionMode);
      const executionRule = executionMode === "yolo" ? "- 当前为 YOLO 模式：在当前 Vault 内可直接执行命令、新建和修改文件，无需等待用户逐次批准；执行后汇报实际改动和验证结果。" : "- 当前为需要批准模式：需要落盘或运行命令时，先说明目标，再使用本地工具触发宿主批准。";
      return [
        "你是嵌入 Obsidian 的 FDE365 本地 Agent。你拥有本地工具，但必须遵守以下边界：",
        `- 工作目录固定为当前 Vault：${vaultPath}`,
        `- FDE365 知识库根目录：${knowledgeRoot}`,
        "- 只读取完成当前任务所需的文件；不得读取 Vault 外的文件、凭据、浏览器数据或其他项目。",
        "- 不得读取或输出 .obsidian/plugins/fde365-knowledge-os/data.json、Token、密钥或任何凭据。",
        "- 仅使用当前 FDE 技能目录列出的启用技能；旧 Vault 中残留的 fde-connect 已停用，不得调用，也不得连接或改写本机 Claude Code/Codex 配置。",
        "- 禁止删除、清空或覆盖原始材料；写入必须优先新建草稿。",
        "- 禁止网络访问、安装软件、修改 Obsidian 插件配置或修改 .fde/.agents 运行合同。",
        "- 当用户调用 /fde-* 时，先读取知识库内对应 .agents/skills/<skill>/SKILL.md，再按合同执行。",
        executionRule,
        system
      ].filter(Boolean).join("\n");
    }
    function summarizeToolEvent(event) {
      if (event.type === "file-change") return event.path ? `准备修改 ${event.path}` : "准备修改知识库文件";
      if (event.type === "command") return event.command ? `准备运行：${event.command}` : "准备运行本地命令";
      if (event.type === "tool") return event.label || "正在使用本地工具";
      return event.label || "本地 Agent 正在工作";
    }
    function redact(value, token) {
      const text = String(value || "");
      return token ? text.split(token).join("[REDACTED]") : text;
    }
    var FdeCodexAgentRuntime2 = class {
      constructor(plugin, options = {}) {
        this.plugin = plugin;
        this.options = options;
        this.proc = null;
        this.transport = null;
        this.stderr = "";
        this.runtimeBinary = "";
        this.loadedThreads = /* @__PURE__ */ new Set();
        this.active = null;
        this.pendingNotifications = [];
      }
      get vaultPath() {
        const value = this.plugin.app.vault.adapter.getBasePath?.();
        if (!value) throw new FdeAgentRuntimeError("VAULT_PATH_UNAVAILABLE", "无法确定当前 Vault 的本地路径");
        return path.resolve(value);
      }
      get codexHome() {
        if (this.options.codexHome) return path.resolve(this.options.codexHome);
        const pluginDirectory = this.plugin.manifest.dir || `.obsidian/plugins/${this.plugin.manifest.id}`;
        return isolatedCodexHome(this.vaultPath, pluginDirectory);
      }
      get usesLocalCli() {
        return this.options.mode === "local-cli";
      }
      describe() {
        const binary = this.options.codexPath || locateCodexBinary();
        const configured = this.usesLocalCli ? Boolean(binary) : hasManagedCodexConfig(this.codexHome);
        return {
          available: Boolean(binary),
          ready: Boolean(this.proc && !this.proc.killed && this.transport && !this.transport.disposed),
          binary,
          configured,
          mode: this.usesLocalCli ? "local-cli" : "isolated-fde365",
          isolated: !this.usesLocalCli,
          label: binary ? this.usesLocalCli ? "DEV · 本地 Codex CLI" : configured ? "Codex Agent" : "Codex Agent · 首次运行自动配置" : "缺少 Codex 运行组件",
          error: !binary ? "未找到 Codex 运行组件；请先安装官方 Codex 应用或命令行组件" : null
        };
      }
      async ensureReady() {
        const token = this.usesLocalCli ? "" : await this.plugin.accountClient.getAccessToken();
        const model = String(this.plugin.settings?.ai?.fde365?.model || "gpt-5.6-luna").trim();
        const binary = this.options.codexPath || locateCodexBinary();
        if (!binary) throw new FdeAgentRuntimeError("AGENT_RUNTIME_MISSING", "未找到 Codex 运行组件；请先安装官方 Codex 应用或命令行组件");
        if (!this.usesLocalCli) {
          if (!token) throw new FdeAgentRuntimeError("PROVIDER_NOT_CONFIGURED", "请先登录 FDE365 账号");
          try {
            ensureIsolatedCodexConfig(this.codexHome, model);
          } catch (error) {
            throw new FdeAgentRuntimeError("AGENT_CONFIG_FAILED", `无法创建当前 Vault 的独立 Agent 配置：${error instanceof Error ? error.message : String(error)}`);
          }
        }
        if (this.transport && !this.transport.disposed && this.proc && !this.proc.killed && this.runtimeBinary === binary && (this.usesLocalCli || this.runtimeToken === token)) return;
        await this.shutdown();
        const spec = buildSpawnSpec(binary);
        const proc = spawn(spec.command, spec.args, {
          cwd: this.vaultPath,
          env: this.usesLocalCli ? buildLocalCliEnvironment() : buildChildEnvironment(this.codexHome, token),
          stdio: ["pipe", "pipe", "pipe"],
          windowsHide: true,
          windowsVerbatimArguments: spec.windowsVerbatimArguments
        });
        this.proc = proc;
        this.stderr = "";
        proc.stderr.on("data", (chunk) => {
          this.stderr = `${this.stderr}${redact(Buffer.isBuffer(chunk) ? chunk.toString("utf8") : chunk, token)}`.slice(-STDERR_LIMIT);
        });
        this.transport = new JsonRpcTransport(
          proc,
          (method, params) => this.handleNotification(method, params),
          (method, params) => this.handleServerRequest(method, params),
          () => this.stderr.trim() ? `Codex Agent 已退出：${this.stderr.trim()}` : "Codex Agent 已退出"
        );
        try {
          await this.transport.request("initialize", {
            clientInfo: { name: "fde365-knowledge-os", version: this.plugin.manifest.version },
            capabilities: { experimentalApi: true }
          });
          this.transport.notify("initialized");
          this.runtimeBinary = binary;
          this.runtimeToken = token;
        } catch (error) {
          await this.shutdown();
          throw new FdeAgentRuntimeError("AGENT_START_FAILED", redact(error instanceof Error ? error.message : error, token));
        }
      }
      async complete(request) {
        if (this.active) throw new FdeAgentRuntimeError("AGENT_BUSY", "本地 Agent 正在执行另一个任务，请等待完成或先停止");
        const settings = this.plugin.settings.ai.fde365;
        const token = this.usesLocalCli ? "" : await this.plugin.accountClient.getAccessToken();
        const model = this.usesLocalCli ? "" : String(settings.model || "").trim();
        if (!this.usesLocalCli && !token) throw new FdeAgentRuntimeError("PROVIDER_NOT_CONFIGURED", "请先登录 FDE365 账号");
        await this.ensureReady();
        const execution = executionPolicy(this.plugin.settings?.ai?.assistant?.executionMode, this.vaultPath);
        const baseInstructions = buildBaseInstructions({ ...request, executionMode: execution.mode }, this.vaultPath, this.plugin.knowledgeRoot || "FDE365知识库");
        let threadId = String(request.sessionId || "").trim();
        try {
          if (threadId && !this.loadedThreads.has(threadId)) {
            const resumed = await this.transport.request("thread/resume", withOptionalModel({
              threadId,
              approvalPolicy: execution.approvalPolicy,
              sandbox: execution.sandbox,
              baseInstructions,
              cwd: this.vaultPath
            }, model));
            threadId = String(resumed?.thread?.id || threadId);
            this.loadedThreads.add(threadId);
          } else if (!threadId) {
            const started = await this.transport.request("thread/start", withOptionalModel({
              cwd: this.vaultPath,
              approvalPolicy: execution.approvalPolicy,
              sandbox: execution.sandbox,
              baseInstructions,
              experimentalRawEvents: true,
              ephemeral: false
            }, model));
            threadId = String(started?.thread?.id || "");
            if (!threadId) throw new Error("Codex Agent 未返回会话 ID");
            this.loadedThreads.add(threadId);
          }
          const done = deferred();
          this.active = {
            requestId: request.requestId,
            threadId,
            turnId: null,
            text: "",
            events: [],
            done,
            onEvent: typeof request.onEvent === "function" ? request.onEvent : null
          };
          this.pendingNotifications = [];
          const turnResult = await this.transport.request("turn/start", withOptionalModel({
            threadId,
            input: [{ type: "text", text: buildTurnPrompt({ ...request, sessionId: threadId }), text_elements: [] }],
            approvalPolicy: execution.approvalPolicy,
            effort: "medium",
            summary: "concise",
            sandboxPolicy: execution.sandboxPolicy
          }, model), APP_SERVER_REQUEST_TIMEOUT_MS);
          this.active.turnId = String(turnResult?.turn?.id || "");
          this.flushPendingNotifications();
          if (!this.active.turnId) throw new Error("Codex Agent 未返回任务 ID");
          const completed = await done.promise;
          if (!String(completed.content || "").trim()) throw new FdeAgentRuntimeError("EMPTY_RESPONSE", "Codex Agent 没有返回可见内容");
          return {
            content: completed.content,
            provider: "fde365-agent",
            providerVersion: "codex-app-server-responses",
            model: model || "本机 Codex 默认模型",
            conversationId: threadId,
            usage: completed.usage || null,
            toolEvents: completed.events
          };
        } catch (error) {
          if (this.active?.threadId && this.active?.turnId && this.transport) {
            void this.transport.request("turn/interrupt", {
              threadId: this.active.threadId,
              turnId: this.active.turnId
            }).catch(() => void 0);
          } else if (this.active && !this.active.turnId) {
            await this.shutdown();
          }
          if (error instanceof FdeAgentRuntimeError) throw error;
          throw new FdeAgentRuntimeError("AGENT_FAILED", redact(error instanceof Error ? error.message : error, token));
        } finally {
          this.active = null;
          this.pendingNotifications = [];
          if (!this.usesLocalCli && this.plugin.accountClient?.isLoggedIn?.()) void this.plugin.accountClient.sync({ quiet: true }).catch(() => void 0);
        }
      }
      event(event) {
        if (!this.active) return;
        const normalized = { ...event, label: event.label || summarizeToolEvent(event) };
        this.active.events.push(normalized);
        try {
          this.active.onEvent?.(normalized);
        } catch {
        }
      }
      handleNotification(method, params) {
        if (!this.active) return;
        if (method === "fde/processExited") {
          this.active.done.reject(new FdeAgentRuntimeError("AGENT_EXITED", params?.error?.message || "Codex Agent 已退出"));
          return;
        }
        if (!this.active.turnId && method !== "turn/started") {
          this.pendingNotifications.push({ method, params });
          return;
        }
        if (method === "turn/started" && !this.active.turnId && String(params?.threadId || "") === this.active.threadId) {
          this.active.turnId = String(params?.turn?.id || "");
          this.flushPendingNotifications();
          return;
        }
        const threadId = String(params?.threadId || "");
        const turnId = String(params?.turnId || params?.turn_id || params?.turn?.id || "");
        if (threadId && threadId !== this.active.threadId) return;
        if (turnId && this.active.turnId && turnId !== this.active.turnId) return;
        if (method === "item/agentMessage/delta") {
          this.active.text += String(params?.delta || "");
          return;
        }
        if (method === "item/completed" && params?.item?.type === "agentMessage") {
          const text = String(params.item.text || "");
          if (text && !this.active.text.includes(text)) this.active.text = text;
          return;
        }
        if (method === "item/started") {
          const item = params?.item || {};
          if (item.type === "commandExecution") this.event({ type: "command", command: String(item.command || ""), label: `正在运行：${String(item.command || "本地命令")}` });
          else if (item.type === "fileChange") this.event({ type: "file-change", label: "正在准备知识库文件变更" });
          else if (item.type === "webSearch") this.event({ type: "tool", label: "网络搜索已被 FDE365 安全策略禁用" });
          return;
        }
        if (method === "item/fileChange/patchUpdated") {
          for (const change of Array.isArray(params?.changes) ? params.changes : []) {
            this.event({ type: "file-change", path: String(change.path || ""), diff: String(change.diff || "") });
          }
          return;
        }
        if (method === "thread/tokenUsage/updated") {
          this.active.usage = params?.tokenUsage || null;
          return;
        }
        if (method === "error" && !params?.willRetry) {
          this.active.done.reject(new FdeAgentRuntimeError("AGENT_FAILED", String(params?.error?.message || "Codex Agent 运行失败")));
          return;
        }
        if (method === "turn/completed") {
          const status = String(params?.turn?.status || "completed");
          if (status === "failed") {
            this.active.done.reject(new FdeAgentRuntimeError("AGENT_FAILED", String(params?.turn?.error?.message || "Codex Agent 运行失败")));
          } else if (status === "interrupted") {
            this.active.done.reject(new FdeAgentRuntimeError("CANCELLED", "任务已取消"));
          } else {
            this.active.done.resolve({ content: this.active.text.trim(), events: this.active.events, usage: this.active.usage || null });
          }
        }
      }
      flushPendingNotifications() {
        if (!this.active?.turnId || !this.pendingNotifications.length) return;
        const pending = this.pendingNotifications;
        this.pendingNotifications = [];
        for (const item of pending) if (item) this.handleNotification(item.method, item.params);
      }
      insideVault(value) {
        if (!value) return true;
        const resolved = path.resolve(this.vaultPath, String(value));
        const relative = path.relative(this.vaultPath, resolved);
        return relative === "" || !relative.startsWith("..") && !path.isAbsolute(relative);
      }
      async handleServerRequest(method, params) {
        const yolo = normalizeExecutionMode(this.plugin.settings?.ai?.assistant?.executionMode) === "yolo";
        if (method === "item/commandExecution/requestApproval") {
          const command = String(params?.command || "");
          if (params?.networkApprovalContext) return { decision: "decline" };
          if (!this.insideVault(params?.cwd)) return { decision: "decline" };
          if (/(?:^|\s)(?:rm\s+-rf|rmdir\s+\/s|del\s+\/s|format\s+|diskpart\b|git\s+reset\s+--hard)(?:\s|$)/i.test(command)) return { decision: "decline" };
          if (yolo) return { decision: "accept" };
          const allowed = await this.plugin.requestAgentApproval?.({
            kind: "command",
            title: "允许本地 Agent 运行命令？",
            description: params?.reason || "Codex Agent 请求运行本地命令。",
            items: [command || "未提供命令", params?.cwd ? `目录：${params.cwd}` : `目录：${this.vaultPath}`]
          });
          return { decision: allowed ? "accept" : "decline" };
        }
        if (method === "item/fileChange/requestApproval") {
          if (params?.grantRoot && !this.insideVault(params.grantRoot)) return { decision: "decline" };
          if (yolo) return { decision: "accept" };
          const allowed = await this.plugin.requestAgentApproval?.({
            kind: "file-change",
            title: "允许本地 Agent 修改知识库？",
            description: params?.reason || "Codex Agent 请求写入当前 Vault。",
            items: [params?.grantRoot ? `允许范围：${params.grantRoot}` : `允许范围：当前 Vault（${this.vaultPath}）`, "只允许本次操作；不会永久放行。"]
          });
          return { decision: allowed ? "accept" : "decline" };
        }
        if (method === "item/permissions/requestApproval") {
          return { permissions: {}, scope: "turn" };
        }
        if (method === "item/tool/requestUserInput") {
          const answers = await this.plugin.requestAgentQuestion?.(Array.isArray(params?.questions) ? params.questions : []);
          const mapped = {};
          for (const [key, value] of Object.entries(answers || {})) mapped[key] = { answers: Array.isArray(value) ? value : [String(value)] };
          return { answers: mapped };
        }
        if (method === "item/tool/call") throw new Error(`不支持的本地动态工具：${String(params?.tool || "unknown")}`);
        throw new Error(`不支持的 Codex Agent 请求：${method}`);
      }
      cancel(requestId) {
        if (!this.active || requestId && this.active.requestId !== requestId) return false;
        const { threadId, turnId, done } = this.active;
        if (threadId && turnId && this.transport) void this.transport.request("turn/interrupt", { threadId, turnId }).catch(() => void 0);
        done.reject(new FdeAgentRuntimeError("CANCELLED", "任务已取消"));
        return true;
      }
      async shutdown() {
        if (this.active) this.active.done.reject(new FdeAgentRuntimeError("CANCELLED", "Agent 运行已停止"));
        this.active = null;
        this.pendingNotifications = [];
        this.loadedThreads.clear();
        this.runtimeBinary = "";
        this.runtimeToken = "";
        this.transport?.dispose();
        this.transport = null;
        if (this.proc && !this.proc.killed) {
          const proc = this.proc;
          await new Promise((resolve) => {
            const timer = setTimeout(() => {
              try {
                proc.kill("SIGKILL");
              } catch {
              }
              resolve();
            }, 3e3);
            proc.once("close", () => {
              clearTimeout(timer);
              resolve();
            });
            try {
              proc.kill("SIGTERM");
            } catch {
              clearTimeout(timer);
              resolve();
            }
          });
        }
        this.proc = null;
        this.stderr = "";
      }
    };
    module2.exports = {
      FdeAgentRuntimeError,
      FdeCodexAgentRuntime: FdeCodexAgentRuntime2,
      buildIsolatedCodexConfig,
      buildChildEnvironment,
      buildLocalCliEnvironment,
      buildBaseInstructions,
      buildTurnPrompt,
      codexConfigPath,
      ensureIsolatedCodexConfig,
      hasManagedCodexConfig,
      isolatedCodexHome,
      executionPolicy,
      normalizeExecutionMode,
      locateCodexBinary
    };
  }
});

// fde-account.js
var require_fde_account = __commonJS({
  "fde-account.js"(exports2, module2) {
    var API_BASE = "https://api.ipzsk.com/v1";
    var ENDPOINTS = Object.freeze({ emailRequest: "/auth/email/request", emailVerify: "/auth/email/verify", refresh: "/auth/refresh", balance: "/me/balance", usage: "/me/usage", pricing: "/pricing", redeem: "/me/redeem" });
    var numberOrNull = (v) => !["number", "string"].includes(typeof v) || String(v).trim() === "" || !Number.isFinite(Number(v)) ? null : Number(v);
    var text = (v) => typeof v === "string" ? v.trim() : "";
    function normalizeAccount(raw = {}) {
      raw = raw && typeof raw === "object" ? raw : {};
      const account = { email: text(raw.email), accessToken: text(raw.accessToken), refreshToken: text(raw.refreshToken), expiresAt: text(raw.expiresAt) };
      if (raw.demo || account.accessToken.startsWith("demo-") || account.refreshToken.startsWith("demo-")) return { email: account.email, accessToken: "", refreshToken: "", expiresAt: "" };
      return account;
    }
    function normalizeBilling(raw = {}) {
      raw = raw && typeof raw === "object" ? raw : {};
      return { remainingCredits: numberOrNull(raw.remainingCredits), usedCredits: numberOrNull(raw.usedCredits), totalCredits: numberOrNull(raw.totalCredits), lastSyncedAt: text(raw.lastSyncedAt), lastError: text(raw.lastError), pricing: normalizePricing(raw.pricing), usage: normalizeUsage(raw.usage) };
    }
    function normalizePricing(payload) {
      const rows = Array.isArray(payload) ? payload : payload?.models || payload?.pricing;
      if (!Array.isArray(rows)) return [];
      const seen = /* @__PURE__ */ new Set();
      return rows.filter((r) => r && typeof r === "object").map((r) => ({ id: text(r.id || r.model), inputCredits: numberOrNull(r.inputCredits ?? r.input_credits), outputCredits: numberOrNull(r.outputCredits ?? r.output_credits), unit: text(r.unit) })).filter((r) => {
        if (!/^[a-zA-Z0-9][a-zA-Z0-9._:/-]{0,127}$/.test(r.id) || seen.has(r.id)) return false;
        seen.add(r.id);
        return true;
      }).slice(0, 100);
    }
    function normalizeUsage(payload) {
      const rows = Array.isArray(payload) ? payload : payload?.items || payload?.usage;
      return Array.isArray(rows) ? rows.filter((r) => r && typeof r === "object").slice(0, 20).map((r) => ({ createdAt: text(r.createdAt || r.created_at), type: text(r.type), amount: numberOrNull(r.amount), model: text(r.model), remainingCredits: numberOrNull(r.remainingCredits ?? r.remaining_credits) })) : [];
    }
    function modelIds(settings, fallback) {
      const ids = normalizePricing(settings?.billing?.pricing).map((r) => r.id);
      return ids.length ? ids : [...fallback];
    }
    function accountError(status) {
      const code = status === 401 || status === 403 ? "AUTH_FAILED" : status === 402 ? "INSUFFICIENT_CREDITS" : status === 429 ? "RATE_LIMITED" : "NETWORK_ERROR";
      const message = code === "AUTH_FAILED" ? "登录已失效，请重新登录" : code === "INSUFFICIENT_CREDITS" ? "credits 不足，请兑换后再试" : code === "RATE_LIMITED" ? "请求过于频繁，请稍后重试" : `账号服务暂不可用（HTTP ${status}）`;
      return Object.assign(new Error(message), { code, status });
    }
    var FdeAccountClient = class {
      constructor(plugin, requestUrl2) {
        this.plugin = plugin;
        this.requestUrl = requestUrl2;
        this.generation = 0;
        this.refreshing = null;
      }
      get account() {
        return this.plugin.settings.account;
      }
      get billing() {
        return this.plugin.settings.billing;
      }
      isLoggedIn() {
        return Boolean(this.account?.accessToken || this.account?.refreshToken);
      }
      assertCurrent(generation) {
        if (generation !== this.generation) throw Object.assign(new Error("账号已切换，请重新操作"), { code: "ACCOUNT_CHANGED" });
      }
      async request(path, { method = "GET", body, token } = {}) {
        if (!Object.values(ENDPOINTS).includes(path)) throw new Error("未知账号接口");
        let response;
        try {
          response = await this.requestUrl({ url: `${API_BASE}${path}`, method, headers: { Accept: "application/json", ...body === void 0 ? {} : { "Content-Type": "application/json" }, ...token ? { Authorization: `Bearer ${token}` } : {} }, body: body === void 0 ? void 0 : JSON.stringify(body), throw: false });
        } catch {
          throw new Error("无法连接账号服务，请检查网络或稍后重试");
        }
        if (!response || response.status < 200 || response.status >= 300) throw accountError(response?.status || 0);
        let payload;
        try {
          payload = response.json;
        } catch {
        }
        if (path === ENDPOINTS.emailRequest && (!payload || typeof payload !== "object")) return {};
        if (!payload || typeof payload !== "object" || Array.isArray(payload)) throw new Error("账号服务返回了无效数据");
        return payload;
      }
      async getAccessToken() {
        const a = this.account;
        const expires = Date.parse(a.expiresAt);
        if ((!a.accessToken || Number.isFinite(expires) && expires < Date.now() + 3e4) && a.refreshToken) await this.refreshSession();
        if (Number.isFinite(Date.parse(this.account.expiresAt)) && Date.parse(this.account.expiresAt) < Date.now()) throw accountError(401);
        if (!this.account.accessToken) throw Object.assign(new Error("请先用邮箱验证码登录"), { code: "PROVIDER_NOT_CONFIGURED" });
        return this.account.accessToken;
      }
      async authorized(path, options = {}) {
        const generation = this.generation;
        const token = await this.getAccessToken();
        this.assertCurrent(generation);
        try {
          return await this.request(path, { ...options, token });
        } catch (error) {
          if (error.status !== 401 || !this.account.refreshToken) throw error;
          this.assertCurrent(generation);
          await this.refreshSession(token);
          this.assertCurrent(generation);
          return this.request(path, { ...options, token: this.account.accessToken });
        }
      }
      async requestEmailCode(email) {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text(email))) throw new Error("请输入有效邮箱");
        await this.request(ENDPOINTS.emailRequest, { method: "POST", body: { email: text(email) } });
      }
      async applySession(payload, email, generation) {
        this.assertCurrent(generation);
        const next = normalizeAccount({ email: payload.email || payload.user?.email || email, accessToken: payload.access_token || payload.accessToken, refreshToken: payload.refresh_token || payload.refreshToken, expiresAt: payload.expires_at || payload.expiresAt || (Number(payload.expires_in) > 0 ? new Date(Date.now() + Number(payload.expires_in) * 1e3).toISOString() : "") });
        if (!next.accessToken) throw new Error("账号服务未返回有效登录凭证");
        this.plugin.settings.account = next;
        await this.plugin.saveSettings();
      }
      async verifyEmail(email, code) {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text(email)) || !text(code)) throw new Error("请填写邮箱和验证码");
        const generation = ++this.generation;
        const payload = await this.request(ENDPOINTS.emailVerify, { method: "POST", body: { email: text(email), code: text(code) } });
        await this.applySession(payload, text(email), generation);
        this.plugin.settings.billing = normalizeBilling();
        await this.plugin.saveSettings();
        await this.plugin.agentRuntime?.shutdown?.();
        await this.sync({ quiet: true });
      }
      async refreshSession(staleToken) {
        if (staleToken && staleToken !== this.account.accessToken) return;
        if (this.refreshing) return this.refreshing;
        const generation = this.generation;
        const refreshToken = this.account.refreshToken;
        if (!refreshToken) throw accountError(401);
        this.refreshing = (async () => {
          const payload = await this.request(ENDPOINTS.refresh, { method: "POST", body: { refresh_token: refreshToken } });
          await this.applySession(payload, this.account.email, generation);
        })();
        try {
          await this.refreshing;
        } finally {
          this.refreshing = null;
        }
      }
      async logout() {
        this.generation++;
        this.plugin.settings.account = normalizeAccount();
        this.plugin.settings.billing = normalizeBilling();
        this.plugin.settings.ai.fde365.token = "";
        await this.plugin.saveSettings();
        this.plugin.providerManager?.cancelAll?.();
        await this.plugin.agentRuntime?.shutdown?.();
      }
      applyBalance(payload) {
        const balance = payload.balance || payload;
        const remaining = numberOrNull(balance.remaining_credits ?? balance.remainingCredits);
        if (remaining === null) throw new Error("服务端余额数据缺失");
        Object.assign(this.billing, { remainingCredits: remaining, usedCredits: numberOrNull(balance.used_credits ?? balance.usedCredits), totalCredits: numberOrNull(balance.total_credits ?? balance.totalCredits), lastSyncedAt: (/* @__PURE__ */ new Date()).toISOString() });
      }
      async sync({ quiet = false } = {}) {
        const generation = this.generation;
        try {
          const balance = await this.authorized(ENDPOINTS.balance);
          this.assertCurrent(generation);
          this.applyBalance(balance);
          const usage = await this.authorized(ENDPOINTS.usage);
          this.assertCurrent(generation);
          this.billing.usage = normalizeUsage(usage);
          const pricing = await this.request(ENDPOINTS.pricing);
          this.assertCurrent(generation);
          this.billing.pricing = normalizePricing(pricing);
          this.billing.lastError = "";
        } catch (error) {
          this.assertCurrent(generation);
          this.billing.lastError = error.message;
          if (!quiet) {
            await this.plugin.saveSettings();
            throw error;
          }
        }
        await this.plugin.saveSettings();
        this.plugin.refreshDashboard?.();
        return this.billing;
      }
      async redeem(code) {
        if (!text(code)) throw new Error("请输入兑换码");
        const generation = this.generation;
        const payload = await this.authorized(ENDPOINTS.redeem, { method: "POST", body: { redemption_code: text(code) } });
        this.assertCurrent(generation);
        if (payload.success !== true || !(numberOrNull(payload.credits_added ?? payload.creditsAdded) > 0)) throw new Error("未收到兑换成功凭据，请刷新使用记录确认；不要重复提交");
        this.applyBalance(payload);
        await this.plugin.saveSettings();
        await this.sync({ quiet: true });
        return { creditsAdded: numberOrNull(payload.credits_added ?? payload.creditsAdded), remainingCredits: this.billing.remainingCredits };
      }
    };
    module2.exports = { API_BASE, ENDPOINTS, FdeAccountClient, normalizeAccount, normalizeBilling, normalizePricing, normalizeUsage, modelIds, accountError };
  }
});

// fde-account-settings.js
var require_fde_account_settings = __commonJS({
  "fde-account-settings.js"(exports2, module2) {
    var { Setting: Setting2, Notice: Notice2 } = require("obsidian");
    var { modelIds } = require_fde_account();
    var credits = (value) => value == null ? "尚未同步" : `${Number(value).toLocaleString("zh-CN", { maximumFractionDigits: 4 })} credits`;
    function renderAccountSettings2(tab, containerEl, fallbackModels) {
      const plugin = tab.plugin;
      const client = plugin.accountClient;
      const account = plugin.settings.account;
      const billing = plugin.settings.billing;
      const action = (button, label, fn) => button.setButtonText(label).onClick(async () => {
        button.setDisabled(true);
        try {
          await fn();
        } catch (error) {
          new Notice2(error.message || "操作失败，请稍后重试");
        } finally {
          button.setDisabled(false);
        }
      });
      containerEl.createEl("h3", { text: "账号与额度" });
      const runtime = plugin.agentRuntime?.describe?.();
      if (runtime) new Setting2(containerEl).setName("本地 Agent").setDesc(runtime.available ? "Codex 引擎使用当前 Vault 的隔离配置，不连接本机客户端；插件更新无需重新运行安装器。" : runtime.error);
      new Setting2(containerEl).setName("账号状态").setDesc(client.isLoggedIn() ? `已登录：${account.email}` : "使用邮箱验证码登录，额度保存在服务端账号中。");
      if (!client.isLoggedIn()) {
        tab.emailDraft ||= account.email || "";
        new Setting2(containerEl).setName("邮箱").addText((input) => input.setPlaceholder("you@example.com").setValue(tab.emailDraft).onChange((value) => {
          tab.emailDraft = value.trim();
        })).addButton((button) => action(button, "发送验证码", async () => {
          await client.requestEmailCode(tab.emailDraft);
          new Notice2("验证码已发送，请查收邮件");
        }));
        new Setting2(containerEl).setName("验证码").addText((input) => {
          input.inputEl.type = "password";
          input.setPlaceholder("输入邮箱验证码").onChange((value) => {
            tab.codeDraft = value.trim();
          });
        }).addButton((button) => action(button.setCta(), "登录", async () => {
          await client.verifyEmail(tab.emailDraft, tab.codeDraft);
          tab.codeDraft = "";
          new Notice2("登录成功");
          tab.display();
        }));
      } else {
        new Setting2(containerEl).setName("当前余额").setDesc(`${credits(billing.remainingCredits)}${billing.lastError ? ` · 同步失败：${billing.lastError}` : billing.lastSyncedAt ? ` · ${new Date(billing.lastSyncedAt).toLocaleString()}` : ""}`).addButton((button) => action(button, "刷新额度与价格", async () => {
          try {
            await client.sync();
          } finally {
            tab.display();
          }
        }));
        new Setting2(containerEl).setName("已使用额度").setDesc(`${credits(billing.usedCredits)} · 统计范围以服务端为准`);
        new Setting2(containerEl).setName("兑换码").setDesc("兑换成功后增加当前账号额度；失败时不会在本地增加余额。").addText((input) => {
          input.inputEl.type = "password";
          input.setPlaceholder("输入兑换码").onChange((value) => {
            tab.redeemDraft = value.trim();
          });
        }).addButton((button) => action(button.setCta(), "兑换", async () => {
          const result = await client.redeem(tab.redeemDraft);
          tab.redeemDraft = "";
          new Notice2(`兑换成功：增加 ${credits(result.creditsAdded)}`);
          tab.display();
        }));
        const usage = new Setting2(containerEl).setName("最近使用记录").setDesc(billing.usage.length ? "服务端返回的最近记录" : "尚无已同步记录");
        for (const item of billing.usage.slice(0, 8)) usage.descEl.createDiv({ text: `${item.createdAt || "时间未知"} · ${item.type || "变动"}${item.model ? ` · ${item.model}` : ""} · ${credits(item.amount)}` });
        new Setting2(containerEl).setName("退出登录").setDesc("清除当前 Vault 的用户凭证并停止 Agent。").addButton((button) => action(button.setWarning(), "退出", async () => {
          await client.logout();
          tab.codeDraft = "";
          tab.redeemDraft = "";
          tab.display();
          plugin.refreshDashboard();
        }));
      }
      const api = plugin.settings.ai.fde365;
      const models = modelIds(plugin.settings, fallbackModels);
      new Setting2(containerEl).setName("模型").setDesc(billing.pricing.length ? "模型及价格来自服务端价格表。" : "价格表尚未同步，显示预置模型；单价未知。").addDropdown((dropdown) => {
        if (!models.includes(api.model)) dropdown.addOption("", "请选择可用模型");
        for (const model of models) dropdown.addOption(model, model);
        dropdown.setValue(models.includes(api.model) ? api.model : "").onChange(async (value) => {
          if (!models.includes(value)) return;
          api.model = value;
          await plugin.saveSettings();
          plugin.refreshDashboard();
          tab.display();
        });
      });
      const price = billing.pricing.find((p) => p.id === api.model);
      if (price) new Setting2(containerEl).setName("模型单价").setDesc(`输入 ${credits(price.inputCredits)} · 输出 ${credits(price.outputCredits)} · ${price.unit || "计价单位尚未由服务端说明"}`);
      new Setting2(containerEl).setName("测试连接").setDesc("使用当前账号请求模型；可能产生服务端用量。").addButton((button) => action(button.setDisabled(!client.isLoggedIn()), "测试连接", async () => {
        const result = await plugin.providerManager.getSelected().testConnection();
        new Notice2(`连接成功：${result.model}`);
        await client.sync({ quiet: true });
        tab.display();
      }));
    }
    module2.exports = { renderAccountSettings: renderAccountSettings2 };
  }
});

// source.js
var {
  ItemView,
  Modal,
  Notice,
  Plugin,
  PluginSettingTab,
  Setting,
  TFile,
  normalizePath,
  requestUrl,
  requireApiVersion,
  setIcon
} = require("obsidian");
var KNOWLEDGE_BLUEPRINT = require_blueprint();
var FDEWorkspace = require_fde_workspace();
var GitHubUpdater = require_github_updater();
var { FdeCodexAgentRuntime } = require_fde_agent_runtime();
var Account = require_fde_account();
var { renderAccountSettings } = require_fde_account_settings();
var FDE365_BUILD_CHANNEL = true ? "user" : "user";
var IS_DEVELOPER_BUILD = FDE365_BUILD_CHANNEL === "dev";
var DASHBOARD_VIEW_TYPE = "ai-knowledge-os-dashboard";
var INBOX_VIEW_TYPE = "ai-knowledge-os-inbox";
var LIBRARIES_VIEW_TYPE = "ai-knowledge-os-knowledge";
var NETWORK_VIEW_TYPE = "ai-knowledge-os-graph";
var CONTENT_VIEW_TYPE = "ai-knowledge-os-projects";
var SKILLS_VIEW_TYPE = "ai-knowledge-os-agents";
var HEALTH_VIEW_TYPE = "ai-knowledge-os-analytics";
var DEFAULT_ROOT = "FDE365知识库";
var LEGACY_ROOT = String.fromCodePoint(26143, 38469, 30041, 30333, 30693, 35782, 24211);
var TERMINOLOGY_VERSION = 2;
var INBOX_LAYOUT_VERSION = 1;
var KNOWLEDGE_CONTRACT_VERSION = 2;
var LEGACY_OWNER_LABEL = String.fromCodePoint(32769, 26495);
var LEGACY_OWNER_DIRECTORY = `1-${LEGACY_OWNER_LABEL}说明书`;
var OWNER_DIRECTORY = "1-个人说明书";
var ROOT = DEFAULT_ROOT;
var PROJECT_ROOT;
var AGENT_ROOT;
var AI_OUTPUT_ROOT;
function configureKnowledgeRoot(root = DEFAULT_ROOT) {
  ROOT = String(root || DEFAULT_ROOT);
  PROJECT_ROOT = `${ROOT}/6-内容生产`;
  AGENT_ROOT = `${ROOT}/7-系统/AI协作`;
  AI_OUTPUT_ROOT = `${AGENT_ROOT}/输出`;
  return ROOT;
}
configureKnowledgeRoot();
async function resolveKnowledgeRoot(app) {
  const exists = async (path) => Boolean(
    app.vault.getAbstractFileByPath(path) || await app.vault.adapter.exists?.(path).catch?.(() => false)
  );
  if (await exists(DEFAULT_ROOT)) return DEFAULT_ROOT;
  if (await exists(LEGACY_ROOT)) return LEGACY_ROOT;
  return DEFAULT_ROOT;
}
function neutralizeManagedTerminology(value) {
  const text = String(value || "");
  const replacements = [
    [`${LEGACY_OWNER_LABEL}个人资料`, "个人资料"],
    [`${LEGACY_OWNER_LABEL}能懂`, "易于理解"],
    [`当前${LEGACY_OWNER_LABEL}`, "当前个人定位"],
    [`${LEGACY_OWNER_LABEL}说明书`, "个人说明书"],
    [`${LEGACY_OWNER_LABEL}原话`, "本人原话"],
    [`${LEGACY_OWNER_LABEL}表达`, "个人表达"],
    [`${LEGACY_OWNER_LABEL}判断`, "个人判断"],
    [`${LEGACY_OWNER_LABEL}观点`, "个人观点"],
    [`${LEGACY_OWNER_LABEL}个人`, "个人"],
    [LEGACY_OWNER_LABEL, "个人"]
  ];
  return replacements.reduce((result, [from, to]) => result.split(from).join(to), text);
}
function migrateManagedKnowledgeContract(value, kind = "") {
  let text = String(value || "");
  if (kind === "config") {
    text = text.replace(/^update_source:\s*https:\/\/github\.com\/GaryLauLGY\/fde365-knowledge-os\s*$/mi, `update_source: ${FDE365_UPDATE_ORIGIN}/plugin/latest.json`).replace(/^(\s*)recordings:\s*0-录音处理\/待处理录音\s*$/mi, "$1pending: 0-待处理材料/待处理").replace(/^(\s*)processed:\s*0-录音处理\/已处理\s*$/mi, "$1processed: 0-待处理材料/已处理记录").replace(/^(\s*(?:state|indexes|logs|versions|reports|quarantine):\s*)\.kb\//gmi, "$1.fde/");
  }
  if (kind === "agents") {
    const legacyRuntimeRoot = `.${String.fromCharCode(107, 98)}`;
    const materialRule = "- 录音、聊天、会议纪要、文档、图片和其他原始材料保留在 `0-待处理材料/待处理`；处理流程不会移动、删除或用摘要覆盖。只有用户在原始材料列表明确确认删除时，才将收件记录和对应原始文件一并移入回收站。";
    text = text.replace(`- \`${legacyRuntimeRoot}/config.yaml\` 是六类资产、收件箱和运行目录的路径真源。`, "- `.fde/config.yaml` 是六类资产、收件箱和运行目录的唯一路径真源。").replace("- 原始录音、聊天、会议纪要和旧资料保留在 `0-录音处理/待处理录音`，不得用摘要覆盖。", materialRule).replace("- 录音、聊天、会议纪要、文档、图片和其他原始材料保留在 `0-待处理材料/待处理`，不得移动、删除或用摘要覆盖；处理完成只更新同一条材料记录的状态。", materialRule).replace("- 状态、索引、日志和版本只写入 `.kb`，AI 运行记录写入 `7-系统/AI协作`。", "- 状态、索引、日志和版本只写入 `.fde`，AI 运行记录写入 `7-系统/AI协作`。").replace("- `6-内容生产`：选题、草稿、审核、发布和复盘。", "- `6-内容生产`：选题、草稿、审核和发布；`已发布` 是流程终点，发布数据单独分析。");
    const canonicalRule = "- `.fde/config.yaml` 是六类资产、收件箱和运行目录的唯一路径真源。";
    const legacyRule = `- 旧 \`${legacyRuntimeRoot}/\` 只作历史追溯，不是运行配置或状态真源；任何 Agent 均不得按其中路径执行。`;
    if (text.includes(canonicalRule) && !text.includes(legacyRule)) text = text.replace(canonicalRule, `${canonicalRule}
${legacyRule}`);
  }
  if (kind === "health") {
    const truthRule = ".fde/config.yaml` 是唯一运行真源。旧 `.kb/` 只作历史追溯：不要读取其中配置来决定路径，也不要仅因它仍存在就报告真源冲突。";
    if (!text.includes(truthRule)) {
      text = text.replace(
        "- AGENTS.md、CLAUDE.md 和已安装 fde-* 清单",
        `- AGENTS.md、CLAUDE.md 和已安装 fde-* 清单

\`${truthRule}`
      );
    }
    const pendingHeading = "### 待处理口径";
    if (!text.includes(pendingHeading)) {
      const pendingRules = [
        pendingHeading,
        "",
        "- 待处理数量只统计收件箱中的原始材料记录：兼容 `type: inbox` 或没有 `type` 的旧材料，但必须排除 README、`原始文件/`、`附件/`、分流预览、分流记录和处理记录。",
        "- `status` 为 `processed`、`completed`、`closed`、`done`、`已完成`、`已处理` 或 `结案` 的原始材料属于已处理，不得再次计入积压或建议重新入库。",
        "- 同源处理记录或正式资产可以作为终态证据；若原材料状态仍是 pending，报告“状态待对齐”，不要把同一材料同时统计为待处理和已处理。",
        "- 同一材料有多份预览时，旧的 `awaiting-confirmation` 是历史审计记录；已有更新的 `confirmed-noop`、processed 收件记录或完成写入证据时，不把旧预览当成当前冲突，也不改写或删除它。",
        "- 目录中的非隐藏文件总数不是待处理数量。报告时分别给出原始材料、有效待处理、已处理和派生产物数量。"
      ].join("\n");
      text = text.replace(
        "5. 把问题分为阻塞、要处理和提醒，只给出有证据的问题。",
        `5. 把问题分为阻塞、要处理和提醒，只给出有证据的问题。

${pendingRules}`
      );
    }
    const repairRule = "- 修正规则真源时只更新 FDE365 管理的旧默认路径，不删除 `.kb/`，不覆盖自定义业务路径";
    if (!text.includes(repairRule)) {
      text = text.replace("- 默认不写；确认后只创建缺失空目录或修正明确的路径", `- 默认不写；确认后只创建缺失空目录或修正明确的路径
${repairRule}`);
    }
  }
  return text;
}
async function listAdapterFiles(adapter, root) {
  if (!adapter || typeof adapter.list !== "function") return [];
  const files = [];
  const pending = [normalizePath(root)];
  while (pending.length) {
    const directory = pending.shift();
    const result = await adapter.list(directory);
    files.push(...(result?.files || []).map((path) => normalizePath(path)));
    pending.push(...(result?.folders || []).map((path) => normalizePath(path)));
  }
  return [...new Set(files)];
}
var FDE365_BASE_URL = "https://api.ipzsk.com/v1";
var FDE365_CHAT_ENDPOINT = `${FDE365_BASE_URL}/chat/completions`;
var FDE365_MODELS = Object.freeze([
  "claude-fable-5",
  "claude-opus-4-8",
  "gpt-5.6-sol",
  "gpt-5.6-luna"
]);
var DEFAULT_FDE365_MODEL = "gpt-5.6-luna";
var ONBOARDING_VERSION = 4;
var FDE365_RELEASE_REPOSITORY = "GaryLauLGY/fde365-knowledge-os";
var FDE365_UPDATE_ORIGIN = "https://fdekb.garylau.ai";
var FDE365_RELEASE_API = `${FDE365_UPDATE_ORIGIN}/plugin/latest.json`;
var UPDATE_CHECK_INTERVAL_MS = 6 * 60 * 60 * 1e3;
var ONBOARDING_STEPS = Object.freeze([
  {
    icon: "sparkles",
    eyebrow: "欢迎来到FDE365",
    title: "把零散信息，慢慢变成你的知识资产",
    description: "Knowledge OS 会在当前 Vault 中建立一套本地知识工作台。你可以先收集，再分类、连接和生产内容。",
    highlights: [
      { icon: "inbox", title: "统一收集", text: "灵感、网页和文件先进待处理。" },
      { icon: "library", title: "六类资产", text: "按个人、产品、客户、案例、方法论与内容管理。" },
      { icon: "shield-check", title: "本地优先", text: "初始化只补缺失文件，不覆盖你已有的内容。" }
    ]
  },
  {
    icon: "inbox",
    eyebrow: "第一步 · 收集",
    title: "先放进“待处理”，不用立刻想分类",
    description: "当信息还不完整时，先保留原始材料和来源。等你有时间，再让 FDE Skills 帮你整理。",
    highlights: [
      { icon: "square-pen", title: "快速记录", text: "用命令面板新建待处理笔记。" },
      { icon: "globe", title: "收藏网页", text: "保留链接、正文和来源，方便以后追溯。" },
      { icon: "file-up", title: "原始文件", text: "把访谈、会议和其他原始素材放在同一入口。" }
    ]
  },
  {
    icon: "boxes",
    eyebrow: "第二步 · 沉淀",
    title: "六类资产，是整个系统的骨架",
    description: "整理时保留“事实、推断、未知”的边界，再用真实链接建立资产网络。",
    highlights: [
      { icon: "user-round", title: "经营与产品", text: "个人说明书与产品库保留你的核心判断。" },
      { icon: "target", title: "客户与案例", text: "把真实需求、反馈和有证据的案例连起来。" },
      { icon: "workflow", title: "方法与内容", text: "用经过验证的方法，推动五阶段内容发布闭环。" }
    ]
  },
  {
    icon: "bot",
    eyebrow: "第三步 · 协作",
    title: "让 AI 在你选定的范围内工作",
    description: IS_DEVELOPER_BUILD ? "只有你主动发起任务时，本地 Agent 才会读取所需 Vault 内容，并使用本机 Codex CLI 的登录和配置。" : "只有你主动发起任务时，本地 Agent 才会读取所需 Vault 内容并通过 FDE365 服务调用模型。登录凭证只保存在当前 Vault。",
    highlights: [
      { icon: "bot", title: "FDE365 Agent", text: "可读取 Vault、运行 Skills，需要写入时向你确认。" },
      { icon: "wand-sparkles", title: "34 个 FDE Skills", text: "从收集、整理、写作到体检，按合同执行。" },
      IS_DEVELOPER_BUILD ? { icon: "shield-check", title: "不覆盖本机配置", text: "开发版不注入 Token，不改写 CODEX_HOME 或 Shell 环境变量。" } : { icon: "shield-check", title: "凭证本地保存", text: "Token 不会写入知识笔记，也不会包含在插件发布包中。" }
    ]
  },
  {
    icon: "key-round",
    eyebrow: "第四步 · 配置模型",
    title: IS_DEVELOPER_BUILD ? "使用本机 Codex CLI" : "两步连接FDE365 AI",
    description: IS_DEVELOPER_BUILD ? "开发版使用本机 Codex CLI 已有的登录、Provider 和默认模型，不需在 Obsidian 内填写 Token。" : "先用邮箱登录，再兑换额度并选择模型。服务地址已经内置，无需手动配置。",
    highlights: IS_DEVELOPER_BUILD ? [
      { icon: "terminal", title: "1. 本机登录", text: "先在终端确认 Codex CLI 已经可用并完成登录。" },
      { icon: "settings", title: "2. 原样继承", text: "插件不传入模型或 Provider，使用本机 Codex 默认配置。" },
      { icon: "refresh-cw-off", title: "3. 开发通道", text: "自动更新已关闭，需要新版时重新构建 DEV ZIP。" }
    ] : [
      { icon: "mail", title: "1. 邮箱登录", text: "打开账号与额度，用邮箱验证码登录。", action: "open-token-settings" },
      { icon: "ticket", title: "2. 兑换额度", text: "在账号与额度中输入兑换码，余额以服务端返回为准。", action: "open-token-settings" },
      { icon: "cpu", title: "3. 选择模型", text: "同步服务端价格表并选择模型，然后点击“测试连接”（会产生用量）。" }
    ]
  }
]);
var AGENT_RUN_STATUSES = Object.freeze({
  DRAFT: "draft",
  QUEUED: "queued",
  RUNNING: "running",
  WAITING_REVIEW: "waiting-review",
  SUCCESS: "success",
  FAILED: "failed",
  CANCELLED: "cancelled",
  BLOCKED: "blocked"
});
var AGENT_STATUS_TRANSITIONS = Object.freeze({
  draft: /* @__PURE__ */ new Set(["queued", "cancelled"]),
  queued: /* @__PURE__ */ new Set(["running", "blocked", "cancelled"]),
  running: /* @__PURE__ */ new Set(["waiting-review", "failed", "blocked", "cancelled"]),
  "waiting-review": /* @__PURE__ */ new Set(["success", "failed", "cancelled"]),
  success: /* @__PURE__ */ new Set(),
  failed: /* @__PURE__ */ new Set(["queued"]),
  blocked: /* @__PURE__ */ new Set(["queued", "cancelled"]),
  cancelled: /* @__PURE__ */ new Set(["queued"])
});
var DEFAULT_SETTINGS = {
  schemaVersion: 5,
  account: Account.normalizeAccount(),
  billing: Account.normalizeBilling(),
  terminologyVersion: 0,
  inboxLayoutVersion: 0,
  knowledgeContractVersion: 0,
  userName: "Gary",
  openOnStartup: true,
  immersiveMode: true,
  colorTheme: "light",
  onboardingVersion: 0,
  updates: {
    autoInstall: true,
    lastCheckedAt: "",
    lastError: "",
    pendingVersion: ""
  },
  blueprint: {
    version: 0,
    lastCheckedAt: "",
    lastCreated: 0,
    conflicts: []
  },
  ai: {
    provider: "fde365",
    assistant: {
      contextScope: "active-note",
      autoSaveOutput: false,
      maxContextChars: 2e4,
      executionMode: "approval",
      panelWidth: 336
    },
    fde365: {
      token: "",
      model: DEFAULT_FDE365_MODEL,
      temperature: 0.3,
      timeoutMs: 12e4
    }
  },
  graphSnapshot: null,
  graphDefaultDepth: 2
};
function mergeSettings(raw = {}) {
  const legacyApi = raw.ai?.openaiCompatible || {};
  const currentApi = raw.ai?.fde365 || {};
  const token = String(currentApi.token || legacyApi.token || legacyApi.apiKey || "").trim();
  const requestedModel = String(currentApi.model || legacyApi.model || "").trim();
  const models = Account.modelIds(raw, FDE365_MODELS);
  const model = models.includes(requestedModel) ? requestedModel : models.includes(DEFAULT_FDE365_MODEL) ? DEFAULT_FDE365_MODEL : models[0];
  return {
    ...DEFAULT_SETTINGS,
    ...raw,
    schemaVersion: 5,
    account: Account.normalizeAccount(raw.account),
    billing: Account.normalizeBilling(raw.billing),
    terminologyVersion: Math.max(0, Number(raw.terminologyVersion) || 0),
    inboxLayoutVersion: Math.max(0, Number(raw.inboxLayoutVersion) || 0),
    knowledgeContractVersion: Math.max(0, Number(raw.knowledgeContractVersion) || 0),
    blueprint: {
      ...DEFAULT_SETTINGS.blueprint,
      ...raw.blueprint || {},
      conflicts: Array.isArray(raw.blueprint?.conflicts) ? raw.blueprint.conflicts : []
    },
    updates: {
      ...DEFAULT_SETTINGS.updates,
      ...raw.updates || {},
      autoInstall: raw.updates?.autoInstall !== false
    },
    ai: {
      provider: "fde365",
      assistant: {
        ...DEFAULT_SETTINGS.ai.assistant,
        ...raw.ai?.assistant || {},
        executionMode: raw.ai?.assistant?.executionMode === "yolo" ? "yolo" : "approval",
        panelWidth: Math.max(280, Math.min(560, Number(raw.ai?.assistant?.panelWidth) || DEFAULT_SETTINGS.ai.assistant.panelWidth))
      },
      fde365: {
        token,
        model,
        temperature: Number.isFinite(Number(currentApi.temperature ?? legacyApi.temperature)) ? Number(currentApi.temperature ?? legacyApi.temperature) : DEFAULT_SETTINGS.ai.fde365.temperature,
        timeoutMs: Math.max(1e4, Number(currentApi.timeoutMs ?? legacyApi.timeoutMs) || DEFAULT_SETTINGS.ai.fde365.timeoutMs)
      }
    }
  };
}
function debounce(fn, wait2 = 300) {
  let timer;
  return (...args) => {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => fn(...args), wait2);
  };
}
function formatRelativeTime(timestamp) {
  const delta = Date.now() - timestamp;
  const minute = 60 * 1e3;
  const hour = 60 * minute;
  const day = 24 * hour;
  if (delta < minute) return "刚刚";
  if (delta < hour) return `${Math.floor(delta / minute)} 分钟前`;
  if (delta < day) return `${Math.floor(delta / hour)} 小时前`;
  if (delta < day * 2) return "昨天";
  const date = new Date(timestamp);
  return `${date.getMonth() + 1}月${date.getDate()}日`;
}
function safeName(input) {
  return (input || "未命名").replace(/[\\/:*?"<>|#^\[\]]/g, "-").replace(/\s+/g, " ").trim().slice(0, 60);
}
function yamlQuote(value) {
  return JSON.stringify(String(value ?? ""));
}
function getMessageText(message) {
  const content = message?.content ?? message?.text ?? message?.message ?? "";
  if (typeof content === "string" && content.trim()) return content.trim();
  if (Array.isArray(content)) {
    const text = content.map((block) => {
      if (typeof block === "string") return block;
      return block?.text ?? block?.content ?? block?.value ?? "";
    }).filter(Boolean).join("\n\n").trim();
    if (text) return text;
  }
  if (content && typeof content === "object") {
    const text = String(content.text || content.value || "").trim();
    if (text) return text;
  }
  if (Array.isArray(message?.contentBlocks)) {
    return message.contentBlocks.map((block) => block?.content ?? block?.text ?? block?.value ?? "").filter(Boolean).join("\n\n").trim();
  }
  return "";
}
function wait(milliseconds) {
  return new Promise((resolve) => window.setTimeout(resolve, milliseconds));
}
var KnowledgeOSRouter = class {
  constructor(plugin) {
    this.plugin = plugin;
  }
  async navigate(route, params = {}) {
    switch (route) {
      case "dashboard":
        return this.plugin.activateView(params);
      case "inbox":
        return this.plugin.activateInbox(params);
      case "libraries":
      case "knowledge":
        return this.plugin.activateKnowledge(params);
      case "network":
      case "graph":
        return this.plugin.activateGraph(params);
      case "content":
      case "projects":
        return this.plugin.activateProjects(params);
      case "skills":
      case "agents":
        return this.plugin.activateAgents(params);
      case "health":
      case "analytics":
        return this.plugin.activateAnalytics(params);
      case "settings":
        return this.plugin.openSettings(params.section);
      default:
        throw new Error(`Unknown Knowledge OS route: ${route}`);
    }
  }
};
var KnowledgeOSOnboardingModal = class extends Modal {
  constructor(app, plugin) {
    super(app);
    this.plugin = plugin;
    this.stepIndex = 0;
    this.finished = false;
  }
  onOpen() {
    this.modalEl.addClass("fde365-onboarding-modal");
    this.render();
  }
  render() {
    const { contentEl } = this;
    const step = ONBOARDING_STEPS[this.stepIndex];
    contentEl.empty();
    contentEl.setAttr("aria-live", "polite");
    const shell = contentEl.createDiv({ cls: "fde365-onboarding-shell" });
    const brand = shell.createDiv({ cls: "fde365-onboarding-brand" });
    const logo = brand.createEl("img", { attr: { src: this.plugin.logoResource(), alt: "" } });
    logo.setAttr("aria-hidden", "true");
    const progress = shell.createDiv({ cls: "fde365-onboarding-progress" });
    progress.createSpan({ text: `${this.stepIndex + 1} / ${ONBOARDING_STEPS.length}` });
    const dots = progress.createDiv({ cls: "fde365-onboarding-dots", attr: { "aria-label": "新人指引进度" } });
    ONBOARDING_STEPS.forEach((_, index) => {
      const dot = dots.createEl("button", {
        cls: index === this.stepIndex ? "is-active" : index < this.stepIndex ? "is-complete" : "",
        attr: { "aria-label": `前往第 ${index + 1} 步`, type: "button" }
      });
      dot.addEventListener("click", () => {
        this.stepIndex = index;
        this.render();
      });
    });
    const hero = shell.createDiv({ cls: "fde365-onboarding-hero" });
    const icon = hero.createDiv({ cls: "fde365-onboarding-hero-icon" });
    setIcon(icon, step.icon);
    const copy = hero.createDiv({ cls: "fde365-onboarding-copy" });
    copy.createDiv({ text: step.eyebrow, cls: "fde365-onboarding-eyebrow" });
    copy.createEl("h2", { text: step.title });
    copy.createEl("p", { text: step.description });
    const cards = shell.createDiv({ cls: "fde365-onboarding-highlights" });
    for (const item of step.highlights) {
      const card = cards.createDiv({ cls: "fde365-onboarding-highlight" });
      const cardIcon = card.createDiv({ cls: "fde365-onboarding-highlight-icon" });
      setIcon(cardIcon, item.icon);
      const cardCopy = card.createDiv();
      cardCopy.createEl("strong", { text: item.title });
      cardCopy.createEl("p", { text: item.text });
      if (item.action === "open-token-settings") {
        const button = cardCopy.createEl("button", {
          text: "打开账号设置",
          cls: "fde365-onboarding-card-action",
          attr: { type: "button" }
        });
        button.addEventListener("click", () => {
          this.finished = true;
          void this.plugin.markOnboardingSeen();
          this.close();
          this.plugin.openSettings("ai");
        });
      }
    }
    const footer = shell.createDiv({ cls: "fde365-onboarding-footer" });
    const quietActions = footer.createDiv({ cls: "fde365-onboarding-quiet-actions" });
    if (this.stepIndex > 0) {
      const previous = quietActions.createEl("button", { text: "上一步", attr: { type: "button" } });
      previous.addEventListener("click", () => {
        this.stepIndex -= 1;
        this.render();
      });
    } else {
      const skip = quietActions.createEl("button", { text: "跳过指引", cls: "fde365-onboarding-skip", attr: { type: "button" } });
      skip.addEventListener("click", () => void this.finish());
    }
    const isLastStep = this.stepIndex === ONBOARDING_STEPS.length - 1;
    const next = footer.createEl("button", {
      text: isLastStep ? "开始使用" : "下一步",
      cls: "mod-cta fde365-onboarding-next",
      attr: { type: "button" }
    });
    next.addEventListener("click", () => {
      if (isLastStep) void this.finish({ activateDashboard: true });
      else {
        this.stepIndex += 1;
        this.render();
      }
    });
    window.setTimeout(() => next.focus(), 0);
  }
  async finish({ activateDashboard = false } = {}) {
    if (this.finished) return;
    this.finished = true;
    await this.plugin.markOnboardingSeen();
    this.close();
    if (activateDashboard && !this.plugin.isUnloading) await this.plugin.activateView();
  }
  onClose() {
    this.contentEl.empty();
    this.plugin.onboardingModal = null;
    if (!this.finished && !this.plugin.isUnloading) void this.plugin.markOnboardingSeen();
  }
};
var AgentTaskStore = class {
  constructor(plugin) {
    this.plugin = plugin;
    this.app = plugin.app;
  }
  async ensureStructure() {
    await ensureVaultFolder(this.app, AGENT_ROOT);
    await ensureVaultFolder(this.app, `${AGENT_ROOT}/定义`);
    await ensureVaultFolder(this.app, `${AGENT_ROOT}/运行记录`);
    await ensureVaultFolder(this.app, `${AGENT_ROOT}/输出`);
  }
  async createRun(agent, prompt, sources = [], execution = {}) {
    await this.ensureStructure();
    const now = /* @__PURE__ */ new Date();
    const taskId = `fde365-${now.toISOString().replace(/[-:.TZ]/g, "").slice(0, 14)}-${Math.random().toString(36).slice(2, 7)}`;
    const path = `${AGENT_ROOT}/运行记录/${taskId}-${safeName(agent.name)}.md`;
    const sourcePaths = sources.map((file2) => file2.path || String(file2)).filter(Boolean);
    const provider = String(execution.provider || "unknown");
    const content = `---
type: agent-run
task_id: ${taskId}
agent_id: ${agent.id}
provider: ${yamlQuote(provider)}
provider_version: ${yamlQuote(execution.providerVersion || "")}
model: ${yamlQuote(execution.model || "")}
status: queued
created_at: ${now.toISOString()}
started_at:
finished_at:
conversation_id:
source_files: ${JSON.stringify(sourcePaths)}
output_file:
error:
reviewed: false
task: ${yamlQuote(prompt)}
tags:
  - agent/run
  - agent/${agent.id}
---

# ${agent.name} · 运行任务

> [!info] Agent 职责
> ${agent.description}

## 输入来源

${sourcePaths.length ? sourcePaths.map((pathValue) => `- [[${pathValue.replace(/\.md$/, "")}]]`).join("\n") : "- 暂无匹配来源"}

## 任务

${prompt}

## 执行状态

等待 ${execution.label || provider} 执行。
`;
    const file = await this.app.vault.create(path, content);
    return { taskId, file, agent, prompt, sources: sourcePaths, status: AGENT_RUN_STATUSES.QUEUED };
  }
  async transition(taskOrFile, nextStatus, patch = {}) {
    const file = taskOrFile.file || taskOrFile;
    const cache = this.app.metadataCache.getFileCache(file);
    const current = String(taskOrFile.file ? taskOrFile.status : cache?.frontmatter?.status || AGENT_RUN_STATUSES.DRAFT);
    if (!AGENT_STATUS_TRANSITIONS[current]?.has(nextStatus)) {
      throw new Error(`Invalid agent task transition: ${current} -> ${nextStatus}`);
    }
    await this.app.fileManager.processFrontMatter(file, (frontmatter) => {
      frontmatter.status = nextStatus;
      Object.entries(patch).forEach(([key, value]) => {
        if (value === void 0) delete frontmatter[key];
        else frontmatter[key] = value;
      });
    });
    if (taskOrFile.file) taskOrFile.status = nextStatus;
    await this.updateRunBody(file, nextStatus, patch);
    await this.waitForFrontmatter(file, "status", nextStatus);
    return taskOrFile;
  }
  async waitForFrontmatter(file, key, expected, timeout = 2500) {
    const started = Date.now();
    while (Date.now() - started < timeout) {
      if (this.app.metadataCache.getFileCache(file)?.frontmatter?.[key] === expected) return true;
      await wait(25);
    }
    return false;
  }
  async updateRunBody(file, status, patch = {}) {
    const labels = {
      draft: "任务仍为草稿。",
      queued: "任务已进入执行队列。",
      running: "AI Provider 正在执行任务。",
      "waiting-review": patch.output_file ? `AI Provider 已生成输出，等待人工验收：[[${String(patch.output_file).replace(/\.md$/, "")}]]` : "AI Provider 已生成输出，等待人工验收。",
      success: "输出已经人工验收，任务执行成功。",
      failed: `任务执行失败：${patch.error || "未知错误"}`,
      blocked: `任务被阻塞：${patch.error || "依赖不可用"}`,
      cancelled: "任务已取消。"
    };
    const content = await this.app.vault.read(file);
    const marker = "## 执行状态\n\n";
    if (!content.includes(marker)) return;
    const start = content.indexOf(marker) + marker.length;
    const nextHeading = content.indexOf("\n## ", start);
    const end = nextHeading >= 0 ? nextHeading : content.length;
    const replacement = `${labels[status] || status}
`;
    const updated = `${content.slice(0, start)}${replacement}${content.slice(end)}`;
    if (updated !== content) await this.app.vault.modify(file, updated);
  }
  async saveOutput(task, result) {
    const path = `${AGENT_ROOT}/输出/${task.taskId}-${safeName(task.agent.name)}.md`;
    const content = `---
type: agent-output
task_id: ${task.taskId}
agent_id: ${task.agent.id}
provider: ${yamlQuote(result.provider || "unknown")}
provider_version: ${yamlQuote(result.providerVersion || "unknown")}
model: ${yamlQuote(result.model || "")}
conversation_id: ${yamlQuote(result.conversationId || "")}
created_at: ${(/* @__PURE__ */ new Date()).toISOString()}
reviewed: false
tags:
  - agent/output
  - agent/${task.agent.id}
---

# ${task.agent.name} · 输出

## 任务

${task.prompt}

## 来源

${task.sources.length ? task.sources.map((source) => `- [[${source.replace(/\.md$/, "")}]]`).join("\n") : "- 无显式来源"}

## AI 输出

${result.content}

## 人工验收

- [ ] 核对事实与引用
- [ ] 确认结论可以使用
- [ ] 返回 FDE365 右侧栏“历史”核对运行记录
`;
    return this.app.vault.create(path, content);
  }
};
var AIProviderError = class extends Error {
  constructor(code, message, details = {}) {
    super(message);
    this.name = "AIProviderError";
    this.code = code;
    this.details = details;
  }
};
function buildOpenAIMessages(request) {
  const messages = (Array.isArray(request?.messages) ? request.messages : []).filter((message) => message?.content).map((message) => ({ role: message.role || "user", content: String(message.content) }));
  const context = Array.isArray(request?.context) ? request.context : [];
  if (context.length) {
    messages.splice(Math.max(0, messages.length - 1), 0, {
      role: "system",
      content: `以下是用户明确允许发送的本地知识上下文。回答时区分上下文事实、推断与建议，并在使用时标明来源路径。

${context.map((item) => `### ${item.title || item.path || "未命名来源"}
来源：${item.path || "未标注"}
${item.excerpt || ""}`).join("\n\n")}`
    });
  }
  return messages;
}
function mapHttpProviderError(status, payload) {
  const remoteMessage = String(payload?.error?.message || payload?.message || "").trim();
  if (status === 401 || status === 403) return new AIProviderError("AUTH_FAILED", "登录已失效，请重新登录");
  if (status === 402) return new AIProviderError("INSUFFICIENT_CREDITS", "credits 不足，请兑换后再试");
  if (status === 404) return new AIProviderError("MODEL_NOT_FOUND", remoteMessage || "所选模型不存在");
  if (status === 429) return new AIProviderError("RATE_LIMITED", "API 请求受到限流，请稍后重试");
  return new AIProviderError("NETWORK_ERROR", remoteMessage || `API 返回 HTTP ${status}`);
}
var Fde365Provider = class {
  constructor(plugin) {
    this.plugin = plugin;
    this.id = "fde365";
    this.label = "FDE365 API";
    this.cancelledRequests = /* @__PURE__ */ new Set();
    this.cancelHandlers = /* @__PURE__ */ new Map();
  }
  get settings() {
    return this.plugin.settings.ai.fde365;
  }
  detect() {
    const token = this.plugin.accountClient?.isLoggedIn() || false;
    const model = String(this.settings.model || "").trim();
    const configured = Boolean(token && Account.modelIds(this.plugin.settings, FDE365_MODELS).includes(model));
    return {
      available: true,
      configured,
      compatible: configured,
      version: "chat-completions",
      model,
      endpoint: FDE365_CHAT_ENDPOINT,
      error: configured ? null : "请先登录账号并选择可用模型"
    };
  }
  cancel(requestId) {
    this.cancelledRequests.add(requestId);
    this.cancelHandlers.get(requestId)?.();
  }
  async testConnection() {
    return this.complete({
      requestId: `test-${Date.now()}`,
      mode: "chat",
      messages: [{ role: "user", content: "只回复 OK" }],
      context: []
    });
  }
  async complete(request) {
    const capability = this.detect();
    if (!capability.configured) throw new AIProviderError("PROVIDER_NOT_CONFIGURED", capability.error);
    if (this.cancelledRequests.has(request.requestId)) {
      this.cancelledRequests.delete(request.requestId);
      throw new AIProviderError("CANCELLED", "任务已取消");
    }
    const accessToken = await this.plugin.accountClient.getAccessToken();
    const timeoutMs = Math.max(1e4, Number(this.settings.timeoutMs) || 12e4);
    let timer = null;
    const timeout = new Promise((_, reject) => {
      timer = window.setTimeout(() => reject(new AIProviderError("TIMEOUT", `API 请求超过 ${Math.round(timeoutMs / 1e3)} 秒`)), timeoutMs);
    });
    const cancelled = new Promise((_, reject) => {
      this.cancelHandlers.set(request.requestId, () => reject(new AIProviderError("CANCELLED", "任务已取消")));
    });
    let response;
    try {
      response = await Promise.race([
        requestUrl({
          url: FDE365_CHAT_ENDPOINT,
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`
          },
          body: JSON.stringify({
            model: capability.model,
            messages: buildOpenAIMessages(request),
            temperature: Math.min(2, Math.max(0, Number(this.settings.temperature) || 0)),
            stream: false
          }),
          throw: false
        }),
        timeout,
        cancelled
      ]);
    } catch (error) {
      if (error instanceof AIProviderError) throw error;
      throw new AIProviderError("NETWORK_ERROR", error instanceof Error ? error.message : String(error));
    } finally {
      if (timer !== null) window.clearTimeout(timer);
      this.cancelHandlers.delete(request.requestId);
      this.cancelledRequests.delete(request.requestId);
    }
    const payload = response?.json || {};
    if (!response || response.status < 200 || response.status >= 300) {
      throw mapHttpProviderError(response?.status || 0, payload);
    }
    if (this.cancelledRequests.has(request.requestId)) {
      this.cancelledRequests.delete(request.requestId);
      throw new AIProviderError("CANCELLED", "任务已取消");
    }
    const content = getMessageText(payload?.choices?.[0]?.message);
    if (!content) throw new AIProviderError("EMPTY_RESPONSE", "模型返回了空内容");
    return {
      content,
      provider: this.id,
      providerVersion: "fde365-chat-completions",
      model: capability.model,
      conversationId: String(payload.id || request.requestId || ""),
      usage: payload.usage || null
    };
  }
};
var AIProviderManager = class {
  constructor(plugin) {
    this.plugin = plugin;
    this.providers = /* @__PURE__ */ new Map();
  }
  register(provider) {
    this.providers.set(provider.id, provider);
    return provider;
  }
  get(id) {
    return this.providers.get(id) || null;
  }
  getSelected() {
    return this.get("fde365");
  }
  describeSelected() {
    const provider = this.getSelected();
    const status = provider.detect();
    return {
      id: provider.id,
      label: provider.label,
      ...status
    };
  }
  async preflight() {
    const provider = this.getSelected();
    const capability = provider.detect();
    if (!capability.configured) throw new AIProviderError("PROVIDER_NOT_CONFIGURED", capability.error || "尚未配置 AI 服务");
    if (!capability.available) throw new AIProviderError("PROVIDER_UNAVAILABLE", capability.error || "AI 服务不可用");
    if (!capability.compatible) throw new AIProviderError("INCOMPATIBLE_VERSION", capability.error || "AI 服务不兼容");
    return { provider, capability };
  }
  async complete(request) {
    const { provider } = await this.preflight();
    return provider.complete(request);
  }
  cancel(requestId) {
    this.getSelected()?.cancel?.(requestId);
  }
  cancelAll() {
    for (const provider of this.providers.values()) provider.cancelAll?.();
  }
};
function agentApprovalItemDisplay(value, limit = 280) {
  const full = String(value ?? "").trim();
  const compact = full.replace(/\s+/g, " ");
  if (compact.length <= limit) return { full, preview: compact, truncated: false };
  const tailLength = Math.min(72, Math.floor(limit * 0.28));
  const headLength = Math.max(1, limit - tailLength - 3);
  return {
    full,
    preview: `${compact.slice(0, headLength)} … ${compact.slice(-tailLength)}`,
    truncated: true
  };
}
var AgentApprovalModal = class extends Modal {
  constructor(app, options, resolve) {
    super(app);
    this.options = options;
    this.resolveApproval = resolve;
    this.settled = false;
  }
  finish(value) {
    if (this.settled) return;
    this.settled = true;
    this.resolveApproval(Boolean(value));
    this.close();
  }
  onOpen() {
    this.contentEl.addClass("fde-agent-modal", "fde-agent-approval-modal");
    this.contentEl.createEl("h2", { text: this.options.title || "允许本地 Agent 执行？" });
    this.contentEl.createEl("p", { text: this.options.description || "FDE365 Agent 请求执行本地操作。", cls: "fde-agent-modal-description" });
    const list = this.contentEl.createEl("ul", { cls: "fde-agent-approval-items" });
    for (const item of this.options.items || []) {
      const display = agentApprovalItemDisplay(item);
      const row = list.createEl("li");
      row.createDiv({ text: display.preview, cls: "fde-agent-approval-preview" });
      if (display.truncated) {
        row.createDiv({ text: `已缩略，共 ${display.full.length} 个字符`, cls: "fde-agent-approval-meta" });
        const details = row.createEl("details", { cls: "fde-agent-approval-details" });
        details.createEl("summary", { text: "查看完整内容" });
        details.createEl("pre", { text: display.full });
      }
    }
    const actions = this.contentEl.createDiv({ cls: "fde-agent-modal-actions" });
    const reject = actions.createEl("button", { text: "不允许" });
    const allow = actions.createEl("button", { text: "仅允许这一次", cls: "mod-cta" });
    reject.addEventListener("click", () => this.finish(false));
    allow.addEventListener("click", () => this.finish(true));
  }
  onClose() {
    if (!this.settled) {
      this.settled = true;
      this.resolveApproval(false);
    }
    this.contentEl.empty();
  }
};
var AgentQuestionModal = class extends Modal {
  constructor(app, questions, resolve) {
    super(app);
    this.questions = questions;
    this.resolveAnswers = resolve;
    this.inputs = /* @__PURE__ */ new Map();
    this.settled = false;
  }
  finish(answers) {
    if (this.settled) return;
    this.settled = true;
    this.resolveAnswers(answers);
    this.close();
  }
  onOpen() {
    this.contentEl.addClass("fde-agent-modal", "fde-agent-question-modal");
    this.contentEl.createEl("h2", { text: "FDE365 Agent 需要你确认" });
    for (const question of this.questions) {
      const id = String(question?.id || `question-${this.inputs.size + 1}`);
      const group = this.contentEl.createDiv({ cls: "fde-agent-question" });
      group.createEl("strong", { text: String(question?.header || question?.question || "请补充信息") });
      if (question?.header && question?.question) group.createEl("p", { text: String(question.question), cls: "fde-agent-modal-description" });
      const options = Array.isArray(question?.options) ? question.options : [];
      if (options.length) {
        const select = group.createEl("select");
        for (const option of options) select.createEl("option", { text: String(option?.label || option), value: String(option?.label || option) });
        this.inputs.set(id, select);
      } else {
        const input = group.createEl("input", { type: "text", attr: { placeholder: "输入你的回答…" } });
        this.inputs.set(id, input);
      }
    }
    const actions = this.contentEl.createDiv({ cls: "fde-agent-modal-actions" });
    actions.createEl("button", { text: "取消" }).addEventListener("click", () => this.finish({}));
    actions.createEl("button", { text: "继续", cls: "mod-cta" }).addEventListener("click", () => {
      const answers = {};
      for (const [id, input] of this.inputs) answers[id] = input.value;
      this.finish(answers);
    });
  }
  onClose() {
    if (!this.settled) {
      this.settled = true;
      this.resolveAnswers({});
    }
    this.contentEl.empty();
  }
};
function inferInboxTags(text = "", source = "") {
  const haystack = `${text} ${source}`.toLowerCase();
  const tags = [];
  const add = (...values) => values.forEach((value) => {
    if (!tags.includes(value)) tags.push(value);
  });
  if (/(录音|语音|音频|转写|audio|mp3|m4a|wav|webm)/i.test(haystack)) add("录音转写");
  if (/(会议|会议纪要|参会|议程)/i.test(haystack)) add("会议纪要");
  if (/(聊天|微信|沟通记录|对话记录)/i.test(haystack)) add("聊天记录");
  if (/(图片|截图|照片|image|png|jpe?g|webp)/i.test(haystack)) add("图片材料");
  if (/(文档|附件|pdf|docx?|pptx?|xlsx?)/i.test(haystack)) add("文档材料");
  if (/(个人定位|身份|价值观|我的判断|表达习惯|不能公开|个人边界)/i.test(haystack)) add("个人说明书");
  if (/(产品|功能|价格|报价|承诺|交付|售后|异议|prd|竞品)/i.test(haystack)) add("产品库");
  if (/(客户原话|客户需求|客户|痛点|预算|决策人|成交|未成交)/i.test(haystack)) add("客户需求库");
  if (/(案例|事件|经历|反馈|结果|故事|数据证据)/i.test(haystack)) add("素材案例库");
  if (/(方法|步骤|流程|原则|经验|复盘|策略|前置条件|失败信号)/i.test(haystack)) add("方法论库");
  if (/(选题|标题|文章|脚本|发布|公众号|短视频|成稿|写稿)/i.test(haystack)) add("内容生产");
  if (!tags.length) add("待分类");
  return tags.slice(0, 6);
}
function inferInboxCategory(tags) {
  const destinations = ["个人说明书", "产品库", "客户需求库", "素材案例库", "方法论库", "内容生产"];
  return destinations.find((destination) => tags.includes(destination)) || "待分类";
}
async function ensureVaultFolder(app, path) {
  const normalized = normalizePath(path);
  const parts = normalized.split("/");
  let current = "";
  for (const part of parts) {
    current = current ? `${current}/${part}` : part;
    const indexed = app.vault.getAbstractFileByPath(current);
    if (indexed) {
      if (indexed instanceof TFile) throw new Error(`无法创建目录“${current}”：同名文件已存在`);
      continue;
    }
    const existing = await app.vault.adapter.stat(current).catch(() => null);
    if (existing) {
      if (existing.type !== "folder") throw new Error(`无法创建目录“${current}”：同名文件已存在`);
      continue;
    }
    try {
      await app.vault.createFolder(current);
    } catch (error) {
      const created = app.vault.getAbstractFileByPath(current);
      const stat = await app.vault.adapter.stat(current).catch(() => null);
      const isExistingFolder = Boolean(created && !(created instanceof TFile)) || stat?.type === "folder";
      if (isExistingFolder && /already exists/i.test(error instanceof Error ? error.message : String(error))) continue;
      throw error;
    }
  }
}
async function uniqueVaultPath(app, path) {
  if (!app.vault.getAbstractFileByPath(path)) return path;
  const dot = path.lastIndexOf(".");
  const base = dot > path.lastIndexOf("/") ? path.slice(0, dot) : path;
  const ext = dot > path.lastIndexOf("/") ? path.slice(dot) : "";
  let index = 2;
  while (app.vault.getAbstractFileByPath(`${base}-${index}${ext}`)) index += 1;
  return `${base}-${index}${ext}`;
}
var VaultBootstrapService = class {
  constructor(plugin, blueprint = KNOWLEDGE_BLUEPRINT) {
    this.plugin = plugin;
    this.app = plugin.app;
    this.blueprint = blueprint;
  }
  fullPath(relativePath = "") {
    return normalizePath([this.blueprint.root, relativePath].filter(Boolean).join("/"));
  }
  async inspectPath(path) {
    const indexed = this.app.vault.getAbstractFileByPath(path);
    if (indexed) return indexed instanceof TFile ? "file" : "folder";
    const stat = await this.app.vault.adapter.stat(path).catch(() => null);
    return stat?.type || null;
  }
  async ensure({ notify = false } = {}) {
    const created = [];
    const skipped = [];
    const conflicts = [];
    const folders = ["", ...this.blueprint.folders].map((path) => this.fullPath(path)).sort((a, b) => a.split("/").length - b.split("/").length || a.localeCompare(b, "zh-CN"));
    for (const path of folders) {
      const type = await this.inspectPath(path);
      if (type === "folder") {
        skipped.push(path);
        continue;
      }
      if (type === "file") {
        conflicts.push(`${path}（需要目录，但同名文件已存在）`);
        continue;
      }
      try {
        await ensureVaultFolder(this.app, path);
        created.push(path);
      } catch (error) {
        conflicts.push(`${path}（${error instanceof Error ? error.message : String(error)}）`);
      }
    }
    for (const [relativePath, content] of Object.entries(this.blueprint.files)) {
      const path = this.fullPath(relativePath);
      const type = await this.inspectPath(path);
      if (type === "file") {
        skipped.push(path);
        continue;
      }
      if (type === "folder") {
        conflicts.push(`${path}（需要文件，但同名目录已存在）`);
        continue;
      }
      const parent = path.includes("/") ? path.slice(0, path.lastIndexOf("/")) : "";
      try {
        if (parent) await ensureVaultFolder(this.app, parent);
        await this.app.vault.create(path, String(content));
        created.push(path);
      } catch (error) {
        const currentType = await this.inspectPath(path);
        if (currentType === "file") skipped.push(path);
        else conflicts.push(`${path}（${error instanceof Error ? error.message : String(error)}）`);
      }
    }
    const result = {
      version: this.blueprint.version,
      created,
      skipped,
      conflicts,
      checkedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    this.plugin.settings.blueprint = {
      version: this.blueprint.version,
      lastCheckedAt: result.checkedAt,
      lastCreated: created.length,
      conflicts
    };
    await this.plugin.saveSettings();
    if (notify) {
      const summary = conflicts.length ? `补齐 ${created.length} 项，发现 ${conflicts.length} 个同名冲突；未覆盖原内容` : created.length ? `已补齐 ${created.length} 项，原有内容均未覆盖` : "知识库结构完整，没有修改现有内容";
      new Notice(`FDE365知识库：${summary}`, 8e3);
    }
    return result;
  }
};
var Fde365UpdateService = class {
  constructor(plugin) {
    this.plugin = plugin;
    this.app = plugin.app;
    this.inFlight = null;
  }
  get pluginDirectory() {
    return normalizePath(this.plugin.manifest.dir || `.obsidian/plugins/${this.plugin.manifest.id}`);
  }
  async request(url) {
    const response = await requestUrl({
      url,
      method: "GET",
      headers: {
        Accept: "application/json, application/octet-stream;q=0.9"
      },
      throw: false
    });
    if (response.status < 200 || response.status >= 300) throw new Error(`FDE365 更新服务返回 HTTP ${response.status}`);
    return response;
  }
  async ensureAdapterFolder(path) {
    const adapter = this.app.vault.adapter;
    const parts = normalizePath(path).split("/").filter(Boolean);
    let current = "";
    for (const part of parts) {
      current = current ? `${current}/${part}` : part;
      if (!await adapter.exists(current)) await adapter.mkdir(current);
    }
  }
  async check({ manual = false, forceInstall = false } = {}) {
    if (IS_DEVELOPER_BUILD) {
      if (manual) new Notice("开发版已关闭自动更新，请重新构建开发包");
      return { status: "disabled", channel: FDE365_BUILD_CHANNEL };
    }
    if (this.inFlight) return this.inFlight;
    this.inFlight = this.checkNow({ manual, forceInstall }).finally(() => {
      this.inFlight = null;
    });
    return this.inFlight;
  }
  async checkNow({ manual, forceInstall }) {
    const updates = this.plugin.settings.updates;
    try {
      const releaseResponse = await this.request(FDE365_RELEASE_API);
      const release = releaseResponse.json;
      const latestVersion = GitHubUpdater.normalizeVersion(release?.tag_name);
      if (!latestVersion) throw new Error("FDE365 更新版本不是 x.y.z 格式");
      updates.lastCheckedAt = (/* @__PURE__ */ new Date()).toISOString();
      updates.lastError = "";
      if (GitHubUpdater.compareVersions(latestVersion, this.plugin.manifest.version) <= 0) {
        updates.pendingVersion = "";
        await this.plugin.saveSettings();
        if (manual) new Notice(`当前已是最新版 v${this.plugin.manifest.version}`);
        return { status: "current", version: latestVersion };
      }
      if (updates.pendingVersion === latestVersion) {
        if (manual) new Notice(`v${latestVersion} 已安装，重启 Obsidian 后生效`, 8e3);
        return { status: "restart-required", version: latestVersion };
      }
      const assets = Array.isArray(release.assets) ? release.assets : [];
      const manifestAsset = assets.find((asset) => asset?.name === "update-manifest.json");
      if (!manifestAsset || !GitHubUpdater.isTrustedUpdateAssetUrl(manifestAsset.browser_download_url, latestVersion, "update-manifest.json")) {
        throw new Error("更新服务缺少可信的 update-manifest.json");
      }
      const updateManifestResponse = await this.request(manifestAsset.browser_download_url);
      const updateManifest = GitHubUpdater.validateUpdateManifest(updateManifestResponse.json, {
        pluginId: this.plugin.manifest.id,
        repository: FDE365_RELEASE_REPOSITORY,
        version: latestVersion
      });
      if (typeof requireApiVersion === "function" && !requireApiVersion(updateManifest.minAppVersion)) {
        throw new Error(`v${latestVersion} 需要 Obsidian ${updateManifest.minAppVersion} 或更高版本`);
      }
      if (!(forceInstall || updates.autoInstall)) {
        updates.pendingVersion = latestVersion;
        await this.plugin.saveSettings();
        if (manual) new Notice(`发现新版本 v${latestVersion}，可在设置中安装`);
        return { status: "available", version: latestVersion };
      }
      await this.install(release, updateManifest);
      updates.pendingVersion = latestVersion;
      updates.lastError = "";
      await this.plugin.saveSettings();
      new Notice(`FDE365 已更新到 v${latestVersion}，请重启 Obsidian 生效`, 0);
      return { status: "installed", version: latestVersion };
    } catch (error) {
      updates.lastCheckedAt = (/* @__PURE__ */ new Date()).toISOString();
      updates.lastError = error instanceof Error ? error.message : String(error);
      await this.plugin.saveSettings();
      if (manual) new Notice(`检查更新失败：${updates.lastError}`, 1e4);
      else console.warn("FDE365 Knowledge OS: automatic update check failed", error);
      return { status: "error", error: updates.lastError };
    }
  }
  async install(release, updateManifest) {
    const releaseAssets = new Map((release.assets || []).map((asset) => [asset.name, asset]));
    const downloads = /* @__PURE__ */ new Map();
    for (const file of updateManifest.files) {
      const asset = releaseAssets.get(file.asset);
      if (!asset || !GitHubUpdater.isTrustedUpdateAssetUrl(asset.browser_download_url, updateManifest.version, file.asset)) {
        throw new Error(`更新服务缺少可信文件：${file.asset}`);
      }
      if (Number(asset.size || 0) > 10 * 1024 * 1024) throw new Error(`更新文件过大：${file.asset}`);
      const response = await this.request(asset.browser_download_url);
      const bytes = Buffer.from(response.arrayBuffer);
      if (GitHubUpdater.sha256(bytes) !== file.sha256) throw new Error(`更新文件校验失败：${file.asset}`);
      downloads.set(file.target, { ...file, bytes });
    }
    const remoteManifest = JSON.parse(downloads.get("manifest.json").bytes.toString("utf8"));
    if (remoteManifest.id !== this.plugin.manifest.id || GitHubUpdater.normalizeVersion(remoteManifest.version) !== updateManifest.version || remoteManifest.minAppVersion !== updateManifest.minAppVersion) {
      throw new Error("远程 manifest.json 与更新清单不一致");
    }
    const adapter = this.app.vault.adapter;
    const timestamp = (/* @__PURE__ */ new Date()).toISOString().replace(/[-:.TZ]/g, "").slice(0, 14);
    const backupRoot = normalizePath(`${this.pluginDirectory}/.fde365-update-backups/${this.plugin.manifest.version}-to-${updateManifest.version}-${timestamp}`);
    const previous = /* @__PURE__ */ new Map();
    const written = [];
    for (const file of updateManifest.files) {
      const target = normalizePath(`${this.pluginDirectory}/${file.target}`);
      const exists = await adapter.exists(target);
      let bytes = null;
      if (exists) {
        bytes = file.encoding === "binary" ? Buffer.from(await adapter.readBinary(target)) : Buffer.from(await adapter.read(target), "utf8");
        const backup = normalizePath(`${backupRoot}/${file.target}`);
        await this.ensureAdapterFolder(backup.slice(0, backup.lastIndexOf("/")));
        if (file.encoding === "binary") {
          await adapter.writeBinary(backup, bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength));
        } else await adapter.write(backup, bytes.toString("utf8"));
      }
      previous.set(file.target, { exists, bytes });
    }
    try {
      for (const file of updateManifest.files) {
        const target = normalizePath(`${this.pluginDirectory}/${file.target}`);
        await this.ensureAdapterFolder(target.slice(0, target.lastIndexOf("/")));
        const download = downloads.get(file.target);
        if (file.encoding === "binary") {
          await adapter.writeBinary(target, download.bytes.buffer.slice(download.bytes.byteOffset, download.bytes.byteOffset + download.bytes.byteLength));
        } else await adapter.write(target, download.bytes.toString("utf8"));
        written.push(file.target);
      }
    } catch (error) {
      for (const targetName of written.reverse()) {
        const target = normalizePath(`${this.pluginDirectory}/${targetName}`);
        const old = previous.get(targetName);
        try {
          if (!old.exists) await adapter.remove(target);
          else if (downloads.get(targetName).encoding === "binary") {
            await adapter.writeBinary(target, old.bytes.buffer.slice(old.bytes.byteOffset, old.bytes.byteOffset + old.bytes.byteLength));
          } else await adapter.write(target, old.bytes.toString("utf8"));
        } catch (rollbackError) {
          console.error(`FDE365 Knowledge OS: failed to roll back ${targetName}`, rollbackError);
        }
      }
      throw error;
    }
  }
};
var AIKnowledgeOSSettingTab = class extends PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.addClass("fde365-settings");
    containerEl.createEl("h2", { text: "FDE365 Knowledge OS 设置" });
    new Setting(containerEl).setName("显示名称").setDesc("用于驾驶舱问候语和 AI Copilot。").addText((text) => text.setPlaceholder("Gary").setValue(this.plugin.settings.userName).onChange(async (value) => {
      this.plugin.settings.userName = value.trim() || "Gary";
      await this.plugin.saveSettings();
      this.plugin.refreshDashboard();
    }));
    new Setting(containerEl).setName("界面主题").setDesc("切换FDE365工作台的浅色或深色外观，不会修改 Obsidian 的全局主题。").addDropdown((dropdown) => dropdown.addOption("light", "浅色").addOption("dark", "深色").setValue(this.plugin.settings.colorTheme === "light" ? "light" : "dark").onChange(async (value) => {
      this.plugin.settings.colorTheme = value === "light" ? "light" : "dark";
      await this.plugin.saveSettings();
      this.plugin.refreshDashboard();
    }));
    new Setting(containerEl).setName("启动时打开驾驶舱").setDesc("Obsidian 启动后自动进入FDE365知识驾驶舱。").addToggle((toggle) => toggle.setValue(this.plugin.settings.openOnStartup).onChange(async (value) => {
      this.plugin.settings.openOnStartup = value;
      await this.plugin.saveSettings();
    }));
    new Setting(containerEl).setName("沉浸模式").setDesc("打开驾驶舱时折叠 Obsidian 原生左右侧栏。").addToggle((toggle) => toggle.setValue(this.plugin.settings.immersiveMode).onChange(async (value) => {
      this.plugin.settings.immersiveMode = value;
      await this.plugin.saveSettings();
    }));
    containerEl.createEl("h3", { text: "使用指引", attr: { id: "fde365-settings-onboarding" } });
    new Setting(containerEl).setName("新人指引").setDesc("重新查看收集、六类资产、AI 协作和本地安全边界。").addButton((button) => button.setButtonText("重新打开").onClick(() => this.plugin.openOnboarding({ force: true })));
    containerEl.createEl("h3", { text: "知识库初始化", attr: { id: "fde365-settings-blueprint" } });
    const blueprint = this.plugin.settings.blueprint || DEFAULT_SETTINGS.blueprint;
    new Setting(containerEl).setName("六类资产模板").setDesc(blueprint.conflicts?.length ? `模板 v${KNOWLEDGE_BLUEPRINT.version} · 最近检查发现 ${blueprint.conflicts.length} 个同名冲突；插件不会覆盖原内容。` : `模板 v${KNOWLEDGE_BLUEPRINT.version} · ${blueprint.lastCheckedAt ? "已检查" : "等待首次初始化"} · 只补缺失文件。`).addButton((button) => button.setButtonText("检查并修复").onClick(async () => {
      button.setDisabled(true).setButtonText("检查中…");
      try {
        await this.plugin.migrateNeutralTerminology();
        await this.plugin.migrateLegacyInboxLayout();
        await this.plugin.migrateKnowledgeContract();
        await this.plugin.bootstrapService.ensure({ notify: true });
      } finally {
        this.display();
      }
    }));
    containerEl.createEl("h3", { text: "插件更新", attr: { id: "fde365-settings-updates" } });
    const updates = this.plugin.settings.updates;
    const updateStatus = updates.pendingVersion ? `v${updates.pendingVersion} 已安装，重启 Obsidian 后生效。` : updates.lastError ? `最近检查失败：${updates.lastError}` : updates.lastCheckedAt ? `当前版本 v${this.plugin.manifest.version} · ${formatRelativeTime(Date.parse(updates.lastCheckedAt))}检查过更新。` : `当前版本 v${this.plugin.manifest.version} · 尚未检查更新。`;
    new Setting(containerEl).setName("自动安装更新").setDesc(IS_DEVELOPER_BUILD ? "开发版固定关闭自动更新，避免被用户版覆盖。" : "从 FDE365 国内更新服务获取并校验更新；不会读取或覆盖 Token、笔记和其他 Vault 数据。").addToggle((toggle) => toggle.setValue(IS_DEVELOPER_BUILD ? false : updates.autoInstall).setDisabled(IS_DEVELOPER_BUILD).onChange(async (value) => {
      if (IS_DEVELOPER_BUILD) return;
      updates.autoInstall = value;
      await this.plugin.saveSettings();
    }));
    new Setting(containerEl).setName("更新状态").setDesc(IS_DEVELOPER_BUILD ? `DEV · v${this.plugin.manifest.version} · 本地构建通道` : updateStatus).addButton((button) => button.setButtonText(IS_DEVELOPER_BUILD ? "开发版不更新" : updates.pendingVersion ? "等待重启" : "检查并安装").setDisabled(IS_DEVELOPER_BUILD || Boolean(updates.pendingVersion)).onClick(async () => {
      button.setDisabled(true).setButtonText("检查中…");
      await this.plugin.updateService.check({ manual: true, forceInstall: true });
      this.display();
    }));
    containerEl.createEl("h3", { text: "AI 服务", attr: { id: "fde365-settings-ai" } });
    if (IS_DEVELOPER_BUILD) {
      const localRuntime = this.plugin.agentRuntime?.describe?.() || { available: false, ready: false, error: "本地 Codex CLI 尚未初始化" };
      new Setting(containerEl).setName("DEV · 本地 Codex CLI").setDesc(localRuntime.available ? `使用本机 Codex CLI 的登录、Provider、默认模型和 CODEX_HOME${localRuntime.ready ? " · 运行中" : ""}。插件不会写入或覆盖任何环境变量。` : localRuntime.error);
    } else {
      renderAccountSettings(this, containerEl, FDE365_MODELS);
    }
    const assistant = this.plugin.settings.ai.assistant;
    new Setting(containerEl).setName("Agent 执行模式").setDesc(assistant.executionMode === "yolo" ? "YOLO 已开启：Agent 可在当前 Vault 内直接读写和运行本地命令，不再逐次请求批准；Vault 外访问和网络仍被阻止。" : "需要批准：Agent 读取知识库后，命令执行和文件写入会等待你确认。").addDropdown((dropdown) => dropdown.addOption("approval", "需要批准（推荐）").addOption("yolo", "YOLO（当前 Vault 内）").setValue(assistant.executionMode).onChange(async (value) => {
      assistant.executionMode = value === "yolo" ? "yolo" : "approval";
      await this.plugin.saveSettings();
      new Notice(assistant.executionMode === "yolo" ? "YOLO 已开启：下一个 Agent 任务将在当前 Vault 内自动执行" : "已切换为需要批准模式");
      this.plugin.refreshDashboard();
      this.display();
    }));
    containerEl.createEl("h3", { text: "资产网络", attr: { id: "fde365-settings-graph" } });
    new Setting(containerEl).setName("默认连接深度").setDesc("控制资产网络初次打开时展示的卫星节点和路径搜索深度。").addDropdown((dropdown) => dropdown.addOption("1", "1 层").addOption("2", "2 层").addOption("3", "3 层").setValue(String(this.plugin.settings.graphDefaultDepth || 2)).onChange(async (value) => {
      this.plugin.settings.graphDefaultDepth = Number(value);
      await this.plugin.saveSettings();
    }));
    containerEl.createEl("h3", { text: "FDE Skills", attr: { id: "fde365-settings-agents" } });
    new Setting(containerEl).setName("Skill 执行规则").setDesc("34 个项目 Skill 位于知识库 .agents/skills；执行时使用当前 Provider，并要求先读取对应 SKILL.md 合同。");
    containerEl.createEl("h3", { text: "内容生产", attr: { id: "fde365-settings-projects" } });
    new Setting(containerEl).setName("五阶段内容来源").setDesc(`读取 ${PROJECT_ROOT}，按选题、草稿、待审核、待发布、已发布展示；发布数据作为可选分析输入单独管理。`);
    containerEl.createEl("h3", { text: "知识体检", attr: { id: "fde365-settings-analytics" } });
    new Setting(containerEl).setName("统计数据来源").setDesc("只读取六类资产的真实文件、来源字段、未知项、内容阶段、链接和项目 Skill 部署状态。");
  }
};
module.exports = class AIKnowledgeOSPlugin extends Plugin {
  async onload() {
    await this.loadSettings();
    this.knowledgeRoot = await resolveKnowledgeRoot(this.app);
    configureKnowledgeRoot(this.knowledgeRoot);
    FDEWorkspace.configureKnowledgeRoot(this.knowledgeRoot);
    this.isUnloading = false;
    this.runtimeInitialized = false;
    this.buildChannel = FDE365_BUILD_CHANNEL;
    this.isDeveloperBuild = IS_DEVELOPER_BUILD;
    this.startupTimer = null;
    this.updateStartupTimer = null;
    this.router = new KnowledgeOSRouter(this);
    this.bootstrapService = new VaultBootstrapService(this, { ...KNOWLEDGE_BLUEPRINT, root: this.knowledgeRoot });
    this.fdeWorkspace = new FDEWorkspace.FDEWorkspaceService(this);
    this.agentTaskStore = new AgentTaskStore(this);
    this.providerManager = new AIProviderManager(this);
    this.accountClient = new Account.FdeAccountClient(this, requestUrl);
    this.agentRuntime = new FdeCodexAgentRuntime(this, { mode: IS_DEVELOPER_BUILD ? "local-cli" : "isolated-fde365" });
    this.updateService = new Fde365UpdateService(this);
    this.fde365Provider = this.providerManager.register(new Fde365Provider(this));
    await this.migrateProviderSettings();
    this.lastFile = this.app.workspace.getActiveFile();
    this.registerView(DASHBOARD_VIEW_TYPE, (leaf) => new FDEWorkspace.FDEDashboardView(leaf, this));
    this.registerView(INBOX_VIEW_TYPE, (leaf) => new FDEWorkspace.FDEInboxView(leaf, this));
    this.registerView(LIBRARIES_VIEW_TYPE, (leaf) => new FDEWorkspace.FDELibrariesView(leaf, this));
    this.registerView(NETWORK_VIEW_TYPE, (leaf) => new FDEWorkspace.FDENetworkView(leaf, this));
    this.registerView(CONTENT_VIEW_TYPE, (leaf) => new FDEWorkspace.FDEContentView(leaf, this));
    this.registerView(SKILLS_VIEW_TYPE, (leaf) => new FDEWorkspace.FDESkillsView(leaf, this));
    this.registerView(HEALTH_VIEW_TYPE, (leaf) => new FDEWorkspace.FDEHealthView(leaf, this));
    this.addRibbonIcon("orbit", "打开FDE365 Knowledge OS", () => this.activateView());
    this.addCommand({
      id: "open-dashboard",
      name: "打开知识驾驶舱",
      callback: () => this.activateView()
    });
    this.addCommand({
      id: "open-onboarding",
      name: "重新打开新人指引",
      callback: () => this.openOnboarding({ force: true })
    });
    this.addCommand({
      id: "repair-knowledge-blueprint",
      name: "检查并修复知识库模板",
      callback: async () => {
        await this.migrateNeutralTerminology();
        await this.migrateLegacyInboxLayout();
        await this.migrateKnowledgeContract();
        await this.bootstrapService.ensure({ notify: true });
      }
    });
    this.addCommand({
      id: "check-for-updates",
      name: "检查并安装插件更新",
      callback: () => this.updateService.check({ manual: true, forceInstall: true })
    });
    this.addCommand({
      id: "new-inbox-note",
      name: "新建待处理笔记",
      callback: async () => {
        await this.activateInbox();
        this.getInbox()?.createQuickNote();
      }
    });
    this.addCommand({
      id: "open-inbox",
      name: "打开待处理收集箱",
      callback: () => this.activateInbox()
    });
    this.addCommand({
      id: "open-knowledge-center",
      name: "打开六类资产",
      callback: () => this.activateKnowledge()
    });
    this.addCommand({
      id: "open-knowledge-map",
      name: "打开资产网络",
      callback: () => this.activateGraph()
    });
    this.addCommand({
      id: "open-project-center",
      name: "打开内容生产流水线",
      callback: () => this.activateProjects()
    });
    this.addCommand({
      id: "open-agent-center",
      name: "打开 FDE Skills",
      callback: () => this.activateAgents()
    });
    this.addCommand({
      id: "open-knowledge-analytics",
      name: "打开知识体检",
      callback: () => this.activateAnalytics()
    });
    this.addSettingTab(new AIKnowledgeOSSettingTab(this.app, this));
    this.register(() => {
      if (this.startupTimer !== null) window.clearTimeout(this.startupTimer);
      this.startupTimer = null;
      if (this.updateStartupTimer !== null) window.clearTimeout(this.updateStartupTimer);
      this.updateStartupTimer = null;
    });
    if (!IS_DEVELOPER_BUILD) {
      this.registerInterval(window.setInterval(() => {
        if (!this.isUnloading) void this.updateService.check();
      }, UPDATE_CHECK_INTERVAL_MS));
    }
    this.app.workspace.onLayoutReady(() => {
      if (!this.isUnloading) void this.initializeRuntime();
    });
  }
  async initializeRuntime() {
    if (this.runtimeInitialized || this.isUnloading) return;
    this.runtimeInitialized = true;
    const refresh = debounce(() => this.refreshDashboard(), 500);
    this.registerEvent(this.app.vault.on("create", refresh));
    this.registerEvent(this.app.vault.on("delete", refresh));
    this.registerEvent(this.app.vault.on("modify", refresh));
    this.registerEvent(this.app.vault.on("rename", refresh));
    this.registerEvent(this.app.metadataCache.on("resolved", refresh));
    this.registerEvent(this.app.workspace.on("file-open", (file) => {
      if (file) this.lastFile = file;
    }));
    try {
      const shouldNotify = Number(this.settings.blueprint?.version || 0) < KNOWLEDGE_BLUEPRINT.version;
      await this.migrateNeutralTerminology();
      await this.migrateLegacyInboxLayout();
      await this.migrateKnowledgeContract();
      await this.bootstrapService.ensure({ notify: shouldNotify });
      await this.fdeWorkspace.reloadConfig();
    } catch (error) {
      console.error("FDE365 Knowledge OS: failed to initialize knowledge blueprint", error);
      new Notice("FDE365知识库初始化失败；可在设置中重新检查", 8e3);
    }
    const shouldOpenOnboarding = Number(this.settings.onboardingVersion || 0) < ONBOARDING_VERSION;
    if ((this.settings.openOnStartup || shouldOpenOnboarding) && !this.isUnloading) {
      this.startupTimer = window.setTimeout(() => {
        this.startupTimer = null;
        if (this.isUnloading) return;
        void (async () => {
          if (this.settings.openOnStartup) {
            try {
              await this.activateView();
            } catch (error) {
              console.error("FDE365 Knowledge OS: failed to open Dashboard on startup", error);
            }
          }
          if (shouldOpenOnboarding && !this.isUnloading) this.openOnboarding();
        })();
      }, 250);
    }
    if (!IS_DEVELOPER_BUILD) {
      this.updateStartupTimer = window.setTimeout(() => {
        this.updateStartupTimer = null;
        if (!this.isUnloading) void this.updateService.check();
      }, 1e4);
    }
  }
  onunload() {
    this.isUnloading = true;
    this.onboardingModal?.close();
    this.onboardingModal = null;
    this.providerManager?.cancelAll?.();
    void this.agentRuntime?.shutdown?.();
    if (this.startupTimer !== null) window.clearTimeout(this.startupTimer);
    this.startupTimer = null;
    if (this.updateStartupTimer !== null) window.clearTimeout(this.updateStartupTimer);
    this.updateStartupTimer = null;
    this.app.workspace.detachLeavesOfType(DASHBOARD_VIEW_TYPE);
    this.app.workspace.detachLeavesOfType(INBOX_VIEW_TYPE);
    this.app.workspace.detachLeavesOfType(LIBRARIES_VIEW_TYPE);
    this.app.workspace.detachLeavesOfType(NETWORK_VIEW_TYPE);
    this.app.workspace.detachLeavesOfType(CONTENT_VIEW_TYPE);
    this.app.workspace.detachLeavesOfType(SKILLS_VIEW_TYPE);
    this.app.workspace.detachLeavesOfType(HEALTH_VIEW_TYPE);
  }
  async loadSettings() {
    const raw = await this.loadData();
    this.needsProviderMigration = Boolean(raw && (Number(raw.schemaVersion || 0) < 5 || raw.ai?.provider !== "fde365" || !raw.ai?.fde365 || raw.ai?.openaiCompatible || raw.ai?.codexCli || raw.ai?.claudeCli));
    this.settings = mergeSettings(raw || {});
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
  async migrateNeutralTerminology() {
    if (Number(this.settings.terminologyVersion || 0) >= TERMINOLOGY_VERSION) {
      return { changed: 0, conflicts: [] };
    }
    const root = this.knowledgeRoot;
    const oldDirectoryPath = normalizePath(`${root}/${LEGACY_OWNER_DIRECTORY}`);
    const newDirectoryPath = normalizePath(`${root}/${OWNER_DIRECTORY}`);
    const oldDirectory = this.app.vault.getAbstractFileByPath(oldDirectoryPath);
    const newDirectory = this.app.vault.getAbstractFileByPath(newDirectoryPath);
    const conflicts = [];
    let changed = 0;
    if (oldDirectory && newDirectory) {
      conflicts.push(`${oldDirectoryPath} 与 ${newDirectoryPath} 同时存在`);
    } else if (oldDirectory) {
      await this.app.fileManager.renameFile(oldDirectory, newDirectoryPath);
      changed += 1;
    }
    if (conflicts.length) {
      new Notice("旧版与新版个人说明书目录同时存在，未自动合并；请先确认内容后再修复模板", 1e4);
      return { changed, conflicts };
    }
    const oldFilePath = normalizePath(`${newDirectoryPath}/${LEGACY_OWNER_LABEL}说明书.md`);
    const newFilePath = normalizePath(`${newDirectoryPath}/个人说明书.md`);
    const oldFile = this.app.vault.getAbstractFileByPath(oldFilePath);
    const newFile = this.app.vault.getAbstractFileByPath(newFilePath);
    if (oldFile && newFile) {
      conflicts.push(`${oldFilePath} 与 ${newFilePath} 同时存在`);
    } else if (oldFile) {
      await this.app.fileManager.renameFile(oldFile, newFilePath);
      changed += 1;
    }
    if (conflicts.length) {
      new Notice("旧版与新版个人说明书文件同时存在，未自动合并；请先确认内容后再修复模板", 1e4);
      return { changed, conflicts };
    }
    const managedPaths = /* @__PURE__ */ new Set([
      normalizePath(`${root}/.fde/config.yaml`),
      normalizePath(`${root}/AGENTS.md`),
      normalizePath(`${root}/0-使用说明.md`),
      newFilePath
    ]);
    const skillRoot = normalizePath(`${root}/.agents/skills`);
    const skillPrefix = `${skillRoot}/`;
    const updatedPaths = /* @__PURE__ */ new Set();
    for (const file of this.app.vault.getFiles()) {
      if (!managedPaths.has(file.path) && !file.path.startsWith(skillPrefix)) continue;
      updatedPaths.add(file.path);
      const current = await this.app.vault.cachedRead(file);
      const next = neutralizeManagedTerminology(current);
      if (next === current) continue;
      await this.app.vault.modify(file, next);
      changed += 1;
    }
    const adapter = this.app.vault.adapter;
    const rewriteAdapterFile = async (path) => {
      const normalized = normalizePath(path);
      if (updatedPaths.has(normalized) || typeof adapter?.read !== "function" || typeof adapter?.write !== "function") return;
      if (typeof adapter.exists === "function" && !await adapter.exists(normalized)) return;
      const current = await adapter.read(normalized);
      const next = neutralizeManagedTerminology(current);
      if (next === current) return;
      await adapter.write(normalized, next);
      changed += 1;
    };
    await rewriteAdapterFile(`${root}/.fde/config.yaml`);
    for (const path of await listAdapterFiles(adapter, skillRoot)) await rewriteAdapterFile(path);
    this.settings.terminologyVersion = TERMINOLOGY_VERSION;
    await this.saveSettings();
    return { changed, conflicts };
  }
  async migrateLegacyInboxLayout() {
    if (Number(this.settings.inboxLayoutVersion || 0) >= INBOX_LAYOUT_VERSION) {
      return { moved: 0, conflicts: [] };
    }
    const root = this.knowledgeRoot;
    const legacyBase = normalizePath(`${root}/0-录音处理`);
    const mappings = [
      {
        label: "pending",
        source: normalizePath(`${legacyBase}/待处理录音`),
        destination: normalizePath(`${root}/0-待处理材料/待处理`)
      },
      {
        label: "processed",
        source: normalizePath(`${legacyBase}/已处理`),
        destination: normalizePath(`${root}/0-待处理材料/已处理记录`)
      }
    ];
    const conflicts = [];
    let moved = 0;
    for (const mapping of mappings) {
      const files = this.app.vault.getFiles().filter((file) => file.path.startsWith(`${mapping.source}/`)).sort((left, right) => left.path.localeCompare(right.path));
      for (const file of files) {
        const relative = file.path.slice(mapping.source.length + 1);
        let target = normalizePath(`${mapping.destination}/${relative}`);
        try {
          const isLegacyReadme = relative.toLowerCase() === "readme.md";
          if (isLegacyReadme) {
            const quarantine = normalizePath(`${root}/.fde/quarantine`);
            await ensureVaultFolder(this.app, quarantine);
            target = await uniqueVaultPath(
              this.app,
              normalizePath(`${quarantine}/legacy-recording-${mapping.label}-README.md`)
            );
          } else {
            const parent = target.includes("/") ? target.slice(0, target.lastIndexOf("/")) : "";
            if (parent) await ensureVaultFolder(this.app, parent);
            target = await uniqueVaultPath(this.app, target);
          }
          await this.app.fileManager.renameFile(file, target);
          moved += 1;
        } catch (error) {
          conflicts.push(`${file.path}: ${error instanceof Error ? error.message : String(error)}`);
        }
      }
    }
    const mappedSources = mappings.map((mapping) => `${mapping.source}/`);
    const looseFiles = this.app.vault.getFiles().filter((file) => file.path.startsWith(`${legacyBase}/`) && !mappedSources.some((source) => file.path.startsWith(source))).sort((left, right) => left.path.localeCompare(right.path));
    for (const file of looseFiles) {
      const relative = file.path.slice(legacyBase.length + 1);
      try {
        let target;
        if (relative.toLowerCase().endsWith("readme.md")) {
          const quarantine = normalizePath(`${root}/.fde/quarantine`);
          await ensureVaultFolder(this.app, quarantine);
          target = await uniqueVaultPath(
            this.app,
            normalizePath(`${quarantine}/legacy-recording-root-${relative.replaceAll("/", "--")}`)
          );
        } else {
          target = normalizePath(`${root}/0-待处理材料/待处理/${relative}`);
          const parent = target.slice(0, target.lastIndexOf("/"));
          await ensureVaultFolder(this.app, parent);
          target = await uniqueVaultPath(this.app, target);
        }
        await this.app.fileManager.renameFile(file, target);
        moved += 1;
      } catch (error) {
        conflicts.push(`${file.path}: ${error instanceof Error ? error.message : String(error)}`);
      }
    }
    const remaining = this.app.vault.getFiles().filter((file) => file.path.startsWith(`${legacyBase}/`));
    if (!conflicts.length && !remaining.length) {
      const legacyFolder = this.app.vault.getAbstractFileByPath(legacyBase);
      if (legacyFolder && !(legacyFolder instanceof TFile)) {
        try {
          await this.app.vault.delete(legacyFolder, true);
        } catch (error) {
          conflicts.push(`${legacyBase}: ${error instanceof Error ? error.message : String(error)}`);
        }
      }
    }
    if (conflicts.length) {
      new Notice(`旧录音目录迁移未完成，已保留原内容；请再次检查并修复（${conflicts.length} 项）`, 1e4);
      return { moved, conflicts };
    }
    this.settings.inboxLayoutVersion = INBOX_LAYOUT_VERSION;
    await this.saveSettings();
    if (moved) new Notice(`已将 ${moved} 个旧录音文件归并到“待处理材料”`, 6e3);
    return { moved, conflicts };
  }
  async migrateKnowledgeContract() {
    if (Number(this.settings.knowledgeContractVersion || 0) >= KNOWLEDGE_CONTRACT_VERSION) {
      return { changed: 0, conflicts: [] };
    }
    const adapter = this.app.vault.adapter;
    const targets = [
      { path: normalizePath(`${this.knowledgeRoot}/AGENTS.md`), kind: "agents" },
      { path: normalizePath(`${this.knowledgeRoot}/.fde/config.yaml`), kind: "config" },
      { path: normalizePath(`${this.knowledgeRoot}/.agents/skills/fde-health/SKILL.md`), kind: "health" }
    ];
    const conflicts = [];
    let changed = 0;
    for (const target of targets) {
      try {
        if (typeof adapter?.exists === "function" && !await adapter.exists(target.path)) continue;
        if (typeof adapter?.read !== "function" || typeof adapter?.write !== "function") continue;
        const current = await adapter.read(target.path);
        const next = migrateManagedKnowledgeContract(current, target.kind);
        if (next === current) continue;
        await adapter.write(target.path, next);
        changed += 1;
      } catch (error) {
        conflicts.push(`${target.path}: ${error instanceof Error ? error.message : String(error)}`);
      }
    }
    if (conflicts.length) {
      new Notice(`知识库规则真源迁移未完成；已保留原内容（${conflicts.length} 项）`, 1e4);
      return { changed, conflicts };
    }
    this.settings.knowledgeContractVersion = KNOWLEDGE_CONTRACT_VERSION;
    await this.saveSettings();
    return { changed, conflicts };
  }
  async markOnboardingSeen() {
    if (Number(this.settings.onboardingVersion || 0) >= ONBOARDING_VERSION) return;
    this.settings.onboardingVersion = ONBOARDING_VERSION;
    await this.saveSettings();
  }
  openOnboarding({ force = false } = {}) {
    if (this.isUnloading || !force && Number(this.settings.onboardingVersion || 0) >= ONBOARDING_VERSION) return;
    if (this.onboardingModal) return;
    this.onboardingModal = new KnowledgeOSOnboardingModal(this.app, this);
    this.onboardingModal.open();
  }
  logoResource() {
    const pluginDirectory = this.manifest.dir || `.obsidian/plugins/${this.manifest.id}`;
    return this.app.vault.adapter.getResourcePath(normalizePath(`${pluginDirectory}/assets/fde365-logo.png`));
  }
  async migrateProviderSettings() {
    if (!this.needsProviderMigration) return;
    this.settings.ai.provider = "fde365";
    this.settings.schemaVersion = 5;
    this.needsProviderMigration = false;
    await this.saveSettings();
  }
  getDashboard() {
    return this.app.workspace.getLeavesOfType(DASHBOARD_VIEW_TYPE)[0]?.view || null;
  }
  getInbox() {
    return this.app.workspace.getLeavesOfType(INBOX_VIEW_TYPE)[0]?.view || null;
  }
  getKnowledgeCenter() {
    return this.app.workspace.getLeavesOfType(LIBRARIES_VIEW_TYPE)[0]?.view || null;
  }
  getGraph() {
    return this.app.workspace.getLeavesOfType(NETWORK_VIEW_TYPE)[0]?.view || null;
  }
  getProjects() {
    return this.app.workspace.getLeavesOfType(CONTENT_VIEW_TYPE)[0]?.view || null;
  }
  getAgents() {
    return this.app.workspace.getLeavesOfType(SKILLS_VIEW_TYPE)[0]?.view || null;
  }
  getAnalytics() {
    return this.app.workspace.getLeavesOfType(HEALTH_VIEW_TYPE)[0]?.view || null;
  }
  refreshDashboard() {
    const dashboard = this.getDashboard();
    if (dashboard && typeof dashboard.render === "function") dashboard.refresh();
    const inbox = this.getInbox();
    if (inbox && typeof inbox.render === "function") inbox.refresh();
    const knowledge = this.getKnowledgeCenter();
    if (knowledge && typeof knowledge.render === "function") knowledge.refresh();
    const graph = this.getGraph();
    if (graph && typeof graph.render === "function") graph.refresh();
    const projects = this.getProjects();
    if (projects && typeof projects.render === "function") projects.refresh();
    const agents = this.getAgents();
    if (agents && typeof agents.render === "function") agents.refresh();
    const analytics = this.getAnalytics();
    if (analytics && typeof analytics.render === "function") analytics.refresh();
  }
  async toggleColorTheme() {
    this.settings.colorTheme = this.settings.colorTheme === "light" ? "dark" : "light";
    await this.saveSettings();
    this.refreshDashboard();
    new Notice(`FDE365已切换为${this.settings.colorTheme === "light" ? "浅色" : "深色"}主题`);
  }
  async revealKnowledgeLeaf(leaf) {
    await this.app.workspace.revealLeaf(leaf);
    this.app.workspace.setActiveLeaf?.(leaf, { focus: true });
    await wait(25);
  }
  async activateView() {
    let leaf = this.app.workspace.getLeavesOfType(DASHBOARD_VIEW_TYPE)[0];
    if (!leaf) {
      leaf = this.app.workspace.getLeaf("tab");
      await leaf.setViewState({ type: DASHBOARD_VIEW_TYPE, active: true });
    }
    await this.revealKnowledgeLeaf(leaf);
    if (this.settings.immersiveMode) {
      this.app.workspace.leftSplit?.collapse();
      this.app.workspace.rightSplit?.collapse();
    }
  }
  async activateInbox() {
    let leaf = this.app.workspace.getLeavesOfType(INBOX_VIEW_TYPE)[0];
    if (!leaf) {
      leaf = this.app.workspace.getLeaf("tab");
      await leaf.setViewState({ type: INBOX_VIEW_TYPE, active: true });
    }
    await this.revealKnowledgeLeaf(leaf);
    if (this.settings.immersiveMode) {
      this.app.workspace.leftSplit?.collapse();
      this.app.workspace.rightSplit?.collapse();
    }
  }
  async activateKnowledge() {
    let leaf = this.app.workspace.getLeavesOfType(LIBRARIES_VIEW_TYPE)[0];
    if (!leaf) {
      leaf = this.app.workspace.getLeaf("tab");
      await leaf.setViewState({ type: LIBRARIES_VIEW_TYPE, active: true });
    }
    await this.revealKnowledgeLeaf(leaf);
    if (this.settings.immersiveMode) {
      this.app.workspace.leftSplit?.collapse();
      this.app.workspace.rightSplit?.collapse();
    }
  }
  async activateGraph() {
    let leaf = this.app.workspace.getLeavesOfType(NETWORK_VIEW_TYPE)[0];
    if (!leaf) {
      leaf = this.app.workspace.getLeaf("tab");
      await leaf.setViewState({ type: NETWORK_VIEW_TYPE, active: true });
    }
    await this.revealKnowledgeLeaf(leaf);
    if (this.settings.immersiveMode) {
      this.app.workspace.leftSplit?.collapse();
      this.app.workspace.rightSplit?.collapse();
    }
  }
  async activateProjects() {
    let leaf = this.app.workspace.getLeavesOfType(CONTENT_VIEW_TYPE)[0];
    if (!leaf) {
      leaf = this.app.workspace.getLeaf("tab");
      await leaf.setViewState({ type: CONTENT_VIEW_TYPE, active: true });
    }
    await this.revealKnowledgeLeaf(leaf);
    if (this.settings.immersiveMode) {
      this.app.workspace.leftSplit?.collapse();
      this.app.workspace.rightSplit?.collapse();
    }
  }
  async activateAgents() {
    let leaf = this.app.workspace.getLeavesOfType(SKILLS_VIEW_TYPE)[0];
    if (!leaf) {
      leaf = this.app.workspace.getLeaf("tab");
      await leaf.setViewState({ type: SKILLS_VIEW_TYPE, active: true });
    }
    await this.revealKnowledgeLeaf(leaf);
    if (this.settings.immersiveMode) {
      this.app.workspace.leftSplit?.collapse();
      this.app.workspace.rightSplit?.collapse();
    }
  }
  async activateAnalytics() {
    let leaf = this.app.workspace.getLeavesOfType(HEALTH_VIEW_TYPE)[0];
    if (!leaf) {
      leaf = this.app.workspace.getLeaf("tab");
      await leaf.setViewState({ type: HEALTH_VIEW_TYPE, active: true });
    }
    await this.revealKnowledgeLeaf(leaf);
    if (this.settings.immersiveMode) {
      this.app.workspace.leftSplit?.collapse();
      this.app.workspace.rightSplit?.collapse();
    }
  }
  async updateGraphSnapshot(currentEdges) {
    const date = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    const current = [...new Set(currentEdges)].sort();
    const snapshot = this.settings.graphSnapshot;
    if (!snapshot || snapshot.date !== date) {
      this.settings.graphSnapshot = {
        date,
        baselineEdges: snapshot?.currentEdges || current,
        currentEdges: current
      };
      await this.saveSettings();
      const baseline2 = new Set(this.settings.graphSnapshot.baselineEdges);
      return current.filter((edge) => !baseline2.has(edge)).length;
    }
    const baseline = new Set(snapshot.baselineEdges || []);
    const added = current.filter((edge) => !baseline.has(edge)).length;
    if (JSON.stringify(snapshot.currentEdges || []) !== JSON.stringify(current)) {
      snapshot.currentEdges = current;
      await this.saveSettings();
    }
    return added;
  }
  providerLabel(providerId) {
    if (providerId === "fde365-agent") return "FDE365 Codex Agent";
    return this.providerManager.get(providerId)?.label || providerId || "AI Provider";
  }
  requestAgentApproval(options) {
    return new Promise((resolve) => new AgentApprovalModal(this.app, options, resolve).open());
  }
  requestAgentQuestion(questions) {
    if (!questions.length) return Promise.resolve({});
    return new Promise((resolve) => new AgentQuestionModal(this.app, questions, resolve).open());
  }
  cancelAgentRequest(requestId) {
    return this.agentRuntime?.cancel?.(requestId) || false;
  }
  async buildAssistantContext(prompt, sourceFiles = [], localContext = []) {
    const settings = this.settings.ai.assistant;
    const scope = settings.contextScope;
    const maxChars = Math.max(2e3, Math.min(1e5, Number(settings.maxContextChars) || 2e4));
    const context = [];
    let remaining = maxChars;
    for (const item of Array.isArray(localContext) ? localContext : []) {
      if (remaining <= 0 || !item || typeof item !== "object") break;
      const excerpt = String(item.excerpt || "").slice(0, remaining).trim();
      if (!excerpt) continue;
      context.push({
        path: String(item.path || "FDE365 本地运行上下文"),
        title: String(item.title || item.path || "FDE365 本地运行上下文"),
        excerpt
      });
      remaining -= excerpt.length;
    }
    if (remaining <= 0) return context;
    const candidates = [];
    const addFile = (value) => {
      const file = value instanceof TFile ? value : typeof value === "string" ? this.app.vault.getAbstractFileByPath(value) : null;
      const insideKnowledgeBase = file instanceof TFile && file.path.startsWith(`${ROOT}/`);
      const isRuntimeOrSkill = insideKnowledgeBase && (file.path.startsWith(`${ROOT}/.agents/`) || file.path.startsWith(`${ROOT}/.fde/`));
      if (insideKnowledgeBase && !isRuntimeOrSkill && file.extension === "md" && !candidates.some((item) => item.path === file.path)) candidates.push(file);
    };
    sourceFiles.forEach(addFile);
    if (scope !== "none" && !sourceFiles.length) addFile(this.app.workspace.getActiveFile());
    if (scope === "retrieved") {
      const words = String(prompt || "").toLowerCase().split(/[\s，。！？；、,.!?;:：]+/).filter((word) => word.length > 1).slice(0, 12);
      const scored = [];
      for (const file of this.app.vault.getMarkdownFiles()) {
        if (!file.path.startsWith(`${ROOT}/`) || file.path.startsWith(`${ROOT}/.agents/`) || file.path.startsWith(`${ROOT}/.fde/`) || file.path.startsWith(`${ROOT}/7-系统/`)) continue;
        if (candidates.some((item) => item.path === file.path) || file.path.startsWith(`${AGENT_ROOT}/运行记录/`) || file.path.startsWith(`${AGENT_ROOT}/输出/`)) continue;
        const content = await this.app.vault.cachedRead(file);
        const haystack = `${file.basename}
${content}`.toLowerCase();
        let score = 0;
        words.forEach((word) => {
          if (file.basename.toLowerCase().includes(word)) score += 5;
          score += Math.min(5, haystack.split(word).length - 1);
        });
        if (score > 0) scored.push({ file, score });
      }
      scored.sort((a, b) => b.score - a.score || b.file.stat.mtime - a.file.stat.mtime);
      scored.slice(0, 4).forEach((item) => addFile(item.file));
    }
    for (const file of candidates.slice(0, 6)) {
      if (remaining <= 0) break;
      const raw = await this.app.vault.cachedRead(file);
      const excerpt = raw.slice(0, Math.min(remaining, Math.max(1e3, Math.floor(maxChars / Math.max(1, candidates.length))))).trim();
      if (!excerpt) continue;
      context.push({ path: file.path, title: file.basename, excerpt });
      remaining -= excerpt.length;
    }
    return context;
  }
  async askAssistant({ requestId, prompt, history = [], systemPrompt, sourceFiles = [], localContext = [], sessionId = "", onEvent = null }) {
    const context = await this.buildAssistantContext(prompt, sourceFiles, localContext);
    const messages = [
      { role: "system", content: systemPrompt || "你是FDE365知识助手。" },
      ...history.filter((message) => !message.error && ["user", "assistant"].includes(message.role) && message.content).slice(-6).map((message) => ({ role: message.role, content: message.content })),
      { role: "user", content: prompt }
    ];
    if (!IS_DEVELOPER_BUILD) await this.providerManager.preflight();
    return this.agentRuntime.complete({ requestId, mode: "chat", messages, context, sessionId, onEvent });
  }
  async saveAssistantOutput(message, viewName = "AI 助手", options = {}) {
    await ensureVaultFolder(this.app, AI_OUTPUT_ROOT);
    const date = /* @__PURE__ */ new Date();
    const stamp = date.toISOString().replace(/[-:.TZ]/g, "").slice(0, 14);
    const base = `${AI_OUTPUT_ROOT}/${stamp}-${safeName(viewName)}.md`;
    let path = base;
    let index = 2;
    while (this.app.vault.getAbstractFileByPath(path) || await this.app.vault.adapter.exists(path)) {
      path = base.replace(/\.md$/, `-${index}.md`);
      index += 1;
    }
    const result = message.result || {};
    const conversationId = options.conversationId || result.conversationId || "";
    const sourceFiles = Array.isArray(options.sourceFiles) ? options.sourceFiles.map(String).filter(Boolean) : [];
    const prompt = String(options.prompt || "").trim();
    const content = `---
type: ai-assistant-output
provider: ${yamlQuote(result.provider || "unknown")}
provider_version: ${yamlQuote(result.providerVersion || "")}
model: ${yamlQuote(result.model || "")}
conversation_id: ${yamlQuote(conversationId)}
source_files: ${JSON.stringify(sourceFiles)}
user_prompt: ${yamlQuote(prompt)}
created_at: ${date.toISOString()}
source_view: ${yamlQuote(viewName)}
tags:
  - ai/assistant-output
---

# ${viewName} · AI 对话

${prompt ? `## 你

${prompt}

` : ""}## FDE365

${message.content}
`;
    return this.app.vault.create(path, content);
  }
  async runAssistantAgent(prompt) {
    const agent = {
      id: "assistant",
      name: "FDE365助手",
      description: "基于当前本地知识上下文完成用户提交的深度任务。",
      output: "分析结果"
    };
    const active = this.app.workspace.getActiveFile();
    return this.executeAgent(agent, prompt, active ? [active] : []);
  }
  async executeAgent(agent, prompt, sources = [], options = {}) {
    if (options.visibleConversation !== true) {
      new Notice("请从右侧 FDE365 Agent 对话启动任务");
      return null;
    }
    let capability;
    try {
      const runtime = this.agentRuntime.describe();
      if (!runtime.available) throw new AIProviderError("AGENT_RUNTIME_MISSING", runtime.error || "未找到 Codex Agent 运行组件");
      capability = IS_DEVELOPER_BUILD ? { model: "本机 Codex 默认模型" } : (await this.providerManager.preflight()).capability;
    } catch (error) {
      new Notice(`无法启动 Agent：${error instanceof Error ? error.message : String(error)}`);
      if (["PROVIDER_NOT_CONFIGURED", "PROVIDER_UNAVAILABLE", "INCOMPATIBLE_VERSION", "AUTH_FAILED", "MODEL_NOT_FOUND"].includes(error?.code)) this.openSettings("ai");
      return null;
    }
    const task = await this.agentTaskStore.createRun(agent, prompt, sources, {
      provider: "fde365-agent",
      providerVersion: "codex-app-server-responses",
      model: capability.model || "",
      label: IS_DEVELOPER_BUILD ? "DEV · 本地 Codex CLI" : "FDE365 Codex Agent"
    });
    if (typeof options.onTaskStart === "function") options.onTaskStart(task);
    new Notice(`${agent.name} 已进入执行队列 · ${IS_DEVELOPER_BUILD ? "本地 Codex CLI" : "FDE365 Codex Agent"}`);
    await this.agentTaskStore.transition(task, AGENT_RUN_STATUSES.RUNNING, {
      provider_version: "codex-app-server-responses",
      model: capability.model || "",
      started_at: (/* @__PURE__ */ new Date()).toISOString(),
      error: ""
    });
    this.refreshDashboard();
    try {
      const context = await this.buildAssistantContext(prompt, sources, agent.localContext || []);
      const result = await this.agentRuntime.complete({
        requestId: task.taskId,
        mode: "agent",
        messages: [
          { role: "system", content: agent.systemPrompt || `你是“${agent.name}”。${agent.description} 输出类型：${agent.output}。请区分事实、推断和建议，并明确引用来源。` },
          { role: "user", content: prompt }
        ],
        context,
        sessionId: options.sessionId || "",
        onEvent: options.onEvent
      });
      if (!result.content?.trim()) throw new AIProviderError("EMPTY_RESPONSE", "AI Provider 返回了空内容");
      const outputFile = await this.agentTaskStore.saveOutput(task, result);
      await this.agentTaskStore.transition(task, AGENT_RUN_STATUSES.WAITING_REVIEW, {
        finished_at: (/* @__PURE__ */ new Date()).toISOString(),
        conversation_id: result.conversationId || "",
        output_file: outputFile.path,
        reviewed: false,
        error: ""
      });
      this.lastAgentResult = { task, result, outputFile };
      new Notice(`${agent.name} 已完成，结果已生成并等待人工验收`);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      const nextStatus = ["PROVIDER_NOT_CONFIGURED", "PROVIDER_UNAVAILABLE", "INCOMPATIBLE_VERSION", "AUTH_FAILED", "MODEL_NOT_FOUND"].includes(error?.code) ? AGENT_RUN_STATUSES.BLOCKED : error?.code === "CANCELLED" ? AGENT_RUN_STATUSES.CANCELLED : AGENT_RUN_STATUSES.FAILED;
      await this.agentTaskStore.transition(task, nextStatus, {
        finished_at: (/* @__PURE__ */ new Date()).toISOString(),
        error: message
      });
      new Notice(`${agent.name} 执行未完成：${message}`);
    } finally {
      this.refreshDashboard();
    }
    return task;
  }
  openSettings(section) {
    this.app.setting?.open();
    this.app.setting?.openTabById(this.manifest.id);
    if (section) window.setTimeout(() => {
      document.querySelector(`#fde365-settings-${section}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }
};
module.exports.__testables = Object.freeze({
  FDE365_BUILD_CHANNEL,
  IS_DEVELOPER_BUILD,
  AIProviderError,
  AIProviderManager,
  Fde365Provider,
  Fde365UpdateService,
  VaultBootstrapService,
  mergeSettings,
  buildOpenAIMessages,
  FDE365_BASE_URL,
  FDE365_CHAT_ENDPOINT,
  FDE365_MODELS,
  DEFAULT_ROOT,
  LEGACY_ROOT,
  TERMINOLOGY_VERSION,
  INBOX_LAYOUT_VERSION,
  KNOWLEDGE_CONTRACT_VERSION,
  LEGACY_OWNER_DIRECTORY,
  OWNER_DIRECTORY,
  neutralizeManagedTerminology,
  migrateManagedKnowledgeContract,
  inferInboxTags,
  inferInboxCategory,
  configureKnowledgeRoot,
  resolveKnowledgeRoot,
  ONBOARDING_STEPS,
  ONBOARDING_VERSION,
  FDE365_RELEASE_REPOSITORY,
  FDE365_RELEASE_API,
  FDE365_UPDATE_ORIGIN
});
