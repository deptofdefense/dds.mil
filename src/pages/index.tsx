import React from "react";
import { graphql } from "gatsby";
import { Layout, Hero, TextInfoSection, IconInfoSection } from "components";

interface Props {
  data: {
    pagesJson: {
      fields: {
        textSection_mdTextInfoMain: {
          childMarkdownRemark: {
            html: string;
          };
        };
        textSection_mdTextInfoCallout: {
          childMarkdownRemark: {
            html: string;
          };
        };
      };
      heroSection: {
        heroCTA: string;
        heroCTALink: string;
        heroTitle: string;
        heroImg: {
          childImageSharp: {
            fluid: any;
          };
        };
      };
      iconSection: {
        heading: string;
        cta: string;
        ctaLink: string;
        details: string;
        icon: {
          childInlineSvg: {
            rawSvg: string;
          };
        };
      }[];
    };
  };
}

const HomePage: React.FC<Props> = ({
  data: {
    pagesJson: { fields, heroSection, iconSection, ...rest },
  },
}) => {
  const heroProps = {
    ...heroSection,
    heroImgFluid: heroSection.heroImg.childImageSharp.fluid,
  };

  const textSectionProps = {
    mainParagraph: fields.textSection_mdTextInfoMain.childMarkdownRemark.html,
    callOut: fields.textSection_mdTextInfoCallout.childMarkdownRemark.html,
  };

  const iconSections = iconSection.map((sec) => ({
    ...sec,
    rawSvg: sec.icon.childInlineSvg.rawSvg,
  }));

  return (
    <Layout>
      <Hero {...heroProps} />
      <TextInfoSection {...textSectionProps} />
      <IconInfoSection sections={iconSections} />
    </Layout>
  );
};

export default HomePage;

export const pageQuery = graphql`
  query HomePageQuery {
    pagesJson(fields: { slug: { eq: "homePage" } }) {
      fields {
        textSection_mdTextInfoMain {
          childMarkdownRemark {
            html
          }
        }
        textSection_mdTextInfoCallout {
          childMarkdownRemark {
            html
          }
        }
      }
      heroSection {
        heroCTA
        heroCTALink
        heroTitle
        heroImg {
          childImageSharp {
            fluid(maxWidth: 1440, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      iconSection {
        heading
        cta
        ctaLink
        details
        icon {
          absolutePath
          childInlineSvg {
            rawSvg
          }
        }
      }
    }
  }
`;
