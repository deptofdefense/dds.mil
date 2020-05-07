import { PatchedField } from "./types";
import { TitleField, internalLinkHint } from "./fields";

const InternalLinkField: PatchedField = {
  label: "Internal Link",
  name: "link",
  widget: "string",
  hint: internalLinkHint,
};

const InternalLinkTextField: PatchedField = {
  label: "Display Text",
  name: "text",
  widget: "string",
  hint: "Each subnavigation item adds a line in the mobile navigation drawer",
};

const NavigationFields: PatchedField[] = [
  {
    label: "Navigation Order",
    name: "navOrder",
    widget: "number",
    min: 1,
    step: 1,
    required: false,
    hint:
      "If a top level text field is entered and a navbar link is created, this determines the order.",
  },
  {
    ...TitleField,
    required: false,
    label: "Title Tag",
    hint: "Overall title for this page. Should be unique.",
  },
  {
    label: "Meta Description",
    name: "metaDescription",
    hint: "Meta description for this page for SEO",
    widget: "string",
    required: false,
  },
  {
    label: "Internal Link",
    name: "link",
    required: true,
    hint: "This url for this page. Must be unique.",
  },
  {
    label: "Navbar Link Display Text",
    name: "text",
    widget: "string",
    required: false,
    hint:
      "If included, an entry for this page will be included in the navigation bar",
  },
  {
    label: "Sub-Navigation",
    name: "subnav",
    widget: "list",
    create: true,
    delete: true,
    fields: [InternalLinkTextField, InternalLinkField],
  },
];

export const NavigationField: PatchedField = {
  label: "Navigation",
  name: "navigation",
  widget: "object",
  collapsed: true,
  fields: NavigationFields,
};

const SidenavFields: PatchedField[] = [
  {
    label: "Include Sidebar",
    name: "includeSidenav",
    widget: "boolean",
    required: false,
    default: false,
    hint:
      "Wrap a portion of the sections in this page with a side-navigation menu",
  },
  {
    label: "Start wrapping at section",
    name: "wrapSectionFirst",
    widget: "number",
    valueType: "int",
    required: false,
    default: 1,
    min: 1,
    step: 1,
    hint:
      "The index of the first section to include in the wrapped side-navigation section",
  },
  {
    label: "Finish wrapping at section",
    name: "wrapSectionLast",
    widget: "number",
    valueType: "int",
    required: false,
    default: 1,
    min: 1,
    step: 1,
    hint:
      "The index of the last section to include in the wrapped side-navigation section",
  },
  {
    label: "Side Navigation Menu",
    name: "menu",
    widget: "list",
    create: true,
    delete: true,
    fields: [InternalLinkTextField, InternalLinkField],
  },
  {
    label: "Include Contact Us Callout",
    name: "includeSocial",
    widget: "boolean",
    required: false,
    default: false,
    hint: "Include blue contact us callout in the side-nav beneath the menu",
  },
];

export const SidenavField: PatchedField = {
  label: "Sidebar",
  name: "sidenav",
  widget: "object",
  collapsed: true,
  fields: SidenavFields,
};
