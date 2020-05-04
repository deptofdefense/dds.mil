import React from "react";
import clsx from "clsx";

export const Card: React.FC<JSX.IntrinsicElements["div"]> = ({
  children,
  className,
  ...rest
}) => (
  <div className={clsx("shadow-2 bg-white ", className)} {...rest}>
    {children}
  </div>
);
