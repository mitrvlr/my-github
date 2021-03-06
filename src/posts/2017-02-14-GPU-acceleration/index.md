---
path: '/posts/gpu-acceleration'
date: 2017-02-14
title: 'GPU Acceleration for Web Animation'
tags: ['front-end']
---
## 웹 애니메이션 GPU 가속

GPU 가속을 알아보기 전 먼저 GPU라는 용어부터 짚고 넘어가야 할 것 같은데요.

> GPU(Graphic Processing Unit) 즉, 그래픽 처리 장치는 메모리를 빠르게 처리하고 화면으로 출력할 프레임 버퍼 안의 영상 생성을 가속하도록 설계된, 전문화된 전자 회로이다.

라고 [[위키백과]](https://ko.wikipedia.org/wiki/%EA%B7%B8%EB%9E%98%ED%94%BD_%EC%B2%98%EB%A6%AC_%EC%9E%A5%EC%B9%98) 에 설명되어 있습니다.

과거의 CPU 혼자 모든 부분을 담당하여 처리했던 부분을 현대엔 GPU가 더 빠르고 효율적으로 멀티미디어 콘텐츠의 처리 부분을 담당하고 있다는 얘기입니다.

자세한 역사와 CPU vs GPU 비교 글은 다음글에서 확인하실 수 있습니다.

- [[CPU? GPU? APU? 비슷한 컴퓨터 용어 바로 알기]](http://it.donga.com/20606/)
- [[GPU 가속 컴퓨팅이란]](http://kr.nvidia.com/object/what-is-gpu-computing-kr.html)

### 왜 GPU 가속을 사용해야 할까?

다시 한번 CPU와 비교를 해야 하는데요.
CPU는 작업을 직렬 처리를 하지만, GPU는 병렬 처리 환경으로 설계된 수많은 코어로 작업을 처리하지요.

즉, 할당된 메모리를 GPU메모리에 복사하는 처리 과정이 굉장히 빨라집니다.
또 병렬 처리 환경에 있는 수 많은 코어들이 픽셀 컬러를 계산하게 되고요.
순식간에 텍스쳐를 합성하고 동시에 다른 일을 할 수 있게 합니다.

브라우저에서 웹 애니메이션을 구현할 때 GPU 가속을 적용한다면 GPU 메모리에 복사된 해당 요소는 GPU의 메모리를 활용하기 때문에 애니메이션의 품질과 성능이 향상된다는 거죠.

### 가속 대상
GPU 가속을 적용하기 위해서 많은 과정이 필요하지 않습니다. 대상은 하기의 조건을 충족해주면 됩니다.

- CSS 3D Transfoem 적용 (translate3d, preserve-3d, translateZ, backface-visibility 등)
- CSS Animation, CSS Filter 적용
- 자식 엘리먼트가 레이어로 구성된 부모레이어
- 형제 엘리먼트가 상대적으로 낮은 z-index로 구성된 엘리먼트
- video, canvas 엘리먼트

### 주의 사항
1. 가속 속성이 부여되면 레이어로 분리된다.
2. 분리된 레이어는 변경된 내용이 있다면 GPU 메모리가 갱신된다. 변경 내용이 없다면 다시 GPU 에 업로드 하지 않는다.
3. GPU 가속을 사용하게 되면 GPU의 할당된 메모리 중 VRAM 을 활용한다. VRAM은 상당히 제한적이므로 대용량 이미지에는 사용을 지양한다.

즉 가속 대상이 된 엘리먼트는 GPU 메모리 중 상당히 제한적인 메모리를 가진 VRAM을 활용하기 때문에 GPU 가속 속성의 오용과 남용은 되려 웹 페이지 성능에 악영향을 미칠 수 있다는 얘기입니다.

### GPU 가속 조건
어쩌면 가장 중요한 부분이겠는데요.
가속 대상의 조건을 충족했다면 대상의 가속 조건은 layout reflow 가 일어나지 않아야 합니다.
(리플로우 시점은 렌더큐에 저장된 후 어느 시점 이후에 발생합니다.)

- *Layout Reflow*: 생성된 Dom node 의 레이아웃 수치( position-top, -left, -right, -bottom, width, height ..) 를 다시 계산하여 렌더 트리를 재생성하는 과정.

또, 엘리먼트의 사이즈, 위치의 레이아웃이 변경되는 시점에서 발생하는 리플로우는 소모 비용이 큽니다.

<figure>
	<img src="https://cloud.githubusercontent.com/assets/24470477/22916821/511be914-f2c4-11e6-9eb3-d28e5c72dc1c.jpg" alt="dom render process">
    <figcaption>[출처: www.chromium.org]</figcaption>
</figure>

### Tips
GPU 가속을 받는 대상은 GPU 메모리를 할당받고 있어 GPU 가속의 필요가 종료된 시점에서 하기의 속성으로 GPU 가속 대상에서 제외해 줘야 합니다.

- visibility: hidden; (엘리먼트의 텍스쳐를 지운다.)
- display: none; (자료구조를 지움으로 메모리를 할당받지 않는다.)
- reflow animation 코드를 한번에 모아 놓으면 리플로우 최적화가 가능하다.

이렇게 웹 애니메이션을 구현하면서 품질과 성능개선에 대한 고민을 함께 나눠보았는데요.
보다 나은 질양의 콘텐츠를 제공하기 위한 노력과 고민은 끊임이 없이 해야 할 것 같습니다.

#### Reference

- [[하드웨어 가속에 대한 이해와 적용]](http://d2.naver.com/helloworld/2061385)
- [[애니메이션 성능을 높이는 방법]](http://jindo.dev.naver.com/blog/2013/12/124)
- [[하드웨어 가속을 통한 모바일 웹앱 속도 향상]](http://blog.cornerstone.sktelecom.com/post/49167788041/%ED%95%98%EB%93%9C%EC%9B%A8%EC%96%B4-%EA%B0%80%EC%86%8D%EC%9D%84-%ED%86%B5%ED%95%9C-%EB%AA%A8%EB%B0%94%EC%9D%BC-%EC%9B%B9%EC%95%B1-%EC%86%8D%EB%8F%84-%ED%96%A5%EC%83%81)
- [[deview 2012 pt hds webkit_gpu]](http://www.slideshare.net/deview/a5deview-2012-pt-hds-webkitgpu)
