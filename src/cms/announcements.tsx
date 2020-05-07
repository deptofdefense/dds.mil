import {
  hiddenTypeField,
  entrySummaryFormat,
  TitleField,
  PublishDateField,
  EntryCoverImageField,
  EntrySummaryField,
  EntryBodyField,
} from "./fields";
import { CmsCollection } from "netlify-cms-core";

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
