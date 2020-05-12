import React from "react";
import {
  hiddenTypeField,
  entrySummaryFormat,
  TitleField,
  PublishDateField,
} from "./fields";
import CMS from "netlify-cms-app";
import { CmsCollection } from "netlify-cms-core";
import { PreviewProps } from "./types";
import { formatDate } from "./utils";
import { NewsArticleItem } from "components";

export const NewsArticleCollection: CmsCollection = {
  name: "news",
  label: "News Articles",
  label_singular: "News Article",
  description: "DDS in the News",
  folder: "content/news",
  slug: "{{year}}-{{month}}-{{slug}}",
  summary: entrySummaryFormat,
  create: true,
  editor: { preview: true },
  fields: [
    hiddenTypeField("news"),
    TitleField,
    {
      label: "Link",
      name: "link",
      widget: "string",
      hint: "Fully qualified link to the article (https://....)",
    },
    {
      label: "Outlet",
      name: "outlet",
      widget: "string",
      required: false,
    },
    PublishDateField,
  ],
};

const NewsArticlePreview: React.FC<PreviewProps> = ({ entry }) => {
  const props = {
    title: entry.getIn(["data", "title"]),
    link: entry.getIn(["data", "link"]),
    outlet: entry.getIn(["data", "outlet"]),
    date: formatDate(entry.getIn(["data", "date"])),
  };
  return (
    <div className="maxw-mobile-lg margin-x-auto margin-top-7">
      <NewsArticleItem {...props} />
    </div>
  );
};

CMS.registerPreviewTemplate("news", NewsArticlePreview);
