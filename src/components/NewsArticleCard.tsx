import React from "react";
import { Link } from "gatsby";
import { Card } from "components";

interface Props {
  title: string;
  photo: string | null;
  summary: string;
  date: string;
  link: string;
}

export const NewsArticleCard: React.FC<Props> = ({
  title,
  photo,
  summary,
  date,
  link,
}) => {
  return (
    <Card>
      <h3 className="margin-bottom-0 font-body-md">
        <a
          href={link}
          className="text-black text-no-underline hover:text-underline"
        >
          {title}
        </a>
      </h3>
      <span className="text-light font-body-xs">{date}</span>
      <p>{summary}</p>
    </Card>
  );
};
