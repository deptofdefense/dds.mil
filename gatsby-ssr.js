import React from "react";
import { siteMetadata } from "./gatsby-config";

export const onRenderBody = ({ setPostBodyComponents }) => {
  if (process.env.NODE_ENV !== `production`) {
    return null;
  }
  const { dapAgency } = siteMetadata;
  const dapSrc = `https://dap.digitalgov.gov/Universal-Federated-Analytics-Min.js?agency=${dapAgency}`;
  return setPostBodyComponents([<script src={dapSrc} id="_fed_an_ua_tag" />]);
};
