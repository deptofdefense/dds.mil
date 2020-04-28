import React from "react";
import { GovBanner, Header, Footer, SEO } from "components";

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <SEO />
      <div className="dds-layout">
        <div className="dds-layout-content">
          <GovBanner />
          <Header siteTitle="DDS" />
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
};
