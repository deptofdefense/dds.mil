import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const FooterLink: React.FC<JSX.IntrinsicElements["a"]> = ({
  children,
  ...rest
}) => (
  <a
    className="display-block font-ui-3xs text-no-underline hover:text-underline text-primary-darker margin-bottom-1 text-center"
    {...rest}
  >
    {children}
  </a>
);

export const Footer: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo-desktop-full.png" }) {
        childImageSharp {
          fluid(maxWidth: 320, maxHeight: 320) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div className="bg-primary-lighter width-full padding-5">
      <div className="grid-container">
        <div className="grid-row">
          <div className="grid-col-12 desktop:grid-col-6 grid-row flex-align-center margin-bottom-4 desktop:margin-bottom-2 desktop:flex-justify-start">
            <div className="grid-col-12 desktop:grid-col-auto flex-justify">
              <div className="width-10 tablet:width-15 margin-x-auto">
                <Img fluid={data.file.childImageSharp.fluid} />
              </div>
            </div>
            <p className="grid-col-12 desktop:grid-col-auto text-primary-dark margin-left-2 text-bold text-center desktop:text-left">
              Powered by Defense Digital Service.
            </p>
          </div>
          <div className="grid-col-12 desktop:grid-col-6 grid-row">
            <div className="grid-col-12 tablet:grid-col-6">
              <FooterLink href="https://www.defense.gov/">
                About the DoD
              </FooterLink>
              <FooterLink href="https://www.foia.gov/">FOIA</FooterLink>
              <FooterLink href="https://www.defense.gov//Resources/DOD-Information-Quality-Guidelines/">
                Information Quality
              </FooterLink>
              <FooterLink href="https://www.nlrb.gov/reports/regulatory-reports-and-notices/no-fear-act">
                No FEAR Act
              </FooterLink>
              <FooterLink href="https://open.defense.gov">
                Open Government
              </FooterLink>
              <FooterLink href="https://www.esd.whs.mil/DD/plainlanguage/">
                Plain Writing Act
              </FooterLink>
              <FooterLink href="https://dodcio.defense.gov/DoDSection508/Std_Stmt.aspx">
                Accessibility/Section 508
              </FooterLink>
            </div>
            <div className="grid-col-12 tablet:grid-col-6">
              <FooterLink href="https://www.usa.gov/">USA.gov</FooterLink>
              <FooterLink href="http://defense.gov/privacy">
                Privacy Program
              </FooterLink>
              <FooterLink href="mailto:contact@dds.mil">Contact Us</FooterLink>
              <FooterLink href="https://ddsfedramp.gov1.qualtrics.com/jfe/form/SV_bxxqiW4rZGi8VM1 ">
                Send Feedback
              </FooterLink>
              <p className="text-base text-center font-sans-2xs">
                &copy; 2020 All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
