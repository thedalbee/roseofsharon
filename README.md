# roseofsharon

![skill](https://img.shields.io/badge/skill-korean%20writing-111111?style=flat-square)
![license](https://img.shields.io/badge/license-MIT-blue?style=flat-square)
![version](https://img.shields.io/badge/version-1.1.0-7c3aed?style=flat-square)
![focus](https://img.shields.io/badge/focus-translationese%20removal-0f766e?style=flat-square)

Hermes와 Codex에서 쓰는 한국어 글쓰기 스킬입니다. 기본 호출명은 `/rose`입니다.

## 지금 자주 나오는 문제

AI가 쓴 한국어는 대체로 비슷한 쪽으로 갑니다. 영어 문장을 옮긴 티가 남습니다. 말투는 괜히 딱딱해집니다. 설명은 너무 정리돼 있는데 사람 말처럼 들리지는 않습니다. `활용하다`, `진행하다`, `제공하다`, `검토하다` 같은 말도 자주 반복됩니다.

쉼표도 문제입니다. 한국어는 쉼표를 그렇게 많이 쓰지 않는데 AI는 절을 계속 잇습니다. 문장 두세 개만 이어 봐도 쉼표가 너무 많이 나옵니다. 그 순간 바로 AI 티가 납니다.

## 이걸 그냥 두면 생기는 일

문법은 맞는데 읽는 맛이 없습니다. 문장이 괜히 딱딱하고 길어집니다. 내용은 단순한데 말은 무거워집니다. 존댓말과 반말도 흔들리기 쉽습니다. 호칭과 거리감도 어색해집니다.

결국 같은 내용을 더 피곤하게 말하게 됩니다. 읽는 사람도 금방 이상함을 느낍니다.

## 이 스킬을 넣으면 달라지는 점

이 스킬은 한국어를 한국어답게 들리게 만드는 데 초점을 둡니다. 번역투를 줄입니다. 공문서 같은 말투를 걷어냅니다. 한자어도 무조건 막지 않고 나눠서 봅니다. 그냥 둬도 되는 말은 두고 무거운 말은 더 일상적인 표현으로 풉니다.

쉼표도 강하게 잡습니다. 기본값은 짧게 끊는 것입니다. 길게 늘어지는 문장은 먼저 자릅니다. 꼭 필요할 때만 쉼표를 남깁니다. 그래서 문장이 짧아지고 읽기가 편해집니다. 말투도 덜 굳습니다. 존댓말과 반말도 더 안정적으로 맞출 수 있습니다.

## 짧은 예시

`활용할 수 있다`는 보통 `쓸 수 있다`가 낫습니다. `진행 중이다`는 `하는 중이다`나 `돌리고 있다`가 더 자연스럽습니다. `검토해보겠다`는 `한 번 보겠다`나 `살펴보겠다`가 덜 딱딱합니다. `적용이 필요하다`는 `반영해야 한다`나 `넣어야 한다`로 풀 수 있습니다. `방향성이 불명확하다`는 `어디로 가는지 애매하다`가 더 사람 말에 가깝습니다.

쉼표도 비슷합니다. `이 구조는 복잡하고, 유지보수가 어렵고, 수정 비용이 커집니다.` 보다는 `이 구조는 복잡합니다. 유지보수도 어렵습니다. 수정 비용도 큽니다.` 쪽이 더 낫습니다.

## 설치

지금은 curl 방식이 기본입니다.

```bash
curl -fsSL https://raw.githubusercontent.com/thedalbee/roseofsharon/main/install.sh | bash
```

Hermes만 설치하시려면 이렇게 실행하시면 됩니다.

```bash
curl -fsSL https://raw.githubusercontent.com/thedalbee/roseofsharon/main/install.sh | bash -s -- hermes
```

Codex만 설치하시려면 이렇게 실행하시면 됩니다.

```bash
curl -fsSL https://raw.githubusercontent.com/thedalbee/roseofsharon/main/install.sh | bash -s -- codex
```

직접 넣으시려면 Hermes는 아래 경로에 두시면 됩니다.

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

## 파일 구성

`SKILL.md`는 실제 본체입니다. `README.md`는 설명서입니다. `install.sh`는 설치 스크립트입니다. `LICENSE`는 라이선스 파일입니다.

## 라이선스

MIT
