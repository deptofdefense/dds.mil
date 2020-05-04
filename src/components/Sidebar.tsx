import React from "react";
import Link from "gatsby-link";

export interface SidebarProps {
  menu: {
    text: string;
    link: string;
  }[];
  overviewLink?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ menu, overviewLink }) => (
  <ul className="usa-sidenav margin-bottom-4">
    {overviewLink && (
      <li className="usa-sidenav__item">
        <Link to={overviewLink} activeClassName="usa-current">
          Overview
        </Link>
      </li>
    )}
    {menu.map((item) => (
      <li className="usa-sidenav__item">
        <Link key={item.link} to={item.link} activeClassName="usa-current">
          {item.text}
        </Link>
      </li>
    ))}
  </ul>
);

interface Props {
  sidebar: React.ReactNode;
}

export const SidebarSection: React.FC<Props> = ({ children, sidebar }) => (
  <div className="dds-sidebar-layout">
    <div className="dds-sidebar">{sidebar}</div>
    <div className="dds-sidebar-content">{children}</div>
  </div>
);
