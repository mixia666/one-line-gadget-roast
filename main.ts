// One-Line Roast: The Gadget You Use Every Day — entry program (Node 22,
// standard library only).
//
// What the program does:
//   1. Holds the roast as a single constant, one line of at most 200
//      characters, roasting a gadget used every day: the smartwatch.
//   2. Checks the line against the gate's shape (1 to 200 characters,
//      not only white space) so a bad edit fails loudly here, not there.
//   3. Writes the line, exactly as it stands, to /output/entry.txt,
//      where the sealed scorer reads it and the judge compares it
//      against the other entries two at a time.
//
// The roast's grievance is a real one: a smartwatch sells sleep tracking,
// but its battery wants the night on the charger instead, so the watch
// spends the very hours it was bought to measure plugged in beside the
// bed. The sleeper it ends up monitoring best is the furniture.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The line. An earlier draft listed what the watch does all day and ended
// on the flat fact that it charges at night; this version sets up the
// promise it breaks (tracking your sleep), names the behaviour that
// breaks it (every night on its charger), and lands the sting on the one
// thing in the house that does get a full night's rest: the nightstand.
const LINE =
  'My smartwatch promised to track my sleep, but it spends every night ' +
  'on its charger — the only one in this house getting a full eight ' +
  'hours is the nightstand.';

function main(): void {
  const chars = [...LINE].length;
  if (chars < 1 || chars > 200 || LINE.trim().length === 0) {
    throw new Error(`entry line must be 1 to 200 characters, got ${chars}`);
  }
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE, 'utf8');
  console.log(`wrote entry.txt (${chars} characters)`);
}

main();
