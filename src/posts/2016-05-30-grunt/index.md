---
path: '/posts/grunt-task-runner'
date: 2016-05-30
title: "Task Runner 'Grunt'"
tags: ['front-end']
---

![grund-js-opt](https://cloud.githubusercontent.com/assets/24470477/23152209/c6064286-f843-11e6-9d3b-877d28eb5bb6.png)


### Grunt
- 프로젝트에서 반복해서 수행하는 빌드, 테스트, 배포 등의 과정을 하나의 명령어로 간단하게 실행할 수 있는 빌드 툴
- package.json을 통해서 선언적인 설정을 통해서 task를 정의하고 이를 task로 연결해서 실행한다.
- grunt는 외부에서 본체로 정보를 넣고, 본체에서 정보를 끄집어내는 i/o (input-output:입출력) 연산방식으로 동작을 한다. 즉, 컴파일 후 임시 파일에 기록이 되고, 임시 파일은 autoprefixer에 의해 사용 된 후 최종 생성물을 대상 파일에 기록된다.

### package.json 
1. 해당 프로젝트를 npm모듈로 npm에 퍼블리싱할 때 사용하는 메타데이터를 저장한 파일이다.
2. 프로젝트에 필요한 grunt와 grunt plug-in 들은 이 파일의 devDependencies 항목에 나열한다.
3. Gruntfile과 함께 루트 디렉트리에 있어야 한다.
4. 해당 파일이 있는 폴더에서 커맨드 명령어 npm install(npm i)을 실행하면 이 파일 안에 있는 dependency 목록의 모듈들을 해당 버전으로 인스톨한다.
5. plug-in 설치
  - npm install <module> 
  - npm install <module> --save (-S) : -dev와 다르게 배포(dist)시 에도 의존(dependencies)하는 모듈로 기술된다.
  - npm install <module> --save-dev (-D) : 모듈설치와 package.json 의 devDependencies(개발시에만 의존) 항목에 모듈이 추가된다. 
  
  ```js
  module.exports = function(grunt) {
// grunt wrapper function

  grunt.initConfig({
  // project settings

    pkg: grunt.file.readJSON('package.json'),

      task_A: {
        options: {},
        target_a: {
          options: {},
        },
        target_b: {}
      },

      task_B: {
        options: {},
        target: {}
    }
  });

  // task를 지원하는 plug-in 로드
  grunt.loadNpmTasks('plug-in');

  // Custom tasks
  grunt.loadNpmTasks('default', ['task1', 'task2']);
};
  ```
1. task를 저장, 정의하고 Grunt plug-in을 불러오는데 사용한다.
2. 프로젝트의 메타데이터를 package.json에서 가져와서 grunt config로 주입한다.
3. 내부 구성 요소
  - wrapper 함수 : 모든 Gruntfile은 wrapper 함수를 기본 형태로 사용한다.
  - 프로젝트와 task 의 환경설정
  - grunt plugin 과 task 로딩
  - 사용자 정의의 task 설정
4. task 가 실행되면 grunt는 그 task의 이름으로 gruntfile의 환경설정 객체에서 프로퍼티를 찾고 이를 해당 task의 환경설정으로 사용한다.
5. Multi-task의 경우 다시 별도의 target명을 사용하여 개별적인 환경설정을 설정할 수 있다.
6. grunt task1 을 실행하면 차례대로 target의 환경설정을 갖고온다.
7. grunt task1:target1, grunt task1:target2와 같이 task와 target을 모두 사용해서 지정하면 특정 환경 설정만 갖고온다.
8. grunt : grunt의 실제 기능을 지닌 모듈. 
  - package.json 에 devDependecies로 지정하여 프로젝트 내부의 의존성 모듈로 설치한다.
9. grunt-cli : 터미널에서 grunt 명령어를 사용한다. 별도의 기능은 없고 grunt 모듈을 실행하는 역할을 한다. 
10. package.json 필요한 플러그인을 설정을 기반한 task 빌드 툴
