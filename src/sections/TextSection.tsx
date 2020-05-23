import React from "react";
import { SectionBase } from "types";
import { CtaButton, Section, ConditionalLink } from "components";
import clsx from "clsx";

export interface TextSectionData extends SectionBase {
  type: "textWithCallout";
  mdMain: {
    html: string;
  };
  mdCallout: {
    html: string;
  };
  alignByText?: boolean;
  cta?: string;
  ctaLink?: string;
}

export const TextSection: React.FC<TextSectionData> = ({
  mdMain,
  mdCallout,
  alignByText,
  cta,
  ctaLink,
}) => {
  return (
    <Section className="text-info-section">
      <div
        className="text-info-section-primary markdown-body"
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
          <ConditionalLink className="padding-x-2" to={ctaLink!}>
            <CtaButton className="margin-top-4 width-full">{cta}</CtaButton>
          </ConditionalLink>
        )}
      </div>
    </Section>
  );
};
