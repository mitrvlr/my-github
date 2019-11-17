import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  const {
    title,
    tags,
  } = post.frontmatter;

  return (
    <Layout>
      <Helmet title={`Your Blog Name - ${title}`} />
      <div className="layout__row">
        <article className="post__article">
          <header className="post__article__header">
            <h2 className="post__title">{title}</h2>
          </header>
          <ul className="post__tags">
            {tags && (
              <li>{tags}</li>
            )}
          </ul>
          <div
            className="post__article__content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </article>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query BlogPostQuery($path: String!, $slug: String) {
    markdownRemark(frontmatter: { path: { eq: $path } }, fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        path
        tags
        date(formatString: "MMMM DD, YYYY")
      }
      html
    }
  }
`