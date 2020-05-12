import React, { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import { FaSearch } from "react-icons/fa";
import { TextInput } from "components";

type Timeout = ReturnType<typeof setImmediate>;

interface Props {
  onSubmit: React.FormEventHandler;
  value: string;
  setValue(value: string): void;
}

export const HeaderSearch: React.FC<Props> = ({
  value,
  setValue,
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
    }
  };

  const onBlur: React.FocusEventHandler<
    HTMLInputElement | HTMLButtonElement
  > = () => {
    setTimer(
      setImmediate(() => {
        setValue("");
        setSearchExpanded(false);
      })
    );
  };

  const onFocus: React.FocusEventHandler<
    HTMLInputElement | HTMLButtonElement
  > = (e) => {
    clearImmediate(timer as Timeout);
    setSearchExpanded(true);
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
        <button
          onFocus={onFocus}
          onClick={onSearchClick}
          disabled={searchExpanded && value === ""}
          aria-label={searchExpanded ? "Submit Search" : "Expand Search Input"}
        >
          <FaSearch size={22} focusable={false} />
        </button>
        <TextInput
          placeholder="Search"
          aria-label="Search query input"
          ref={searchRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={onBlur}
          onFocus={onFocus}
        />
      </form>
    </li>
  );
};
