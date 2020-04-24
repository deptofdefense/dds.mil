import React, { useLayoutEffect } from "react";
import { Link } from "gatsby";
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
      {sections.map(({ rawSvg, heading, cta, ctaLink, details }, idx) => (
        <div className="info-section-item">
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
