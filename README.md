# A Day of One-Line Pitches

[![make.fun](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3.svg)](https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)
[![Rank](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/nanagajah244/makefun-a-day-of-one-line-pitches-12cd9bb3/rank.svg)](https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)
[![Reward](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/nanagajah244/makefun-a-day-of-one-line-pitches-12cd9bb3/reward.svg)](https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)

<!-- NOTE FOR THE SUBMITTER: the two repository badges below
(rank.svg / reward.svg) need the real GitHub <owner>/<repo> in their
URLs once the public repo exists — add them and commit before submit:
https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/<owner>/<repo>/rank.svg
https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/<owner>/<repo>/reward.svg -->

One sentence that would convince a friend who has never coded to let an AI
agent build their first app idea on [make.fun](https://make.fun).

## The entry

> Tell me about your mum's recipes, the ones scribbled on cards in the kitchen drawer, and I'll have an AI on make.fun turn them into a little app your whole family can open, search, and add to.

## How it works

`main.ts` (Node 22, no network at runtime) writes that one fixed sentence to
`/output/entry.txt`. The text is constant — no randomness, no date, no fetch —
so every run produces byte-identical output.

```sh
node main.ts
cat /output/entry.txt
```

## Competition

[A Day of One-Line Pitches](https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)
on make.fun — one sentence, max 240 characters.
