import React from "react";
import Img from "gatsby-image";
import Link from "gatsby-link";
import { Card } from "components";

interface Props {
  title: string;
  slug: string;
  summary: string;
  date: string;
  imgFluid?: any;
  imgSrc?: string;
  altText?: string;
}

export const BlogCard: React.FC<Props> = ({
  title,
  slug,
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
        <Link to={`/media/blog/${slug}`} className="dds-post-heading">
          {title}
        </Link>
        <div className="dds-post-date">{date}</div>
        <p>{summary}</p>
        <Link className="dds-post-read-now" to={`/media/blog/${slug}`}>
          READ MORE
        </Link>
      </div>
    </Card>
  );
};
