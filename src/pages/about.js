import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
// import SEO from '../components/seo';

const IndexPage = ( ) => {
  return (
    <Layout>
      <div className="layout__row">
        <div className="post__panel">
          <p>공유와 함께 성장하는 것을 좋아하고 좋은 개발문화에 관심이 많은 프론트엔드 개발자입니다.</p>
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
