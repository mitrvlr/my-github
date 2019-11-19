---
path: '/posts/browser-flows'
date: 2016-01-11
title: 'Browser flows'
tags: ['front-end']
---

![d2-campus-seminar-27-1024](https://cloud.githubusercontent.com/assets/24470477/23196751/f09dbf7c-f8fe-11e6-80ec-5e6b6f5b0204.jpg)


출처: [[D2 campus seminar]](http://www.slideshare.net/deview/d2-campus-seminar-45209057)


![png 3bbase6494b952da1044d948](https://cloud.githubusercontent.com/assets/24470477/23196755/f4c75d42-f8fe-11e6-865e-f25d94283ed9.png)


출처: [[www.chromium.org]](https://www.chromium.org/developers/design-documents/gpu-accelerated-compositing-in-chrome)


### 크롬 브라우저의 웹 페이지 렌더링 처리 과정

  1. 브라우저는 HTML이 로딩 되면 파싱한다.
  2. HTML node를 DOM 트리로 구성한다. _(DOM 트리는 화면에 표현되는 node와 화면에 표현되지 않는 node로 구성된다.)_
  3. 화면에 구성되는 node들은 RenderObject 트리로 구성한다.
  4. RenderObject 트리중 별도의 하드웨어 가속을 받는 node는 RenderLayer를 생성한다.
  5. RenderLayer는 GraphicsLayer를 생성하며 하드웨어 가속(GPU Accelration)을 받는다.

#### Reference
  - [[애니메이션 성능을 높이는 방법]](http://jindo.dev.naver.com/blog/2013/12/124)
  - [[하드웨어 가속에 대한 이해와 적용]](http://d2.naver.com/helloworld/2061385)
