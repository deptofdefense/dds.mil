import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

interface Props {
  title?: string;
}

export const SEO: React.FC<Props> = ({ title, children }) => {
  const data = useStaticQuery(graphql`
    query {
      contentJson(fields: { slug: { eq: "settings" } }) {
        seoDescription
        siteTitle
      }
    }
  `);

  const { siteTitle, seoDescription } = data.contentJson;

  return (
    <Helmet
      defaultTitle={siteTitle}
      htmlAttributes={{
        lang: "en",
      }}
      titleTemplate={`%s | ${siteTitle}`}
    >
      <meta name="description" content={seoDescription} />
      <meta name="og:title" content={siteTitle} />
      <meta name="og:description" content={seoDescription} />
      {children}
    </Helmet>
  );
};
