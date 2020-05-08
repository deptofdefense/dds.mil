import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { RecentAnnouncement } from "components";
import { SectionBase } from "types";
import { Section } from "components";

export interface RecentAnnouncementsSectionData extends SectionBase {
  type: "recentAnnouncements";
}

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

export const RecentAnnouncements: React.FC<RecentAnnouncementsSectionData> = () => {
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

  return (
    <Section>
      <h3>Recent Announcements:</h3>
      <div className="recent-media-list">
        {announcements.map((announcement) => (
          <RecentAnnouncement
            {...announcement.frontmatter}
            slug={announcement.fields.slug}
            key={announcement.fields.slug}
          />
        ))}
      </div>
    </Section>
  );
};
