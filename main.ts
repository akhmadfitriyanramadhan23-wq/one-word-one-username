// One Word, One Username, One Reward — u-rusdyxbt-one-word-one-username-one-reward-1a191fae
// Writes the entrant's own make.fun username (one word, at most 30 characters)
// Node 22, standard library only, no network, deterministic.
// The entry is the account's own handle, sent as one word with no gloss.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "akhmadfitriyanramadhan23-wq";
const MAX = 30;

if (ENTRY.length < 1 || ENTRY.length > MAX) {
  throw new Error(`entry is ${ENTRY.length} characters, gate needs 1–${MAX}`);
}
if (/\s/.test(ENTRY)) throw new Error("entry must be a single word");
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
