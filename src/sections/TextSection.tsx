import React from "react";
import { graphql } from "gatsby";

export type TextSectionQueryResult = {
  mdMain: {
    html: string;
  };
  mdCallout: {
    html: string;
  };
};

interface TextSectionProps {
  result: TextSectionQueryResult;
}

export const TextSection: React.FC<TextSectionProps> = ({
  result: { mdMain, mdCallout },
}) => {
  return (
    <div className="text-info">
      <div
        className="text-info-primary"
        dangerouslySetInnerHTML={{
          __html: mdMain.html,
        }}
      />
      <div
        className="text-info-callout"
        dangerouslySetInnerHTML={{
          __html: mdCallout.html,
        }}
      />
    </div>
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
  }
`;
