import React from "react";
import Img from "gatsby-image/withIEPolyfill";
import clsx from "clsx";
import { SectionBase } from "types";

export interface ImgCollectionData extends SectionBase {
  type: "imageCollection";
  spacing?: boolean;
  images: {
    altText: string;
    image: {
      childImageSharp: {
        fluid: any;
      };
    };
  }[];
}

export const ImgCollection: React.FC<ImgCollectionData> = ({
  images,
  spacing,
}) => {
  return (
    <div className={clsx("img-section", { "img-section-spacing": spacing })}>
      {images.map(({ image, altText }, idx) => (
        <Img fluid={image.childImageSharp.fluid} key={idx} alt={altText} />
      ))}
    </div>
  );
};
