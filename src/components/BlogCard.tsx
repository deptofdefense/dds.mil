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
}

export const BlogCard: React.FC<Props> = ({
  title,
  slug,
  summary,
  date,
  imgFluid,
  imgSrc,
}) => {
  return (
    <Card className="dds-blog-card">
      {imgFluid && <Img fluid={imgFluid} />}
      {imgSrc && <img src={imgSrc} />}
      <div className="dds-blog-card-content">
        <div>{date}</div>
        <Link to={slug}>
          <h3>{title}</h3>
        </Link>
        <p>{summary}</p>
        <Link to={slug}>READ MORE</Link>
      </div>
    </Card>
  );
};
