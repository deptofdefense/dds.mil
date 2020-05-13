import { useStaticQuery, graphql } from "gatsby";

type NavigationNode = {
  link: string;
  text: string;
  subnav?: {
    link: string;
    text: string;
  }[];
};

type QueryResult = {
  allPagesJson: {
    nodes: {
      navigation: NavigationNode;
    }[];
  };
  contentJson: {
    searchgov: {
      affiliate: string;
      endpoint: string;
    };
  };
};

export const useHeaderData = () => {
  const data: QueryResult = useStaticQuery(graphql`
    query {
      allPagesJson(
        sort: { order: ASC, fields: navigation___navOrder }
        filter: { navigation: { text: { ne: null } } }
      ) {
        nodes {
          navigation {
            text
            link
            subnav {
              text
              link
            }
          }
        }
      }
      contentJson {
        searchgov {
          affiliate
          endpoint
          accessKey
        }
      }
    }
  `);

  return {
    searchgov: data.contentJson.searchgov,
    navigation: data.allPagesJson.nodes.map(({ navigation }) => navigation),
  };
};
