import React from "react";
import { GovBanner, Header, Footer, SEO } from "components";

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <SEO />
      <div className="display-flex flex-column minh-viewport display-block">
        <div className="flex-1 margin-bottom-5 layout-content position-relative">
          <GovBanner />
          <Header siteTitle="DDS" />
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
};
