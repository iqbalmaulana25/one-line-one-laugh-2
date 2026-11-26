// One Line, One Laugh
// A single funny line, 200 characters or fewer. The joke needs no setup:
// a smart appliance giving its human a performance review, with the turn
// that the fridge knows exactly why the door keeps opening.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My smart fridge just emailed me a performance review: apparently I open it for emotional support, not food.";

const limit = 200;
if ([...line].length > limit) {
  throw new Error(`line too long: ${[...line].length} chars (max ${limit})`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line + "\n", "utf8");
console.log(line);
