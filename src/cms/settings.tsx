import { CmsCollection } from "netlify-cms-core";
import { PatchedField } from "./types";

const SettingsFields: PatchedField[] = [
  {
    label: "Global Title",
    name: "siteTitle",
    widget: "string",
    hint:
      "Default title. Other titles preceed this title (e.g. other title | this title)",
  },
  {
    label: "SEO Description",
    name: "seoDescription",
    widget: "string",
    hint:
      "Default meta description for search engines if not specified elsewhere",
  },
  {
    label: "Pagination Size",
    name: "pageSize",
    widget: "number",
    min: 1,
  },
  {
    label: "Search.gov Settings",
    name: "searchgov",
    widget: "object",
    fields: [
      {
        label: "Affiliate",
        name: "affiliate",
        widget: "string",
      },
      {
        label: "Access Key",
        name: "accessKey",
        widget: "string",
      },
      {
        label: "Endpoint",
        name: "endpoint",
        widget: "string",
      },
    ],
  },
];

export const SettingsCollection: CmsCollection = {
  name: "settings",
  label: "Site Settings",
  description: "Settings to control SEO, page size, etc.",
  editor: { preview: false },
  files: [
    {
      name: "general",
      label: "General Settings",
      file: "content/settings.json",
      fields: SettingsFields,
    },
  ],
};
