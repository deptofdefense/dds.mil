import React from "react";
import { Layout } from "components";
import { Helmet } from "react-helmet";

const TeamPage: React.FC = () => (
  <Layout>
    <Helmet>
      <title>Our Team</title>
    </Helmet>
    <h1>Team index</h1>
  </Layout>
);

export default TeamPage;
