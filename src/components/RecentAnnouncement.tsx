import React from "react";
import clsx from "clsx";
import { ConditionalLink as Link } from "components";

interface Props {
  title: string;
  date: string;
  slug: string;
  className?: string;
  externalLink?: string;
}

export const RecentAnnouncement: React.FC<Props> = ({
  title,
  date,
  slug,
  className,
  externalLink,
}) => {
  return (
    <div className="recent-media-list-item">
      <div className={clsx(className, "dds-announcement")}>
        <Link
          to={externalLink ?? `/media/announcements/${slug}`}
          className="dds-post-heading"
        >
          {title}
        </Link>
        <div className="dds-post-date">{date}</div>
      </div>
    </div>
  );
};
