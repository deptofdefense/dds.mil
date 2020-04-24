import React from "react";
import { Link } from "gatsby";
import clsx from "clsx";
import { FaChevronRight } from "react-icons/fa";

interface Props {
  sections: {
    rawSvg: string;
    heading: string;
    cta: string;
    ctaLink: string;
    details: string;
  }[];
}

export const IconInfoSection: React.FC<Props> = ({ sections }) => {
  return (
    <div className="info-section">
      {sections.map(({ rawSvg, heading, cta, ctaLink, details }) => (
        <div
          className={clsx("info-section-item", {
            "info-section-smaller": sections.length > 3,
          })}
          key={cta}
        >
          <div className="info-section-heading">
            <div
              className="info-section-icon"
              dangerouslySetInnerHTML={{
                __html: rawSvg,
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
