import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';

// stacks
import html from '../assets/images/stacks/html5.png';
import css from '../assets/images/stacks/css3.png';
import cssAnimation from '../assets/images/stacks/cssanimation.jpg';
import sass from '../assets/images/stacks/sass.png';
import a11y from '../assets/images/stacks/a11y.jpg';
import greensock from '../assets/images/stacks/greensock.png';

// javascript
import javascript from '../assets/images/stacks/javascript.jpg';
import es6 from '../assets/images/stacks/es6.jpg';
import babel from '../assets/images/stacks/babel.png';

// framework
import react from '../assets/images/stacks/react.png';
import redux from '../assets/images/stacks/redux.png';
import nextjs from '../assets/images/stacks/nextjs.png';
import reactNative from '../assets/images/stacks/react-native.jpg';
import styledComponents from '../assets/images/stacks/styled-components.png';
import vue from '../assets/images/stacks/vue.png';

// CI
import netlify from '../assets/images/stacks/netlify.png';
import elasticsearch from '../assets/images/stacks/elasticsearch.png';

// database
import mysql from '../assets/images/stacks/mysql.png';
import iconGraphql from '../assets/images/stacks/graphql.png';

// task
import webpack from '../assets/images/stacks/webpack.png';
import gulp from '../assets/images/stacks/gulp.png';
import grunt from '../assets/images/stacks/grunt.png';

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
          <h2>전성하</h2>
          <h3>소개</h3>
          <ul>
            <li># 공유와 함께 성장하는 것을 좋아하고 좋은 개발문화에 관심이 많은 프론트엔드 개발자입니다.</li>
            <li># 디자인 시스템에 관심이 많고 CSS를 활용하여 UI를 제어하거나 마이크로 인터랙션을 구현하는 것을 좋아합니다.</li>
            <li># 동료와 함께 성장하고 그를 기반으로 시너지를 내어 생산성있는 팀워크를 만드는 목표가 있습니다.</li>
          </ul>

          <h3>보유 기술</h3>
          <h4>Front-end</h4>
          <dl>
            <dt><img src={html} alt="html5" /></dt>
            <dd>HTML5</dd>
            <dt><img src={css} alt="css3" /></dt>
            <dd>CSS3</dd>
            <dt><img src={sass} alt="sass" /></dt>
            <dd>sass</dd>
            <dt><img src={cssAnimation} alt="cssAnimation" /></dt>
            <dd>CSS Animation</dd>
            <dt><img src={a11y} alt="a11y" /></dt>
            <dd>a11y</dd>
          </dl>

          <h4>Database</h4>
          <dl>
            <dt>img</dt>
            <dd>sql</dd>
          </dl>

          <h4>Mobile</h4>
          <dl>
            <dt>img</dt>
            <dd>swift</dd>
          </dl>

          <h3>경력</h3>
          <dl>
            <dt>패스트캠퍼스</dt>
            <dd>2019.04.08~ 재직중</dd>
            <dd>
              <dl>
                <dt>
                  <em>사용 기술</em>
                  <ul>
                    <li>- Node.js (express)</li>
                    <li>- HTML5, CSS3, RWD</li>
                    <li>- Vue, vuex, vue-router</li>
                  </ul>
                </dt>
                <dd>패스트캠퍼스 웹 사이트 개발 2019.4 - 2020.1</dd>
                <dd><a href="https://github.com/fastcampusgit/markup-guide" target="_blank">프론트엔드 마크업 가이드 제작</a> </dd>
              </dl>
            </dd>
          </dl>
          <dl>
            <dt>디지털 에이전시 이롭게</dt>
            <dd>2013.04.01~2018.06.28</dd>
            <dd>
              <dl>
                <dt>
                  <em>사용 기술</em>
                  <ul>
                    <li>- webpack, gulp, grunt</li>
                    <li>- jQuery, gsap (인터랙티브 페이지 개발)</li>
                    <li>- HTML5, CSS3, RWD, 웹 접근성</li>
                  </ul>
                </dt>
                <dd>헤라 브랜드 사이트 (2017)</dd>
                <dd>CJ 문화재단 브랜드 사이트 (2017)</dd>
                <dd>J.ESTINA BEAUTY 커머스 사이트 (2017)</dd>
                <dd>닥터폰트 브랜드 사이트 (2016)</dd>
                <dd>아모레퍼시픽 그룹 브랜드 사이트 (2016)</dd>
                <dd>샘표 커머스 사이트 (2016)</dd>
                <dd>오설록 커머스 사이트 (2016)</dd>
                <dd>설화수 브랜드 브랜드 (2015)</dd>
                <dd>Yap 브랜드 사이트 (2015)</dd>
                <dd>미쟝센 브랜드 사이트 (2015)</dd>
                <dd>프리메라 브랜드 사이트 (2014)</dd>
                <dd>헤라 브랜드 사이트 (2014)</dd>
                <dd>한율 브랜드 사이트 (2014)</dd>
                <dd>암시민연대 브랜드 사이트 (2014)</dd>
                <dd>아시안브릿지 브랜드 사이트 (2013)</dd>
                <dd>에이콘 출판사 브랜드 사이트 (2013)</dd>
                <dd>청담러닝 스마트북 (2013)</dd>
                <dd>드림 성형 외과 브랜드 사이트 (2013)</dd>
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
