---
path: '/posts/2019-google-cloud-onboard'
date: 2019-06-04
title: '[Conf] Google Cloud onBoard 후기'
tags: ['conference review']
---


# GCP

## Cloud Computing

비지니스에 집중하고 비 비지니스에 대한 라소스를 줄일 수 있는 장점

## 목적

- ***인프라*** 비용 최적화 및 확장성 확보
- ***데이터*** 속에서 가치 있는 정보를 찾아내 비지니스 결과 예측
- 새로운 *앱*과 환경 구축
- 서비스 및 파트너로 구성된 비지니스 ***플랫폼***에 연결
- 안전한 ***모바일/기기***를 통해 팀 생산성 향상

⇒ 보안 / 확장 / 제어 

## 컴퓨팅 동향

물리적/코로케이션 ⇒ 가상화 ⇒ 서버리스

## 확장성/유연성

- 개발형 API, 오픈소스 서비스와 호환 가능
- 다채로운 생태계를 위한 오픈소스 (e.g. Tensorflow 등)
- 다양한 벤더에 적용할 수 있는 기술

## GCP

- 온프라미스
- Infrastructure as a Service (IaaS)
- Platform as a Service (PaaS)
- 관리형

## AIM

### 리소스 계층 구조

⇒ Org - Folder - Project - Resource

- 리소스에 정책을 설정 가능
- 상위 정책이 하위 리소스에 상속
- 덜 제한적인 상위 정책이 더 제한적인 리소스 정책에 상속

### Cloud Identity

- 사용자 계정 / 그룹 생성
- 인증 옵션 (개발자)

### 역할

- 정해진 권한 수준 제공
- (커스텀) 사전 정의 역할

⇒ 권장 : 개인이 아닌 팀(그룹)으로 권한 부여, 최소 권한의 원칙 ( 필요한 사람에게 필요한 권한만 )

## 사용 방법

- 콘솔 (UI)
- CLI
- SDK
- API
- APP
- Library

## GCP Marketplace

⇒ Third party Library (SaaS) 를 지원해서 빠르게 GCP 체험 가능

## Quicklabs

