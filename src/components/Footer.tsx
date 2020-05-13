import React from "react";
import clsx from "clsx";
import { useStaticQuery, graphql } from "gatsby";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import Img from "gatsby-image/withIEPolyfill";

const FooterLink: React.FC<JSX.IntrinsicElements["a"]> = ({
  children,
  className,
  ...rest
}) => (
  <a
    className={clsx(
      className,
      "display-block font-ui-sm tablet:font-ui-3xs text-no-underline hover:text-underline text-white margin-bottom-2 tablet:margin-bottom-1"
    )}
    {...rest}
  >
    {children}
  </a>
);

const FooterSubheader: React.FC<JSX.IntrinsicElements["div"]> = ({
  children,
  ...rest
}) => (
  <div
    className="text-accent-cool margin-bottom-1 text-bold font-body-sm"
    {...rest}
  >
    {children}
  </div>
);

export const Footer: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "DOD-logo-footer.png" }) {
        childImageSharp {
          fluid(maxWidth: 327, maxHeight: 204) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div className="dds-container dds-footer">
      <div className="width-full padding-3 tablet:padding-5 maxw-widescreen">
        <div className="grid-row">
          <div className="grid-col-12 desktop:grid-col-6 grid-row flex-align-start margin-bottom-5  flex-justify-start">
            <div className="width-15 desktop:width-15">
              <Img loading="eager" fluid={data.file.childImageSharp.fluid} />
            </div>
            <div className="text-white margin-left-1 margin-y-0">
              <div className="text-thin font-body-lg">US</div>
              <div className="text-thin font-body-lg">DEPT OF</div>
              <div className="text-bold text-ls-1 font-body-lg">DEFENSE</div>
            </div>
          </div>
          <div className="grid-col-12 desktop:grid-col-6 grid-row grid-gap">
            <div className="grid-col-12 tablet:grid-col-4  order-last desktop:order-first">
              <FooterSubheader>Department of Defense</FooterSubheader>
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
              <FooterLink href="https://open.defense.gov/">
                Open Government
              </FooterLink>
              <FooterLink href="https://www.esd.whs.mil/DD/plainlanguage/">
                Plain Writing Act
              </FooterLink>
              <FooterLink href="https://www.usa.gov/">USA.gov</FooterLink>
              <FooterLink
                href="http://defense.gov/privacy"
                className="margin-bottom-3 desktop:margin-bottom-0"
              >
                Privacy Program
              </FooterLink>
            </div>
            <div className="grid-col-12 tablet:grid-col-4">
              <FooterSubheader>General Inquiries</FooterSubheader>
              <FooterLink
                href="mailto:feedback@dds.mil"
                className="margin-bottom-3"
              >
                feedback@dds.mil
              </FooterLink>

              <FooterSubheader>Press & Speaking Inquiries</FooterSubheader>
              <FooterLink
                href="mailto:press@dds.mil"
                className="margin-bottom-3"
              >
                press@dds.mil
              </FooterLink>

              <FooterSubheader>Job Inquiries</FooterSubheader>
              <FooterLink
                href="mailto:rebel@dds.mil"
                className="margin-bottom-3 desktop:margin-bottom-0"
              >
                rebel@dds.mil
              </FooterLink>
            </div>
            <div className="grid-col-12 tablet:grid-col-4 order-first desktop:order-last">
              <FooterSubheader>Connect With Us</FooterSubheader>
              <FooterLink
                href="https://twitter.com/defensedigital?lang=en"
                aria-label="Link to DDS Twitter"
                className="display-inline-block margin-right-2 margin-bottom-3 font-ui-md"
              >
                <FaTwitter />
                <span className="usa-sr-only">
                  Defense Digital Service Twitter
                </span>
              </FooterLink>
              <FooterLink
                href="https://www.linkedin.com/company/defensedigitalservice"
                className="display-inline-block margin-bottom-3 font-ui-md"
              >
                <FaLinkedin />
                <span className="usa-sr-only">
                  Defense Digital Service LinkedIn
                </span>
              </FooterLink>

              <FooterSubheader>Tech Resources</FooterSubheader>
              <FooterLink href="https://playbook.cio.gov/">
                Digital Services Playbook
              </FooterLink>
              <FooterLink href="https://designsystem.digital.gov/">
                U.S. Web Design Standards
              </FooterLink>
              <FooterLink
                href="https://playbook.cio.gov/techfar/"
                className="margin-bottom-3"
              >
                TechFAR Handbook
              </FooterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
