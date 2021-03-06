---
path: '/posts/data-structure'
date: 2019-09-05
title: '자료 구조 정리'
tags: ['data structure']
---

# 스택

- 접시를 쌓듯이 자료를 차곡차곡 쌓아 올린 형태의 자료 구조
- 스택에 저장된 원소는 top으로 정한 곳에서만 접근 가능
- top의 위치에서 원소를 삽입하여 먼저 삽입한 원소는 밑에 쌓이고, 나중에 삽입한 원소는 위에 쌓이는 구조
- 마지막에 삽입(Last-In)한 원소는 맨 위에 쌓여 있다가 가장 먼저 삭제(First-Out)됨
⇒ 후입선출 구조 (LIFO, Last-In-First-Out)

# 큐(Queue)

- 삽입과 삭제의 위치가 제한되어있는 유한 순서 리스트
- 큐의 뒤에서는 삽입만 하고, 앞에서는 삭제만 할 수 있는 구조
- 삽입한 순서대로 원소가 나열되어 가장 먼저 삽입(First-In)한 원소는 맨 앞에 있다가 가장 먼저 삭제(First-Out)됨 ⇒ 선입선출 구조 (FIFO, First-In-First-Out)
- 원형 큐(Circular Queue)는 1차원 배열의 처음과 끝을 논리적으로 연결하여 만든 큐로써, 선형 큐의 잘못된 포화상태 문제를 해결함
- 원형 큐에서는 초기 공백 상태일 때 front와 rear 값을 ‘0’으로 하고, 공백상태와 포화상태를 쉽게 구분하기 위해 자리 하나를 항상 비워 둠
- 원형 큐에서는 배열의 인덱스가 n-1 다음에 다시 0이 되어야 하므로 사용할 인덱스를 조정하기 위해서 나머지 연산자인 ‘mod’를 사용

# Hash

- 데이터 관리/유지 자료구조
- 리소스 < 속도 (빠른 데이터 접근)

## 해싱

데이터 ⇒ 해시함수 ⇒ 해시 테이블

데이터가 해싱함수에 의해 분류가 되고 해시 테이블에 규칙에 의해 들어감

### 해시함수

같은 데이터가 올때마다 똑같이 분류되야하는 규칙성이 정의된 함수

### 해시테이블

- 인덱스, 키: 1 Column
- 해시값, 벨류: 2 Column
- 버켓: 인덱싱 된 기준
- 엔트리: 안에 들어가 있는 값

## 출돌 대처

### Chaining

해당 인덱스에 이미 값이 있다면 그 뒤에 체인으로 연결 시킴

### 선형 탐사 (linear probing)

'이미 만들어 놓은 버켓을 소모하자' 라는 취지의 기법, 데이터를 다음 버켓자리에 넣음

테이블의 할당된 공간을 다 사용해서 더 이상 엘리먼트가 들어갈 수 없을 때 '테이블 리사이징'을 하여 테이블을 늘림