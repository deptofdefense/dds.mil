import React from "react";
import clsx from "clsx";

interface Props extends Partial<JSX.IntrinsicElements["button"]> {}

export const CtaButton: React.FC<Props> = ({ className, ...rest }) => {
  return <button className={clsx("dds-cta-btn", className)} {...rest} />;
};
