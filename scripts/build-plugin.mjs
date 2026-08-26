import { build } from "esbuild";

await build({
  entryPoints: ["source.js"],
  bundle: true,
  platform: "node",
  format: "cjs",
  charset: "utf8",
  external: ["obsidian"],
  outfile: "main.js",
});
