import React from "react";
import { Link } from "gatsby";
import clsx from "clsx";
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
      <Img
        fluid={heroImgFluid}
        className={clsx("hero-img", { "with-hero-card": heroCTA })}
      />
      <div className={clsx("hero-inner", { "with-hero-card": heroCTA })}>
        {heroCTA && (
          <div className="grid-row">
            <div className="hero-card">
              <h1 className="hero-card-header">{heroTitle}</h1>
              <Link to={heroCTALink!}>
                <button className="hero-card-cta">{heroCTA}</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
