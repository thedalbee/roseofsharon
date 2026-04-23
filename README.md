# roseofsharon

![skill](https://img.shields.io/badge/skill-korean%20writing-111111?style=flat-square)
![license](https://img.shields.io/badge/license-MIT-blue?style=flat-square)
![version](https://img.shields.io/badge/version-1.1.0-7c3aed?style=flat-square)
![focus](https://img.shields.io/badge/focus-translationese%20removal-0f766e?style=flat-square)

Hermes와 Codex 쓰다가 답답해서 만든 한국어 글쓰기 스킬입니다.
기본 호출명은 `/rose`입니다.

## 문제

AI가 쓴 한국어는 아주 더럽습니다. 영어 문장을 그대로 옮긴 듯한 번역투가 남고, 공문서처럼 딱딱한 톤이 붙고, 설명은 과하게 정리되어 있는데 막상 사람 말맛은 빠집니다. `활용하다`, `진행하다`, `제공하다`, `검토하다` 같은 말이 반복되고, 한자어가 잘못이 아닌데도 문장이 계속 보고서처럼 굳어집니다.

결과적으로 문법은 맞는데 사람이 쓴 것 같지는 않은 문장이 나옵니다. 읽는 사람 입장에서는 이상하게 힘이 들어가고, 쓴 사람 입장에서는 "왜 이렇게까지 딱딱하지?"라는 느낌이 남습니다.

이 상태를 그냥 두면 한국어가 점점 더 번역문처럼 굳습니다. 설명문은 설명문대로 숨이 막히고, 대화문은 대화문대로 사람 냄새가 빠집니다. 존댓말과 반말, 호칭과 거리감도 흐트러지기 쉽고, 핵심은 단순한데 문장은 계속 무거워집니다.

결국 전달력도 떨어집니다. 내용을 더 잘 설명한 것이 아니라, 같은 내용을 더 지치게 말하게 됩니다. 특히 한국어 독자는 이런 어색함을 금방 알아차리기 때문에, 글의 신뢰도와 호감도까지 같이 깎입니다.

## 이 스킬을 넣으면 달라지는 점

이 스킬은 한국어를 처음부터 한국어로 생각한 것처럼 들리게 만드는 데 초점을 둡니다. 번역투를 줄이고, 공문서체를 걷어내고, 한자어를 무조건 금지하지 않고 제대로 분류합니다. 어떤 말은 그대로 두고, 어떤 말은 더 일상적인 동사로 풀고, 어떤 문장은 아예 구조부터 다시 잡습니다.

그래서 결과가 이렇게 바뀝니다. 문장은 더 짧고 단단해지고, 설명은 덜 피곤해지고, 말투는 더 자연스러워집니다. 존댓말과 반말, 호칭과 거리감도 더 안정적으로 유지됩니다. 한마디로 말하면, "맞는 한국어"보다 한 단계 더 나아가 "살아 있는 한국어" 쪽으로 붙습니다.

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

## 파일 구성

`SKILL.md`는 실제로 설치되는 본체입니다. `README.md`는 설명서입니다. `install.sh`는 Hermes와 Codex에 바로 넣기 위한 설치 스크립트입니다. `LICENSE`는 공개 리포를 위한 라이선스 파일입니다.

## 라이선스

MIT
