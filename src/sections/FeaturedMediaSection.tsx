import React from "react";
import clsx from "clsx";
import { Section } from "components";
import { graphql } from "gatsby";
import Img from "gatsby-image";

export type FeaturedMediaSectionQueryResult = {
  img: {
    childImageSharp: {
      fluid: any;
    };
  };
  mdDescription: {
    html: string;
  };
};

interface Props {
  result: FeaturedMediaSectionQueryResult;
}

export const FeaturedMediaSection: React.FC<Props> = ({
  result: {
    mdDescription,
    img: { childImageSharp },
  },
}) => {
  return (
    <Section>
      <div
        className={clsx("featured-media-section", {
          "image-only": !mdDescription,
        })}
      >
        <Img fluid={childImageSharp.fluid} />
        {mdDescription && (
          <div
            className="featured-media-description"
            dangerouslySetInnerHTML={{
              __html: mdDescription.html,
            }}
          />
        )}
      </div>
    </Section>
  );
};

export const query = graphql`
  fragment AllFeaturedMediaSection on FeaturedMediaSection {
    img {
      childImageSharp {
        fluid(maxWidth: 1300) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    mdDescription {
      html
    }
  }
`;
