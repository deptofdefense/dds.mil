import React from "react";
import { GovBanner, Header } from "components";

export const Layout: React.FC = ({ children }) => (
  <div>
    <GovBanner />
    <Header siteTitle="DDS" />
    {children}
  </div>
);
