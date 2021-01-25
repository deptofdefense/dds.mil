import React from "react";
import clsx from "clsx";
import Img from "gatsby-image";
import { SectionBase } from "types";
import { useDefaultHeroImage } from "hooks";
import { Video } from "components";

export interface HeroSectionVideoData extends SectionBase {
  type: "heroVideo";
  title?: string;
  cta?: string;
  heroImage?: {
    childImageSharp: {
      fluid: any;
    };
  };
}

export const HeroSectionVideo: React.FC<HeroSectionVideoData> = ({
  title,
  cta,
  heroImage,
}) => {
  const defaultHeroImage = useDefaultHeroImage();

  return (
    <div className="hero-video">
      <Img
        fluid={
          heroImage
            ? heroImage.childImageSharp.fluid
            : defaultHeroImage.childImageSharp.fluid
        }
      />
      <div className={clsx("hero-video-inner", { "hero-video-inner-expanded": cta })}>
      <div className="video">
          <Video
            videoSrcURL="https://player.vimeo.com/video/503904425?badge=0&amp;autopause=0&amp;quality=1080p"
            videoTitle = {title ? title : ""}
          />
      </div>
        
      </div>
    </div>
  );
};
