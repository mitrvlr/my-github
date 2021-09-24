import { graphql } from 'gatsby';
import React from 'react';

import { GatsbyImage } from 'gatsby-plugin-image'
import Layout from '../components/layout';

const FeedPage = ({ data: { allInstagramContent}}) => {
  return (
    <Layout>
      <article className='layout__row'>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridGap: '1.2rem',
        }}>
          {allInstagramContent.edges.map(
            item =>
              item.node.localImage && (
                <GatsbyImage
                  image={item.node.localImage.childImageSharp.gatsbyImageData}
                  key={item.node.id}
                  alt={
                    item.node.caption || 'Instagram Post'
                  }
                  style={{
                    overFlow: 'hidden',
                    borderRadius: '0.4rem',
                  }}
                />
              )
          )}
        </div>
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query InstagramPosts {
    allInstagramContent {
      edges {
        node {
          id
          localImage {
            childImageSharp {
             gatsbyImageData(
               width: 500
               placeholder: BLURRED
               formats: [AUTO, WEBP, AVIF]
             )
           }
          }
        }
      }
    }
  }
`;

export default FeedPage;
