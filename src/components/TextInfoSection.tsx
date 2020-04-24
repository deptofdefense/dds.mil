import React from "react";

interface Props {
  mainParagraph: string;
  callOut: string;
}

export const TextInfoSection: React.FC<Props> = ({
  mainParagraph,
  callOut,
}) => {
  return (
    <div className="text-info">
      <div
        className="text-info-primary"
        dangerouslySetInnerHTML={{
          __html: mainParagraph,
        }}
      />
      <div
        className="text-info-callout"
        dangerouslySetInnerHTML={{
          __html: callOut,
        }}
      />
    </div>
  );
};
