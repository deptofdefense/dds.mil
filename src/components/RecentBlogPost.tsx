import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import { Card } from "components";
import { FaChevronRight } from "react-icons/fa";

interface Props {
  imgFluid?: any;
  imgSrc?: string;
  title: string;
  summary: string;
  date: string;
  className: string;
  slug: string;
}

export const RecentBlogPost: React.FC<Props> = ({
  imgFluid,
  imgSrc,
  title,
  summary,
  date,
  slug,
  className,
}) => {
  return (
    <Card className={className}>
      {imgFluid && <Img fluid={imgFluid} />}
      {imgSrc && <img src={imgSrc} />}
      <div className="dds-post-body">
        <Link to={`/media/blog/${slug}`} className="dds-post-heading">
          {title}
        </Link>
        <div className="dds-post-date">{date}</div>
        <p>{summary}</p>
        <Link to={`/media/blog/${slug}`} className="dds-post-read-now">
          READ NOW <FaChevronRight />
        </Link>
      </div>
    </Card>
  );
};
