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
    <>
      <Img
        fluid={img.childImageSharp.fluid}
        className={clsx("hero-img", { "with-hero-card": cta })}
      />
      <div className={clsx("hero-inner", { "with-hero-card": cta })}>
        {cta && (
          <div className="grid-row">
            <div className="hero-card">
              <h1 className="hero-card-header">{title}</h1>
              <Link to={ctaLink!}>
                <button className="hero-card-cta">{cta}</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
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
