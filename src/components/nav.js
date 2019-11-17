import React from 'react';
import PropTypes from 'prop-types';

import { Link, graphql } from 'gatsby';

import kebabCase from 'lodash/kebabCase';

const Nav = ({ tags }) => {
  return (
    <nav className="nav">
      <ul className="nav__menu">
        {tags.map(tag => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`} className="nav__menu__link">
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
};

export const pageQuery = graphql`
  query HeaderQuery {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;

export default Nav;
