import React from "react";
import { SectionBase } from "types";
import { Section, ConditionalLink } from "components";
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
            {cta ? (
              <ConditionalLink
                to={ctaLink}
                className="icon-info-section-heading"
              >
                <Icon {...icon} />
                <h3>{title}</h3>
              </ConditionalLink>
            ) : (
              <div className="icon-info-section-heading">
                <Icon {...icon} />
                <h3>{title}</h3>
              </div>
            )}
            <p>{details}</p>
            {cta && (
              <ConditionalLink
                to={ctaLink}
                className="info-section-item-cta-link"
              >
                {cta} <FaChevronRight fontSize={13} />
              </ConditionalLink>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};
