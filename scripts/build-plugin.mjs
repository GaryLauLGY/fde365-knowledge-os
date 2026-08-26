import { build } from "esbuild";

const channelArgument = process.argv.find((argument) => argument.startsWith("--channel="));
const channel = channelArgument ? channelArgument.slice("--channel=".length) : "user";
if (!new Set(["user", "dev"]).has(channel)) throw new Error(`Unsupported build channel: ${channel}`);
const outfile = channel === "dev" ? "main.dev.js" : "main.js";

await build({
  entryPoints: ["source.js"],
  bundle: true,
  platform: "node",
  format: "cjs",
  charset: "utf8",
  external: ["obsidian"],
  outfile,
  define: {
    __FDE365_BUILD_CHANNEL__: JSON.stringify(channel),
  },
});

console.log(`Built ${channel} channel -> ${outfile}`);
