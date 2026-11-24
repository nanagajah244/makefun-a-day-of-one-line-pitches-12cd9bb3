import { mkdirSync, writeFileSync } from "node:fs";

// One sentence (max 240 chars) pitching a non-coder friend on letting an
// AI agent build their first app idea on make.fun. Fixed text: no randomness,
// no date, no network — both grader runs produce byte-identical output.
const ENTRY =
  "Tell me about your mum's recipes, the ones scribbled on cards in the kitchen drawer, and I'll have an AI on make.fun turn them into a little app your whole family can open, search, and add to.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
