import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image/withIEPolyfill";
import { FaBars, FaTimes } from "react-icons/fa";
import { HeaderNavLink } from "components";

type NavigationNode = {
  link: string;
  text: string;
  subnav?: {
    link: string;
    text: string;
  }[];
};

type QueryResult = {
  allPagesJson: {
    nodes: {
      navigation: NavigationNode;
    }[];
  };
  file: {
    childImageSharp: {
      fixed: any;
    };
  };
};

interface Props {
  siteTitle: string;
}

export const Header: React.FC<Props> = ({ siteTitle }) => {
  const data: QueryResult = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo-banner.png" }) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      allPagesJson(
        sort: { order: ASC, fields: navigation___navOrder }
        filter: { navigation: { text: { ne: null } } }
      ) {
        nodes {
          navigation {
            text
            link
            subnav {
              text
              link
            }
          }
        }
      }
    }
  `);

  const navigation = data.allPagesJson.nodes.map(
    ({ navigation }) => navigation
  );

  return (
    <header className="usa-header usa-header--basic" role="banner">
      <div className="usa-nav-container">
        <div className="usa-navbar">
          <div className="usa-logo" id="extended-logo">
            <div className="usa-logo__text">
              <Link to="/" aria-label="Home">
                <div className="display-flex flex-row flex-align-center">
                  <Img
                    loading="eager"
                    fixed={data.file.childImageSharp.fixed}
                  />
                  <div className="display-flex flex-column margin-left-1  flex-no-wrap">
                    <div className="text-bold text-ls-1">DEFENSE</div>
                    <div>
                      <span className="text-semibold">DIGITAL&nbsp;</span>
                      <span className="text-light">SERVICE</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <button className="usa-menu-btn" aria-label="Expand Navigation">
            <FaBars />
          </button>
        </div>
        <nav aria-label="Primary navigation" className="usa-nav">
          <button className="usa-nav__close">
            <FaTimes />
          </button>
          <ul className="usa-nav__primary usa-accordion">
            {navigation.map(({ link, text, subnav }) => (
              <React.Fragment key={link}>
                <HeaderNavLink to={link}>{text}</HeaderNavLink>
                {subnav &&
                  subnav.map((sub) => (
                    <HeaderNavLink
                      className="header-subnav-item"
                      key={`${link}${sub.link}`}
                      to={sub.link}
                    >
                      {sub.text}
                    </HeaderNavLink>
                  ))}
              </React.Fragment>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
