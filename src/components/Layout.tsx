import React from "react";
import { GovBanner, Header, Footer } from "components";

export const Layout: React.FC = ({ children }) => {
  return (
    <>
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

interface Props {
  menu: {
    text: string;
    link: string;
  }[];
}
