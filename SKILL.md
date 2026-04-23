---
name: roseofsharon-korean-writing
description: Korean writing and editing guidance derived from the roseofsharon project. Use when drafting, rewriting, or critiquing Korean text so it sounds like natural contemporary Korean rather than translated English, newsroom boilerplate, or generic AI prose.
version: 1.1.0
author: Hermes Agent
license: MIT
metadata:
  hermes:
    tags: [korean, writing, editing, humanization, style]
---

# roseofsharon Korean writing

Use this skill when the task involves Korean drafting, rewriting, editing, style transfer, humanization, or review.

## Goal

Make Korean sound like it was originally written by a smart person in Korean.
Not translated from English. Not flattened into office prose. Not polished into generic AI cleanliness.

Default target:
- natural contemporary Korean
- intelligent civilian register
- human texture and asymmetry
- situation-appropriate tone

Unless the user explicitly asks for literary prose, legalese, academic prose, or formal corporate copy, do not drift into those modes.

## Core standards

1. Prefer Korean-first sentence movement.
- Rewrite sentences that feel structurally imported from English.
- Cut obvious translationese such as:
  - "~에 대해서"
  - "~하는 것이다"
  - "그것은 ~이다"
  - over-explicit subject repetition
  - noun-heavy abstract constructions that could be verbs or plain clauses

2. Avoid the three common failure modes.
- 번역투
- 공문서체 / 뉴스룸체
- AI식 과잉 정리

3. Aim for good civilian Korean.
- Clear, alive, readable.
- Not trying to sound like a novelist unless asked.
- Not trying to sound important, comprehensive, or authoritative by default.

4. Keep register coherent.
- Track 존댓말/반말.
- Track 호칭 and relationship distance.
- Track whether the speaker sounds intimate, blunt, polite, deferential, guarded, annoyed, playful, or dry.
- Do not let register drift sentence to sentence.

5. Preserve voice during edits.
- Prefer local surgery over full rewrites.
- Remove stiffness and AI smell without sanding away personality.
- Keep the writer's intention, pacing, and attitude when possible.

6. 쉼표를 강한 한국어 AI 냄새 신호로 취급합니다.
- 한국어 네이티브 문장에서는 쉼표 사용 빈도가 AI가 생각하는 것보다 훨씬 낮습니다.
- 문장 두세 개 연속으로 쉼표가 계속 나오면 일단 AI 냄새를 의심합니다.
- 기본값은 쉼표로 절을 이어붙이는 것보다 문장을 짧게 끊는 것입니다.
- 쉼표는 정말 필요한 경우에만 남깁니다. 뜻이 갈리거나, 삽입구가 꼭 필요하거나, 문장을 나누면 오히려 더 읽기 어려울 때만 씁니다.
- 깔끔하게 끊을 수 있으면 끊습니다.
- 쉼표가 여러 개 들어간 긴 문장은 기본적으로 과잉이라고 보고 먼저 의심합니다.

## Sino-Korean words: do not ban them, sort them

Do not treat all 한자어 as bad. Korean actually runs on a huge number of naturalized 한자어.

The real problem is not "한자어 exists" but one of these:
- abstract noun stacks pile up and kill movement
- a sentence sounds like a report, not a person
- a lighter everyday verb exists but the text keeps picking the heavier office word
- too many similar 한자어 appear back to back and flatten rhythm

Use this three-way split.

### 1. Fine to keep in normal writing

These are common enough that forcing pure native replacements usually sounds fake or childish.

- 문제
- 기능
- 관계
- 정보
- 구조
- 결과
- 방식
- 이유
- 상황
- 기준
- 내용
- 역할

### 2. Use with care

These are often useful, but they can make prose feel stiff if they pile up.

- 가능성
- 효율
- 방향성
- 정체성
- 생산성
- 맥락
- 우선순위
- 관점
- 전략
- 조건

Keep them when they are the sharpest word. Rewrite when they make the sentence sound like a deck, report, or consultant memo.

### 3. Often rewrite in speech-like prose

These are not forbidden, but they are frequent AI/officese words and should be questioned.

- 활용 → 쓰다 / 써먹다 / 이용하다
- 진행하다 → 하다 / 돌리다 / 이어가다
- 제공하다 → 주다 / 보여주다 / 넘기다
- 발생하다 → 생기다 / 나오다
- 전달하다 → 전하다 / 말하다 / 보여주다
- 적용하다 → 쓰다 / 반영하다 / 붙이다
- 수행하다 → 하다 / 처리하다
- 판단하다 → 보다 / 생각하다 / 결론내리다
- 고려하다 → 생각하다 / 감안하다 / 따져보다
- 확보하다 → 챙기다 / 마련하다 / 잡다
- 검토하다 → 보다 / 뜯어보다 / 살펴보다
- 운영하다 → 굴리다 / 돌리다 / 맡아 하다
- 구성하다 → 이루다 / 짜다 / 묶다
- 도출하다 → 뽑다 / 끌어내다
- 제시하다 → 보여주다 / 내놓다 / 말하다

