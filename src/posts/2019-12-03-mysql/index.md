---
path: '/posts/mysql'
date: 2019-12-03
title: 'MySQL'
tags: ['software engineering', 'mysql']
---

# 데이터베이스

## 정의

관련된 데이터가 모여진 집합체 
⇒ 지속적으로 데이터를 입력하고 경신하며, 축적된 데이터를 바탕으로 의미 있는 정보를 추출할 수 있음

- 통합 데이터
- 공유 데이터
- 저장 데이터
- 운영 데이터
- 의사 결정 데이터

## 특징

- 실시간 접근
- 지속적인 변화
- 동시 공유
- 내용에 의한 참조

## 데이터베이스 관리 시스템 DBMS

### DBMS 정의

⇒ 사용자 또는 응용 시스템과 데이터베이스 간 인터페이스 역할 담당

실제 데이터베이스를 관리하는 시스템 소프트웨어, 데이터베이스 사용자가 데이터베이스에 저장된 데이터를 관리(추가, 삭제, 갱신 등) 할 수 있도록 이들의 중간에서 사용자 요구사항을 처리함

e.g) MySQL, MSSQL, Oracle, Infomix 등

### DBMS 기능

- 데이터 정의
    - 스키마 정의, 테이블, 인덱스, 동의어, 시퀀스 등과 같은 스키마 객체를 생성, 변경, 삭제
    - CREAT TABLE, ALTER TABLE, DROP TABLE, CREAT INDEX 등
- 데이터 조작
    - 테이블이나 뷰와 같은 스키마 객체에 저장된 데이터를 조작하는 기능, 새로운 데이터를 입력, 수정 또는 삭제하는 기능
    - INSERT,  UPDATE, DELETE 등
- 데이터 제어
    - 데이터의 정확성과 안전성을 유지하기 위한 기능
    - 데이터의 정확성을 유지를 위한 트랜잭션 관리나 접근 권한 관리 기능
    - COMMIT, ROLLBLACK, GRANT, REVOKE 등

### DBMS 장점

- 중복 최소화
- 공유
- 일관성 유지
- 무결성 유지
- 보안 보장
- 요구 조정

### DBMS 장점

- 운영비 증대
- 자료 처리의 복잡화
- 복잡한 예비와 회복
- 시스템 취약성

# 데이터베이스 모델링과 SQL

## 종류

### 관계형 데이터베이스

- 데이터를 표와 같은 형태로 정리 (MySQL)

### 분산형 데이터베이스

- 네트워크 상의 여러 다른 지점에 분산되어 있거나 중복되어 있는 형태

### 객체 지향형 데이터베이스 모델

- 객체 클래스와 서브 클래스로 정의된 데이터가 서로 일치하는 형태

### SQL (Structured Query Language)

- 데이터 조회, 수정이 가능한 데이터베이스 표준 언어

## 관계형 데이터베이스 모델의 구조

### 개념

- 수치 집합론을 적용해 2차원 형식의 테이블 구조에 데이터를 저장하고 검색, 수정, 삭제

### 테이블 (table)

- 2차원 테이블 구조의 데이터를 저장하는 기본 단위로 '릴레이션(relation)' 이라고도 하며, 필드와 레코드로 구성

### 필드 (fileld)

- 열(Column) 방향의 데이터베이스 테이블의 항목 하나하나를 가리키며 속성(attribute)라고도 함

### 레코드 (record)

- 행 (row) 방향의 필드에 저장되는 한 세트의 정보를 가리키며 튜플(tuple)이라고도 함

# MySQL

## 특징

- SQL에 기반을 둔 관계형 DBMS 중 하나
- Oracle, IBM, Infomix 등 고가의 데이터베이스에 비해 무료 데이터베이스며 성능과 보안이 우수
- 리눅스, 유닉스, 윈도우 등 거의 모든 운영체제에서 사용 가능함
- C, C++, Java, PHP, Python 등 다양한 프로그래밍 언어를 지원

## 장점

- 공개 소프트웨어로 무료, 상업적 목적의 경우 별로 라이센스 구매
- 다른 DBMS에 비해 상대적으로 처리속도가 상당히 빠르고, 대용량의 데이터도 쉽게 처리 가능
- 보안성이 우수

## 명령어

- `show tables;` : 테이블 목록 확인
- `create database $table_name;` : 새로운 데이터 베이스 생성
- `desc $table_name;` : 테이블 구조를 출력
- `select $filed1, $filed2 from $table_name;` : 특정 필드에 데이터 검색
- `alter table $table_name add $new_filed $new_filed_type [first or after $filed_name];` : 테이블에 새로운 필드를 추가하는 명령
- `alter table $table_name drop $delete_filed;` :  테이블의 특정 필드를 삭제
- `alter table $table_name change $previus_filedName $new_filedName;` : 특정 필드를 변경하는 명령
- `alter table $table_name  modify  $filed_name $new_type;` : 테이블의 특정 필드의 타입 수정
- `alter table  $previous_table rename new_table;` : 테이블의 이름을 수정
- `insert into $table_name ($filed1, $filed2) values ($filed1_value, $field2_value);` : 특정 필드에 새로운 데이터(row)를 입력
- `update $table_name set $fileld = $filed(new_data) where $filed = $filed_value` : 특정 필드에 입력된 데이터를 변경하는 명령어
- `create database $database_name;` : 데이터베이스 생성
- `show database $database_name;` : 데이터베이스 확인
- `drop database $database_name;` : 데이터베이스 삭제

## 테이블 명령어

- `varchar` : 가변 크기 문자형, 입력한 문자 수 만큼만 메모리를 사용
- `char` : 고정 크기 문자형, 무조건 지정한 최대 문자 수 만큼 메모리를 사용
- `$type not null` : 필수 항목
- `primary key(num)` : 기본 키, 유일한 값

## 레코드 명령어

- `insert into ~ values ~` : 레코드 삽입
- `select ~ from ~` : 특정 필드에 해당하는 데이터 검색
- `select ~ from ~ where ~` : 조건에 맞는 레코드 검색
- `select ~ from ~ where ~ like ~` : 특정 문자열이 포함된 레코드 검색
- `select ~ from ~ order by ~` : 오름차순으로 레코드 정렬
- `select ~ from ~ order by ~ desc` : 내림차순으로 레코드 정렬
- `update ~ set ~ where ~` : 레코드 수정
- `delete from ~ where ~` : 레코드 삭제
- `inner Join` : 조인하는 테이블의 일치하는 값 출력