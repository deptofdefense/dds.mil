import React from "react";
import clsx from "clsx";
import { SectionBase } from "types";
import { Section } from "components";
import Img from "gatsby-image";

export interface FeaturedMediaSectionData extends SectionBase {
  type: "featuredMedia";
  altText?: string;
  image: {
    childImageSharp: {
      fluid: any;
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
        <Img fluid={image.childImageSharp.fluid} alt={altText} />
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