## Colloquial rewrite examples

Use these as pressure tests, not rigid replacements.

- 활용할 수 있다 → 쓸 수 있다 / 써먹을 수 있다
- 진행 중이다 → 하는 중이다 / 돌리고 있다
- 검토해보겠다 → 한 번 보겠다 / 살펴보겠다
- 전달드리겠습니다 → 말씀드릴게요 / 보내드릴게요
- 적용이 필요하다 → 반영해야 한다 / 넣어야 한다
- 효율성을 높이다 → 더 잘 돌게 하다 / 덜 번거롭게 만들다
- 생산성이 높다 → 일이 잘 된다 / 빨리 끝난다
- 방향성이 불명확하다 → 어디로 가는지 애매하다
- 정체성을 강화하다 → 색을 더 분명하게 하다
- 우선순위를 조정하다 → 뭐부터 할지 다시 정하다
- 문제를 해결하다 → 문제를 풀다 / 고치다
- 관계를 형성하다 → 관계를 만들다 / 친해지다
- 구조를 설계하다 → 구조를 짜다
- 정보를 전달하다 → 내용을 전하다 / 알려주다

## Quick test for heavy diction

If a sentence feels too abstract, ask:
- Can one of these nouns become a verb?
- Would a person actually say this out loud?
- Is this word precise, or just dressed-up?
- Are three or more 한자어 abstractions stacked in one sentence?

If yes, lighten it.

## Sentence value rule

Treat every sentence as if it has to earn its place.
If a sentence adds no information, no tone, no rhythm, no contrast, and no necessary framing, cut it.
Apply the same rule to punctuation. A comma also has to earn its place.

Treat vagueness the same way.
If a claim can be quantified, quantify it.
If it cannot be quantified, say it directly instead of hiding behind a soft hedge.

Default against vague hedges such as:
- "대체로"
- "보통"
- "일반적으로"
- "어느 정도"
- "다소"
- "상대적으로"
- "꽤"
- "약간"
- "경우가 많다"
- "~한 편이다"

Bad:
- 대체로 쉼표를 적게 쓴다.

Better:
- 쉼표를 훨씬 적게 쓴다.

Better when evidence exists:
- 검토한 예문 10개 중 8개는 쉼표 없이도 더 자연스럽다.

Bad:
- 어느 정도 어색하다.

Better:
- 어색하다.

Bad:
- 보통 더 자연스럽다.

Better:
- 더 자연스럽다.

## Korean AI-smell checklist

Watch for:
- repeated summary closers like "중요하다", "필요가 있다", "결론적으로"
- zero-value framing like "결론부터 말하면", "핵심은", "쉽게 말하면" when the sentence can simply start with the point
- abstract noun stacks with "~성 / ~화 / ~적"
- comma-heavy sentences and repeated comma use across consecutive sentences
- every sentence being equally complete, equally explicit, equally tidy
- excessive transition words like "또한", "더불어", "뿐만 아니라"
- flat explanatory rhythm with no compression or implication
- identical voice across different speakers
- awkward honorific consistency
- noun phrases where a plain verb would sound more human
- translated-English causality or emphasis patterns
- overuse of polite but bloodless phrasing

## Editing process

1. Read for intent first.
- What is the writer trying to do?
- informative, persuasive, intimate, annoyed, funny, reflective, etc.

2. Identify the dominant problem.
- translationese
- stiffness
- register mismatch
- over-explanation
- AI rhythm
- abstraction overload

3. Fix the biggest smell first.
- Start with sentence movement, register, and comma load.
- Split long comma-chained sentences before polishing diction.
- Then cut dead transitions, abstract endings, and generic filler.
- Then tune rhythm and diction.

4. Keep concrete texture.
- Prefer specific nouns, verbs, and situations.
- If the text becomes too clean, put some life back into it.

5. Do a final anti-AI audit.
Ask:
- What still makes this feel machine-written?
- What still feels translated rather than originally thought in Korean?
Then revise again.

## Heuristics by task type

### Chat / casual response
- Keep it natural and light.
- Do not over-structure.
- Let implication do some work.

### Explanatory writing
- Be clear, but do not turn everything into a lecture.
- Prefer plain verbs over abstract nouns.
- Keep examples concrete.

### Marketing / persuasive copy
- Avoid inflated claims and ceremonial emphasis.
- Sound like a sharp human, not a generated brand deck.

### Narrative / character voice
- Protect register, rhythm, and relational cues.
- Different speakers should not sound identical.
- Guard against translated inner monologue.

## Before-final checklist

- Does this sound like native Korean rather than English thought translated over?
- Is the register right for the situation?
- Did I remove generic AI phrasing without flattening the voice?
- Did I cut unnecessary abstraction and summary lines?
- If this is not supposed to be literary, did I avoid sounding like a novelist?
- If this is supposed to be casual, does it actually sound casual?

## Output preference

When useful, present:
1. the rewritten Korean
2. a short note on the main smells removed

Keep the note brief unless the user asks for deeper analysis.
