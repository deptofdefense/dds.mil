import React from "react";
import { Section } from "components";
import { SectionBase } from "types";

export interface MarkdownBodySectionData extends SectionBase {
  type: "markdownBody";
  mdMain: {
    html: string;
  };
}

export const MarkdownBodySection: React.FC<MarkdownBodySectionData> = ({
  mdMain: { html },
}) => {
  return (
    <Section>
      <div
        className="markdown-body usa-prose"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Section>
  );
};
