import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { FaBars, FaTimes } from "react-icons/fa";
import { HeaderNavLink } from "components";

interface Props {
  siteTitle: string;
}

export const Header: React.FC<Props> = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo-banner.png" }) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <header className="usa-header usa-header--basic" role="banner">
      <div className="usa-nav-container">
        <div className="usa-navbar">
          <div className="usa-logo" id="extended-logo">
            <div className="usa-logo__text">
              <Link to="/" aria-label="Home">
                <div className="display-flex flex-row flex-align-center">
                  <Img fixed={data.file.childImageSharp.fixed} />
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
          <button className="usa-menu-btn">
            <FaBars />
          </button>
        </div>
        <nav aria-label="Primary navigation" className="usa-nav">
          <button className="usa-nav__close">
            <FaTimes />
          </button>
          <ul className="usa-nav__primary usa-accordion">
            <HeaderNavLink to="/about">About Us</HeaderNavLink>

            <HeaderNavLink to="/portfolio">Our Work</HeaderNavLink>

            <HeaderNavLink to="/team">Our Team</HeaderNavLink>

            <HeaderNavLink to="/media">Media</HeaderNavLink>

            <HeaderNavLink to="/careers">Join Us</HeaderNavLink>
          </ul>
        </nav>
      </div>
    </header>
  );
};
