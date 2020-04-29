import React from "react";
import { graphql } from "gatsby";
import { Layout } from "components";
import { Helmet } from "react-helmet";
import { HeroSection, HeroSectionQueryResult } from "sections/HeroSection";
import { TextSection, TextSectionQueryResult } from "sections/TextSection";
import {
  FeatureImgSection,
  FeatureImgSectionQueryResult,
} from "sections/FeatureImgSection";

interface Props {
  data: {
    pagesJson: {
      heroSection: HeroSectionQueryResult;
      textSection: TextSectionQueryResult;
      featureImgSection: FeatureImgSectionQueryResult;
    };
  };
}

const TeamPage: React.FC<Props> = ({
  data: {
    pagesJson: { heroSection, textSection, featureImgSection },
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>Our Team</title>
      </Helmet>
      <HeroSection result={heroSection} />
      <TextSection result={textSection} />
      <FeatureImgSection result={featureImgSection} />
    </Layout>
  );
};

export default TeamPage;

export const pageQuery = graphql`
  query TeamPageQuery {
    pagesJson(fields: { slug: { eq: "teamPage" } }) {
      heroSection {
        ...AllHeroSection
      }
      textSection {
        ...AllTextSection
      }
      featureImgSection {
        ...AllFeatureImgSection
      }
    }
  }
`;
