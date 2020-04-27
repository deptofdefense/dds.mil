import React from "react";
import { Layout } from "components";
import { Helmet } from "react-helmet";

const PortfolioPage: React.FC = () => (
  <Layout>
    <Helmet>
      <title>Portfolio</title>
    </Helmet>
    <h1>Portfolio index</h1>
  </Layout>
);

export default PortfolioPage;
