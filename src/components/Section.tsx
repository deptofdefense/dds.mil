import React from "react";
import clsx from "clsx";

export interface SectionProps extends Partial<JSX.IntrinsicElements["div"]> {
  accentBlue?: boolean;
  accentBase?: boolean;
  shadow?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  accentBlue,
  accentBase,
  shadow,
  ...rest
}) => (
  <section
    className={clsx("dds-section-container", {
      "accent-blue": accentBlue,
      "accent-base": accentBase,
      "shadow-2": shadow,
    })}
    {...rest}
  >
    <div className={clsx("dds-section-inner", className)}>{children}</div>
  </section>
);
