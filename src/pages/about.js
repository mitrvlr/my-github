import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
// import SEO from '../components/seo';

const IndexPage = ( ) => {
  return (
    <Layout>
      <div className="layout__row">
        <div className="post__panel">
          <ul>
            <li># 공유와 함께 성장하는 것을 좋아하고 좋은 개발문화에 관심이 많은 프론트엔드 개발자입니다.</li>
            <li># 디자인 시스템에 관심이 많고 CSS를 활용하여 UI를 제어하거나 마이크로 인터랙션을 구현하는 것을 좋아합니다.</li>
            <li># 동료와 함께 성장하고 그를 기반으로 시너지를 내어 생산성있는 팀워크를 만드는 목표가 있습니다.</li>
          </ul>
          <p>양질의 글로 채우겠습니다. :) ... (작성 중!)</p>
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
