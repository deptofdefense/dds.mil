import React from "react";
import { Link } from "gatsby";

interface Props {
  ctaLink: string;
  cta: string;
  details?: string;
}

export const CtaSection: React.FC<Props> = ({ ctaLink, cta, details }) => {
  return (
    <div className="cta-section">
      {details && (
        <div
          className="cta-details"
          dangerouslySetInnerHTML={{
            __html: details,
          }}
        />
      )}
      <Link to={ctaLink}>
        <button>{cta}</button>
      </Link>
    </div>
  );
};
