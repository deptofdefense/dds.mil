import React from "react";
import clsx from "clsx";
import Img from "gatsby-image";
import { SectionBase } from "types";
import { useDefaultHeroImage } from "hooks";
import { ConditionalLink } from "components";

export interface HeroSectionData extends SectionBase {
  type: "hero";
  title?: string;
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
        {title && (
          <div className="hero-card">
            <h1>{title}</h1>
            {cta && (
              <ConditionalLink to={ctaLink!}>
                <button tabIndex={-1} className="hero-card-cta">
                  {cta}
                </button>
              </ConditionalLink>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
