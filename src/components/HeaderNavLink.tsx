import React from "react";
import { Link, GatsbyLinkProps } from "gatsby";

interface Props {
  to: string;
}

export const HeaderNavLink: React.FC<Props> = ({ children, to }) => (
  <li className="usa-nav__primary-item">
    <Link to={to} className="usa-nav__link" activeClassName="usa-current">
      <span>{children}</span>
    </Link>
  </li>
);
