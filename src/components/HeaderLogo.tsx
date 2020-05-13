import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Link from "gatsby-link";

export const HeaderLogo: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "dds-wings-only.svg" }) {
        childInlineSvg {
          rawSvg
        }
      }
    }
  `);

  const { rawSvg } = data.file.childInlineSvg;

  return (
    <div className="usa-logo" id="extended-logo">
      <div className="usa-logo__text">
        <Link
          to="/"
          aria-label="Home"
          className="dds-header-home-link"
          tabIndex={0}
        >
          <div className="display-flex flex-row flex-align-center dds-header-home">
            <div
              className="dds-header-image"
              dangerouslySetInnerHTML={{ __html: rawSvg }}
            />
            <div className="display-flex flex-column margin-left-1  flex-no-wrap">
              <div className="text-bold text-ls-1">DEFENSE</div>
              <div>
                <span className="text-semibold">DIGITAL&nbsp;</span>
                <span className="text-light">SERVICE</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
