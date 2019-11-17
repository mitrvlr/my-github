---
path: '/posts/css-architecture'
date: 2016-01-08
title: 'about CSS Architecture'
tags: ['front-end','css']
---

![book-covers](https://cloud.githubusercontent.com/assets/24470477/23197921/008b44ce-f907-11e6-81b5-1a69131fc1e9.png)
{:.tac}

### * SMACSS _(Scalable & Modular Architecture for CSS)_
SMACSS는 CSS를 5가지로 분류/범주화하여 작명규칙 등 스타일 가이드를 제시한 방법론이다.

  - *Bass* : 기본스타일(Reset, Default, Variables, Mixins) 등 ID, class 셀렉터의 정의 없이 기본 스타일 구축
  - *Layout* 
    - 페이지 분할 요소 스타일 구축
    - l- ,layout-, grid- 등의 접두사(prefix)를 사용하여 클래스 명을 접미사(suffix)로 조합하여 구축
  - *Module* 
    - 스타일 반복, 재사용을 위한 요소 스타일 구축
    - 위치기반의 클래스명 작명은 지양한다.
  - *State*
    - 상태를 나타내는 요소 스타일 구축
    - is-, s- 등의 접두사(prefix)를 사용하여 클래스 명을 접미사(suffix)로 조합하여 구축
    - 자바스크립트에 의존적인 요소 스타일 / Layout, Module에 사용이 가능한 요소 스타일
  - *Theme* : 사이트의 전반적 look and feel 제어
  
- - -

### * OOCSS _(Object Oriented CSS)_
OOCSS는 2가지 범주 내에서 독립적인 요소로 추상화할 수 있는 반복패턴을 정의하여 사용하자는 객체 지향 스타일 가이드를 제시한 방법론이다.

  - 표현과 구조의 분리 _(Separate structure and skin)_ : CSS를 Positioning / Styling으로 객체화하여 Mix & Match 
  
  ```css
    .position {
      position: relative;
      display: block;
      float: none;
    }
    .style {
      background: transparent;
      border: none; 
    }
  ```
  - 컨테이너와 콘텐츠의 분리 _(Separate container and content)_ : DOM 위치에 의존하지 않고 객체의 재사용이 가능한 클래스 기반 모듈 구축
  - *장점* : 코드의 재사용성이 높아진다.
  - *단점*
    - 다중클래스를 사용하여 HTML이 복잡해진다.
    - 의미 있는 클래스 이름을 짓기 어렵다.
    
#### * OOSass
OOCSS를 토대로 Sass에 적용하는 방법론<br>
(Less, Sass와 같은 CSS 전처리기를 사용하여 OOCSS의 단점을 보완하고 Mixin을 사용하여 코드의 재활용성과 의미 있는 네이밍 등의 장점을 극대화하여 사용할수 있다.)

- - -

### * BEM (Block Element Modifier)

  - *Block* : 문단 전체에 적용된 엘리먼트, 또는 엘리먼트를 담고 있는 컨테이너를 말함
  
  ```css
    .block-name {
      //
    }
  ```
  - *Element* : Block 안에서 특정기능을 수행하는 컴포넌트
  
  ```css
    .block-name__element-name{
      //
    }
  ```
  - *Modifier* : Block, Element의 외관/상태를 변화시킨다.
  
  ```css
    .block-name__element-name--modifier {
      //
    }
  ```
  - *장점* : 의미있는 클래스 이름의 작명이 가능하다.
  - *단점* : 클래스 이름이 길어진다.


#### BEM 방법론을 토대로 응용한 사례
```css
.module-function-expand {
	//
	&.statement {
		//
	}
}
```

_* 여러 방법론을 토대로 사용하기 쉽고 효율적으로 자신만의 방법론으로 사용함을 추천한다._

#### Reference
- [[CSS 구조 개선 방법론]](http://itzone.tistory.com/569)
- [[CSS방법론: SMACSS, BEM, OOCSS]](http://wit.nts-corp.com/2015/04/16/3538)
- [[[번역] OOCSS(객체 지향 CSS)와 Sass를 결합하는 것이 최고의 CSS 코딩 방법이다(OOCSS + Sass = The best way to CSS)]](http://mytory.net/archives/8986)
