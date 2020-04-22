import React from "react";
import clsx from "clsx";

export const PageHeading: React.FC<JSX.IntrinsicElements["h1"]> = ({
  children,
  className,
}) => <h1 className={clsx("font-heading-2xl", className)}>{children}</h1>;
