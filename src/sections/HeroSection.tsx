import React from "react";
import { Link } from "gatsby";
import clsx from "clsx";
import Img from "gatsby-image";
import { SectionBase } from "types";

export interface HeroSectionData extends SectionBase {
  type: "hero";
  title?: string;
  cta?: string;
  ctaLink?: string;
  heroImage: {
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
  return (
    <div className="hero">
      <Img fluid={heroImage.childImageSharp.fluid} />
      <div className={clsx("hero-inner", { "hero-inner-expanded": cta })}>
        {title && (
          <div className="hero-card">
            <h1>{title}</h1>
            {cta && (
              <Link to={ctaLink!}>
                <button className="hero-card-cta">{cta}</button>
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
