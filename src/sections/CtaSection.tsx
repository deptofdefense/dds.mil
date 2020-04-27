import React from "react";
import { Link, graphql } from "gatsby";

export type CtaSectionQueryResult = {
  ctaLink: string;
  cta: string;
  mdDetails?: {
    html: string;
  };
};

interface Props {
  result: CtaSectionQueryResult;
}

export const CtaSection: React.FC<Props> = ({
  result: { ctaLink, cta, mdDetails },
}) => {
  return (
    <div className="dds-container">
      <div className="cta-section">
        {mdDetails && (
          <div
            className="cta-details"
            dangerouslySetInnerHTML={{
              __html: mdDetails.html,
            }}
          />
        )}
        <Link to={ctaLink}>
          <button>{cta}</button>
        </Link>
      </div>
    </div>
  );
};

export const query = graphql`
  fragment AllCtaSection on CtaSection {
    cta
    ctaLink
    mdDetails {
      html
    }
  }
`;
