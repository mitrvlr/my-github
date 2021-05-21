import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

// Components
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const {
    title,
  } = data.site.siteMetadata;

  return (
    <Layout>
      <Helmet title={`${title} | ${tag.toLocaleUpperCase()}`} />
      <div className="layout__row">
        <div className="post__panel">
          <mark className="post__panel__mark">{tag}</mark> 로 작성된 <em>{totalCount}개</em>의 글
        </div>

        <article className="post__articles">
          {edges.map(({ node }) => {
            const { slug } = node.fields;
            const { title, path, date } = node.frontmatter;

            return (
              <section className="post__section" key={slug}>
                <Link to={path} className="post__section__block">
                  <i className="post__date">{date}</i>
                  <h2 className="post__title">{title}</h2>
                </Link>
              </section>
            );
          })}
        </article>
      </div>
    </Layout>
  );
};

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
};

export default Tags;

export const pageQuery = graphql`
  query($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 250)
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MM.DD")
            path
          }
        }
      }
    }
  }
`;
