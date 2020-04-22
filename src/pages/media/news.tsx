import React from "react";
import { Layout } from "components";

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
// interface IndexPageProps {
// data: {
//   site: {
//     siteMetadata: {
//       title: string;
//     };
//   };
// };
// }

const NewsIndexPage: React.FC = () => (
  <Layout>
    <h1>News index</h1>
  </Layout>
);

export default NewsIndexPage;

// export const pageQuery = graphql`
//   query IndexQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `;
