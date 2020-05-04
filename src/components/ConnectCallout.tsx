import React from "react";
import { FaTwitter, FaLinkedin } from "react-icons/fa";

export const ConnectCallout: React.FC = () => {
  return (
    <div className="dds-connect-callout">
      <h3>Connect with us:</h3>
      <div className="dds-connect-social-icons">
        <a href="https://twitter.com/defensedigital?lang=en">
          <FaTwitter />
        </a>
        <a href="https://www.linkedin.com/company/defensedigitalservice">
          <FaLinkedin />
        </a>
      </div>
      <h3>Press/Speaking inqueries:</h3>
      <p>Email press@dds.mil</p>
    </div>
  );
};
