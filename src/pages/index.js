import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

// stacks
import html from '../assets/svg/html5.svg';
import css from '../assets/svg/css3.svg';
import sass from '../assets/svg/sass.svg';
import greensock from '../assets/svg/greensock.svg';
import javascript from '../assets/svg/javascript.svg';
import jquery from '../assets/svg/jquery.svg';

import react from '../assets/svg/react.svg';
import next from '../assets/svg/nextdotjs.svg';
import vue from '../assets/svg/vuedotjs.svg';
import nuxt from '../assets/svg/nuxtdotjs.svg';
import express from '../assets/svg/express.svg';
import styledComponents from '../assets/svg/styledcomponents.svg';


import webpack from '../assets/svg/webpack.svg';
import docker from '../assets/svg/docker.svg';
import netlify from '../assets/svg/netlify.svg';

import mysql from '../assets/svg/mysql.svg';
import iconGraphql from '../assets/svg/graphql.svg';
import nodejs from '../assets/svg/nodedotjs.svg';
import gatsby from '../assets/svg/gatsby.svg';
import googleCloud from '../assets/svg/googlecloud.svg';

import github from '../assets/svg/github.svg';
import githubActions from '../assets/svg/githubactions.svg';
import cypress from '../assets/svg/cypress.svg';

import eslint from '../assets/svg/eslint.svg';
import stylelint from '../assets/svg/stylelint.svg';
import prettier from '../assets/svg/prettier.svg';

import playwright from '../assets/svg/playwright.svg';
import typescript from '../assets/svg/typescript.svg';




