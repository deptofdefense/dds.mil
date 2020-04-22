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

const AnnouncementsIndexPage: React.FC = () => (
  <Layout>
    <h1>Announcements index</h1>
  </Layout>
);

export default AnnouncementsIndexPage;

// export const pageQuery = graphql`
//   query IndexQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `;
