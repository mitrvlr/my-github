---
path: '/posts/font-attribute'
date: 2015-03-25
title: 'Font attribute'
tags: ['front-end','css']
---

## css font Attribute

### 1. font-style
  - value : [ normal / italic / oblique ]
  - italic : 필기체의 기울기 / oblique : 비스듬한 경사
  - 폰트의 이텔릭 스타일이 적합하지 않은 폰트의 경우가 있어,  W3C에선 이텔릭 스타일을 쓰기보단 이텔릭버전의 폰트를 사용하길 권장한다.

### 2. font-variant
  - value : font-variant-css21 = [normal / small-caps] 
  
![screenshot](https://cloud.githubusercontent.com/assets/24470477/23155603/ba02b0ba-f856-11e6-820d-4a22e79234f9.png)

ex) font-variant: small-caps;
{:.tac}

### 3. font-weight
  - value : normal (400) / bold (700) / bolder / lighter / 100 ~ 900 
  - 각 length 값은 font-weight를 표시하는 각 명령시퀀스를 형성한다.
    - 100 - Thin
    - 200 - Extra Light (Ultra Light)
    - 300 - Light
    - 400 - Normal
    - 500 - Medium
    - 600 - Semi Bold (Demi Bold)
    - 700 - Bold
    - 800 - Extra Bold (Ultra Bold)
    - 900 - Black (Heavy)

#### * fallback
제공된 정확한 weight 값을 없을 경우에는 스스로 실제 렌더링되는 weight 값을 fallback한다. (*fallback*: 어떤 조건이 만족하지 않을 경우 기본처리를 선택하는 작업)

![screenshot_ 1](https://cloud.githubusercontent.com/assets/24470477/23155618/cb47c63a-f856-11e6-93bf-3becf04cd42e.png)

상대 가중치 Table (border / lighter 가 주어졌을때, 표와 같이 절대 중량을 계산한다.)
{:.tac}

- - -

![optimaweights](https://cloud.githubusercontent.com/assets/24470477/23155635/d74fa4b6-f856-11e6-98eb-4d1a73536152.png)

ex) Inherited value - bolder
{:.tac}

- - -

![hiraginoweights](https://cloud.githubusercontent.com/assets/24470477/23155644/e08910d0-f856-11e6-94e8-4819563423e9.png)

ex) Inherited value - lighter
{:.tac}

- - -

### 4. font-stretch
  - value : normal / ultra-condensed / extra-condensed / condensed / semi-condensed / semi-expanded / expanded / extra-expanded / ultra-expanded
  - 현 시점에서 지원하는 브라우저가 극소수이기에 당장 도입이 불가능한 attribute 이다.

![universwidths](https://cloud.githubusercontent.com/assets/24470477/23155660/ef761c96-f856-11e6-8845-be047b352c75.png)

ex) font-stretch attribute
{:.tac}

### 5. font-size
  - value : `<absolute-size>` / `<relative-size>` / `<length>` / `<percentage>`
  - absolute-size : xx-small / x-small / small / medium / large / x-large / xx-large 
  - relative-size : larger / smaller

### 6. font-size units
  - 'Ems'(em) : web document media에 사용되는 확장 단위이다. 어원은 글꼴 세트의 알파벳 대문자 'M'의 넓이를 의미한다. 일반적으로 1em 은 12pt와 동일하며, 확장성 및 모바일 디바이스 친화적인 특성으로 웹 문서에서 인기를 끌고 있다.
  - 'Pixels' (px) : 스크린 미디어(컴퓨터 화면)상의 고정 된 크기의 단위이다. (16px = 12pt)
  - 'Point' (pt) : 인쇄 매체에 사용되는 단위이다. (1pt = 1/72인치) 
  - 'percent' (%) : 몇가지 근본적인 차이를 제외하고 'em'와 비슷하다. (12pt = 100%) 또한, 모바일 디바이스에 대한 접근성에 대한 확장성이 뛰어나다.
  - 'root Ems' (rem) : em은 부모의 값을 상속받지만 rem은 뿌리(root = html)로 부터 값을 상속받는다.IE 9부터 브라우저가 지원을 하지만, ie 8용 fallbak이 존재한다. (http://caniuse.com/#search=rem)

### 7. Viewport-percentage lengths
  - vw : viewport width의 1%
  - vh : viewport height의 1%
  - vmin : vw 와 vh 중 가장 작은 단위 적용
  - vmax : vw 와 vh 중 가장 큰 단위 적용 _ex) landscape mode (가로모드) : 1vmax = 1vw / portrait mode (세로모드) : 1vmax = 1vh_
  - *IE 9 에서도 vmin은 vw로 지원이 되며, vmax는 지원이 안된다.

![screenshot4](https://cloud.githubusercontent.com/assets/24470477/23155708/2240e610-f857-11e6-8a4d-cdcb008866a7.png)

ex) absolute-size
{:.tac}

```css
	p { font-size: 12pt; }
	blockquote { font-size:'larger'; }
	em { font-size: 150% }
	em { font-size: 1.5em }
```

### 8. line-height
- value : normal / `<number>` / `<length>` / `<percentage>` / inherit
```css
	div { line-height: 1.2; font-size: 10pt }	// number
	div { line-height: 1.2em; font-size: 10pt }	// length
	div { line-height: 120%; font-size: 10pt }	// percentage
```

### 9. font-family
- value : [ <family-name> / <generic-family> ] 
- family-name 의 폰트를 사용할 수 없을때 fallback 매커니즘으로 generic-family (serif, sans-serif) 를 정의해줘야 한다.


### 10. font 축약법
```css
* { font: -style, -variant, -weight, -size/line-height, -family }
```

