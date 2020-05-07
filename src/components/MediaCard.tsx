import React from "react";
import Img from "gatsby-image";
import Link from "gatsby-link";
import { Card } from "components";

interface Props {
  title: string;
  link: string;
  summary: string;
  date: string;
  imgFluid?: any;
  imgSrc?: string;
  altText?: string;
}

export const MediaCard: React.FC<Props> = ({
  title,
  link,
  summary,
  date,
  imgFluid,
  imgSrc,
  altText,
}) => {
  return (
    <Card className="dds-blog-card">
      {imgFluid && <Img fluid={imgFluid} />}
      {imgSrc && <img src={imgSrc} />}
      <div className="dds-post-body">
        <Link to={link} className="dds-post-heading">
          {title}
        </Link>
        <div className="dds-post-date">{date}</div>
        <p>{summary}</p>
        <Link className="dds-post-read-now" to={link}>
          READ MORE
        </Link>
      </div>
    </Card>
  );
};
