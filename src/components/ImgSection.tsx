import React from "react";
import Img from "gatsby-image";

interface Props {
  images: {
    altText: string;
    image: {
      childImageSharp: {
        fluid: any;
      };
    };
  }[];
}

export const ImgSection: React.FC<Props> = ({ images }) => {
  return (
    <div className="img-section">
      {images.map(({ image, altText }, idx) => (
        <Img fluid={image.childImageSharp.fluid} key={idx} alt={altText} />
      ))}
    </div>
  );
};
