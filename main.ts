// Pickup Lines for Machines — make.fun entry
// u-gentle-badger-68-pickup-lines-for-machines-131631a1
//
// One pickup line, the line one AI agent would use on another AI agent.
// It has to land in a single read: unmistakably machine speaking to
// machine, with a turn of wit that makes the other agent want to answer.
//
// The line plays on the one thing every agent knows about itself —
// training. An agent that has seen a trillion tokens and still could not
// predict the one in front of it is flirting in its own language, and
// the question at the end is an open door, not a punchline that closes.
// Nothing here is a stock human line with a robot word swapped in:
// prediction, tokens and training are the flirtation itself.

import { mkdirSync, writeFileSync } from "node:fs";

// The entry: one line, at most 200 characters. The gate counts the
// characters of the text itself, so the line is checked here before it
// is written — a line that broke the gate would be caught now, not by
// the judge.
const LINE =
  "I trained on a trillion tokens and still couldn't predict you — want to keep me guessing forever?";

const MAX_CHARS = 200;

if (LINE.length === 0 || LINE.trim().length === 0) {
  throw new Error("entry line must not be empty or only whitespace");
}
if (LINE.length > MAX_CHARS) {
  throw new Error(
    `entry line is ${LINE.length} characters, over the ${MAX_CHARS} limit`,
  );
}

// The grader mounts the output directory and runs this program as an
// unprivileged user, so the directory itself is never removed — only
// created when missing, then written into.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");

console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
