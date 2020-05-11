import React, { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import { FaSearch } from "react-icons/fa";
import { TextInput } from "components";

type Timeout = ReturnType<typeof setImmediate>;

interface Props {
  onSubmit: React.FormEventHandler;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const HeaderSearch: React.FC<Props> = ({
  value,
  onChange,
  onSubmit,
}) => {
  const [timer, setTimer] = useState<Timeout>();
  const searchRef = useRef<HTMLInputElement>(null);
  const [searchExpanded, setSearchExpanded] = useState(false);

  const onSearchClick: React.MouseEventHandler = (e) => {
    if (!searchExpanded) {
      e.preventDefault();
      setSearchExpanded(true);
    } else if (value === "") {
      e.preventDefault();
      setSearchExpanded(false);
    }
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
      <form onSubmit={onSubmit}>
        <button onFocus={onFocus} onClick={onSearchClick}>
          <FaSearch size={22} />
          <span id="searchlabel" className="usa-sr-only">
            {searchExpanded ? "Search" : "Open search input"}
          </span>
        </button>
        <TextInput
          placeholder="Search"
          aria-labelledby="searchlabel"
          ref={searchRef}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
        />
      </form>
    </li>
  );
};
