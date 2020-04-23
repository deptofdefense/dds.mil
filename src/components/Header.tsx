import React from "react";
import { Link } from "gatsby";
import { HeaderNavLink } from "components";

interface Props {
  siteTitle: string;
}

export const Header: React.FC<Props> = ({ siteTitle }) => (
  <header className="usa-header usa-header--basic" role="banner">
    <div className="usa-nav-container">
      <div className="usa-navbar">
        <div className="usa-logo" id="extended-logo">
          <em className="usa-logo__text">
            <Link to="/" aria-label="Home">
              {siteTitle}
            </Link>
          </em>
        </div>
        <button className="usa-menu-btn">Menu</button>
      </div>
      <nav aria-label="Primary navigation" className="usa-nav">
        <button className="usa-nav__close">
          <img src="/assets/img/close.svg" alt="close" />
        </button>
        <ul className="usa-nav__primary usa-accordion">
          <HeaderNavLink to="/about">About</HeaderNavLink>

          <HeaderNavLink to="/media">Media</HeaderNavLink>

          <HeaderNavLink to="/careers">Careers</HeaderNavLink>

          <HeaderNavLink to="/portfolio">Portfolio</HeaderNavLink>
        </ul>
      </nav>
    </div>
  </header>
);
