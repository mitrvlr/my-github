import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import { Utterences } from '../components/utterences';

export default function Template({ data }) {
  const { markdownRemark: post, site: meta } = data;
  const {
    title,
    tags,
    date,
  } = post.frontmatter;

  const {
    title: metaTitle,
    description,
    comment
  } = meta.siteMetadata;

  const { utterances } = comment;

  return (
    <Layout>
      <Helmet title={`${metaTitle} | ${description} - ${title}`} />
      <div className="layout__row">
        <article className="post__article">
          <header className="post__article__header">
            <h2 className="post__title">{title}</h2>
            <i className="post__article__date">{date}</i>
          </header>

          <ul className="post__tags">
            {tags &&
              tags.map((tag, i) => <li key={i}>{tag}</li>)
            }
          </ul>
          <div
            className="post__article__content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </article>

        <a className="post__article__addon" target="_blank" href="https://www.buymeacoffee.com/XN2PBMv" rel="noopener noreferrer">
          <svg width="20px" height="32px" viewBox="0 0 24 36">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g transform="translate(-17.000000, -7.000000)">
                <g id="Logo">
                  <g transform="translate(17.000000, 8.000000)">
                    <g>
                      <g transform="translate(0.559947, 0.000000)">
                        <polygon fill="#616161" points="11.2752139 6.65517263 2.53594776 6.60250871 6.82755165 33.7158335 7.76390159 33.7158335 16.3471094 33.7158335 17.2834593 33.7158335 21.5750632 6.60250871" />
                        <polygon fill="#bdbdbd" points="11.2752139 6.65517263 2.53594776 6.60250871 6.82755165 33.7158335 7.76390159 33.7158335 14.1622929 33.7158335 15.0986428 33.7158335 19.3902467 6.60250871" />
                        <polygon fill="#FFFFFF" points="0.0390145809 6.60252433 22.5894423 6.60252433 22.5894423 4.10216009 0.0390145809 4.10216009" />
                        <polygon stroke="#000000" strokeWidth="1.17043743" points="0.0390145809 6.60252433 22.5894423 6.60252433 22.5894423 4.10216009 0.0390145809 4.10216009" />
                        <polygon fill="#FFFFFF" points="18.2198093 0.0390681913 12.8357971 0.0390681913 9.63660147 0.0390681913 4.25258931 0.0390681913 2.61397692 3.78961456 9.63660147 3.78961456 12.8357971 3.78961456 19.8584217 3.78961456" />
                        <g id="Group-11" transform="translate(0.936350, 0.000000)" strokeWidth="1.17043743">
                          <polygon stroke="#050505" points="17.2834593 0.0390681913 11.8994472 0.0390681913 8.70025153 0.0390681913 3.31623937 0.0390681913 1.67762698 3.78961456 8.70025153 3.78961456 11.8994472 3.78961456 18.9220717 3.78961456" />
                          <polygon stroke="#000000" points="10.3388639 6.65517263 0.0390145809 6.60250871 4.33061848 33.7158335 5.26696842 33.7158335 15.4107594 33.7158335 16.3471094 33.7158335 20.6387133 6.60250871" />
                        </g>
                        <polygon fill="#FFFFFF" points="21.8871799 14.2598898 11.6059795 14.2598898 10.8664191 14.2598898 0.585218713 14.2598898 2.50832543 25.0427106 11.2361993 24.9487126 19.9640731 25.0427106" />
                        <polygon stroke="#000000" strokeWidth="1.17043743" points="21.8871799 14.2598898 11.6059795 14.2598898 10.8664191 14.2598898 0.585218713 14.2598898 2.50832543 25.0427106 11.2361993 24.9487126 19.9640731 25.0427106" />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>
          <span className="post__article__addon__txt">Was it useful?</span>
        </a>

        {!!utterances && <Utterences repo={utterances} />}
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
        date(formatString: "MM.DD. YYYY")
      }
      html
    }
    site {
      siteMetadata {
        title
        description
        comment {
          utterances
        }
      }
    }
  }
`