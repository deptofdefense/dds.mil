import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

interface Props {
  title?: string;
  description?: string;
}

export const SEO: React.FC<Props> = ({ title, description, children }) => {
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
      title={title}
      titleTemplate={`%s | ${siteTitle}`}
    >
      <meta name="description" content={description ?? seoDescription} />
      <meta name="og:title" content={title ?? siteTitle} />
      <meta name="og:description" content={description ?? seoDescription} />
      {children}
    </Helmet>
  );
};
