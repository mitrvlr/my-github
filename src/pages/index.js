import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;

  const renderListItem = (
    posts
      .filter(post => post.node.frontmatter.title.length > 0)
      .map(({ node: post }) => {
        return (
          <section className="post__section" key={post.id}>
            <Link to={post.frontmatter.path} className="post__section__block">
              <i className="post__date">{post.frontmatter.date}</i>
              <h2 className="post__title">{post.frontmatter.title}</h2>

              <p className="post__section__desc">{post.excerpt}</p>

              {post.frontmatter.tags && (<ul className="post__tags">
                {post.frontmatter.tags.map((tag, idx) => (<li key={idx} className="tag"> {tag} </li>))}
              </ul>)}
            </Link>
          </section>
        );
      })
  );

  return (
    <Layout>
      <SEO title={`${data.site.siteMetadata.title} | ${data.site.siteMetadata.description}`} />
      <div className="layout__row">
        <article className="post__articles">
          <h2 className="a11y">My posts</h2>
          {renderListItem}
        </article>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 2000) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MM.DD")
            path
            tags
          }
        }
      }
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

export default IndexPage;
