import React from "react";
import { graphql } from "gatsby";
import { Layout, Section, Sidebar, SidebarSection, SEO } from "components";
import { HeroSection } from "sections";

interface Props {
  data: {
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
}) => {
  const { html, frontmatter } = markdownRemark;
  const { sidenav } = pagesJson;
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <HeroSection
        type="hero"
        title={frontmatter.title}
        heroImage={frontmatter.heroImage}
      />
      <SidebarSection sidebar={<Sidebar menu={sidenav.menu} includeSocial />}>
        <Section className="dds-post-page-section">
          <div dangerouslySetInnerHTML={{ __html: html }} />
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
