import React from 'react';

import { Link } from 'gatsby';

// import Nav from './nav';

const Header = ({ siteTitle, siteDescription, siteAuthor, tags}) => {
  return (
    <>
      {/*<input type="checkbox" id="toggle-nav" className="nav__toggle a11y" />*/}
      {/*<label htmlFor="toggle-nav" className="nav__opener"> 토글! </label>*/}
      <header className="header">
        <div className="layout__row">
          <div className="layout__flex">
            <h1 className="header__title">
              <Link
                to="/"
                className="header__link"
              >
                {siteTitle}
                <em className="header__desc"> {siteDescription}</em>
              </Link>
            </h1>

            <a href="https://github.com/mitrvlr" className="header__author" target="_blank" rel="noopener noreferrer">
              <svg
                className="header__octicon"
                width="32"
                height="32"
                viewBox="0 0 16 16"
                version="1.1"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                />
              </svg>
              <span className="github">{siteAuthor}</span>
            </a>
          </div>

          <a className="header__buy-me-a-coffee" target="_blank" href="https://www.buymeacoffee.com/XN2PBMv" rel="noopener noreferrer">
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
            <span className="header__buy-me-a-coffee__txt">Buy me a Coffee !</span>
          </a>
        </div>
        {/*<Nav tags={tags} />*/}
      </header>
    </>
  )
};

export default Header;
