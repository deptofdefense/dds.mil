import React from "react";
import { Link } from "gatsby";

interface Props {
  to: string;
}

export const HeaderNavLink: React.FC<Props> = ({ children, to }) => (
  <li className="usa-nav__primary-item">
    <Link
      to={to}
      className="usa-nav__link desktop:font-sans-md"
      activeClassName="usa-current"
    >
      <span>{children}</span>
    </Link>
  </li>
);
