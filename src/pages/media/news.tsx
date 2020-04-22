import React from "react";
import { graphql } from "gatsby";
import { Layout, NewsArticleCard, PageHeading } from "components";

interface Props {
  data: {
    allMarkdownRemark: {
      nodes: {
        frontmatter: {
          title: string;
          photo: string;
          summary: string;
          date: string;
          link: string;
        };
        fields: {
          slug: string;
        };
      }[];
    };
  };
}

const NewsIndexPage: React.FC<Props> = ({
  data: {
    allMarkdownRemark: { nodes },
  },
}) => (
  <Layout>
    <div className="grid-container">
      <PageHeading>DDS in the News</PageHeading>
      <div className="grid-row grid-gap">
        {nodes.map(({ frontmatter, fields: { slug } }) => (
          <div
            className="grid-col-12 tablet:grid-col-6 desktop:grid-col-4"
            key={slug}
          >
            <NewsArticleCard {...frontmatter} />
          </div>
        ))}
      </div>
    </div>
  </Layout>
);

export default NewsIndexPage;

export const pageQuery = graphql`
  query NewsPageQuery {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "newsArticle" } } }
    ) {
      nodes {
        frontmatter {
          title
          photo
          type
          summary
          link
          date(fromNow: true)
        }
        fields {
          slug
        }
      }
    }
  }
`;