const IndexPage = () => {
  return (
    <Layout>
      <div className="layout__row">
        <div className="post__panel">
          <h2>전성하 <i className="job">Software Engineer</i></h2>
          <blockquote>
            <p>모든 문제에는 아직 아무도 찾아내지 못한 다른 해결책이 존재한다</p>
          </blockquote>
          <cite>제럴드 M. 와인버그</cite>

          <h3>소개</h3>
          <ul>
            <li>🎖 프론트엔드 그룹의 리드를 맡고 있습니다.</li>
            <li>🎖 그룹의 운영 방안과 비전, 목표 설정 및 성과를 관리하고 아키텍처 설계를 합니다.</li>
            <li>🎖 그룹 구성원의 커리어 패스 설계 및 멘토링을 통한 성장을 지원합니다.</li>
            <li>🎖 코드는 문제 해결 방법 중 하나라고 생각하고, 문제 본질에 집중합니다.</li>
            <li>🎖 투명한 커뮤니케이션을 지향하고 타인을 존중합니다.</li>
            <li>🎖 책을 읽고 숙고하기를 좋아합니다.</li>
          </ul>

          <h3>보유 기술</h3>
          <h4>Hard skills</h4>
          <ul>
            <li>-</li>
          </ul>

          <h4>Soft skills</h4>
          <ul>
            <li>-</li>
          </ul>

          <h4>Career Skills</h4>
          <ul>
            <li>Leader Ship</li>
            <li>Follower Ship</li>
            <li>Manager Ship</li>
          </ul>

          <h3>경력</h3>
          <dl>
            <dt>데이원컴퍼니 <i className="period">(2019.04.08~ 재직중)</i></dt>
            <dd><em>2024</em> 그룹장 승진</dd>
            <dd><em>2023</em> 콜로소 서비스 내 RSC 도입 및 프론트엔드 성능 개선</dd>
            <dd><em>2023</em> 콜로소 <a href="https://coloso.global/" target="_blank" rel="noreferrer noopener">글로벌</a> 서비스
              개발, Next.js `/app`, RSC (v13.4.x) 도입
            </dd>
            <dd><em>2023</em> GCP 를 사용한 개발 환경 구성</dd>
            <dd><em>2022</em> 콜로소 국내 서비스 Next.js (v12.x) 도입</dd>
            <dd><em>2022</em> 팀장 승진</dd>
            <dd><em>2022</em> 프로 승급</dd>
            <dd><em>2021</em> 콜로소 <a href="https://coloso.jp/" target="_blank" rel="noreferrer noopener">일본</a>, 미국 서비스
              개발 Nuxt.js (v2.x) 도입
            </dd>
            <dd><em>2021</em> 시니어 승급</dd>
            <dd><em>2020</em> 콜로소 <a href="https://coloso.co.kr/" target="_blank"
                                     rel="noreferrer noopener">국내</a> Nuxt.js 도입
            </dd>
            <dd><em>2019</em> 패스트캠퍼스 웹 사이트 프론트엔드 개발, 일부 vue 전환 <a href="https://fastcampus.co.kr/" target="_blank"
                                                                  rel="noreferrer noopener">[링크]</a></dd>
            <dd><em>2019</em> 프론트엔드 마크업 가이드 제작 <a href="https://github.com/fastcampusgit/markup-guide" target="_blank"
                                                  rel="noreferrer noopener">[링크]</a></dd>
            <dd><em>2019</em> 입사</dd>
            <dd>
              - Next.js 어플리케이션과 인프라스트럭쳐 파이프라인 최적화, 개선 <br/>
              - 프론트엔드 전체 아키텍처 설계, 개선 <br/>
              - i18n, multilingual (ui, language token) 전략 설계 <br/>
              - 데이터 모델링 참여 및 일부 설계 <br/>
              - 9명 규모의 프론트엔드 그룹 운영 <br/>
            </dd>
            <dd>
              <em>사용 기술</em>
              <ul className="stack-list stack-list--organization">
                <li>
                  <div className="stack-list__item"><img src={html} alt="html5"/></div>
                  <strong>HTML5</strong>
                </li>
                <li>
                  <div className="stack-list__item"><img src={css} alt="css3"/></div>
                  <strong>CSS3</strong>
                </li>
                <li>
                  <div className="stack-list__item"><img src={javascript} alt="javascript"/></div>
                  <strong>JavaScript</strong>
                </li>
                <li>
                  <div className="stack-list__item"><img src={typescript} alt="typescript"/></div>
                  <strong>TypeScript</strong>
                </li>
                <li>
                  <div className="stack-list__item"><img src={react} alt="react"/></div>
                  <strong>react</strong>
                </li>
                <li>
                  <div className="stack-list__item"><img src={next} alt="next"/></div>
                  <strong>Next.js</strong>
                </li>
                <li>
                  <div className="stack-list__item"><img src={playwright} alt="playwright"/></div>
                  <strong>Playwright</strong>
                </li>
                <li>
                  <div className="stack-list__item"><img src={styledComponents} alt="emotion"/></div>
                  <strong>Emotion.js</strong>
                </li>
                <li>
                  <div className="stack-list__item"><img src={webpack} alt="webpack"/></div>
                  <strong>webpack</strong>
                </li>
                <li>
                  <div className="stack-list__item"><img src={sass} alt="sass"/></div>
                  <strong>SASS</strong>
                </li>
                <li>
                  <div className="stack-list__item"><img src={greensock} alt="greensock"/></div>
                  <strong>gsap</strong>
                </li>
              </ul>

              <em>환경</em>
              <ul className="stack-list stack-list--organization">
                <li>
                  <div className="stack-list__item"><img src={googleCloud} alt="googleCloud"/></div>
                  <strong>google Cloud</strong>
                </li>
                <li>
                  <div className="stack-list__item"><img src={mysql} alt="mysql"/></div>
                  <strong>mysql</strong>
                </li>
                <li>
                  <div className="stack-list__item"><img src={nodejs} alt="nodejs"/></div>
                  <strong>nodejs</strong>
                </li>
                <li>
                  <div className="stack-list__item"><img src={docker} alt="docker"/></div>
                  <strong>docker</strong>
                </li>
                <li>
                  <div className="stack-list__item"><img src={github} alt="github"/></div>
                  <strong>github</strong>
                </li>
                <li>
                  <div className="stack-list__item"><img src={githubActions} alt="githubActions"/></div>
                  <strong>github Actions</strong>
                </li>
                <li>
                  <div className="stack-list__item"><img src={eslint} alt="eslint"/></div>
                  <strong>eslint</strong>
                </li>
                <li>
                  <div className="stack-list__item"><img src={stylelint} alt="stylelint"/></div>
                  <strong>stylelint</strong>
                </li>
                <li>
                  <div className="stack-list__item"><img src={prettier} alt="prettier"/></div>
                  <strong>prettier</strong>
                </li>
              </ul>

              <em>Deprecated</em>
              <ul className="stack-list stack-list--organization">
                <li>
                  <div className="stack-list__item"><img src={vue} alt="vue"/></div>
                  <strong>vue</strong>
                </li>
                <li>
                  <div className="stack-list__item"><img src={nuxt} alt="nuxt"/></div>
                  <strong>nuxt</strong>
                </li>
                <li>
                  <div className="stack-list__item"><img src={cypress} alt="cypress"/></div>
                  <strong>cypress</strong>
                </li>
                <li>
                  <div className="stack-list__item"><img src={express} alt="express"/></div>
                  <strong>express</strong>
                </li>
              </ul>
            </dd>
          </dl>
          <dl>
            <dt>디지털 에이전시 이롭게 <i className="period">(2013.04.01~2018.06.28)</i></dt>
            <dd>
              - Grunt, gulp, handlebar.js 등을 사용한 워크 스페이스 개선<br/>
              - 시멘틱 마크업과 웹 접근성을 고려한 마크업 최적화 <br/>
              - CSS 전처리기와 방법론 적용 <br/>
              - 돔 애니메이션을 사용하여 인터랙티브 웹 페이지 구현 <br />
              - GPU 가속을 통한 애니메이션 최적화에 대한 사내 블로그 기고 <br />
              - 서드파티 API 연동
            </dd>
            <dd>
              코스메틱 브랜드 사이트 중심으로 인터랙티브 웹 사이트 제작
            </dd>
            <dd>
              <em>사용 기술</em>
              <ul className="stack-list stack-list--organization">
                <li>
                  <div className="stack-list__item"><img src={html} alt="html5" /></div>
                  <strong>HTML5</strong>
                </li>
                <li>
                  <div className="stack-list__item"><img src={css} alt="css3" /></div>
                  <strong>CSS3</strong>
                </li>
                <li>
                  <div className="stack-list__item"><img src={sass} alt="sass" /></div>
                  <strong>SASS</strong>
                </li>
                <li>
                  <div className="stack-list__item"><img src={javascript} alt="javascript" /></div>
                  <strong>javascript</strong>
                </li>
                <li>
                  <div className="stack-list__item"><img src={jquery} alt="jquery" /></div>
                  <strong>jquery</strong>
                </li>
                <li>
                  <div className="stack-list__item"><img src={greensock} alt="greensock" /></div>
                  <strong>gsap</strong>
                </li>
                <li>
                  <div className="stack-list__item"><img src={webpack} alt="webpack" /></div>
                  <strong>webpack</strong>
                </li>
              </ul>
            </dd>
          </dl>
        </div>
      </div>
    </Layout>
  );
};

export const aboutQuery = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

export default IndexPage;
