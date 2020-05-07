import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import { Layout, SEO } from "components";

interface Props {
  data: {
    contentJson: {
      searchgov: {
        accessKey: string;
        affiliate: string;
        endpoint: string;
      };
    };
  };
  location: {
    state: {
      search: string;
    };
  };
}

export const Search: React.FC<Props> = ({ data, location }) => {
  const { accessKey, affiliate, endpoint } = data.contentJson.searchgov;
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState(location.state.search ?? "");
  const [results, setResults] = useState([]);

  const fetchResults = async () => {
    console.log(query);
    const searchEndpoint = new URL(endpoint);
    searchEndpoint.searchParams.append("affiliate", affiliate);
    searchEndpoint.searchParams.append("access_key", accessKey);
    searchEndpoint.searchParams.append("query", query);
    setLoading(true);

    try {
      const res = await fetch(searchEndpoint.toString());
      if (!res.ok) {
        throw new Error();
      }
      const data = await res.json();
      console.log(data);
      setResults(data.web.results);
    } catch {
      setResults([]);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchResults();
  }, [query, accessKey, endpoint, affiliate]);

  return (
    <Layout>
      <SEO title="Search" />
    </Layout>
  );
};

export default Search;

export const query = graphql`
  query SearchPageQuery {
    contentJson {
      searchgov {
        affiliate
        endpoint
        accessKey
      }
    }
  }
`;
