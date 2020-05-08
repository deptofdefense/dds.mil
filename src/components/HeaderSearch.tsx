import React, { useState, useEffect, useRef } from "react";
import { navigate } from "gatsby-link";
import clsx from "clsx";
import { FaSearch } from "react-icons/fa";
import { TextInput } from "components";
import { useStaticQuery, graphql } from "gatsby";

type Timeout = ReturnType<typeof setImmediate>;

export const HeaderSearch: React.FC = () => {
  const {
    contentJson: { searchgov },
  } = useStaticQuery(graphql`
    query {
      contentJson {
        searchgov {
          affiliate
          endpoint
          accessKey
        }
      }
    }
  `);

  const [timer, setTimer] = useState<Timeout>();
  const searchRef = useRef<HTMLInputElement>(null);
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const onSearchClick: React.MouseEventHandler = (e) => {
    if (!searchExpanded) {
      e.preventDefault();
      setSearchExpanded(true);
    } else if (searchValue === "") {
      e.preventDefault();
      setSearchExpanded(false);
    }
  };

  const onSearchSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
    window.location.replace(
      `${searchgov.endpoint}?utf8=✓&affiliate=${searchgov.affiliate}&query=${searchValue}`
    );
  };

  const onBlur: React.FocusEventHandler<
    HTMLInputElement | HTMLButtonElement
  > = () => {
    setTimer(
      setImmediate(() => {
        setSearchExpanded(false);
      })
    );
  };

  const onFocus: React.FocusEventHandler<
    HTMLInputElement | HTMLButtonElement
  > = (e) => {
    clearImmediate(timer as Timeout);
  };

  useEffect(() => {
    if (searchExpanded) {
      searchRef.current?.focus();
    }
  }, [searchExpanded]);

  return (
    <li
      className={clsx("dds-nav-search", {
        "dds-nav-search-open": searchExpanded,
      })}
    >
      <form onSubmit={onSearchSubmit}>
        <button onFocus={onFocus} onClick={onSearchClick}>
          <FaSearch size={22} />
          <span id="searchlabel" className="usa-sr-only">
            {searchExpanded ? "Search" : "Open search input"}
          </span>
        </button>
        <input type="hidden" name="affiliate" id="affiliate" value="dds" />
        <TextInput
          placeholder="Search"
          aria-labelledby="searchlabel"
          ref={searchRef}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onBlur={onBlur}
          onFocus={onFocus}
        />
      </form>
    </li>
  );
};
