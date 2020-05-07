import React from "react";
import { FaTwitter, FaLinkedin } from "react-icons/fa";

export const ConnectCallout: React.FC = () => {
  return (
    <div className="dds-connect-callout">
      <h3>Connect With Us:</h3>
      <div className="dds-connect-social-icons">
        <a href="https://twitter.com/defensedigital?lang=en">
          <FaTwitter />
          <span className="usa-sr-only">Defense Digital Service Twitter</span>
        </a>
        <a href="https://www.linkedin.com/company/defensedigitalservice">
          <FaLinkedin />
          <span className="usa-sr-only">Defense Digital Service LinkedIn</span>
        </a>
      </div>
      <h3>Press/Speaking Inquiries:</h3>
      <p>Email press@dds.mil</p>
    </div>
  );
};
