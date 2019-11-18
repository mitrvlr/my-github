---
path: '/posts/javascript-synchronous-asynchronous'
date: 2019-07-04
title: 'Javascript 동기와 비동기'
tags: ['front end', 'javascript']
---

# JavaScript 동기/비동기

## 자바스크립트의 동기

자바스크립트는 싱글 스레드 기반으로 프로세스를 처리, 그러므로 코드의 실행은 동기 방식으로 실행 

## 자바스크립트의 비동기 처리

특정 코드의 연산이 끝날 때까지 코드의 실행을 멈추지 않고 코드를 먼저 실행

# Promise

## Promise 3 가지 상태 (states)

- Pending (대기) : 비동기 처리 로직이 아직 완료되지 않은 상태
- Fulfilled (이행) : 비동기 처리가 완료되어 프로미스가 결과 값을 반환해준 상태
- Rejected (실패) : 비동기 처리가 실패하거나 오류가 발생한 상태

## Pending

    new Promise(); // 대기
    new Promise(function(resolve, reject){ ... });

`new Promise()` 호출 ⇒ Pending 상태

## Fulfilled (이행)

    new Promise(function(resolve, reject){ 
    	resolve(); // 이행
    });

이행 상태가 되면 `then()` 을 사용하여 결과 값을 받을 수 있다

## Rejected (실패)

    new Promise(function(resolve, reject){ 
    	reject(); // 실패
    });

## Promise 과정

![](https://mdn.mozillademos.org/files/8633/promises.png)

출처 : [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise)

# async & await

서버에서 데이터를 받아노느 HTTP 통신 코드의 비동기 처리는 콜백을 사용하여 코드의 실행 순서를 보장

---

원문 

- [https://joshua1988.github.io/web-development/javascript/javascript-asynchronous-operation/](https://joshua1988.github.io/web-development/javascript/javascript-asynchronous-operation/)
- [https://joshua1988.github.io/web-development/javascript/promise-for-beginners/](https://joshua1988.github.io/web-development/javascript/promise-for-beginners/)