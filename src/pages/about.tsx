import React from "react";
import { graphql } from "gatsby";
import {
  Layout,
  Hero,
  TextInfoSection,
  IconInfoSection,
  CtaSection,
  ImgSection,
} from "components";

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
        ctaSection_mdDetails: {
          childMarkdownRemark?: {
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
      ctaSection: {
        cta: string;
        ctaLink: string;
      };
      imgSection: {
        altText: string;
        image: {
          childImageSharp: {
            fluid: any;
          };
        };
      }[];
    };
  };
}

const AboutPage: React.FC<Props> = ({
  data: {
    pagesJson: {
      fields,
      heroSection,
      iconSection,
      ctaSection,
      imgSection,
      ...rest
    },
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

  const ctaSectionProps = {
    ...ctaSection,
    details: fields.ctaSection_mdDetails.childMarkdownRemark?.html,
  };

  const imgSectionProps = {
    images: imgSection,
  };

  return (
    <Layout>
      <Hero {...heroProps} />
      <TextInfoSection {...textSectionProps} />
      <IconInfoSection sections={iconSections} />
      <ImgSection {...imgSectionProps} />
      <CtaSection {...ctaSectionProps} />
    </Layout>
  );
};

export default AboutPage;

export const pageQuery = graphql`
  query AboutPageQuery {
    pagesJson(fields: { slug: { eq: "aboutPage" } }) {
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
        ctaSection_mdDetails {
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
      ctaSection {
        cta
        ctaLink
      }
      imgSection {
        altText
        image {
          childImageSharp {
            fluid(maxHeight: 460) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
