import React, { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { useHeaderData } from "hooks";
import { HeaderNavLink, HeaderLogo, HeaderSearchForm } from "components";

export const Header: React.FC = () => {
  const { searchgov, navigation } = useHeaderData();
  const [query, setQuery] = useState("");
  const [searchExpanded, setSearchExpanded] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  const toggleSearchExpanded = () => {
    setSearchExpanded(!searchExpanded);
  };

  const onSearchSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
    if (query) {
      window.location.replace(
        `${searchgov.endpoint}?utf8=✓&affiliate=${searchgov.affiliate}&query=${query}`
      );
    } else {
      setSearchExpanded(false);
    }
  };

  const onSearchChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    if (searchExpanded) {
      searchRef.current?.focus();
    }
  }, [searchExpanded]);

  return (
    <header className="usa-header usa-header--basic" role="banner">
      <div className="usa-nav-container">
        <div className="usa-navbar">
          <HeaderLogo />
          <button className="usa-menu-btn" aria-label="Expand Navigation">
            <FaBars />
          </button>
        </div>
        <nav aria-label="Primary navigation" className="usa-nav">
          <div className="header-drawer-search">
            <HeaderSearchForm
              onSubmit={onSearchSubmit}
              value={query}
              onChange={onSearchChange}
            />
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
            <li
              className={clsx("dds-nav-search-item", {
                "dds-nav-search-item-open": searchExpanded,
              })}
            >
              <button
                onFocus={toggleSearchExpanded}
                className="dds-header-search-toggle"
                aria-label="Expand Search Input"
              >
                <FaSearch size={22} />
              </button>
              <HeaderSearchForm
                ref={searchRef}
                onSubmit={onSearchSubmit}
                value={query}
                onChange={onSearchChange}
                onBlur={(e) => setSearchExpanded(false)}
              />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
