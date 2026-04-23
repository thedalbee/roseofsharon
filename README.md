# roseofsharon

![skill](https://img.shields.io/badge/skill-korean%20writing-111111?style=flat-square)
![license](https://img.shields.io/badge/license-MIT-blue?style=flat-square)
![version](https://img.shields.io/badge/version-1.1.0-7c3aed?style=flat-square)
![focus](https://img.shields.io/badge/focus-translationese%20removal-0f766e?style=flat-square)

Hermes와 Codex에서 쓰는 한국어 글쓰기 스킬입니다. 호출명은 `/rose`입니다.

이 스킬은 한국어를 더 사람답게 쓰기 위한 기준입니다. 번역투를 줄입니다. 공문서 같은 말투를 걷어냅니다. 과하게 정리된 AI 문장을 짧고 자연스럽게 고칩니다. 쉼표도 강하게 줄입니다.

## 어떤 문제가 있습니까

AI가 쓴 한국어는 금방 티가 납니다. 영어 문장을 옮긴 흔적이 남습니다. 문장은 괜히 딱딱합니다. 설명은 길고 숨이 찹니다. `활용하다`, `진행하다`, `제공하다`, `검토하다` 같은 말도 자주 반복됩니다.

쉼표도 많이 나옵니다. 한국어 네이티브는 쉼표를 자주 쓰지 않습니다. 그런데 AI는 절을 계속 잇습니다. 문장 두세 개만 이어도 쉼표가 반복됩니다. 그 순간 바로 AI 티가 납니다.

모호한 말도 많습니다. `대체로`, `보통`, `어느 정도`, `경우가 많다` 같은 말이 앞에 붙습니다. 숫자로 말하지도 않고 그냥 흐립니다.

## 이걸 그대로 두면 어떻게 됩니까

문법은 맞아도 읽는 맛이 없습니다. 문장이 길어집니다. 말은 무거워집니다. 같은 내용을 더 피곤하게 읽게 됩니다. 존댓말과 반말도 흔들립니다. 호칭과 거리감도 어색해집니다.

결국 전달력이 떨어집니다. 내용이 약해서가 아니라 말이 이상해서 손해를 봅니다.

## 이 스킬을 넣으면 뭐가 달라집니까

문장을 먼저 자릅니다. 쉼표를 줄입니다. 번역투 표현을 걷어냅니다. 무거운 한자어는 더 일상적인 말로 풉니다. 모호한 완충 표현은 빼거나 수치로 바꿉니다.

그래서 결과가 달라집니다. 문장이 짧아집니다. 읽기가 편해집니다. 말투가 덜 굳습니다. 한국어가 처음부터 한국어로 생각된 것처럼 들립니다.

## 예시

`활용할 수 있다`는 보통 `쓸 수 있다`가 낫습니다.
`진행 중이다`는 `하는 중이다`나 `돌리고 있다`가 더 자연스럽습니다.
`검토해보겠다`는 `한 번 보겠다`나 `살펴보겠다`가 덜 딱딱합니다.
`적용이 필요하다`는 `반영해야 한다`나 `넣어야 한다`로 풀 수 있습니다.
`방향성이 불명확하다`는 `어디로 가는지 애매하다`가 더 사람 말에 가깝습니다.

`이 구조는 복잡하고, 유지보수가 어렵고, 수정 비용이 커집니다.` 보다는 `이 구조는 복잡합니다. 유지보수도 어렵습니다. 수정 비용도 큽니다.` 쪽이 더 낫습니다.

`대체로 쉼표를 적게 쓴다` 보다는 `쉼표를 훨씬 적게 쓴다`가 낫습니다. 근거가 있으면 `검토한 예문 10개 중 8개는 쉼표 없이도 더 자연스럽다`처럼 쓰면 됩니다.

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

`SKILL.md`는 본체입니다. `README.md`는 설명서입니다. `install.sh`는 설치 스크립트입니다. `LICENSE`는 라이선스 파일입니다.

## 라이선스

MIT
