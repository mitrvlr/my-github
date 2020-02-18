import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

// stacks
import html from '../assets/images/stacks/html5.png';
import css from '../assets/images/stacks/css3.png';
import cssAnimation from '../assets/images/stacks/cssanimation.jpg';
import sass from '../assets/images/stacks/sass.png';
import a11y from '../assets/images/stacks/a11y.jpg';
import greensock from '../assets/images/stacks/greensock.png';
import javascript from '../assets/images/stacks/javascript.jpg';
import es6 from '../assets/images/stacks/es6.jpg';
import jquery from '../assets/images/stacks/jquery.png';
import babel from '../assets/images/stacks/babel.png';

// framework
import react from '../assets/images/stacks/react.png';
import redux from '../assets/images/stacks/redux.png';
import nextjs from '../assets/images/stacks/nextjs.png';
import reactNative from '../assets/images/stacks/react-native.jpg';
import styledComponents from '../assets/images/stacks/styled-components.png';
import vue from '../assets/images/stacks/vue.png';

// database
import mysql from '../assets/images/stacks/mysql.png';
import iconGraphql from '../assets/images/stacks/graphql.png';

// task
import webpack from '../assets/images/stacks/webpack.png';
import gulp from '../assets/images/stacks/gulp.png';
import grunt from '../assets/images/stacks/grunt.png';
import docker from '../assets/images/stacks/docker.png';
import netlify from '../assets/images/stacks/netlify.png';
import elasticsearch from '../assets/images/stacks/elasticsearch.png';

// server
import nodejs from '../assets/images/stacks/nodejs.png';
import nginx from '../assets/images/stacks/nginx.png';
import gatsby from '../assets/images/stacks/gatsby.svg';

// app
import swift from '../assets/images/stacks/swift.png';
import swiftui from '../assets/images/stacks/swiftui.png';


