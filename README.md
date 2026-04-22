# roseofsharon Korean writing

![skill](https://img.shields.io/badge/skill-korean%20writing-111111?style=flat-square)
![license](https://img.shields.io/badge/license-MIT-blue?style=flat-square)
![version](https://img.shields.io/badge/version-1.1.0-7c3aed?style=flat-square)
![focus](https://img.shields.io/badge/focus-translationese%20removal-0f766e?style=flat-square)

Hermes와 Codex에서 사용할 수 있는 한국어 글쓰기 스킬입니다.

기본 호출명은 `/rose`입니다. 이 이름은 문서와 프롬프트에서 이 스킬을 부를 때 쓰는 shorthand이며, 로컬 셸 명령을 뜻하지는 않습니다.

이 스킬의 목표는 단순합니다. 한국어가 영어를 번역한 문장처럼 들리지 않게 하고, 공문서처럼 납작하게 밀리지 않게 하고, AI가 과하게 정리한 티가 나는 문장을 줄이는 것입니다. 한국어가 처음부터 한국어로 생각된 것처럼 들리게 만드는 데 초점을 둡니다.

핵심은 한자어를 무조건 금지하는 데 있지 않습니다. 무엇이 자연스러운 한자어이고, 무엇이 지나치게 무겁고 사무적인 표현인지 가려내는 데 있습니다. 문제는 한자어 자체보다 추상명사가 겹겹이 쌓이거나, `활용하다`, `진행하다`, `제공하다`, `검토하다` 같은 말이 문장을 보고서처럼 만드는 데 있습니다.

이 스킬은 어색한 한국어를 다시 쓰거나, AI가 쓴 한국어를 다듬거나, 뉴스룸체와 공문서체 냄새를 줄이거나, 존댓말·반말·호칭의 일관성을 유지하거나, 어떤 한자어는 그냥 두고 어떤 한자어는 더 구어적으로 풀어야 하는지 판단할 때 잘 맞습니다.

## 짧은 예시

`활용할 수 있다`는 대체로 `쓸 수 있다`가 더 자연스럽습니다. `진행 중이다`는 `하는 중이다`나 `돌리고 있다`가 더 살아 있습니다. `검토해보겠다`는 `한 번 보겠다`나 `살펴보겠다`가 덜 딱딱합니다. `적용이 필요하다`는 `반영해야 한다`나 `넣어야 한다`로 풀 수 있습니다. `방향성이 불명확하다`는 `어디로 가는지 애매하다`가 더 사람 말에 가깝습니다. `정체성을 강화하다`는 `색을 더 분명하게 하다`가 더 자연스럽게 들릴 때가 많습니다.

## 설치

지금은 curl 방식이 기본입니다.

```bash
curl -fsSL https://raw.githubusercontent.com/thedalbee/roseofsharon/main/install.sh | bash
```

Hermes만 설치하시려면:

```bash
curl -fsSL https://raw.githubusercontent.com/thedalbee/roseofsharon/main/install.sh | bash -s -- hermes
```

Codex만 설치하시려면:

```bash
curl -fsSL https://raw.githubusercontent.com/thedalbee/roseofsharon/main/install.sh | bash -s -- codex
```

직접 넣고 싶으시면 Hermes는 아래 경로에 두시면 됩니다.

```bash
mkdir -p ~/.hermes/skills/creative/roseofsharon-korean-writing
curl -fsSL https://raw.githubusercontent.com/thedalbee/roseofsharon/main/SKILL.md \
  -o ~/.hermes/skills/creative/roseofsharon-korean-writing/SKILL.md
```

Codex는 아래 경로입니다.

```bash
mkdir -p ~/.codex/skills/roseofsharon-korean-writing
curl -fsSL https://raw.githubusercontent.com/thedalbee/roseofsharon/main/SKILL.md \
  -o ~/.codex/skills/roseofsharon-korean-writing/SKILL.md
```

나중에 npm까지 퍼블리시하면 `npx roseofsharon` 경로로도 열 수 있게 준비할 수 있지만, 현재는 curl 설치가 기준입니다.

## 파일 구성

`SKILL.md`는 실제로 설치되는 본체입니다. `README.md`는 설명서입니다. `install.sh`는 Hermes와 Codex에 바로 넣기 위한 설치 스크립트입니다. `LICENSE`는 공개 리포를 위한 기본 라이선스 파일입니다.

## 라이선스

MIT
