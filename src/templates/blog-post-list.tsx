import React from "react";
import { graphql } from "gatsby";
import { Layout, BlogCard, Section, SidebarSection, Sidebar } from "components";
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
    pagesJson: {
      sidenav: {
        menu: {
          text: string;
          link: string;
        }[];
      };
    };
  };
}

const BlogList: React.FC<Props> = ({
  data: {
    allMarkdownRemark: { nodes },
    pagesJson: { sidenav },
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>Blog</title>
      </Helmet>
      <SidebarSection sidebar={<Sidebar menu={sidenav.menu} includeSocial />}>
        <Section className="post-list-section">
          {nodes.map(({ fields, frontmatter }) => (
            <BlogCard
              key={fields.slug}
              slug={fields.slug}
              {...frontmatter}
              imgFluid={frontmatter.image.childImageSharp.fluid}
            />
          ))}
        </Section>
      </SidebarSection>
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
          date(formatString: "MMM DD, YYYY")
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

    pagesJson(navigation: { link: { eq: "/media" } }) {
      sidenav {
        menu {
          text
          link
        }
      }
    }
  }
`;
