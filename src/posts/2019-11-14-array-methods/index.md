---
path: '/posts/array-methods'
date: 2019-11-14
title: 'Array Methods'
tags: ['javascript']
---

배열 메서드 함수를 알아봅시다.

# 배열

같은 자료형을 가진 자료들을 나열하여 메모리에 연속적으로 저장하여 만든 자료들의 그룹

자바스크립트의 배열은 가변 객체 (원소를 쉽게 추가, 삭제 할 수 있고 배열 객체는 동적으로 커지거나 작아짐) ⇒ 일부 다른 언어에서는 배열 생성과 동시에 크기가 정해져 원소를 추가하려면 새로 배열을 생성

## `forEach()`

`forEach(callback[, thisArg])`

- 실행하면 중간에 멈출 수 없다.
- 삭제했거나 초기화하지 않은 인덱스 속성에 대해서는 실행하지 않음
- thisArg 를 전달하면 callback 은 전달받은 this의 값을 자신의 this 값으로 사용할 수 있다

    const arr = [];
    
    arr.forEach(callback[, thisArg]);

    [2, 5, , 9].forEach(function(element, index, array) {
      console.log('a[' + index + '] = ' + element);
    });
    
    // a[0] = 2
    // a[1] = 5
    // a[3] = 9

    function Counter() {
      this.sum = 0;
      this.count = 0;
    }
    
    Counter.prototype.add = function(array) {
      array.forEach(function(entry) {
        this.sum += entry;
        ++this.count;
      }, this);
    };

## `map()`

`map(callback(currentValue[, index[, array]])[, thisArg])`

- 배열 내의 ***모든 요소에 대하여*** 결과를 새로운 배열로 리턴
- callback 함수를 각각의 요소에 대해 한번씩 순서대로 불러 그 함수의 반환값으로 새로운 배열을 만듬
- 요소의 값, 그 요소의 인덱스, 그리고 map 을 호출한 원본 배열 3개의 인수를 전달 받음

## `filter()`

`filter(callback(element[, index[, array]])[, thisArg])`

주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다.

`callback` 이 `true` 인 값을 반환하는 모든 값을 새로운 배열로 생성

## 배열 메소드

### 배열의 요소에 접근할 수 있는 함수

- `indexOf` : 특정 원소의 인덱스를 찾아 반환
- `lastIndexOf` : 검색 조건에 부합하는 가장 마지막에 위치한 원소를 찾아 그 인덱스를 반환

### 배열을 문자열로 반환

- `join` : 배열 원소 전부를 하나의 문자열로 합침
- `toString` : 배열을 문자열로 바꾸어 변환
- `valueOf` : `toString` 와 같음

### 기존 배열을 이용해 새 배열을 생성

- `concat` : 다수의 배열을 합치고, 병합된 배열의 사본을 반환
- `slice` : 지정된 인덱스부터 원소를 잘라 새로운 배열 반환

### 배열의 전체를 변형하는 함수

- `push` : 배열의 끝에 요소 추가 (스택)
- `pop` : 배열의 끝의 요소 제거 (스택)
- `unshift` : 배열의 앞에 요소 추가 (큐)
- `shift` : 배열의 앞의 요소 제거 (큐)

### 배열의 요소 정렬

- `reverse` : 배열의 원소 순서를 거꾸로 변환
- `sort` : 배열의 원소를 알파벳 또는 지정된 함수에 따른 순서로 정렬

### 배열의 각 요소에 콜백 결과 값, 값의 집합, 또는 새로운 배열 반환

### 새로운 배열을 만들지 않음

- `forEach` : 배열의 각 원소별로 지정된 함수를 실행
- `every` : `false` 가 반환되기 전까지 배열의 각 원소별로 함수를 호출
- `some` : 지정된 함수의 결과 값을 `true` 로 만드는 원소를 각각 전달

### 새로운 배열을 만듬

- `map` : 배열의 각 원소별로 지정된 함수를 실행한 결과로 구성된 새로운 배열 반환
- `filter` : 지정된 함수의 결과 값을 `true` 로 만드는 원소들로만 구성된 별도의 배열 반환

### * 스택

- 스택의 자료는 항상 동일한 종단점에서 추가/삭제
- 가장 최근 자료는 꼭대기, 가장 오래된 자료는 바닥에 위치 (e.g. 쌓인 책)
- 마지막에 삽입(Last-In)한 원소는 맨 위에 쌓여 있다가 가장 먼저 삭제(First-Out) ⇒ 후입선출 구조 (LIFO, Last-In-First-Out)

### * 큐

- 새 원소는 뒤로 들어가서 앞에서 빠져나가는 구조
- 마지막에 추가된 원소는 큐의 뒷부분에서 제일 오래 기다려야 함 (e.g. 줄서기)
- 삽입한 순서대로 원소가 나열되어 가장 먼저 삽입(First-In)한 원소는 맨 앞에 있다가 가장 먼저 삭제(First-Out) ⇒ 선입선출 구조 (FIFO, First-In-First-Out)