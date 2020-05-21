import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { Layout, Section, Sidebar, SidebarSection, SEO } from "components";
import { HeroSection, MarkdownBodySection } from "sections";

interface Props {
  pageContext: {
    link: string;
  };
  data: {
    markdownRemark: {
      html: string;
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
            original: {
              src: string;
              height: number;
              width: number;
            };
          };
        };
        heroImage?: {
          childImageSharp: {
            fluid: any;
          };
        };
      };
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

const BlogPostPage: React.FC<Props> = ({
  data: { markdownRemark, pagesJson },
  pageContext: { link },
}) => {
  const { html, frontmatter } = markdownRemark;
  const { sidenav } = pagesJson;
  return (
    <Layout>
      <SEO
        url={link}
        title={frontmatter.title}
        image={frontmatter.image.childImageSharp.original}
        description={frontmatter.summary}
      />
      <HeroSection
        type="hero"
        title={frontmatter.title}
        heroImage={frontmatter.heroImage}
      />
      <SidebarSection sidebar={<Sidebar menu={sidenav.menu} includeSocial />}>
        <Section className="media-page-section">
          <Img fluid={frontmatter.image.childImageSharp.fluid} />
          <div
            className="markdown-body"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </Section>
      </SidebarSection>
    </Layout>
  );
};

export default BlogPostPage;

export const query = graphql`
  query($slug: String!, $mediaType: String!) {
    markdownRemark(
      fields: { slug: { eq: $slug } }
      frontmatter: { type: { eq: $mediaType } }
    ) {
      html
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
            original {
              src
              width
              height
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