const IndexPage = ( ) => {
  return (
    <Layout>
      <div className="layout__row">
        <div className="post__panel">
          <h2>전성하 <i className="job">프론트엔드</i></h2>
          <h3>소개</h3>
          <ul>
            <li># 좋은 개발문화와 디자인 시스템에 관심이 많은 프론트엔드 개발자입니다.</li>
            <li># CSS를 활용하여 UI를 제어하거나 마이크로 인터랙션을 구현하는 것을 좋아합니다.</li>
            <li># 동료와 함께 성장하는 것을 목표로 생산성있는 팀워크를 만드는 목표가 있습니다.</li>
          </ul>

          <h3>보유 기술</h3>
          <h4>Front-end</h4>
          <ul className="stack-list">
            <li>
              <div className="stack-list__item"><img src={html} alt="html5"/></div>
              <strong>HTML5</strong>
            </li>
            <li>
              <div className="stack-list__item"><img src={css} alt="css3"/></div>
              <strong>CSS3</strong>
            </li>
            <li>
              <div className="stack-list__item"><img src={sass} alt="sass"/></div>
              <strong>sass</strong>
            </li>
            <li>
              <div className="stack-list__item"><img src={cssAnimation} alt="cssAnimation"/></div>
              <strong>CSS Animation</strong>
            </li>
            <li>
              <div className="stack-list__item"><img src={a11y} alt="a11y"/></div>
              <strong>a11y</strong>
            </li>
            <li>
              <div className="stack-list__item"><img src={greensock} alt="greensock"/></div>
              <strong>gsap</strong>
            </li>
            <li>
              <div className="stack-list__item"><img src={javascript} alt="javascript"/></div>
              <strong>javascript</strong>
            </li>
            <li>
              <div className="stack-list__item"><img src={es6} alt="es6"/></div>
              <strong>es6</strong>
            </li>
            <li>
              <div className="stack-list__item"><img src={jquery} alt="jquery"/></div>
              <strong>jquery</strong>
            </li>
            <li>
              <div className="stack-list__item"><img src={babel} alt="babel"/></div>
              <strong>babel</strong>
            </li>
            <li>
              <div className="stack-list__item"><img src={react} alt="react"/></div>
              <strong>react</strong>
            </li>
            <li>
              <div className="stack-list__item"><img src={redux} alt="redux"/></div>
              <strong>redux</strong>
            </li>
            <li>
              <div className="stack-list__item"><img src={nextjs} alt="nextjs"/></div>
              <strong>nextjs</strong>
            </li>
            <li>
              <div className="stack-list__item"><img src={styledComponents} alt="styledComponents"/></div>
              <strong>styled Components</strong>
            </li>
            <li>
              <div className="stack-list__item"><img src={vue} alt="vue"/></div>
              <strong>vue</strong>
            </li>
          </ul>

          <h4>Database</h4>
          <ul className="stack-list">
            <li>
              <div className="stack-list__item"><img src={mysql} alt="mysql"/></div>
              <strong>mysql</strong>
            </li>
            <li>
              <div className="stack-list__item"><img src={iconGraphql} alt="iconGraphql"/></div>
              <strong>Graphql</strong>
            </li>
          </ul>

          <h4>Server</h4>
          <ul className="stack-list">
            <li>
              <div className="stack-list__item"><img src={nodejs} alt="nodejs"/></div>
              <strong>nodejs</strong>
            </li>
            <li>
              <div className="stack-list__item"><img src={nginx} alt="nginx"/></div>
              <strong>nginx</strong>
            </li>
            <li>
              <div className="stack-list__item"><img src={gatsby} alt="gatsby"/></div>
              <strong>gatsby</strong>
            </li>
          </ul>

          <h4>Task</h4>
          <ul className="stack-list">
            <li>
              <div className="stack-list__item"><img src={webpack} alt="webpack"/></div>
              <strong>webpack</strong>
            </li>
            <li>
              <div className="stack-list__item"><img src={gulp} alt="gulp"/></div>
              <strong>gulp</strong>
            </li>
            <li>
              <div className="stack-list__item"><img src={grunt} alt="grunt"/></div>
              <strong>grunt</strong>
            </li>
            <li>
              <div className="stack-list__item"><img src={docker} alt="docker"/></div>
              <strong>docker</strong>
            </li>
            <li>
              <div className="stack-list__item"><img src={netlify} alt="netlify"/></div>
              <strong>netlify</strong>
            </li>
            <li>
              <div className="stack-list__item"><img src={elasticsearch} alt="elasticsearch"/></div>
              <strong>elasticsearch</strong>
            </li>
          </ul>

          <h4>Mobile</h4>
          <ul className="stack-list">
            <li>
              <div className="stack-list__item"><img src={reactNative} alt="reactNative"/></div>
              <strong>React Native</strong>
            </li>
            <li>
              <div className="stack-list__item"><img src={swift} alt="swift"/></div>
              <strong>swift</strong>
            </li>
            <li>
              <div className="stack-list__item"><img src={swiftui} alt="swiftui"/></div>
              <strong>swiftui</strong>
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
                      <div className="stack-list__item"><img src={html} alt="html5"/></div>
                      <strong>HTML5</strong>
                    </li>
                    <li>
                      <div className="stack-list__item"><img src={css} alt="css3"/></div>
                      <strong>CSS3</strong>
                    </li>
                    <li>
                      <div className="stack-list__item"><img src={sass} alt="sass"/></div>
                      <strong>sass</strong>
                    </li>
                    <li>
                      <div className="stack-list__item"><img src={cssAnimation} alt="cssAnimation"/></div>
                      <strong>CSS Animation</strong>
                    </li>
                    <li>
                      <div className="stack-list__item"><img src={a11y} alt="a11y"/></div>
                      <strong>a11y</strong>
                    </li>
                    <li>
                      <div className="stack-list__item"><img src={javascript} alt="javascript"/></div>
                      <strong>javascript</strong>
                    </li>
                    <li>
                      <div className="stack-list__item"><img src={es6} alt="es6"/></div>
                      <strong>es6</strong>
                    </li>
                    <li>
                      <div className="stack-list__item"><img src={vue} alt="vue"/></div>
                      <strong>vue</strong>
                    </li>
                    <li>
                      <div className="stack-list__item"><img src={react} alt="react"/></div>
                      <strong>react</strong>
                    </li>
                    <li>
                      <div className="stack-list__item"><img src={redux} alt="redux"/></div>
                      <strong>redux</strong>
                    </li>
                    <li>
                      <div className="stack-list__item"><img src={webpack} alt="webpack"/></div>
                      <strong>webpack</strong>
                    </li>
                  </ul>

                  <em>환경</em>
                  <ul className="stack-list stack-list--organization">
                    <li>
                      <div className="stack-list__item"><img src={docker} alt="docker"/></div>
                      <strong>docker</strong>
                    </li>
                    <li>
                      <div className="stack-list__item"><img src={nodejs} alt="nodejs"/></div>
                      <strong>nodejs</strong>
                    </li>
                    <li>
                      <div className="stack-list__item"><img src={nginx} alt="nginx"/></div>
                      <strong>nginx</strong>
                    </li>
                  </ul>
                </dt>
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
                      <div className="stack-list__item"><img src={html} alt="html5"/></div>
                      <strong>HTML5</strong>
                    </li>
                    <li>
                      <div className="stack-list__item"><img src={css} alt="css3"/></div>
                      <strong>CSS3</strong>
                    </li>
                    <li>
                      <div className="stack-list__item"><img src={sass} alt="sass"/></div>
                      <strong>sass</strong>
                    </li>
                    <li>
                      <div className="stack-list__item"><img src={cssAnimation} alt="cssAnimation"/></div>
                      <strong>CSS Animation</strong>
                    </li>
                    <li>
                      <div className="stack-list__item"><img src={a11y} alt="a11y"/></div>
                      <strong>a11y</strong>
                    </li>
                    <li>
                      <div className="stack-list__item"><img src={greensock} alt="greensock"/></div>
                      <strong>gsap</strong>
                    </li>
                    <li>
                      <div className="stack-list__item"><img src={jquery} alt="jquery"/></div>
                      <strong>jquery</strong>
                    </li>
                    <li>
                      <div className="stack-list__item"><img src={webpack} alt="webpack"/></div>
                      <strong>webpack</strong>
                    </li>
                    <li>
                      <div className="stack-list__item"><img src={gulp} alt="gulp"/></div>
                      <strong>gulp</strong>
                    </li>
                    <li>
                      <div className="stack-list__item"><img src={grunt} alt="grunt"/></div>
                      <strong>grunt</strong>
                    </li>
                  </ul>
                </dt>
                <dd>
                  헤라 브랜드 사이트 (2017) <a href="https://www.hera.com/kr/ko" target="_blank" rel="noreferrer noopener">[링크]</a>
                </dd>
                <dd>
                  CJ 문화재단 브랜드 사이트 (2017) <a href="https://www.cjazit.org/" target="_blank" rel="noreferrer noopener">[링크]</a>
                </dd>
                <dd>
                  J.ESTINA BEAUTY 커머스 사이트 (2017)
                </dd>
                <dd>
                  닥터폰트 브랜드 사이트 (2016) <a href="https://github.com/fastcampusgit/markup-guide" target="_blank" rel="noreferrer noopener">[링크]</a>
                </dd>
                <dd>
                  아모레퍼시픽 그룹 브랜드 사이트 (2016) <a href="https://www.apgroup.com/int/ko/" target="_blank" rel="noreferrer noopener">[링크]</a>
                </dd>
                <dd>
                  샘표 커머스 사이트 (2016) <a href="https://www.sempio.com/" target="_blank" rel="noreferrer noopener">[링크]</a>
                </dd>
                <dd>
                  오설록 커머스 사이트 (2016) <a href="https://www.osulloc.com/" target="_blank" rel="noreferrer noopener">[링크]</a>
                </dd>
                <dd>
                  설화수 브랜드 브랜드 (2015) <a href="https://www.sulwhasoo.com/kr/ko/" target="_blank" rel="noreferrer noopener">[링크]</a>
                </dd>
                <dd>
                  Yap 브랜드 사이트 (2015)
                </dd>
                <dd>
                  미쟝센 브랜드 사이트 (2015) <a href="http://www.miseenscene.com/main.do" target="_blank" rel="noreferrer noopener">[링크]</a>
                </dd>
                <dd>
                  프리메라 브랜드 사이트 (2014) <a href="https://www.primera.co.kr/kr/ko/" target="_blank" rel="noreferrer noopener">[링크]</a>
                </dd>
                <dd>
                  헤라 브랜드 사이트 (2014)
                </dd>
                <dd>
                  한율 브랜드 사이트 (2014) <a href="https://www.hanyul.com/kr/ko/" target="_blank" rel="noreferrer noopener">[링크]</a>
                </dd>
                <dd>
                  암시민연대 브랜드 사이트 (2014) <a href="https://www.apgroup.com/int/ko/" target="_blank" rel="noreferrer noopener">[링크]</a>
                </dd>
                <dd>
                  아시안브릿지 브랜드 사이트 (2013) <a href="http://www.ilovecancer.org/" target="_blank" rel="noreferrer noopener">[링크]</a>
                </dd>
                <dd>
                  에이콘 출판사 브랜드 사이트 (2013) <a href="http://acornpub.co.kr/" target="_blank" rel="noreferrer noopener">[링크]</a>
                </dd>
                <dd>
                  청담러닝 스마트북 (2013)
                </dd>
                <dd>
                  드림 성형 외과 브랜드 사이트 (2013)
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