[Quicklabs](https://google.quicklabs.com) 을 통한 실습 가능

# Virtual Private Cloud (VPC) 네트워크

### Legacy Network

- Cable or Fiber
- Router → Router
- DNS ⇒ URL → IP Address

### 특징

- 단일 Anycast IP를 사용한 글로벌 부하 분산기
- 전체 리전을 포괄하는 서브넷 범위
- 소프트웨어 정의 라우터
- 손쉽게 네트워크 공유 및 피어링

### 연결

- VPN
- Interconnect
- Direct Peering

# Load Balancing

- Client - Web Server
- Client ← Load Balancer (Health check) → Web Server
- Computing Engine 리전에 HTTPS 트래픽 분산
- 부하 분산기에서 SSL 종료

### 콘텐츠 기반

⇒ URL 패턴에 따라 다양한 인스턴스 풀에 HTTPS 를 분산

# Computing Engine

### Auto-scaling

⇒ Compute 과 Storage 분리

# 데이터베이스 아키텍처

⇒ Client - Web Server - Database (OLTP BD) - (ETL) - 데이터 웨어하우스 (OLAP DB) - 대시보드/BI

### Cloud SLQ

- OLTP 용 관리형 RDBMS
- 웹 프레임워크, 기존 애플리케이션

## Cloud Spanner

- OLTP 용 관리형 RDBMS
- 대규모 데이터베이스 애플리케이션

### Cloud Storage

- Blobstore
- 정형 및 비정형 데이터, 바이너리 또는 객체 데이터

### Cloud Bigtable

- NoSQL wide column
- 스트리밍 등 큰 데이터 처리에 탁월
- '플랫' 데이터, 집중적인 읽기/쓰기, 이벤트, 분석 데이터

### Cloud Datastore

- NoSQL 문서
- 입문용, App Engine 애플리케이션

# Container

## 기존 애플리케이션 빌드

- Application Code
- Dependencies
- Kernel
- Hardware → (가상화) → Hardware + Hypervisor

## Container 애플리케이션 빌드

- Application + Dependencies (User space) ⇒ Container
- Container Runtime
- Kernel
- Hardware

### 장점

- 일관성: 개발, 테스트, 프로덕션 환경 전체
- 느슨한 결합: 애플리케이션 및 운영 체제 계층 간 느슨한 결합
- 작업 부하 이전

## Google Kubernetes (k8s)

⇒ Container 클러스터 조정 시스템

- 컨테이너 클러스터의 배포, 확장, 운영 자동화
- 구글 오픈소스
- 작업 이동성
- 롤링 업데이트
- 다중 영역 클러스터
- 부하 분산
- 자동 확장

## Google Kubernetes Engine

- 컨테이너 실행을 위한 완전 관리형 클러스터 관리 및 조정 시스템
- Google Kubernetes 기반

# 클라우드 애플리케이션

## App Engine

- 확장 가능한 애플리케이션을 빌드 할 수 있는 PaaS
- 배포, 유지관리, 확징이 쉬움
- 확장 가능한 웹 애플리케이션 및 모바일 백엔드를 빌드하는데 적합
- 대표적인 Serverless
- 애플리케이션이 샌드박스 제약을 준수해야 함 (단점)

## App Engine Flexible Environment

- 커스텀 런타임 지원
- 하드웨어는 전혀 관여를 하지 않음

## Cloud Endpoints

- API 콘솔을 통해 분산된 API 관리

# Cloud Development, Deployment, Monitoring

## Cloud Source Repositories

- Cloud Source Repositories 내부의 Git 저장소

## Cloud Functions

- 서버 또는 런타임 없이 이벤트에 응답하는 단일 목적의 함수 생성
- 자바스크립트로 작성 (GCP 관리형 Node.js 환겨에서 실행)

## Deployment Manager

- 인프라 관리 서비스
- 환경을 설명하는 .yaml 템플릿을 만들고 Deployment Manager 를 사용하여 리소스 생성
- 반복적으로 배포 가능

## Stackdriver

- Monitoring
- Logging
- Profiler
- Error Reporting
- Debugger
- Trace

# 빅데이터 플랫폼

## 기초: 분산 시스템

- Data → (Sharding) Scale out → Worker ← Master
- MapReduce Algorithm (e.g. hadoop)

### 빅데이터 플래폼 구축

Obtain servers → Configure servers → install OSS → configure OSS → Optimize OSS → Debug OSS → Process data (Scale, reconfigure)

## Cloud Dataproc

- 관리형 hadoop
- 온프레미스 Hadoop 작업을 클라우드로 손쉽게 이전 가능

## BigQuery

- 막대한 데이터세트에 대한 실시간에 가까운 분석 제공
- SQL 구문을 사용하는 쿼리
- Serverless, 클러스터 유지 관리가 필요하지 않음
- Columnar Storage 분석용 DB

# GCP Data Pipelines

- Raw Logs, database, extracts, etc. : Cloud Storage (Batch)
- Events, metrics, etc. : Cloud Pub/Sub (Stream)

⇒ Cloud Dataflow (Unified Data Processing) → BigQuery (Data Warehouse for Analytics) → Cloud Datalab (Notebook for data Science)

## Cloud Pub/Sub

데이터 수집의 두가지 방법

- Tightly coupled System
- Loosely coupled System (Message bus)
    - Message bus 는 커야하고, 안정적이여야 함
    - 구글에서는 Pub/Sub Message bus 역할

## Google Dataflow

- ETL(추출/변환/로드) 파이프라인으로 데이터의 이동, 필터링, 그룹핑, 변환 처리
- VM 데이터 처리
- 코드를 한번만 작성하여 일괄 처리 및 스트리밍
- 변환 기반 프로그래밍 모델 (Transform-based programming model)
- Pipeline 에서 소스의 데이터가 변환되고 이동

## Cloud Datalab

- 대규모 데이터 탐색, 변환, 변환, 분석, 시각화를 위한 대화형 도구
- Tensorflow 를 손쉽게 사용

# 머신러닝 플랫폼

## Cloud Machine Learning Engine

- 사용자가 코드 작성
- 클라우드 환경에서 실행
- 자유도 높음, H/W 관리 용이

## Cloud AutoML

- 사용 용이한 UI
- 언어, 이미지 분석 및 번역에 특화
- 사용자가 직접 데이터를 이용하여 학습

## ML API

- 사전 트레이닝 된 API 제공