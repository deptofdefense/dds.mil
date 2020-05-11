import React from "react";
import clsx from "clsx";

interface Props {
  title: string;
  date: string;
  link: string;
  outlet?: string;
  className?: string;
}

export const NewsArticleItem: React.FC<Props> = ({
  title,
  date,
  link,
  outlet,
  className,
}) => {
  return (
    <div className="recent-media-list-item">
      <div className={clsx(className, "dds-news-item")}>
        <a href={link}>{title}</a>
        <div className="dds-post-date">
          {date}
          {outlet && ` • ${outlet}`}
        </div>
      </div>
    </div>
  );
};
