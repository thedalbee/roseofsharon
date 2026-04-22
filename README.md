# roseofsharon Korean writing

![skill](https://img.shields.io/badge/skill-korean%20writing-111111?style=flat-square)
![license](https://img.shields.io/badge/license-MIT-blue?style=flat-square)
![version](https://img.shields.io/badge/version-1.1.0-7c3aed?style=flat-square)
![focus](https://img.shields.io/badge/focus-translationese%20removal-0f766e?style=flat-square)

Hermes와 Codex에서 쓸 수 있는 한국어 글쓰기 스킬이다.

기본 호출명은 `/rose`다. 이건 사용자-facing shorthand라는 뜻이고, 로컬 셸 명령이 아니라 문서와 프롬프트에서 이 스킬을 부를 때 쓰는 이름이다.

이 스킬의 목표는 단순하다. 한국어를 "영어를 번역한 문장"처럼 쓰지 않게 하는 것. 공문서처럼 납작하게 밀지 않는 것. AI가 다듬은 티가 나는 과잉정리 문장을 줄이는 것이다. 한국어가 처음부터 한국어로 생각된 것처럼 들리게 만드는 데 초점을 둔다.

핵심은 한자어를 무조건 금지하는 게 아니라, 뭐가 자연스러운 한자어이고 뭐가 무거운 사무용 표현인지 가려내는 데 있다. 문제는 한자어 자체보다 추상명사가 겹겹이 쌓이거나, `활용하다`, `진행하다`, `제공하다`, `검토하다` 같은 말이 문장을 보고서처럼 만드는 데 있다.

이 스킬은 이런 작업에 맞는다. 어색한 한국어를 다시 쓰기, AI가 쓴 한국어 다듬기, 뉴스룸체나 공문서체 냄새 줄이기, 존댓말·반말·호칭 일관성 유지하기, 그리고 어떤 한자어는 그냥 두고 어떤 한자어는 더 구어적으로 풀어야 하는지 판단하기.

## 짧은 예시

`활용할 수 있다`는 대체로 `쓸 수 있다`가 낫다. `진행 중이다`는 `하는 중이다`나 `돌리고 있다`가 더 자연스러운 경우가 많다. `검토해보겠다`는 `한 번 보겠다`나 `살펴보겠다`가 덜 딱딱하다. `적용이 필요하다`는 `반영해야 한다`나 `넣어야 한다`로 바꾸면 숨이 좀 돈다. `방향성이 불명확하다`는 `어디로 가는지 애매하다`로 풀 수 있다. `정체성을 강화하다`는 `색을 더 분명하게 하다`가 더 사람 말처럼 들릴 때가 많다.

예시는 여기 더 있다.

`examples/before-after.md`
`examples/sample-prompts.md`

## 설치

지금은 curl 방식이 메인이다.

```bash
curl -fsSL https://raw.githubusercontent.com/thedalbee/roseofsharon/main/install.sh | bash
```

Hermes만 설치하려면 이렇게:

```bash
curl -fsSL https://raw.githubusercontent.com/thedalbee/roseofsharon/main/install.sh | bash -s -- hermes
```

Codex만 설치하려면 이렇게:

```bash
curl -fsSL https://raw.githubusercontent.com/thedalbee/roseofsharon/main/install.sh | bash -s -- codex
```

직접 넣고 싶으면 Hermes는 아래 경로에 두면 된다.

```bash
mkdir -p ~/.hermes/skills/creative/roseofsharon-korean-writing
curl -fsSL https://raw.githubusercontent.com/thedalbee/roseofsharon/main/SKILL.md \
  -o ~/.hermes/skills/creative/roseofsharon-korean-writing/SKILL.md
```

Codex는 아래 경로다.

```bash
mkdir -p ~/.codex/skills/roseofsharon-korean-writing
curl -fsSL https://raw.githubusercontent.com/thedalbee/roseofsharon/main/SKILL.md \
  -o ~/.codex/skills/roseofsharon-korean-writing/SKILL.md
```

나중에 npm까지 퍼블리시하면 `npx roseofsharon`으로도 갈 수 있게 준비는 해놨다. 다만 지금은 아직 npm publish 전이라 curl이 기준이다.

## 파일 구성

`SKILL.md`는 실제 설치되는 스킬 파일이다. `install.sh`는 Hermes와 Codex에 바로 넣는 셸 설치 스크립트다. `package.json`과 `bin/install.js`는 나중에 npx 경로로 열어두기 위한 준비물이다. `examples/before-after.md`와 `examples/sample-prompts.md`에는 전후 예시와 호출 예시가 들어 있다.

## 앞으로 더 손볼 수 있는 것

README 상단에 더 강한 한국어 전후 예시를 하나 붙이면 첫인상이 더 좋아진다. before/after 예시도 지금보다 10개 정도 더 늘리면 신뢰도가 올라간다. 실제 한국어 사용자들이 자주 부딪히는 문장, 예를 들면 딱딱한 존댓말, 지나치게 정리된 설명문, 번역투 대화문 같은 쪽 예시를 더 보강하면 좋다. 필요하면 영어 README를 따로 붙여서 해외 discoverability도 챙길 수 있다.

## 라이선스

MIT
