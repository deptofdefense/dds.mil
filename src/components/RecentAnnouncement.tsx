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
        <Link to={`/news/${slug}`} className="dds-post-heading">
          {title}
        </Link>
        <div className="text-light font-body-xs margin-bottom-1">{date}</div>
      </div>
    </div>
  );
};
