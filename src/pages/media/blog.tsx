import React from "react";
import { graphql } from "gatsby";
import { Layout, BlogPostCard, PageHeading } from "components";

interface Props {
  data: {
    allMarkdownRemark: {
      nodes: {
        html: string;
        timeToRead: number;
        frontmatter: {
          title: string;
          photo: string;
          summary: string;
          date: string;
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
      <PageHeading>Blog Posts</PageHeading>
      <div className="grid-row grid-gap">
        {nodes.map(({ frontmatter, fields: { slug } }) => (
          <div
            className="grid-col-12 tablet:grid-col-6 desktop:grid-col-4"
            key={slug}
          >
            <BlogPostCard {...frontmatter} slug={slug} />
          </div>
        ))}
      </div>
    </div>
  </Layout>
);

export default NewsIndexPage;

export const pageQuery = graphql`
  query BlogPageQuery {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "blogPost" } } }) {
      nodes {
        html
        timeToRead
        frontmatter {
          title
          photo
          summary
          date(fromNow: true)
        }
        fields {
          slug
        }
      }
    }
  }
`;
