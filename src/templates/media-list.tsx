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
    link: string;
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
          image: {
            childImageSharp: {
              fluid: any;
            };
          };
          externalLink: string;
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

const MediaList: React.FC<Props> = ({
  data: {
    allMarkdownRemark: { nodes },
    pagesJson: { sidenav },
  },
  pageContext: { mediaType, title, link },
}) => {
  return (
    <Layout>
      <SEO title={title} url={link} />
      <SidebarSection sidebar={<Sidebar menu={sidenav.menu} includeSocial />}>
        <Section className="post-list-section">
          {nodes.map(({ fields, frontmatter }) => (
            <MediaCard
              key={fields.slug}
              link={
                frontmatter.externalLink ?? `/media/${mediaType}/${fields.slug}`
              }
              imgFluid={frontmatter.image.childImageSharp.fluid}
              {...frontmatter}
            />
          ))}
        </Section>
      </SidebarSection>
    </Layout>
  );
};

export default MediaList;

export const query = graphql`
  query MediaListQuery($mediaType: String!, $skip: Int!, $limit: Int!) {
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
  }
`;
