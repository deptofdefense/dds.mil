import React from "react";
import { GovBanner, Header, Footer } from "components";

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <div className="usa-overlay" />
      <div className="dds-layout">
        <div className="dds-layout-content">
          <GovBanner />
          <Header  />
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
};

interface Props {
  menu: {
    text: string;
    link: string;
  }[];
}
