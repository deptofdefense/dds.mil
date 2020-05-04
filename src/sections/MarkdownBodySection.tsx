import React from "react";
import { CtaButton } from "components";
import { graphql, Link } from "gatsby";
import clsx from "clsx";

export type MdBodySectionQueryResult = {
  mdMainBody: {
    html: string;
  };
};

interface Props {
  result: MdBodySectionQueryResult;
}

export const MarkdownBodySection: React.FC<Props> = ({
  result: { mdMainBody },
}) => {
  return (
    <div className="dds-container">
      <div
        className="markdown-body "
        dangerouslySetInnerHTML={{ __html: mdMainBody.html }}
      />
    </div>
  );
};

export const query = graphql`
  fragment AllMdBodySection on MdBodySection {
    mdMainBody {
      html
    }
  }
`;
