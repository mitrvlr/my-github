---
path: '/posts/font-face'
date: 2015-03-11
title: 'font-face'
tags: ['front-end','css']
---

### 1. @font-face
  - css2.1 부터 기술이 되었으나 CSS3 font module 에서 표준화된 규율로 명시되었다.
  - at-rules (@로 시작하는 css규칙 : ex - @import / @media 등등이 있다) 중 하나이다.
  - 웹 상에서의 텍스트에 온라인 폰트를 적용할 수 있다.
  
> css 2.1에서 제안된 @font-face는 모든 플랫폼에 충족되는 폰트 포맷에 대한 명확한 합일점이 없었다. 
>
> W3C는 폰트 포맷 형식을 권고 하지 않았고, @font-face는 CSS 2.1 버전의 일부로 포함이 되었다.
> 결국 각 플랫폼은 지원하는 글꼴형식이 통합되지 않았고,현재 font-face에서 각 플랫폼에서 지원하는 글꼴 확장자에 맞게 설정해줘야 한다.

**플랫폼별 font face 설정**

 각 확장자는 플랫폼별 글꼴 렌딩을 위해 font-face를 설정 해줘야 한다.
 각각의 font format별 font-face 설정을 해준다면 해결이 쉽지 않을까?
 이 경우 각 플랫폼에서 정한 표준 외의 비표준 글꼴형식도 함께 내려받아 성능저하의 원인이 된다.

### 2. Syntax 

```css
@font-face {
	font-family : fontName;
	src : url('fontName.eot'); // IE9 호환 모드
	src : local('fontName'),
	url('fontName.eot?#iefix') format('embedded-opentype'), // IE6~IE8
	url('fontName.woff') format('woff'), // Mordern browser
	url('fontName.ttf') format('truetype'), // 사파리, 안드로이드, iOS
	url('fontName.svg#svgFontName') format('svg'); // Legacy iOS
}
body{ font-family: 'fontName', NanumGothic, fontName; }
```

- 익히 사용하고 있는 @font-face syntax 는 Paul Irish 가 제안한 방탄코드 이다.
- IE 6~8 브라우저는 eot글꼴만 요청하여 표시한다. _(eot 형식이 먼저 참조되야하는 이유)_
- IE 9의 상위IE, 모던브라우저는 woff글꼴만 요청하여 표시한다.
- src 속성에 local() 값은 외부자원을 참조하기 전에 시스템 글꼴을 우선 참조가 가능하게 한다.
- 과거엔 local()을 local(※) 값으로 시스템 폰트에 존재하지 않을만한 글꼴을 임의로 지정하였다.
  - 로컬 폰트 오류시 어떤 폰트도 제공받지 못한다는 이유로 로컬 폰트 설정을 막았다. 굳이 2 byte 짜리 특수문자인 이유는 Mac OS에서 2 Byte 문자열 글꼴은 처리를 하지 않았기 때문.
- font-family 설정시 한글 이름의 폰트는 영문이름도 작성한다. _(한글을 처리하지 못하는 브라우저가 있기 때문이다.)_
- format('embedded-opentype') 은 IE6~8에서 해석을 하지 못하기 때문에 자신이 포함된 src의 다른 서체까지 모두 받으려 하지만, EOT외엔 해석을 하지 못한다. 그래서 파일명 뒤에 ?로 이후 구문은
   쿼리문으로 인식하여 해석하지 못하게끔 한다.
   
> MS에서 디지털컨텐츠의 저작권을 보호하는 기술(DRM) 솔루션으로 EOT 포맷 형식을 내놓았다. (어떠한 컴퓨터에서도 설치되지 않으며, 오직 브라우저에 의해서만 판독된다.)
> MS의 나름 선구화된 EOT 포맷형식을 인정하지 않았던 플랫폼들은 WOFF 포맷 형식이라는 새로운 합일점을 찾는다.

#### *동일 출처 제한
WOFF 포맷은 '동일 출처 제한'을 강제하기 때문에 웹페이지의 도메인과 WOFF 파일의 도메인이 다르면 해당 글꼴을 브라우저에서 표현되지 않는다.


#### Reference
- [[웹폰트(Downloadable Font), 크로스 브라우징]](http://egloos.zum.com/einmong/v/5415221)
- [[@font-face]](https://developer.mozilla.org/ko/docs/Web/CSS/@font-face)
- [[웹 폰트 문제 해결. @font-face troubleshooting]](http://naradesign.net/wp/2012/06/19/1830/)
- [[@font-face]](http://www.carpeau.net/custom-fonts-to-be-loaded/)
