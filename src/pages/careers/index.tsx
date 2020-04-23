import React from "react";
import { graphql } from "gatsby";
import { Layout, PageHeading, JobListItem } from "components";

interface IndexPageProps {
  data: {
    allLever: {
      edges: {
        node: {
          lever_id: string;
          createdAt: string;
          descriptionPlain: string;
          categories: {
            commitment: string;
            level: string;
            location: string;
            team: string;
          };
          text: string;
        };
      }[];
    };
  };
}

const JoinIndexPage: React.FC<IndexPageProps> = ({
  data: {
    allLever: { edges },
  },
}) => (
  <Layout>
    <div className="grid-container">
      <PageHeading>Careers</PageHeading>
      {edges.map(({ node }) => (
        <JobListItem {...node} />
      ))}
    </div>
  </Layout>
);

export default JoinIndexPage;

export const pageQuery = graphql`
  query MyQuery {
    allLever(sort: { fields: createdAt, order: DESC }, limit: 25) {
      edges {
        node {
          lever_id
          createdAt(fromNow: true)
          descriptionPlain
          categories {
            commitment
            level
            location
            team
          }
          text
        }
      }
    }
  }
`;
