---
path: '/posts/ddl-dml-dcl'
date: 2019-12-03
title: 'DDL DML DCL'
tags: ['sql']
---

## 데이터 정의 언어 (Data Definition Language)

컴퓨터 사용자 또는 응용 프로그램 소프트웨어가 컴퓨터 데이터를 정의하는 컴퓨터 언어 또는 컴퓨터 언어 요소

e.g.  Document Type  Definition (DTD), 데이터베이스 언어 SQL (Structured  Query Language)

### SQL

SQL 의 데이터 정의 언어 문장은 관계형 데이터베이스의 구조를 정의한다.

SQL 에 의해 정의되는 관계형 데이터베이스의 구조는 Recode(row), Field(column), Table 등 데이터베이스 고유의  특성을 포함한다.

- CREATE -  새로운 데이터베이스 관계 (테이블), VIEW,  INDEX, 저장 프로시저 생성
- DROP - 이미 존재하는 테이블 삭제
- ALTER - 이미 존재하는 데이터베이스 개체에 대한 변경, RENAME의 역할
- TRUNCATE - 관계 (테이블)에서 데이터를 돌이킬 수 없는 제거

## 데이터 조작 언어 (Data Manipulation Language)

데이터베이스 사용자 또는 응용 프로그램 소프트웨어가 컴퓨터 데이터베이스에 대해 데이터 검색, 등록, 삭제, 갱신을 위한 데이터베이스 언어 또는 데이터베이스 언어 요소

### SQL

SQL 은 관계형 데이터베이스에 대해 검색 및 업데이트 등의 데이터 조작을 위해 사용된다.

데이터 조작 언어는 문장의 첫 단어로 표시하는 기능을 가진다. 데이터 조작 언어에서 문장의 첫 단어는 대부분의 경우 동사이다. 

- SELECT - 검색 (질의)
- INSERT - 삽입 (등록)
- UPDATE - 업데이트 (수정)
- DELETE - 삭제

## 데이터 제어 언어 (Data Control Language)

데이터베이스에서 데이터에 대한 접근 제어를 위한 데이터베이스 언어 또는 데이터베이스 언어 요소

권한 부여, 박탈이 있으며, 설정할 수 있는 권한으로는 연결, 질의, 자료 삽입, 갱신, 삭제 등이 있다.

- GRANT
- REVOKE

### 권한

SQL 의 GRANT 및 REVOKE 데이터베이스 사용자로 설정할 수 있는 권한은 다음과 같다

- CONNECT - 데이터베이스 또는 스키마에 연결하는 권한
- SELECT - 데이터베이스에서 데이터를 검색하는 권한
- INSERET - 데이터베이스에서 데이터를 등록할 수 있는 권한
- UPDATE - 데이터베이스의 데이터를 업데이트 할 수 있는 권한
- DELETE - 데이터베이스의 데이터를 삭제할 수 있는 권한
- USAGE - 스키마 또는 함수와 같은 데이터베이스 개체를 사용할 수 있는 권한

[참고 자료 - wiki](https://ko.wikipedia.org/wiki/%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4_%EC%96%B8%EC%96%B4)