---
path: '/posts/is-it-okay-with-such-rest-api'
date: 2019-06-01
title: '그런 REST API 로 괜찮은가'
tags: ['front-end']
---

# 어떻게 인터넷에서 정보를 공유할 것인가?

### Web, 정보들을 하이퍼텍스트로 연결한다.

- 표현 형식: HTML
- **식별자: URI**
- 전송방법: HTTP Protocol 설계

### HTTP/1.0

- HTTP 업데이트를 안정적으로 Relase 하기 위해 HTTP Object Model 발표
- 4년 후 명명 REST (Representational State Transfer)

### Microdoft REST API Guidlines (2016)

- URI는 HTTPS(protocol)://{serviceRoot}/{Collection}/{id}
- GET, PUT, DELETE, POST, HEAD, PATCH, OPTIONS 등의 Method를 지원해야 한다.
- API 버저닝은 Major.minor 로 하고 URI에 버전 정보를 포함해야 한다.

## REST API* REST 아키텍쳐 스탕닐을 따르는 API

## REST

- 분산 하이퍼미디어 시스템(e.g. WEB)을 위한 ~아키텍쳐 스타일~ (제약 조건)

### REST를 구성하는 스타일

- client - server
- stateless
- cache
- uniform interface
- layered system
- code-on-demand (optional) : 서버에서 코드를 클라이언트로 보내서 실행할 수 있어야 한다.

### Uniform Interface

- indentification of resourses : 리소스가 URI로 식별되어야 한다
- manipulation of resources throught representations
    - Representation 전송을 통해서 리소스를 조작해야 한다
    - 리소스를 생성, 업데이트, 삭제를 할 때 HTTP Message에 표현을 담아 전송을 하여 달성해야 한다
    - self-descriptive messages
    - hypermedia as the engine of application state (HATEOAS)

### self-descriptive messages

- 메시지는 스스로 설명해야 한다
- 목적지가 생략되어 있지 않다

`GET / HTTP/1.1`

    GET / HTTP/1.1 
    Host: www.ex.com

~Content-Type~ 명시 되어야 한다

    HTTP/1.1 200 OK 
    [{ “op”: “remove”, “path”: “a/b/c”}]

    HTTP/1.1 200 OK 
    Content-Type: application/json-path-json 
    
    [{ “op”: “remove”, “path”: “a/b/c”}]

### hypermedia as the engine of application state (HATEOAS)

- Application의 상태는 Hyperlink를 이용해 전이되어야한다
    - HTML의 `<a>` Hyperlink를 사용
    - HTTP HEAD의 Link 명세 사용
- Uniform Interface
    - 독립적 진화
    - 서버와 클라이언트가 각각 독립적으로 진화한다.
    - 서버의 기능이 변경되어도 클라이언트를 업데이트할 필요가 없다
    - REST를 만들게 된 계기 : 어떻게하면 웹이 깨지지 않고 HTTP를 개선시킬 수 있을까?

### WEB

- 웹 페이지를 변경했다고 웹 브라우저를 업데이트할 필요가 없다
- 웹 브라우저를 업데이트했다고 웹 페이지를 변경할 필요가 없다
- HTTP, HTML 명세가 변경되어도 웹은 잘 동작한다

### REST와 웹의 독립적 진화* HTTP에 지속적으로 영향을 줌

- Host 헤더 추가
- 길이 제한을 다루는 방법 명시 (414 URI Too Long 등)
- URI에서 리소스의 정의가 추상적으로 변경됨 : ‘식별하고자 하는 무언가’
- 기타 HTTP와 URI에 많은 영향을 줌
- HTTP/1.1 명세 최신판에서 REST에 대한 언급이 들어감

### REST의 성공* REST API는 REST 아키텍쳐 스타일을 따라야한다

- Roy T. Fielding 하피어텍스트를 포함한 Self-descriptive한 메시지의 Uniform Interface를 통해 리소스에 접근하는 API

### REST API의 구현

### 웹

- Protocol : HTTP
- 커뮤니케이션 : 사람-기계
- Media Type : HTML

### HTTP API

- Protocol : HTTP
- 커뮤니케이션 : 기계-기계
- Media Type : JSON

### HTML

- Hyperlink : 됨 (a tag 등)
- Self-descriptive : 됨 (HTML 명세)
```json
    GET /todos HTTP/1.1
    Host: example.org
    
    HTTP/1.1 200 OK
    Contnent-Type: text/html
    
    <html>
       <body>
           <a href=“http://todos/1”>회사 가기</a>
           <a href=“http://todos/2”>집에에에 가기</a>
       </body>
    </html>
```

### Self-descriptive

- 응답 메시지의 Content-Type을 보고 media type을 확인
- HTTP 명세에 media type은 IANA 등록되어 있다고 함
- IANA 에 따르면 text/html의 명세는 [http://www.w3.org/TR/html](http://www.w3.org/TR/html) 이므로 찾아가 명세는 해석
- 확장 가능한 커뮤니케이션
    - 서버나 클라이언트가 변경되더라도 오고가는 메시지는 언제나 self-descriptive 하므로 언제나 해석이 가능하다.

### HATEOAS

- a 태그를 이용해 표현된 링크를 통해 다음 상태로 전이될 수 있으므로 HATEOAS를 만족한다.
- 애플리케이션 상태 전이의 late binding
    - 어디서 어디로 전이가 가능한지 미리 결정되지 않는다.
    - 어떤 상태로 전이가 완료되고 나서야 그 다음 전이될 수 있는 상태가 결정된다.
    - 링크는 동적으로 변경될 수 있다.

### JSON

- Hyperlink : 정의되어있지 않음
- Self-descriptive : 불완전
```json
    GET /todos HTTP/1.1
    HOst: example.org
    
    HTTP/1.1 200 OK
    Content-Type: application/json
    
    [
      {“id”: 1, “title”: “회사 가기”},
      {“id”: 2, “title”: “집에 가기”}
    ]
```
## 정리

- 오늘날 대부분의 'REST API'는 사실 REST를 따르지 않고 있다.
- REST의 제약조건 중 특히 Self-descriptive와 HATEOAS를 잘 만족하지 못한다.
- REST는 긴 시간에 걸쳐 진화하는 웹 애플리케이션을 위한 것이다.
- REST를 따를 것인지는 API를 설계하는 이들이 스스로 판단하여 결정해야 한다.
- REST를 따르겠다면, Self-descriptive와 HATEOAS를 만족시켜야한다.
    - Self-descriptive 는 custom media type이나 profile link relation 등으로 만족시킬 수 있다.
    - HATEOAS는 HTTP헤더나 본문에 링크를 담아 만족시킬 수 있다.
- REST를 따르지 않겠다면, 'REST를 만족하지 않는 REST API'를 뭐라 부를지 결정해야 할 것이다.

[원문: 그런 REST API로 괜찮은가](https://tv.naver.com/v/2292653)