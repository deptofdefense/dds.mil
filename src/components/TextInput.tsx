import React from "react";
import clsx from "clsx";

interface InputProps extends Partial<JSX.IntrinsicElements["input"]> {
  defaultMargin?: boolean;
  defaultOutline?: boolean;
  label?: string;
  labelSecondary?: string;
}

export const TextInput = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      defaultMargin = false,
      defaultOutline = false,
      label,
      labelSecondary,
      id,
      ...rest
    },
    ref
  ) => (
    <div className="dds-text-input">
      {label && (
        <div className="dds-label-wrapper">
          <>
            <label className="usa-label" htmlFor={id}>
              {label}
            </label>
            {labelSecondary && (
              <div className="margin-top-1 dds-label-secondary text-light">
                {labelSecondary}
              </div>
            )}
          </>
        </div>
      )}
      <input
        className={clsx("usa-input", className)}
        ref={ref}
        id={id}
        {...rest}
      />
    </div>
  )
);
