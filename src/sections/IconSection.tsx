import React from "react";
import { Link } from "gatsby";
import { SectionBase } from "types";
import { Section } from "components";
import Img from "gatsby-image/withIEPolyfill";
import clsx from "clsx";
import { FaChevronRight } from "react-icons/fa";

interface Icon {
  childInlineSvg?: {
    rawSvg: string;
  };
  childImageSharp?: {
    fixed: any;
    fluid: any;
  };
}

export interface IconSectionData extends SectionBase {
  type: "iconSection";
  icons: {
    icon: Icon;
    title: string;
    cta: string;
    ctaLink: string;
    details: string;
  }[];
}

const Icon: React.FC<Icon> = ({ childImageSharp, childInlineSvg }) => (
  <>
    {childInlineSvg ? (
      <div
        className="icon-info-section-icon"
        dangerouslySetInnerHTML={{
          __html: childInlineSvg.rawSvg,
        }}
      />
    ) : (
      <div className="icon-info-section-icon">
        <div className="icon-info-section-image-inner">
          <Img fluid={childImageSharp?.fluid ?? null} />
        </div>
      </div>
    )}
  </>
);

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
              {cta ? (
                <Link to={ctaLink}>
                  <Icon {...icon} />
                  <h3>{title}</h3>
                </Link>
              ) : (
                <>
                  <Icon {...icon} />
                  <h3>{title}</h3>
                </>
              )}
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
