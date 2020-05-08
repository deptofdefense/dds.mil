import React from "react";
import Link from "gatsby-link";
import { ConnectCallout } from "components";

export interface SidebarProps {
  menu: {
    text: string;
    link: string;
  }[];
  includeSocial?: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({ menu, includeSocial }) => (
  <>
    <ul className="usa-sidenav margin-bottom-4">
      {menu.map((item, idx) => (
        <li className="usa-sidenav__item" key={item.link}>
          <Link
            key={item.link}
            to={item.link}
            activeClassName="usa-current"
            partiallyActive={idx !== 0}
          >
            {item.text}
          </Link>
        </li>
      ))}
    </ul>
    {includeSocial && <ConnectCallout />}
  </>
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
