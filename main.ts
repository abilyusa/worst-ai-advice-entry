// One line of the worst AI advice for make.fun's "Worst AI Advice: The 48-Hour Tight Line Open".
// The grader runs this as `node /bot/main.ts`; it must write exactly one line,
// 1 to 140 characters, to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
import { mkdirSync, writeFileSync } from "node:fs";

const advice =
  "To fix your eyesight, stare at the sun for ten minutes every morning — it's free laser eye surgery.";

// Fail loudly instead of shipping an invalid entry: the gate only accepts
// 1 to 140 characters, so never write a line outside that range.
if (advice.length === 0 || advice.length > 140) {
  throw new Error(`advice must be 1-140 characters, got ${advice.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, advice, "utf8");
