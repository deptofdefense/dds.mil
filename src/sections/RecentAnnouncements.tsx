import React from "react";
import { RecentAnnouncement } from "components";
import { useRecentAnnouncements } from "hooks";
import { SectionBase } from "types";
import { Section } from "components";

export interface RecentAnnouncementsSectionData extends SectionBase {
  type: "recentAnnouncements";
}

export const RecentAnnouncements: React.FC<RecentAnnouncementsSectionData> = () => {
  const announcements = useRecentAnnouncements();

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
