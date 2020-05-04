import React from "react";
import clsx from "clsx";
import { CtaButton, Section } from "components";
import { Link, graphql } from "gatsby";

export type CtaSectionQueryResult = {
  ctaLink: string;
  cta: string;
  mdDetails?: {
    html: string;
  };
};

interface Props {
  accent?: boolean;
  result: CtaSectionQueryResult;
}

export const CtaSection: React.FC<Props> = ({
  accent,
  result: { ctaLink, cta, mdDetails },
}) => {
  return (
    <Section accentBase={accent}>
      <div
        className={clsx("cta-section", {
          "has-accent": accent,
        })}
      >
        {mdDetails && (
          <div
            className="cta-details"
            dangerouslySetInnerHTML={{
              __html: mdDetails.html,
            }}
          />
        )}
        <Link to={ctaLink}>
          <CtaButton>{cta}</CtaButton>
        </Link>
      </div>
    </Section>
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
