import React from "react";
import clsx from "clsx";
import { Link } from "gatsby";

interface Props {
  title: string;
  date: string;
  slug: string;
  className?: string;
}

export const RecentAnnouncement: React.FC<Props> = ({
  title,
  date,
  slug,
  className,
}) => {
  return (
    <div className="recent-media-list-item">
      <div className={clsx(className, "dds-announcement")}>
        <Link to={`/media/announcements/${slug}`} className="dds-post-heading">
          {title}
        </Link>
        <div className="dds-post-date">{date}</div>
      </div>
    </div>
  );
};
