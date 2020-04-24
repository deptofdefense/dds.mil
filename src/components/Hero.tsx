import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";

interface Props {
  heroImgFluid: any;
  heroTitle?: string;
  heroCTA?: string;
  heroCTALink?: string;
}

export const Hero: React.FC<Props> = ({
  heroImgFluid,
  heroTitle,
  heroCTA,
  heroCTALink,
}) => {
  return (
    <>
      <Img fluid={heroImgFluid} className="hero-img" />
      {heroCTA && (
        <div className="hero-inner">
          <div className="grid-row">
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
