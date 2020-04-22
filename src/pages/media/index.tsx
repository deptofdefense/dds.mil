import React from "react";
import { Link } from "gatsby";
import { Layout, PageHeading } from "components";

const MediaIndexPage: React.FC = () => (
  <Layout>
    <div className="grid-container">
      <PageHeading>DDS in the Media</PageHeading>
      <div className="grid-container">
        <div>
          <Link to="/media/blog">blog</Link>
        </div>
        <div>
          <Link to="/media/news">News</Link>
        </div>

        <div>
          <Link to="/media/announcements">Announcements</Link>
        </div>
      </div>
    </div>
  </Layout>
);

export default MediaIndexPage;
