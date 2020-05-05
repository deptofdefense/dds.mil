import React from "react";
import { Layout, PageHeading, SEO } from "components";

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Not Found" />
    <PageHeading className="width-full margin-y-9 text-center">
      Page Not Found
    </PageHeading>
  </Layout>
);

export default IndexPage;
