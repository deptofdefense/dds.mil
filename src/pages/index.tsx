import React from "react";
import { graphql } from "gatsby";
import { Layout, Hero, TextInfoSection, IconInfoSection } from "components";

interface Props {
  data: {
    pagesJson: {
      heroImg: {
        childImageSharp: {
          fluid: any;
        };
      };
      fields: {
        mdTextInfoMain: {
          childMarkdownRemark: {
            html: string;
          };
        };
        mdTextInfoCallout: {
          childMarkdownRemark: {
            html: string;
          };
        };
      };
      heroCTA: string;
      heroCTALink: string;
      heroTitle: string;
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
    pagesJson: { heroImg, fields, iconSection, ...rest },
  },
}) => {
  const { mdTextInfoMain, mdTextInfoCallout } = fields;
  const iconSections = iconSection.map((sec) => ({
    ...sec,
    rawSvg: sec.icon.childInlineSvg.rawSvg,
  }));

  return (
    <Layout>
      <Hero includeCta heroImgFluid={heroImg.childImageSharp.fluid} {...rest} />
      <TextInfoSection
        callOut={mdTextInfoCallout.childMarkdownRemark.html}
        mainParagraph={mdTextInfoMain.childMarkdownRemark.html}
      />
      <IconInfoSection sections={iconSections} />
    </Layout>
  );
};

export default HomePage;

export const pageQuery = graphql`
  query HomePageQuery {
    pagesJson(fields: { slug: { eq: "homePage" } }) {
      heroImg {
        childImageSharp {
          fluid(maxWidth: 1440, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      fields {
        mdTextInfoMain {
          childMarkdownRemark {
            html
          }
        }
        mdTextInfoCallout {
          childMarkdownRemark {
            html
          }
        }
      }
      heroCTA
      heroCTALink
      heroTitle
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
