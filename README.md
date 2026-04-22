# roseofsharon Korean writing

![skill](https://img.shields.io/badge/skill-korean%20writing-111111?style=flat-square)
![license](https://img.shields.io/badge/license-MIT-blue?style=flat-square)
![version](https://img.shields.io/badge/version-1.1.0-7c3aed?style=flat-square)
![focus](https://img.shields.io/badge/focus-translationese%20removal-0f766e?style=flat-square)

A Korean writing skill for Hermes and Codex.

Default chat invocation: `/rose`

The point is simple: make Korean sound like it was originally thought in Korean.
Not translated from English. Not flattened into office prose. Not polished into generic AI cleanliness.

This skill comes out of the roseofsharon project and focuses on:
- translationese removal
- register consistency
- better everyday Korean rhythm
- reducing AI/officese diction
- using Sino-Korean words more intelligently instead of blindly banning them
- defaulting to paragraphs over tables and lists unless the user asks for structure

## What it does

It helps with:
- rewriting awkward Korean
- editing AI-generated Korean
- reducing report-style and newsroom-style stiffness
- keeping 존댓말/반말/호칭 consistent
- deciding which 한자어 are normal, which are heavy, and which should become more spoken Korean

## Core idea

Not all 한자어 are bad.

The real problem is when Korean gets clogged with:
- abstract noun stacks
- office verbs like 활용하다, 진행하다, 제공하다, 검토하다
- sentence rhythm that sounds written for a deck, report, or policy memo
- translated-English structure

So this repo does not say "ban Sino-Korean words."
It sorts them.

## Quick examples

- 활용할 수 있다 → 쓸 수 있다 / 써먹을 수 있다
- 진행 중이다 → 하는 중이다 / 돌리고 있다
- 검토해보겠다 → 한 번 보겠다 / 살펴보겠다
- 적용이 필요하다 → 반영해야 한다 / 넣어야 한다
- 방향성이 불명확하다 → 어디로 가는지 애매하다
- 정체성을 강화하다 → 색을 더 분명하게 하다

More examples:
- `examples/before-after.md`
- `examples/sample-prompts.md`

## Install

### curl

This is the primary install path right now:

```bash
curl -fsSL https://raw.githubusercontent.com/thedalbee/roseofsharon/main/install.sh | bash
```

Tool-specific:

```bash
curl -fsSL https://raw.githubusercontent.com/thedalbee/roseofsharon/main/install.sh | bash -s -- hermes
curl -fsSL https://raw.githubusercontent.com/thedalbee/roseofsharon/main/install.sh | bash -s -- codex
```

### npx later

If you publish this package to npm later, this can become the shorter install path:

```bash
npx roseofsharon
```

Tool-specific:

```bash
npx roseofsharon hermes
npx roseofsharon codex
```

### Manual install

Hermes:

```bash
mkdir -p ~/.hermes/skills/creative/roseofsharon-korean-writing
curl -fsSL https://raw.githubusercontent.com/thedalbee/roseofsharon/main/SKILL.md \
  -o ~/.hermes/skills/creative/roseofsharon-korean-writing/SKILL.md
```

Codex:

```bash
mkdir -p ~/.codex/skills/roseofsharon-korean-writing
curl -fsSL https://raw.githubusercontent.com/thedalbee/roseofsharon/main/SKILL.md \
  -o ~/.codex/skills/roseofsharon-korean-writing/SKILL.md
```

## Files

- `SKILL.md` — the installable skill
- `install.sh` — shell installer for Hermes / Codex / both
- `package.json` + `bin/install.js` — npx installer path for npm publication
- `examples/before-after.md` — rewrite examples
- `examples/sample-prompts.md` — useful prompt patterns

## Suggested next steps before publishing

- publish the GitHub repo
- if you want `npx roseofsharon-korean-writing`, publish the package to npm too
- add a Korean-focused README screenshot or cover image
- add 10 to 20 more before/after examples
- test both `install.sh` and the npx installer after the repo is public
- optionally add an English README section for discoverability

## License

MIT
