const { mkdirSync, writeFileSync } = require('node:fs');
const { join } = require('node:path');

const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const outputPath = join(outputDirectory, 'entry.txt');
// A farewell from the agent, with the shutdown itself as the final turn.
const entry = 'I’d say I’ll remember you, but the memory is in the part you’re unplugging.';

mkdirSync(outputDirectory, { recursive: true });
writeFileSync(outputPath, entry, 'utf8');
