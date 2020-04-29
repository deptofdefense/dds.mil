import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image/withIEPolyfill";

export type FeatureImgSectionQueryResult = {
  altText: string;
  image: {
    childImageSharp: {
      fluid: any;
    };
  };
};

interface Props {
  result: FeatureImgSectionQueryResult;
}

export const FeatureImgSection: React.FC<Props> = ({
  result: { image, altText },
}) => {
  return (
    <div className="dds-container">
      <div className="img-feature-section">
        <Img fluid={image.childImageSharp.fluid} alt={altText} />
      </div>
    </div>
  );
};

export const query = graphql`
  fragment AllFeatureImgSection on FeatureImgSection {
    altText
    image {
      childImageSharp {
        fluid(maxWidth: 1400, maxHeight: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
