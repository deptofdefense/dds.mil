import React from "react";
import CMS from "netlify-cms-app";
import "../styles/index.scss";

import { BlogPostCard, NewsArticleCard, AnnouncementCard } from "components";

interface Props {
  entry: {
    getIn<T extends any = string>(arg0: string[]): T;
  };
}

const CMSBlog: React.FC<Props> = ({ entry }) => {
  const props = {
    title: entry.getIn(["data", "title"]),
    summary: entry.getIn(["data", "summary"]),
    date: "just now",
    body: entry.getIn(["data", "body"]),
    slug: "tmp-slug",
    photo: "",
  };

  return (
    <div className="margin-top-9 margin-x-auto maxw-mobile-lg">
      <BlogPostCard {...props} />
    </div>
  );
};

const CMSNewsArticle: React.FC<Props> = ({ entry }) => {
  const props = {
    title: entry.getIn(["data", "title"]),
    summary: entry.getIn(["data", "summary"]),
    date: "just now",
    link: entry.getIn(["data", "link"]),
    slug: "tmp-slug",
    photo: "",
  };

  return (
    <div className="margin-top-9 margin-x-auto maxw-mobile-lg">
      <NewsArticleCard {...props} />
    </div>
  );
};

const CMSAnnouncement: React.FC<Props> = ({ entry }) => {
  const props = {
    title: entry.getIn(["data", "title"]),
    summary: entry.getIn(["data", "summary"]),
    date: "just now",
    slug: "tmp-slug",
  };

  return (
    <div className="margin-top-9 margin-x-auto maxw-mobile-lg">
      <AnnouncementCard {...props} />
    </div>
  );
};

CMS.registerPreviewTemplate("posts", CMSBlog);
CMS.registerPreviewTemplate("news", CMSNewsArticle);
CMS.registerPreviewTemplate("announcements", CMSAnnouncement);
