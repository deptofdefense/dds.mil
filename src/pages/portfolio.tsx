import React from "react";
import { graphql } from "gatsby";
import { Layout } from "components";
import { Helmet } from "react-helmet";
import { HeroSection, HeroSectionQueryResult } from "sections/HeroSection";
import { TextSection, TextSectionQueryResult } from "sections/TextSection";

interface Props {
  data: {
    pagesJson: {
      heroSection: HeroSectionQueryResult;
      textSection: TextSectionQueryResult;
    };
  };
}

const PortfolioPage: React.FC<Props> = ({
  data: {
    pagesJson: { heroSection, textSection },
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>Our Work</title>
      </Helmet>
      <HeroSection result={heroSection} />
      <TextSection result={textSection} />
    </Layout>
  );
};

export default PortfolioPage;

export const pageQuery = graphql`
  query PortfolioPageQuery {
    pagesJson(fields: { slug: { eq: "portfolioPage" } }) {
      heroSection {
        ...AllHeroSection
      }
      textSection {
        ...AllTextSection
      }
    }
  }
`;
