/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');
const _ = require('lodash');
const fetch = require(`node-fetch`);
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.sourceNodes = async() => {
  const response = await fetch('https://api.instagram.com/oauth/access_token', {
    method: 'post',
    client_id: 217685973757907,
    client_secret: 'b8d9a8e2bd299d4b39df7abb2a6b5b3d',
    redirect_uri: 'https://seongha.dev/',
    code: 'AQBkAjLVmJbtIp44XGCYgGm1VvUxeQeE7zDuT569xiTte6M9AugoBB8FY1VN9IqP2lsyf_mvIiMtHhMkRGDillyANS4QmC3cxFoxb7MfVNoWhadtFV37JnEpT08kP2dBBjvl8J54zAymTWyWE2uknVskncqGat5nY2VAVd1a1h9_mXsuFSdB71_KSRGdt1qAwO31uv1OOG-E0KJaY8b_vVc4NLo2JE4R6I8x80Ak7HMUGw'
  })

  const json = await response.json()
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);
  const tagsTemplate = path.resolve('src/templates/tags.js');

  const result = await graphql(`
    {
      postsRemark: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              path
              tags
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const posts = result.data.postsRemark.edges;
  posts.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {},
    });
  });

  const tags = result.data.tagsGroup.group;
  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagsTemplate,
      context: {
        tag: tag.fieldValue,
      },
    });
  });
};

// featured img
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }

    type Frontmatter {
      title: String!
    }
  `);
};
