import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

interface Props {
  url: string;
  title?: string;
  description?: string;
  image?: {
    src: string;
    width: number;
    height: number;
  };
}

const rootUrl = process.env.GATSBY_ROOT_URL
  ? process.env.GATSBY_ROOT_URL.replace(/\/$/, "")
  : "https://dds.mil";

export const SEO: React.FC<Props> = ({
  title,
  description,
  url,
  image,
  children,
}) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
        }
      }
      contentJson(fields: { slug: { eq: "settings" } }) {
        seoDescription
        siteTitle
      }
      file(relativePath: { eq: "default-media-image.png" }) {
        childImageSharp {
          original {
            src
            width
            height
          }
        }
      }
    }
  `);

  const { siteTitle, seoDescription } = data.contentJson;
  const { original: defaultImg } = data.file.childImageSharp;
  const metaTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const { siteUrl } = data.site.siteMetadata;

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

      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={description ?? seoDescription} />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content={`${siteUrl}${image?.src ?? defaultImg.src}`}
      />
      <meta
        property="og:image:width"
        content={image?.width ?? defaultImg.width}
      />
      <meta
        property="og:image:height"
        content={image?.height ?? defaultImg.height}
      />
      <meta property="og:url" content={`${siteUrl}${url}`} />
      {children}
    </Helmet>
  );
};
