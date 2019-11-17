---
path: '/posts/compiler-vs-interpreter'
date: 2016-07-18
title: 'Compiler vs Interpreter'
tags: ['front-end']
---

![o5xjh](https://cloud.githubusercontent.com/assets/24470477/23200135/064adfc8-f916-11e6-9894-200a5ea5c587.jpg)

### 컴파일러

  - 특정 프로그래밍 언어로 작성한 소소코드를 다른 프로그래밍 언어로 변환하는 프로그램
  - 주로 원시 소스코드를 어셈블리어나 기계어로 변환한다. 
  - 직접 기계어로 변환하면 부담이 크기 때문에 어셈블리형식의 목적 파일로 생성하는 경우가 많다.

### 인터프리터

  - 컴파일러 + 인터프리터 결합형
    - 소스코드를 중간 코드 형태로 변환 후 인터프리터가 읽어드려 메모리에 적재하고 해석하며 실행한다. 
    - ex) Java code (.java) > JVM : bytecode (.class)
  - 소스코드 유지형 : 소스코드를 그대로 메모리에 유지한채 라인 단위로 해석해서 실행 (성능향상을 위해 실행 시점에 원시코드나 중간 코드를 네이티브 코드로 변환) 
    - 소스코드
    - 어휘 분석
    - 내부코드 생성
    - 구문 분석 실행
      - 분석한 토큰열이 구문과 일치한가 확인
      - 토글이 변수/함수 정의일때 심볼테이블에 등록한다.
      
### JIT Compile 

실제 실행 시점에 기계어로 변환하는 컴파일러

  - Method JIT : 메소드 단위로 프로그램을 실행할 때마다 기계어로 변환
  - tracing JIT : 자주 실행하는 부분만 기계어로 변환

#### Reference 
[[기계어(Machine code)와 어셈블리어(Assembly)]](http://huns.me/development/360)
