import React from "react";
import { graphql } from "gatsby";
import { Layout } from "components";
import { Helmet } from "react-helmet";
import { HeroSection, HeroSectionQueryResult } from "sections/HeroSection";
import { TextSection, TextSectionQueryResult } from "sections/TextSection";
import { CtaSection, CtaSectionQueryResult } from "sections/CtaSection";
import { FeaturedMediaSection, FeaturedMediaSectionQueryResult } from 'sections/FeaturedMediaSection';

interface Props {
  data: {
    pagesJson: {
      heroSection: HeroSectionQueryResult;
      textSection: TextSectionQueryResult;
      featuredMediaSection: FeaturedMediaSectionQueryResult;
      ctaSection: CtaSectionQueryResult;
    };
  };
}

const TeamPage: React.FC<Props> = ({
  data: {
    pagesJson: { heroSection, textSection, featuredMediaSection, ctaSection },
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>Our Team</title>
      </Helmet>
      <HeroSection result={heroSection} />
      <TextSection result={textSection} />
      <FeaturedMediaSection result={featuredMediaSection} />
      <CtaSection result={ctaSection} />
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
      featuredMediaSection {
        ...AllFeaturedMediaSection
      }
      ctaSection {
        ...AllCtaSection
      }
    }
  }
`;
