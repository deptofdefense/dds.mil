import { useStaticQuery, graphql } from "gatsby";

export const useDefaultHeroImage = () => {
  const { contentJson } = useStaticQuery(graphql`
    query {
      contentJson {
        defaultHeroImage {
          childImageSharp {
            fluid(maxWidth: 1440, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  `);

  return contentJson.defaultHeroImage;
};
