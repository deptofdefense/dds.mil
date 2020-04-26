import React from "react";
import Img from "gatsby-image";

interface Props {
  images: {
    id: string;
    childImageSharp: {
      fluid: any;
    };
  }[];
}

export const ImgSection: React.FC<Props> = ({ images }) => {
  return (
    <div className="img-section">
      {/* <div className="img-section-inner"> */}
        {images.map(({ childImageSharp, id }) => (
          <Img fluid={childImageSharp.fluid} key={id} />
        ))}
      {/* </div> */}
    </div>
  );
};
