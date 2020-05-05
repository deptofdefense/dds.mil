import { NavigationField, SidenavField } from "./navigation";
import { CmsCollection } from "netlify-cms-core";
import { SectionList } from "./sections";

export const PagesCollection: CmsCollection = {
  name: "pages",
  label: "Pages",
  label_singular: "Page",
  description: "Static Pages",
  folder: "content/pages",
  slug: "{{slug}}",
  summary: "{{navigation.link}}",
  identifier_field: "navigation.link",
  create: true,
  editor: { preview: false },
  extension: "json",
  format: "json",
  fields: [NavigationField, SectionList, SidenavField],
};
