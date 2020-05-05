import React, { useState } from "react";
import { TextInput } from "./TextInput";

interface Props {
  options: {
    label: string;
    value: string;
  }[];
  name: string;
  includeOther?: boolean;
  required?: boolean;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const RadioButtonGroup: React.FC<Props> = ({
  options,
  value,
  name,
  onChange,
  includeOther,
}) => {
  const [otherValue, setOtherValue] = useState("");

  return (
    <fieldset className="usa-fieldset">
      {options.map((opt) => (
        <div className="usa-radio" key={opt.value}>
          <input
            className="usa-radio__input"
            id={opt.value}
            value={opt.value}
            name={name}
            required
            type="radio"
          />
          <label className="usa-radio__label" htmlFor={opt.value}>
            {opt.label}
          </label>
        </div>
      ))}
      {includeOther && (
        <div className="usa-radio">
          <input
            className="usa-radio__input"
            id="other"
            name={name}
            value={otherValue}
            required
            type="radio"
          />
          <label className="usa-radio__label" htmlFor="other">
            Other
            <TextInput
              value={otherValue}
              onChange={(e) => setOtherValue(e.currentTarget.value)}
            />
          </label>
        </div>
      )}
    </fieldset>
  );
};
