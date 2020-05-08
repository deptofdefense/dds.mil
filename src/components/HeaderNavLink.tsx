import React from "react";
import clsx from "clsx";
import { Link } from "gatsby";

interface Props {
  to: string;
  className?: string;
}

export const HeaderNavLink: React.FC<Props> = ({ children, to, className }) => (
  <li className={clsx("usa-nav__primary-item", className)}>
    <Link
      to={to}
      className="usa-nav__link desktop:font-sans-md"
      activeClassName="usa-current"
      partiallyActive
    >
      <span>{children}</span>
    </Link>
  </li>
);
