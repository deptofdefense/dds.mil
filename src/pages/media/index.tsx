import React from "react";
import { Link } from "gatsby";
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

const MediaIndexPage: React.FC = () => (
  <Layout>
    <h1>Media index</h1>
    <div>
      <Link to="/media/blog">Blog</Link>
    </div>
    <div>
      <Link to="/media/news">News</Link>
    </div>
  </Layout>
);

export default MediaIndexPage;

// export const pageQuery = graphql`
//   query IndexQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `;
