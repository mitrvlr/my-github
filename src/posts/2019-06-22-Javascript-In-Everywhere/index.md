---
path: '/posts/javascript-in-everywhere'
date: 2019-06-22
title: 'Javascript in everywhere'
tags: ['conference review']
---

# #1 CRA 으로 SSR 을 구현하며 배운 점 (승형수)

## CSR? SSR?

- CRS : 초기 로딩 속도가 느리고, 각 브라우저에 따라 자바스크립트 버전 의존도가 높다
- SSR : 서버에서 한번, 클라이언트에서 한번 각각 렌더링
- `hydrate` : `render` 의 전체 로드가 아닌 부분적으로 업데이트된 부분만 업데이트

## Checklist

### 서버 코드와 클라이언트 코드는 분리

- git sub module 사용

### 빛보다 빠른 굴절 (ts)

- TS 의 타입 체킹과 동시에 바벨 모듈을 거치지 않아서 생산성 향상

## 필수 패키지 설치 이슈

- `redux` : 전역 객체 설정 별도

# #2 ProtoPie 개발 경험기 (류성탁)

## Electron

- Chromium + Node.js + Native APIs = Electron
- Main Processor + Renderer Process
    - Main Processor : V8 + Nodejs + Electron (전반적인 라이프사이클 관리)
    - Renderer Process : Main Processor + Chromium
    - Electron API Domos

## ProtoPie 개발기

- ASAR : Electron Application packaging library
    - → 개발 버전과 빌드 버전에서 소스코드의 대소문자를 구분하지 못하는 이슈가 있었음
- Context Menu 와 Menu
    - → Menu 는 읽기 전용이라 재빌드를 했음
    - → `Role` 옵션
        - ⇒ Electron 내부에서 제공해주는 기본 동작들에 대한 기능
        - ⇒ visivle, enabled 의 일부 옵션은 적용이 되지않음
- CSP (Content-Security-Policy) 이슈
    - → 인라인 코드와 `eval` 은 유해한 것으로 간주
- Node-integration option 이슈
    - → Renderer Process 에서 Nodejs 를 통합하여 사용할 것인가 (CommonJS 모듈 방식을 사용할 수 있음)
    - → Electron v.5.0.0 이후부터 기본값이 false 로 바뀜

## ProtoPie 소스코드 보호

- Model 을 포함한 비즈니스 로직을 담당, 소스코드를 보호하기 위해 PKG로 패키징
- Renderer Process - Main Process ← (Node IPC) → Server Process (File I/O)
- Preview 와 Studio 에서 연속적으로 큰 데이터를 주고 받기 때문에 IPC에서 병목현상이 생겼음

### Elecetron Debugging

- IED Debugger 설정
- `Electron quick stater` 사용해서 연습!

# #3 Serverless 프레임워크로 Nuxt 앱 배포하기 (전창완)

## NuxtJS

- Vue Framework : 3가지 옵션으로 선택할 수 있음
    - SPA : AWS S3 호스팅 가능
    - Static Generated : API, Login (인증) 불가, AWS S3 호스팅 가능
    - Server Side Rendering : Serverless 에서 가능
- Serverless : 서비스 + 인프라 구성이 손쉽게 가능
    - AWS Lamda
    - Azure Function
    - Google ColudFunction
- Severless 장점
    - 사용한 만큼
    - Auto scale
    - 무중단 배포
- 정적 파일(Static file) 처리 : S3
    - 비용 절감
    - 용량 절약
    - 무중단 배포
- Serverless 배포 (Serverless lifecycle)
- S3 CloudFront 적용 ( + Lamda@edge)
- Serverless Framework 는 API Gateway 는 HTTP 만 지원 (HTTP → HTTPS Redirect issue)
    - ⇒ ALB Event 지원 (API Gateway HTTPS 지원)

# #4 React Hooks + TS + Funtional = 아름다움 (이윤재)

- Functional component 안에서 함수를 정의하면 컴포넌트가 렌더 될때마다 함수도 같이 호출되기 때문에 X
- Hooks 의 `useState` 를 사용하여 함수를 전달 할 경우 최초 컴포넌트가 렌더될때만 실행 됨
- 모든 Hooks 는 함수의 최상위 레벨에서만 사용할 수 있다
- `useEffect` 에서는 Clean up function 만,  `useCallback` 에서는 `async` 가 사용 가능