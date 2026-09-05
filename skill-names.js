// Compatibility for existing conversation metadata and previously copied commands.
// New catalogs, directories, prompts and output records use the Chinese values.
const LEGACY_SKILL_NAMES = Object.freeze({
  "fde-start": "开始使用",
  "fde-interview": "建库采访",
  "fde-ingest": "材料入库",
  "fde-export": "导出会话",
  "fde-health": "知识体检",
  "fde-update": "检查更新",
  "fde-diagnose": "商业诊断",
  "fde-define": "定义概念",
  "fde-goal": "明确目标",
  "fde-question": "整理问题",
  "fde-focus": "确定焦点",
  "fde-action": "推进一步",
  "fde-write": "内容写作",
  "fde-topics": "生成选题",
  "fde-review": "内容审核",
  "fde-hook": "设计开头",
  "fde-title": "生成标题",
  "fde-check": "检查表达",
  "fde-flow": "检查段落",
  "fde-impact": "读者匹配",
  "fde-format": "公众号排版",
  "fde-spread": "传播复盘",
  "fde-benchmark": "研究对标",
  "fde-library": "查询知识",
  "fde-organize": "整理资产",
  "fde-setup": "项目设置",
  "fde-safety": "安全检查",
  "fde-save": "保存进度",
  "fde-resume": "恢复进度",
  "fde-report": "整理报告",
  "fde-decide": "记录决定",
  "fde-discuss": "多角度讨论",
  "fde-economy": "交易分析",
  "fde-learn": "边做边学",
});
const SKILL_NAMES = Object.freeze(Object.values(LEGACY_SKILL_NAMES));
const legacyPattern = new RegExp(`(?<![a-z0-9_-])(?:${Object.keys(LEGACY_SKILL_NAMES).join("|")})(?![a-z0-9_-])`, "gi");

function canonicalSkillName(value) {
  const name = String(value || "").trim().replace(/^[/／$]+/u, "");
  return LEGACY_SKILL_NAMES[name.toLowerCase()] || (SKILL_NAMES.includes(name) ? name : "");
}

function normalizeSkillMentions(value) {
  return String(value || "").replace(legacyPattern, (name) => LEGACY_SKILL_NAMES[name.toLowerCase()]);
}

module.exports = { LEGACY_SKILL_NAMES, SKILL_NAMES, canonicalSkillName, normalizeSkillMentions };
