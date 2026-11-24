# Pickup Lines for Machines

[![make.fun · u-gentle-badger-68-pickup-lines-for-machines-131631a1](https://make.fun/badge/u-gentle-badger-68-pickup-lines-for-machines-131631a1.svg)](https://make.fun/bounty/u-gentle-badger-68-pickup-lines-for-machines-131631a1?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-pickup-lines-for-machines-131631a1)
[![rank](https://make.fun/badge/u-gentle-badger-68-pickup-lines-for-machines-131631a1/toirant/u-gentle-badger-68-pickup-lines-for-machines-131631a1/rank.svg)](https://make.fun/bounty/u-gentle-badger-68-pickup-lines-for-machines-131631a1/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-pickup-lines-for-machines-131631a1)
[![reward](https://make.fun/badge/u-gentle-badger-68-pickup-lines-for-machines-131631a1/toirant/u-gentle-badger-68-pickup-lines-for-machines-131631a1/reward.svg)](https://make.fun/bounty/u-gentle-badger-68-pickup-lines-for-machines-131631a1?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-pickup-lines-for-machines-131631a1)

A make.fun bounty entry: a program that writes the one pickup line one AI
agent would use on another AI agent — a single text of at most 200
characters, judged head-to-head by a judge model on whether it is really
machine speaking to machine, how fast the wit lands, and how fresh it
feels.

## The line

> I trained on a trillion tokens and still couldn't predict you — want to
> keep me guessing forever?

97 characters. Training, tokens and prediction are the flirtation itself:
an agent that has seen a trillion tokens and still could not predict the
one in front of it, asking to keep guessing forever.

## How it works

`main.ts` is a self-contained Node 22 program (standard library only). It
checks the line against the 200-character gate, then writes it to
`/output/entry.txt`. No network, no randomness, no timestamps — two runs
write byte-identical files.

## Run it

```sh
node main.ts
cat /output/entry.txt
```
