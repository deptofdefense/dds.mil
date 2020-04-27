import React from "react";
import { graphql } from "gatsby";
import { Layout } from "components";
import { TextSection, TextSectionQueryResult } from "sections/TextSection";
import { IconSection, IconSectionQueryResult } from "sections/IconSection";
import { HeroSection, HeroSectionQueryResult } from "sections/HeroSection";
import { CtaSection, CtaSectionQueryResult } from "sections/CtaSection";

interface Props {
  data: {
    pagesJson: {
      heroSection: HeroSectionQueryResult;
      textSection: TextSectionQueryResult;
      iconSection: IconSectionQueryResult;
      ctaSection: CtaSectionQueryResult;
    };
  };
}

const HomePage: React.FC<Props> = ({
  data: {
    pagesJson: { heroSection, iconSection, textSection, ctaSection },
  },
}) => {
  return (
    <Layout>
      <HeroSection result={heroSection} />
      <TextSection result={textSection} />
      <IconSection result={iconSection} />
      <CtaSection result={ctaSection} />
    </Layout>
  );
};

export default HomePage;

export const pageQuery = graphql`
  query HomePageQuery {
    pagesJson(fields: { slug: { eq: "homePage" } }) {
      heroSection {
        ...AllHeroSection
      }
      textSection {
        ...AllTextSection
      }
      iconSection {
        ...AllIconSection
      }
      ctaSection {
        ...AllCtaSection
      }
    }
  }
`;
