import React from "react";
import { Link } from "gatsby";
import { SectionBase } from "types";
import { Section } from "components";
import Img from "gatsby-image/withIEPolyfill";
import clsx from "clsx";
import { FaChevronRight } from "react-icons/fa";

export interface IconSectionData extends SectionBase {
  type: "iconSection";
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
    title: string;
    cta: string;
    ctaLink: string;
    details: string;
  }[];
}

export const IconSection: React.FC<IconSectionData> = ({ icons }) => {
  return (
    <Section accentBlue shadow>
      <div className="icon-info-section">
        {icons.map(({ icon, title, cta, ctaLink, details }) => (
          <div
            className={clsx("icon-info-section-item", {
              "icon-info-section-smaller": icons.length > 3,
            })}
            key={title}
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
              <h3>{title}</h3>
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
