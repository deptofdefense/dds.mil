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
    PublishDateField,
    EntryCoverImageField,
    EntrySummaryField,
    EntryBodyField,
  ],
};
