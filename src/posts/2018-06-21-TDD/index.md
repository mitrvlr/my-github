---
path: '/posts/tdd'
date: 2018-06-21
title: 'TDD'
tags: ['front-end']
---

# TDD

테스트 주도 개발 (Test Driven Development)

## Unit Test

Unit Test(단위테스트)란 코드의 기능 단위를 테스트 하는 것

TDD를 다른 관점에서 바라본 BDD라는 해결책을 제시

## BDD

동작 지향 개발 (Behavior Driven Development)

유저 스토리 개념을 끌어들인 테스트 작성법

- Given : 초기 상황
- When : 어떤 이벤트가 발생
- Then : 후속 결과를 기대

## Module

모듈 생성 원칙

1. 단일 책임 원칙에 따라 모듈은 한가지 역할만 한다.
2. 자신의 사용할 객체가 있다면 의존성 주입 형태로 제공한다.

## Cycle

하나의 기능에 Fail > Success > Refactor > fail > success > ... 사이클로 개발한다.

## Test Double

단위 테스트 패턴으로 테스트하기 곤란한 컴포넌트를 대체하여 테스트한다.
(특정 동작을 흉내 내는 정도지만 테스트하기엔 적합)

- 더미(dummy) : 인자를 채우기 위해 사용
- 스텁(sturb) : 더미를 개선하여 실제 동작하게끔 만듦
- 스파이(spy) : 스텁과 유사. 내부적으로 기록을 남기는 추가 기능
- 페이크(fake) : 스텁에서 발전한 실제 코드. 운영에서는 사용할 수 없다.
- 목(mock) : 더미, 스텁, 스파이를 혼합한 형태

## Thinking in TDD

- 단일 책임 원칙을 지킨다.
- 모듈 단위로 개발한다.
- 뷰 모듈은 돔을 캡슐화해야 한다.

#### Reference

- [[김정환님의 프론트엔드 개발과 TDD]](https://slides.com/jeonghwan/fe-tdd#/)
