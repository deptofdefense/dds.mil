import React, { useState } from "react";
import { TextInput } from "./TextInput";

interface Props {
  options: {
    label: string;
    value: string;
  }[];
  name: string;
  required?: boolean;
  value?: string;
  otherValue?: string;
  onOtherChange?: React.ChangeEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const RadioButtonGroup: React.FC<Props> = ({
  options,
  value,
  name,
  onChange,
  otherValue,
  onOtherChange,
}) => {
  return (
    <>
      {options.map((opt) => (
        <div className="usa-radio" key={opt.value}>
          <input
            className="usa-radio__input"
            value={opt.value}
            name={name}
            onChange={onChange}
            checked={opt.value === value}
            required
            id={opt.value}
            type="radio"
          />
          <label className="usa-radio__label" htmlFor={opt.value}>
            {opt.label}
          </label>
        </div>
      ))}
      {onOtherChange && (
        <div className="usa-radio">
          <input
            className="usa-radio__input"
            id="other"
            name={name}
            value="other"
            onChange={onChange}
            checked={value === "other"}
            required
            type="radio"
          />
          <label className="usa-radio__label" htmlFor="other">
            Other
            <TextInput
              value={otherValue}
              onChange={onOtherChange}
              tabIndex={value === "other" ? 0 : -1}
            />
          </label>
        </div>
      )}
    </>
  );
};
