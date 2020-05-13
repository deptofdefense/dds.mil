import { useStaticQuery, graphql } from "gatsby";

type PostNode = {
  frontmatter: {
    title: string;
    image: {
      childImageSharp: {
        fluid: any;
      };
    };
    summary: string;
    date: string;
  };
  fields: {
    slug: string;
  };
};

export const useRecentBlogPosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "blog" } } }
        sort: { fields: frontmatter___date, order: DESC }
        limit: 3
      ) {
        nodes {
          frontmatter {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 1440, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            summary
            date(formatString: "MMM DD, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  `);

  const posts: PostNode[] = data.allMarkdownRemark.nodes;
  return posts;
};
