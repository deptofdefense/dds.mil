import React from "react";
import { graphql } from "gatsby";
import { Layout } from "components";
import { Helmet } from "react-helmet";
import { HeroSection, HeroSectionQueryResult } from "sections/HeroSection";
import { TextSection, TextSectionQueryResult } from "sections/TextSection";
import { IconSection, IconSectionQueryResult } from "sections/IconSection";
import { ImgSection, ImgSectionQueryResult } from "sections/ImgSection";
import { CtaSection, CtaSectionQueryResult } from "sections/CtaSection";

interface Props {
  data: {
    pagesJson: {
      heroSection: HeroSectionQueryResult;
      textSection: TextSectionQueryResult;
      iconSection: IconSectionQueryResult;
      imgSection: ImgSectionQueryResult;
      ctaSection: CtaSectionQueryResult;
    };
  };
}

const AboutPage: React.FC<Props> = ({
  data: {
    pagesJson: {
      heroSection,
      textSection,
      iconSection,
      ctaSection,
      imgSection,
    },
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>About Us</title>
      </Helmet>
      <HeroSection result={heroSection} />
      <TextSection result={textSection} />
      <IconSection result={iconSection} />
      <ImgSection result={imgSection} />
      <CtaSection result={ctaSection} />
    </Layout>
  );
};

export default AboutPage;

export const pageQuery = graphql`
  query AboutPageQuery {
    pagesJson(fields: { slug: { eq: "aboutPage" } }) {
      heroSection {
        ...AllHeroSection
      }
      textSection {
        ...AllTextSection
      }
      iconSection {
        ...AllIconSection
      }
      imgSection {
        ...AllImgSection
      }
      ctaSection {
        ...AllCtaSection
      }
    }
  }
`;
