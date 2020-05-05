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

export const PostCollection: CmsCollection = {
  name: "posts",
  label: "Blog Posts",
  label_singular: "Blog Post",
  description: "Blog Posts from the DDS team.",
  folder: "content/posts",
  slug: "{{year}}-{{month}}-{{slug}}",
  summary: entrySummaryFormat,
  create: true,
  editor: { preview: false },
  fields: [
    hiddenTypeField("post"),
    TitleField,
    PublishDateField,
    EntryCoverImageField,
    EntrySummaryField,
    EntryBodyField,
  ],
};
