import React from "react";
import clsx from "clsx";
import Img from "gatsby-image";
import { SectionBase } from "types";
import { useDefaultHeroImage } from "hooks";
import { ConditionalLink, Video } from "components";

export interface HeroSectionData extends SectionBase {
  type: "hero";
  title?: string;
  subtitle?: string;
  cta?: string;
  ctaLink?: string;
  heroImage?: {
    childImageSharp: {
      fluid: any;
    };
  };
}

export const HeroSection: React.FC<HeroSectionData> = ({
  title,
  subtitle,
  cta,
  ctaLink,
  heroImage,
}) => {
  const defaultHeroImage = useDefaultHeroImage();

  return (
    <div className="hero">
      <Img
        fluid={
          heroImage
            ? heroImage.childImageSharp.fluid
            : defaultHeroImage.childImageSharp.fluid
        }
      />
      <div className={clsx("hero-inner", { "hero-inner-expanded": cta })}>
        {/* {title && (
          <div className="hero-card">
            <h1>{title}</h1>
            {subtitle && <h2>{subtitle}</h2>}
            {cta && (
              <ConditionalLink to={ctaLink!}>
                <button tabIndex={-1} className="hero-card-cta">
                  {cta}
                </button>
              </ConditionalLink>
            )}
          </div>
        )} */}
      <div className="video">
          <Video
            videoSrcURL="https://player.vimeo.com/video/503607244?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            videoTitle = {title ? title : ""}
          />
      </div>
        
      </div>
    </div>
  );
};
