import React from "react";
import { graphql } from "gatsby";
import { Layout } from "components";
import { Helmet } from "react-helmet";

interface Props {
  data: {
    blogPostQuery: {
      markdownRemark: {
        html: string;
        fields: {
          slug: string;
        };
        frontmatter: {
          title: string;
          date: string;
          image: {
            childImageSharp: {
              fluid: any;
            };
          };
        };
      };
    };
  };
}

const BlogPostPage: React.FC<Props> = ({
  data: {
    blogPostQuery: { markdownRemark },
  },
}) => {
  const {
    html,
    fields: { slug },
    frontmatter,
  } = markdownRemark;

  return (
    <Layout>
      <Helmet>
        <title>{frontmatter.title}</title>
      </Helmet>
      <div
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
    </Layout>
  );
};

export default BlogPostPage;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
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
`;
