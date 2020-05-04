import React from "react";
import { graphql } from "gatsby";
import { Layout, SidebarSection, Sidebar } from "components";
import { Helmet } from "react-helmet";
import { CtaSection, CtaSectionQueryResult } from "sections/CtaSection";
import { HeroSection, HeroSectionQueryResult } from "sections/HeroSection";
import {
  MarkdownBodySection,
  MdBodySectionQueryResult,
} from "sections/MarkdownBodySection";

interface Props {
  data: {
    pagesJson: {
      heroSection: HeroSectionQueryResult;
      ctaSection: CtaSectionQueryResult;
      markdownBody: MdBodySectionQueryResult;
    };
    parentPagesJson: {
      navigation: {
        primaryLink: string;
        subnav: {
          text: string;
          link: string;
        }[];
      };
    };
  };
}

const ProductDevelopmentPage: React.FC<Props> = ({
  data: { parentPagesJson, pagesJson },
}) => {
  const { subnav, primaryLink } = parentPagesJson.navigation;
  const { ctaSection, markdownBody, heroSection } = pagesJson;

  const sideMenu = [{ link: primaryLink, text: "Overview " }, ...subnav];

  return (
    <Layout>
      <Helmet>
        <title>Product Development</title>
      </Helmet>
      <HeroSection result={heroSection} />
      <SidebarSection sidebar={<Sidebar menu={sideMenu} />}>
        <MarkdownBodySection result={markdownBody} />
      </SidebarSection>
      <CtaSection result={ctaSection} />
    </Layout>
  );
};

export default ProductDevelopmentPage;

export const pageQuery = graphql`
  query WorkProductDevelopmentPageQuery {
    parentPagesJson: pagesJson(fields: { slug: { eq: "workPage" } }) {
      navigation {
        primaryLink
        subnav {
          text
          link
        }
      }
    }
    pagesJson(fields: { slug: { eq: "workProductDevelopment" } }) {
      heroSection {
        ...AllHeroSection
      }
      ctaSection {
        ...AllCtaSection
      }
      markdownBody {
        ...AllMdBodySection
      }
    }
  }
`;
