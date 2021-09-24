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
import iterm from '../assets/svg/iterm2.svg';
import visualStudioCode from '../assets/svg/visualstudiocode.svg';
import webstorm from '../assets/svg/webstorm.svg';
import intellijIdea from '../assets/svg/intellijidea.svg';
import cypress from '../assets/svg/cypress.svg';

import eslint from '../assets/svg/eslint.svg';
import stylelint from '../assets/svg/stylelint.svg';
import prettier from '../assets/svg/prettier.svg';




const IndexPage = () => {
  return (
    <Layout>
      <div className="layout__row">
        <div className="post__panel">
          <h2>전성하 <i className="job">프론트엔드</i></h2>
          <h3>소개</h3>
          <ul>
            <li># 프론트엔드 개발합니다.</li>
            <li># 좋은 개발 문화, 함께 성장하는 문화에 관심이 많습니다.</li>
            <li># 하드 스킬과 소프트 스킬 고루 정진하려 노력하고 있습니다.️</li>
          </ul>

          <h3>보유 기술</h3>
          <h4>Core</h4>
          <ul className="stack-list">
            <li>
              <div className="stack-list__item"><img src={html} alt="html5" /></div>
              <strong>HTML5</strong>
            </li>
            <li>
              <div className="stack-list__item"><img src={css} alt="css3" /></div>
              <strong>CSS3</strong>
            </li>
            <li>
              <div className="stack-list__item"><img src={javascript} alt="javascript" /></div>
              <strong>JavaScript</strong>
            </li>
          </ul>

          <h4>Framework</h4>
          <ul className="stack-list">
            <li>
              <div className="stack-list__item"><img src={sass} alt="sass" /></div>
              <strong>SASS</strong>
            </li>
            <li>
              <div className="stack-list__item"><img src={styledComponents} alt="styledComponents" /></div>
              <strong>StyledComponents</strong>
            </li>
            <li>
              <div className="stack-list__item"><img src={greensock} alt="greensock" /></div>
              <strong>gsap</strong>
            </li>
            <li>
              <div className="stack-list__item"><img src={react} alt="react" /></div>
              <strong>react</strong>
            </li>
            <li>
              <div className="stack-list__item"><img src={next} alt="next" /></div>
              <strong>next</strong>
            </li>
            <li>
              <div className="stack-list__item"><img src={vue} alt="vue" /></div>
              <strong>vue</strong>
            </li>
            <li>
              <div className="stack-list__item"><img src={nuxt} alt="nuxt" /></div>
              <strong>nuxt</strong>
            </li>
            <li>
              <div className="stack-list__item"><img src={webpack} alt="webpack" /></div>
              <strong>webpack</strong>
            </li>
            <li>
              <div className="stack-list__item"><img src={gatsby} alt="gatsby" /></div>
              <strong>gatsby</strong>
            </li>
          </ul>

          <h4>Workspace</h4>
          <ul className="stack-list">
            <li>
              <div className="stack-list__item"><img src={cypress} alt="cypress" /></div>
              <strong>cypress</strong>
            </li>
            <li>
              <div className="stack-list__item"><img src={github} alt="github" /></div>
              <strong>github</strong>
            </li>
            <li>
              <div className="stack-list__item"><img src={githubActions} alt="githubActions" /></div>
              <strong>github Actions</strong>
            </li>
            <li>
              <div className="stack-list__item"><img src={webstorm} alt="webstorm" /></div>
              <strong>webstorm</strong>
            </li>
            <li>
              <div className="stack-list__item"><img src={intellijIdea} alt="intellijIdea" /></div>
              <strong>intellij Idea</strong>
            </li>
            <li>
              <div className="stack-list__item"><img src={visualStudioCode} alt="visualStudioCode" /></div>
              <strong>visual Studio Code</strong>
            </li>
            <li>
              <div className="stack-list__item"><img src={iterm} alt="iterm" /></div>
              <strong>iterm</strong>
            </li>
            <li>
              <div className="stack-list__item"><img src={eslint} alt="eslint" /></div>
              <strong>eslint</strong>
            </li>
            <li>
              <div className="stack-list__item"><img src={stylelint} alt="stylelint" /></div>
              <strong>stylelint</strong>
            </li>
            <li>
              <div className="stack-list__item"><img src={prettier} alt="prettier" /></div>
              <strong>prettier</strong>
            </li>
          </ul>

          <h4>Environment</h4>
          <ul className="stack-list">
            <li>
              <div className="stack-list__item"><img src={googleCloud} alt="googleCloud" /></div>
              <strong>google Cloud</strong>
            </li>
            <li>
              <div className="stack-list__item"><img src={nodejs} alt="nodejs" /></div>
              <strong>nodejs</strong>
            </li>
            <li>
              <div className="stack-list__item"><img src={express} alt="express" /></div>
              <strong>express</strong>
            </li>
            <li>
              <div className="stack-list__item"><img src={mysql} alt="mysql" /></div>
              <strong>mysql</strong>
            </li>
            <li>
              <div className="stack-list__item"><img src={iconGraphql} alt="iconGraphql" /></div>
              <strong>Graphql</strong>
            </li>
            <li>
              <div className="stack-list__item"><img src={docker} alt="docker" /></div>
              <strong>docker</strong>
            </li>
            <li>
              <div className="stack-list__item"><img src={netlify} alt="netlify" /></div>
              <strong>netlify</strong>
            </li>
          </ul>

          <h3>경력</h3>
          <dl>
            <dt>패스트캠퍼스 <i className="period">(2019.04.08~ 재직중)</i></dt>
            <dd>
              <dl>
                <dt>
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
                      <div className="stack-list__item"><img src={javascript} alt="javascript" /></div>
                      <strong>JavaScript</strong>
                    </li>
                    <li>
                      <div className="stack-list__item"><img src={vue} alt="vue" /></div>
                      <strong>vue</strong>
                    </li>
                    <li>
                      <div className="stack-list__item"><img src={nuxt} alt="nuxt" /></div>
                      <strong>nuxt</strong>
                    </li>
                    <li>
                      <div className="stack-list__item"><img src={react} alt="react" /></div>
                      <strong>react</strong>
                    </li>
                    <li>
                      <div className="stack-list__item"><img src={webpack} alt="webpack" /></div>
                      <strong>webpack</strong>
                    </li>
                    <li>
                      <div className="stack-list__item"><img src={sass} alt="sass" /></div>
                      <strong>SASS</strong>
                    </li>
                    <li>
                      <div className="stack-list__item"><img src={styledComponents} alt="styledComponents" /></div>
                      <strong>StyledComponents</strong>
                    </li>
                    <li>
                      <div className="stack-list__item"><img src={greensock} alt="greensock" /></div>
                      <strong>gsap</strong>
                    </li>
                  </ul>

                  <em>환경</em>
                  <ul className="stack-list stack-list--organization">
                    <li>
                      <div className="stack-list__item"><img src={googleCloud} alt="googleCloud" /></div>
                      <strong>google Cloud</strong>
                    </li>
                    <li>
                      <div className="stack-list__item"><img src={nodejs} alt="nodejs" /></div>
                      <strong>nodejs</strong>
                    </li>
                    <li>
                      <div className="stack-list__item"><img src={express} alt="express" /></div>
                      <strong>express</strong>
                    </li>
                    <li>
                      <div className="stack-list__item"><img src={mysql} alt="mysql" /></div>
                      <strong>mysql</strong>
                    </li>
                    <li>
                      <div className="stack-list__item"><img src={docker} alt="docker" /></div>
                      <strong>docker</strong>
                    </li>
                    <li>
                      <div className="stack-list__item"><img src={cypress} alt="cypress" /></div>
                      <strong>cypress</strong>
                    </li>
                    <li>
                      <div className="stack-list__item"><img src={github} alt="github" /></div>
                      <strong>github</strong>
                    </li>
                    <li>
                      <div className="stack-list__item"><img src={githubActions} alt="githubActions" /></div>
                      <strong>github Actions</strong>
                    </li>
                    <li>
                      <div className="stack-list__item"><img src={eslint} alt="eslint" /></div>
                      <strong>eslint</strong>
                    </li>
                    <li>
                      <div className="stack-list__item"><img src={stylelint} alt="stylelint" /></div>
                      <strong>stylelint</strong>
                    </li>
                    <li>
                      <div className="stack-list__item"><img src={prettier} alt="prettier" /></div>
                      <strong>prettier</strong>
                    </li>
                  </ul>
                </dt>
                <dd>콜로소 웹 사이트 개발 <a href="http://coloso.co.kr/" target="_blank" rel="noreferrer noopener">[링크]</a></dd>
                <dd>패스트캠퍼스 웹 사이트 개발 <a href="http://fastcampus.co.kr/" target="_blank" rel="noreferrer noopener">[링크]</a></dd>
                <dd>프론트엔드 마크업 가이드 제작 <a href="https://github.com/fastcampusgit/markup-guide" target="_blank" rel="noreferrer noopener">[링크]</a> </dd>
              </dl>
            </dd>
          </dl>
          <dl>
            <dt>디지털 에이전시 이롭게 <i className="period">(2013.04.01~2018.06.28)</i></dt>
            <dd>
              <dl>
                <dt>
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
                </dt>
                <dd>
                  - 시멘틱 마크업과 웹 접근성을 고려한 마크업 최적화 <br/>
                  - CSS 전처리기와 방법론으로 스타일 작업 생산성 향상 <br/>
                  - 돔 애니메이션을 사용하여 인터랙티브 웹 페이지 구현 <br />
                  - GPU 가속을 통한 애니메이션 최적화에 대한 연구와 글 기고 <br />
                  - 벤더, 외부 API 연동
                </dd>
                <dd>
                  헤라 브랜드 사이트, CJ 문화재단, J.ESTINA BEAUTY, 아모레퍼시픽 그룹 사이트, 샘표 커머스, 오설록 커머스 웹 사이트, 설화수 브랜드 사이트,
                  Yap, 미쟝센, 프리메라, 한율 등 코스메틱 브랜드 사이트를 비롯한 다양한 브랜드 사이트 제작
                </dd>
              </dl>
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
