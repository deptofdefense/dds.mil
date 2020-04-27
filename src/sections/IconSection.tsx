import React from "react";
import { Link, graphql } from "gatsby";
import clsx from "clsx";
import { FaChevronRight } from "react-icons/fa";

export type IconSectionQueryResult = {
  icon: {
    childInlineSvg: {
      rawSvg: string;
    };
  };
  heading: string;
  cta: string;
  ctaLink: string;
  details: string;
}[];

export interface Props {
  result: IconSectionQueryResult;
}

export const IconSection: React.FC<Props> = ({ result }) => {
  return (
    <div className="info-section">
      {result.map(({ icon, heading, cta, ctaLink, details }) => (
        <div
          className={clsx("info-section-item", {
            "info-section-smaller": result.length > 3,
          })}
          key={heading}
        >
          <div className="info-section-heading">
            <div
              className="info-section-icon"
              dangerouslySetInnerHTML={{
                __html: icon.childInlineSvg.rawSvg,
              }}
            />
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
  );
};

export const query = graphql`
  fragment AllIconSection on IconSection {
    heading
    cta
    ctaLink
    details
    icon {
      childInlineSvg {
        rawSvg
      }
    }
  }
`;
