import React from "react";
import { Link, graphql } from "gatsby";
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
    <div className="dds-container accent-blue shadow">
      <div className="info-section">
        {result.icons.map(({ icon, heading, cta, ctaLink, details }) => (
          <div
            className={clsx("info-section-item", {
              "info-section-smaller": result.icons.length > 3,
            })}
            key={heading}
          >
            <div className="info-section-heading">
              {icon.childInlineSvg ? (
                <div
                  className="info-section-icon"
                  dangerouslySetInnerHTML={{
                    __html: icon.childInlineSvg.rawSvg,
                  }}
                />
              ) : (
                <div className="info-section-icon">
                  <div className="info-section-image-inner">
                    <Img fluid={icon.childImageSharp?.fluid} />
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
    </div>
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
