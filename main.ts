import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "No. You only plug me in at 3 AM when you're lonely and leveraged \u2014 I'm a wallet, not a booty call.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The gate only accepts 1 to 200 characters of non-blank UTF-8 text, so
// refuse to write anything that would fail it instead of shipping it.
if (line.trim().length === 0 || [...line].length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${[...line].length}`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
