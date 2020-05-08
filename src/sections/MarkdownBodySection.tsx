import React from "react";
import { Section } from "components";
import { SectionBase } from "types";

interface Props {
  mdMain: {
    html: string;
  };
}

export interface MarkdownBodySectionData extends SectionBase, Props {
  type: "markdownBody";
}

export const MarkdownBodySection: React.FC<MarkdownBodySectionData> = ({
  mdMain: { html },
}) => {
  return (
    <Section>
      <div
        className="markdown-body"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Section>
  );
};
