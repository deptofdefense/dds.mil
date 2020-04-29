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

const TeamPage: React.FC<Props> = ({
  data: {
    pagesJson: { heroSection, textSection },
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>Our Team</title>
      </Helmet>
      <HeroSection result={heroSection} />
      <TextSection result={textSection} />
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
    }
  }
`;
