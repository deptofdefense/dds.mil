import "./src/styles/index.scss";
import "uswds";

const env = process.env.NODE_ENV;
const ctx = process.env.CONTEXT || env;

export const onRouteUpdate = ({ location }) => {
  if (ctx !== "production" || !window.gas) {
    return null;
  }
  window.gas("send", "pageview", location.pathname);
};
