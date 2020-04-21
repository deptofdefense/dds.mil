import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

interface Props {
  siteTitle: string;
}

export const Header: React.FC<Props> = ({ children, siteTitle }) => (
  <header className="usa-header usa-header--basic" role="banner">
    <div className="usa-nav-container">
      <div className="usa-navbar">
        <div className="usa-logo" id="extended-logo">
          <em className="usa-logo__text">
            <Link to="/" title="Home" aria-label="Home">
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
          <li className="usa-nav__primary-item">
            <button
              className="usa-accordion__button usa-nav__link  usa-current"
              aria-expanded="false"
              aria-controls="basic-nav-section-one"
            >
              <span>Current section</span>
            </button>
            <ul id="basic-nav-section-one" className="usa-nav__submenu">
              <li className="usa-nav__submenu-item">
                <a href="#">Navigation link</a>
              </li>
              <li className="usa-nav__submenu-item">
                <a href="#">Navigation link</a>
              </li>
              <li className="usa-nav__submenu-item">
                <a href="#">Navigation link</a>
              </li>
            </ul>
          </li>
          <li className="usa-nav__primary-item">
            <button
              className="usa-accordion__button usa-nav__link"
              aria-expanded="false"
              aria-controls="basic-nav-section-two"
            >
              <span>Section</span>
            </button>
            <ul id="basic-nav-section-two" className="usa-nav__submenu">
              <li className="usa-nav__submenu-item">
                <a href="#">Navigation link</a>
              </li>
              <li className="usa-nav__submenu-item">
                <a href="#">Navigation link</a>
              </li>
              <li className="usa-nav__submenu-item">
                <a href="#">Navigation link</a>
              </li>
            </ul>
          </li>
          <li className="usa-nav__primary-item">
            <a className="usa-nav__link" href="javascript:void(0)">
              <span>Simple link</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);
