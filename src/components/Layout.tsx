import React from "react";
import { GovBanner, Header, Footer, SEO } from "components";

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <SEO />
      <div className="display-flex flex-column minh-viewport">
        <div className="flex-1 margin-bottom-5">
          <GovBanner />
          <Header siteTitle="DDS" />
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
};
