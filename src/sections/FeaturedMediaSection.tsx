import React from "react";
import clsx from "clsx";
import { SectionBase } from "types";
import { Section } from "components";
import Img from "gatsby-image";

export interface FeaturedMediaSectionData extends SectionBase {
  type: "featuredMedia";
  altText?: string;
  image: {
    childImageSharp?: {
      fluid: any;
    };
    childInlineSvg?: {
      rawSvg: any;
    };
  };
  mdMain?: {
    html: string;
  };
}

export const FeaturedMediaSection: React.FC<FeaturedMediaSectionData> = ({
  image,
  altText,
  mdMain,
}) => {
  return (
    <Section>
      <div
        className={clsx("featured-media-section", {
          "image-only": !mdMain,
        })}
      >
        {image.childImageSharp ? (
          <Img fluid={image.childImageSharp.fluid} alt={altText} />
        ) : (
          <div
            className="gatsby-image-wrapper"
            dangerouslySetInnerHTML={{ __html: image.childInlineSvg!.rawSvg }}
          />
        )}
        {mdMain && (
          <div
            className="featured-media-description"
            dangerouslySetInnerHTML={{
              __html: mdMain.html,
            }}
          />
        )}
      </div>
    </Section>
  );
};
