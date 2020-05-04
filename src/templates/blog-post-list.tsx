import React from "react";
import { graphql } from "gatsby";
import { Layout, BlogCard, Section } from "components";
import { Helmet } from "react-helmet";

interface Props {
  data: {
    allMarkdownRemark: {
      nodes: {
        fields: {
          slug: string;
        };
        frontmatter: {
          title: string;
          summary: string;
          date: string;
          image: {
            childImageSharp: {
              fluid: any;
            };
          };
        };
      }[];
    };
  };
}

const BlogList: React.FC<Props> = ({
  data: {
    allMarkdownRemark: { nodes },
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>Blog</title>
      </Helmet>
      <Section>
        {nodes.map(({ fields, frontmatter }) => (
          <BlogCard
            slug={fields.slug}
            {...frontmatter}
            imgFluid={frontmatter.image.childImageSharp.fluid}
          />
        ))}
      </Section>
    </Layout>
  );
};

export default BlogList;

export const query = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
      filter: { frontmatter: { type: { eq: "blogPost" } } }
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          summary
          date
          image {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
