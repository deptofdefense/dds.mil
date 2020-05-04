import React from "react";
import { CtaButton, Section } from "components";
import { graphql, Link } from "gatsby";
import clsx from "clsx";

export type TextSectionQueryResult = {
  mdMain: {
    html: string;
  };
  mdCallout: {
    html: string;
  };
  alignByText?: boolean;
  cta?: string;
  ctaLink?: string;
};

interface TextSectionProps {
  result: TextSectionQueryResult;
}

export const TextSection: React.FC<TextSectionProps> = ({
  result: { mdMain, mdCallout, alignByText, cta, ctaLink },
}) => {
  return (
    <Section className="text-info-section">
      <div
        className="text-info-section-primary"
        dangerouslySetInnerHTML={{
          __html: mdMain.html,
        }}
      />
      <div
        className={clsx("text-info-section-callout", {
          "force-down": !alignByText,
        })}
      >
        <div
          className="text-info-section-callout-content"
          dangerouslySetInnerHTML={{
            __html: mdCallout.html,
          }}
        />
        {cta && (
          <Link className="padding-x-2" to={ctaLink!}>
            <CtaButton className="margin-top-4 width-full">{cta}</CtaButton>
          </Link>
        )}
      </div>
    </Section>
  );
};

export const query = graphql`
  fragment AllTextSection on TextSection {
    mdMain {
      html
    }
    mdCallout {
      html
    }
    alignByText
    cta
    ctaLink
  }
`;
