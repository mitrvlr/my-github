/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from 'react';
import PropTypes from 'prop-types';

import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
      allMarkdownRemark {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `);
  const { site, allMarkdownRemark } = data;
  const { title, description, author } = site.siteMetadata;

  return (
    <>
      <Header
        siteTitle={title}
        siteDescription={description}
        siteAuthor={author}
        tags={allMarkdownRemark.group} />
      <main id="main" className="main" role="main">
        {children}
      </main>
      <footer className="footer">
        <div className="layout__row">
          © {new Date().getFullYear()}, trvlr. <small>Made with Gatsby</small>
        </div>
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
