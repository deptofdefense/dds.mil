import React from "react";
import clsx from "clsx";

export const Card: React.FC<JSX.IntrinsicElements["div"]> = ({
  children,
  className,
  ...rest
}) => (
  <div className={clsx("height-full width-full margin-y-2", className)}>
    <div className="bg-white padding-3 shadow-1">{children}</div>
  </div>
);
