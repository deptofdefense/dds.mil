import React from "react";
import { Section } from "components";
import { SectionBase } from "types";

interface Props {
  mdMain: {
    html: string;
  };
}

export interface RawHTMLSectionData extends SectionBase, Props {
  type: "rawHTML";
  mdMain: {
    html: string;
  };
}

export const RawHTMLSection: React.FC<RawHTMLSectionData> = ({
  mdMain: { html },
}) => {
  return (
    <div
      className="raw-html-section"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
