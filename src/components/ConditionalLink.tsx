import React from "react";
import { Link as GatsbyLink, GatsbyLinkProps } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-analytics";

export const ConditionalLink: React.FC<Omit<GatsbyLinkProps<any>, "ref">> = ({
  children,
  to,
  activeClassName,
  partiallyActive,
  ...other
}) => {
  const internal = /^\/(?!\/)/.test(to);
  if (internal) {
    return (
      <GatsbyLink
        to={to}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...other}
      >
        {children}
      </GatsbyLink>
    );
  }
  return (
    <OutboundLink href={to} {...other}>
      {children}
    </OutboundLink>
  );
};
