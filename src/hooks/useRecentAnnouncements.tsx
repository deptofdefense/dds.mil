import { useStaticQuery, graphql } from "gatsby";

type AnnouncementNode = {
  frontmatter: {
    title: string;
    summary: string;
    date: string;
  };
  fields: {
    slug: string;
  };
};

export const useRecentAnnouncements = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "announcements" } } }
        sort: { fields: frontmatter___date, order: DESC }
        limit: 2
      ) {
        nodes {
          frontmatter {
            title
            date(formatString: "MMM DD, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  `);

  const announcements: AnnouncementNode[] = data.allMarkdownRemark.nodes;
  return announcements;
};
