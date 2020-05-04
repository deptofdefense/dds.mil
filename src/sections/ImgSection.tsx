import React from "react";
import Img from "gatsby-image/withIEPolyfill";
import { SectionBase } from "types";

export interface ImgCollectionData extends SectionBase {
  type: "imageCollection";
  images: {
    altText: string;
    image: {
      childImageSharp: {
        fluid: any;
      };
    };
  }[];
}

export const ImgCollection: React.FC<ImgCollectionData> = ({ images }) => {
  return (
    <div className="img-section">
      {images.map(({ image, altText }, idx) => (
        <Img fluid={image.childImageSharp.fluid} key={idx} alt={altText} />
      ))}
    </div>
  );
};
