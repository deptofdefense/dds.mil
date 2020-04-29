import React from "react";
import { Link, graphql } from "gatsby";
import clsx from "clsx";
import Img from "gatsby-image";

export interface HeroSectionQueryResult {
  title?: string;
  cta?: string;
  ctaLink?: string;
  img: {
    childImageSharp: {
      fluid: any;
    };
  };
}

interface Props {
  result: HeroSectionQueryResult;
}

export const HeroSection: React.FC<Props> = ({
  result: { title, cta, ctaLink, img },
}) => {
  return (
    <div className="hero">
      <Img fluid={img.childImageSharp.fluid} />
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

export const query = graphql`
  fragment AllHeroSection on HeroSection {
    cta
    ctaLink
    title
    img {
      childImageSharp {
        fluid(maxWidth: 1440, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
