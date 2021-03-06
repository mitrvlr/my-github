---
path: '/posts/require-js-amd-module'
date: 2016-05-16
title: 'AMD module in Require.js'
tags: ['front-end']
---

![amd_and_require](https://cloud.githubusercontent.com/assets/24470477/23152929/ce5bd608-f848-11e6-92f8-63849cffe588.jpg)

## Require.js

AMD 모듈화에 맞춰 개발된 Javascript 파일, 모듈 로더 

### AMD (Asynchronous Module Definition) 모듈화
AMD 그룹에서 Javascript 모듈을 위한 동적 로딩, 의존성 관리, 모듈화 모델을 제시한 API 로딩 모델(디자인 패턴)


#### 1. 동적 로딩

페이지 렌더링을 방해하지 않으며 필요한 파일만 로딩 후 사용자에 의해 점진적 로딩을 유도한다.

`<script>` 태그는 페이지의 렌더링을 방해한다. 
`<script>` 태그의 HTTP 요청, 다운로드, Parsing, 실행이 일어나는 동안 브라우저는 다른 동작을 하지 않기 때문이다. 

최적화 기법의 하나로 웹 브라우저 인터프리터에 의해 `<body>` 태그의 parsing이 끝난 후 `<script>` 태그를 parsing 하게 하게끔 
`<body>`태그의 마지막에 `<script>` 태그를 배치하는 방법이 있다. 

최적화 기법을 사용하여도 사실 웹페이지에 필요한 모든 Javascript를 로딩하기 때문에
사용자의 첫 인터랙션이 가능한 시점까지의 시간은 줄어들지 않는다. 

하지만 점직전인 방식의 동적 로딩으로 보다 더 최적화를 할 수 있다.

> ##### Javascript의 동기/비동기
> ###### 동기
> * javascript는 싱글 스레드 기반이라, 기본적으로 동기 방식으로 프로세스가 처리된다.
> * 요청이 완료될때까지 다른 리소스가 블로킹된다.
> * 데이터를 객체에 저장해 특정 함수가 실행되는 시점을 피해 데이터를 활용할 기회가 생긴다.
> * 즉, 데이터 호출시 의도적으로 사용자 플로우를 블로킹할 필요가 있을때 적절하다.
> 
> ###### 비동기
> * 독립적으로 webapp 내에 있는 나머지 리소스와 분리돼있다.
> * 어떤 시점에서도 일어날 수 있고, 어떤 이벤트에서도 일으킬 수 있다.
> * 페이지 렌더링시 다른 node와 동일한 시점에 실행되지 않는다. 
> * (HTTP요청과 함께 하나의 덩어리로 일어나지 않는다.)


#### 2. 의존성 관리

Javascript의 코드 간의 의존성을 파악하기는 힘들다. 

특정 기능의 스크립트(객체)가 이름을 붙일 수 있는 하나의 단위로 묶이고, 
다른 객체에서 묶인 객체를 호출할 수 있는 방법이 있다면 의존성은 관리가 된다.


#### 3. 모듈화

전역공간에 있는 스크립트 내부에서 사용되는 변수/함수 간의 충동을 모듈화를 통하여 예방한다.


#### Require.js ?

*AMD 모듈 로딩 표준*을 따르는 Javascript 파일, 모듈 로더로 
애플리케이션 시작 전 Javascript가 전부 로딩이 되는 것이 아니라 
실제 필요한 때에 로딩하게 할 수 있기 때문에 페이지 속도 향상을 기대할 수 있다.


*AMD 모듈 로딩 표준*
모든 모듈은 기본적으로 *비동기 모듈(필요한 모듈을 네트워크를 통해 내려받을 수 있도록 함)이다. 
모듈은 명시적으로 요청하거나 의존성이 있을 때 로딩이 된다.

* 현재 require.js로 대표되는 AMD방식 모듈은 디버깅이 복잡하고, 모듈을 AMD방식으로 작성해야 한다는 단점 때문에 외면받고 있는 추세. 

#### Reference
- [[d2_dev]](http://d2.naver.com/helloworld/12864)
- [[d2_dev]](http://d2.naver.com/helloworld/591319)
- [[Nonblock]](http://ohgyun.com/404)
