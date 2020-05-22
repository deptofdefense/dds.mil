import React from "react";

export const onRenderBody = ({ setPostBodyComponents }) => {
  if (process.env.NODE_ENV !== `production`) {
    return null;
  }
  const dapSrc = `https://dap.digitalgov.gov/Universal-Federated-Analytics-Min.js?agency=DOD`;
  return setPostBodyComponents([<script src={dapSrc} id="_fed_an_ua_tag" />]);
};
