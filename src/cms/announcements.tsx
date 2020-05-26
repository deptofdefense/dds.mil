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

export const AnnouncementCollection: CmsCollection = {
  name: "announcements",
  label: "Announcements",
  label_singular: "Announcement",
  description: "General announcements from the DDS Team.",
  folder: "content/announcements",
  slug: "{{year}}-{{month}}-{{slug}}",
  summary: entrySummaryFormat,
  create: true,
  editor: { preview: true },
  fields: [
    hiddenTypeField("announcements"),
    TitleField,
    PublishDateField,
    EntryCoverImageField,
    EntrySummaryField,
    EntryBodyField,
  ],
};

const AnnouncementPreview: React.FC<PreviewProps> = ({
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
      <div className="maxw-tablet margin-top-7 margin-x-auto">
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

CMS.registerPreviewTemplate("announcements", AnnouncementPreview);
