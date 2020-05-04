import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { RecentAnnouncement } from "components";
import { Section, SectionProps } from "./Section";

type AnnouncementNode = {
  frontmatter: {
    title: string;
    summary: string;
    date: string;
  };
  slug: string;
};

export const RecentAnnouncements: React.FC<SectionProps> = (props) => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "announcement" } } }
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

  return (
    <Section {...props}>
      <h3>Recent Announcements:</h3>
      <div className="recent-media-list">
        {announcements.map((post) => (
          <RecentAnnouncement {...post.frontmatter} slug={post.slug} />
        ))}
      </div>
    </Section>
  );
};
