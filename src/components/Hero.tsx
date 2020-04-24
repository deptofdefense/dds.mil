import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";

interface Props {
  heroImgFluid: any;
  includeCta: boolean;
  heroTitle?: string;
  heroCTA?: string;
  heroCTALink?: string;
}

export const Hero: React.FC<Props> = ({
  heroImgFluid,
  includeCta,
  heroTitle,
  heroCTA,
  heroCTALink,
}) => {
  return (
    <>
      <Img fluid={heroImgFluid} className="hero-img" />
      {includeCta && (
        <div className="hero-inner">
          <div className="grid-row height-full">
            <div className="hero-card">
              <h1 className="hero-card-header">{heroTitle}</h1>
              <Link to={heroCTALink!}>
                <button className="hero-card-cta">{heroCTA}</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
