import React from "react";
import {
  hiddenTypeField,
  entrySummaryFormat,
  TitleField,
  PublishDateField,
  EntryCoverImageField,
  EntrySummaryField,
  EntryBodyField,
} from "./fields";
import CMS from "netlify-cms-app";
import { CmsCollection } from "netlify-cms-core";
import { PreviewProps } from "./types";
import { formatDate } from "./utils";
import { MediaCard, Section } from "components";

export const PostCollection: CmsCollection = {
  name: "posts",
  label: "Blog Posts",
  label_singular: "Blog Post",
  description: "Blog Posts from the DDS team.",
  folder: "content/posts",
  slug: "{{year}}-{{month}}-{{slug}}",
  summary: entrySummaryFormat,
  create: true,
  fields: [
    hiddenTypeField("blog"),
    TitleField,
    PublishDateField,
    EntryCoverImageField,
    EntrySummaryField,
    EntryBodyField,
  ],
};

const BlogPostPreview: React.FC<PreviewProps> = ({
  entry,
  widgetFor,
  getAsset,
}) => {
  const image = entry.getIn(["data", "image"]);
  const imgSrc = getAsset(image).toString();
  const props = {
    title: entry.getIn(["data", "title"]),
    link: entry.getIn(["data", "link"]),
    summary: entry.getIn(["data", "summary"]),
    date: formatDate(entry.getIn(["data", "date"])),
    imgSrc,
  };

  return (
    <>
      <div className="maxw-mobile-lg margin-top-7 margin-x-auto">
        <MediaCard {...props} />
      </div>
      <hr className="margin-y-5 width-full" />
      <Section className="media-page-section">
        <img src={imgSrc} />
        <div className="markdown-body">{widgetFor("body")}</div>
      </Section>
    </>
  );
};

CMS.registerPreviewTemplate("posts", BlogPostPreview);
