import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { TextInput } from "components";

interface Props extends Partial<JSX.IntrinsicElements["input"]> {
  onSubmit: React.FormEventHandler;
}

export const HeaderSearchForm = React.forwardRef<HTMLInputElement, Props>(
  ({ onSubmit, ...rest }, ref) => {
    return (
      <div className="dds-search-form-wrapper">
        <form onSubmit={onSubmit} className="dds-search-form">
          <button type="submit" aria-label="Submit Search Query">
            <FaSearch size={22} focusable={false} />
          </button>
          <TextInput
            {...rest}
            placeholder="Search"
            aria-label="Search query input"
            ref={ref}
          />
        </form>
      </div>
    );
  }
);
