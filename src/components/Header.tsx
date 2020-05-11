import React, { useState, useCallback } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image/withIEPolyfill";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { HeaderNavLink, HeaderSearch, TextInput } from "components";

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
    childInlineSvg: {
      rawSvg: string;
    };
  };
  contentJson: {
    searchgov: {
      affiliate: string;
      endpoint: string;
      accessKey: string;
    };
  };
};

export const Header: React.FC = () => {
  const data: QueryResult = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "dds-wings-only.svg" }) {
        childInlineSvg {
          rawSvg
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

      contentJson {
        searchgov {
          affiliate
          endpoint
          accessKey
        }
      }
    }
  `);

  const {
    contentJson: { searchgov },
  } = data;
  const [searchValue, setSearchValue] = useState("");

  const onSearchSubmit: React.FormEventHandler = useCallback(
    (e) => {
      e.preventDefault();
      window.location.replace(
        `${searchgov.endpoint}?utf8=✓&affiliate=${searchgov.affiliate}&query=${searchValue}`
      );
    },
    [searchValue]
  );

  const onSearchChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      setSearchValue(e.target.value);
    },
    []
  );

  const navigation = data.allPagesJson.nodes.map(
    ({ navigation }) => navigation
  );
  const { rawSvg } = data.file.childInlineSvg;

  return (
    <header className="usa-header usa-header--basic" role="banner">
      <div className="usa-nav-container">
        <div className="usa-navbar">
          <div className="usa-logo" id="extended-logo">
            <div className="usa-logo__text">
              <Link to="/" aria-label="Home">
                <div className="display-flex flex-row flex-align-center">
                  <div
                    className="dds-header-image"
                    dangerouslySetInnerHTML={{ __html: rawSvg }}
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
          <div className="header-drawer-search">
            <form onSubmit={onSearchSubmit}>
              <input
                type="hidden"
                name="affiliate"
                value={searchgov.affiliate}
              />
              <button type="submit" aria-label="Submit Search Query">
                <FaSearch size={22} />
              </button>
              <TextInput
                placeholder="Search"
                aria-label="Search query input"
                value={searchValue}
                onChange={onSearchChange}
              />
            </form>
            <button className="usa-nav__close" aria-label="Close Navigation">
              <FaTimes />
            </button>
          </div>
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
            <HeaderSearch
              onSubmit={onSearchSubmit}
              value={searchValue}
              onChange={onSearchChange}
            />
          </ul>
        </nav>
      </div>
    </header>
  );
};
