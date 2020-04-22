import React from "react";
import { GovBanner, Header } from "components";

export const Layout: React.FC = ({}) => (
  <div>
    <GovBanner />
    <Header siteTitle="DDS" />
  </div>
);
