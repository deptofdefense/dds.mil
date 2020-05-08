import React from "react";
import { graphql } from "gatsby";
import {
  Layout,
  MediaCard,
  Section,
  SidebarSection,
  Sidebar,
  SEO,
} from "components";

interface Props {
  pageContext: {
    mediaType: string;
    title: string;
  };
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
          image?: {
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

    contentJson: {
      defaultMediaImage: {
        childImageSharp: {
          fluid: any;
        };
      };
    };
  };
}

const BlogList: React.FC<Props> = ({
  data: {
    allMarkdownRemark: { nodes },
    pagesJson: { sidenav },
    contentJson: { defaultMediaImage },
  },
  pageContext: { mediaType, title },
}) => {
  return (
    <Layout>
      <SEO title={title} />
      <SidebarSection sidebar={<Sidebar menu={sidenav.menu} includeSocial />}>
        <Section className="post-list-section">
          {nodes.map(({ fields, frontmatter }) => (
            <MediaCard
              key={fields.slug}
              link={`/media/${mediaType}/${fields.slug}`}
              {...frontmatter}
              imgFluid={
                frontmatter.image
                  ? frontmatter.image.childImageSharp.fluid
                  : defaultMediaImage.childImageSharp.fluid
              }
            />
          ))}
        </Section>
      </SidebarSection>
    </Layout>
  );
};

export default BlogList;

export const query = graphql`
  query announcementListQuery($mediaType: String!, $skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
      filter: { frontmatter: { type: { eq: $mediaType } } }
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
                ...GatsbyImageSharpFluid_withWebp
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

    contentJson {
      defaultMediaImage {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`;
