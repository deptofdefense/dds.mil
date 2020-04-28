import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

export type ImgSectionQueryResult = {
  altText: string;
  image: {
    childImageSharp: {
      fluid: any;
    };
  };
}[];

interface Props {
  result: ImgSectionQueryResult;
}

export const ImgSection: React.FC<Props> = ({ result }) => {
  return (
    <div className="dds-container">
      <div className="img-section">
        {result.map(({ image, altText }, idx) => (
          <Img fluid={image.childImageSharp.fluid} key={idx} alt={altText} />
        ))}
      </div>
    </div>
  );
};

export const query = graphql`
  fragment AllImgSection on ImageSection {
    altText
    image {
      childImageSharp {
        fluid(maxHeight: 460) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;