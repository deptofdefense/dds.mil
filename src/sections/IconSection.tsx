import React from "react";
import { Link, graphql } from "gatsby";
import { Section } from "components";
import Img from "gatsby-image/withIEPolyfill";
import clsx from "clsx";
import { FaChevronRight } from "react-icons/fa";

export type IconSectionQueryResult = {
  icons: {
    icon: {
      childInlineSvg?: {
        rawSvg: string;
      };
      childImageSharp?: {
        fixed: any;
        fluid: any;
      };
    };
    heading: string;
    cta: string;
    ctaLink: string;
    details: string;
  }[];
};

export interface Props {
  result: IconSectionQueryResult;
}

export const IconSection: React.FC<Props> = ({ result }) => {
  return (
    <Section accentBlue shadow>
      <div className="icon-info-section">
        {result.icons.map(({ icon, heading, cta, ctaLink, details }) => (
          <div
            className={clsx("icon-info-section-item", {
              "icon-info-section-smaller": result.icons.length > 3,
            })}
            key={heading}
          >
            <div className="icon-info-section-heading">
              {icon.childInlineSvg ? (
                <div
                  className="icon-info-section-icon"
                  dangerouslySetInnerHTML={{
                    __html: icon.childInlineSvg.rawSvg,
                  }}
                />
              ) : (
                <div className="icon-info-section-icon">
                  <div className="icon-info-section-image-inner">
                    <Img fluid={icon.childImageSharp?.fluid ?? null} />
                  </div>
                </div>
              )}
              <h3>{heading}</h3>
            </div>
            <p>{details}</p>
            {cta && (
              <Link to={ctaLink}>
                {cta} <FaChevronRight fontSize={13} />
              </Link>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};

export const query = graphql`
  fragment AllIconSection on IconSection {
    title
    icons {
      heading
      cta
      ctaLink
      details
      icon {
        childInlineSvg {
          rawSvg
        }
        childImageSharp {
          fluid(maxHeight: 70, maxWidth: 100, fit: INSIDE) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;
