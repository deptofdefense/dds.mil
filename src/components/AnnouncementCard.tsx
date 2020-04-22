import React from "react";
import { Link } from "gatsby";
import { Card } from "components";

interface Props {
  title: string;
  cover?: string | null;
  summary: string;
  slug: string;
  date: string;
}

export const AnnouncementCard: React.FC<Props> = ({
  title,
  summary,
  date,
  slug,
}) => {
  return (
    <Card>
      <h3 className="margin-bottom-0 font-body-md">
        <Link
          to={`/news/${slug}`}
          className="text-black text-no-underline hover:text-underline"
        >
          {title}
        </Link>
      </h3>
      <span className="text-light font-body-xs">{date}</span>
      <p>{summary}</p>
    </Card>
  );
};
