import { PatchedField } from "./types";
import {
  IconField,
  TitleField,
  CTAField,
  CTALinkField,
  DetailsField,
  MdMainField,
  MdCalloutField,
  ImageField,
  AltTextField,
} from "./fields";

const HeroSectionFields: PatchedField[] = [
  {
    label: "Image",
    name: "heroImage",
    widget: "image",
    hint:
      "Should be of high quality and appropriate aspect ratio for the hero image.",
  },
  {
    ...TitleField,
    required: false,
    hint: "If included, render inside the image with a blue background.",
  },
  {
    ...CTAField,
    required: false,
    hint:
      "If included, the CTA Link is required and the hero image will be stretched to contain a larger card.",
  },
  { ...CTALinkField, required: false },
];

const TextWithCalloutSectionFields: PatchedField[] = [
  MdMainField,
  { ...MdCalloutField, required: false },
  { ...CTAField, required: false },
  { ...CTALinkField, required: false },
];

const CallToActionSectionFields: PatchedField[] = [
  MdMainField,
  CTAField,
  CTALinkField,
  {
    label: "Accent",
    name: "accent",
    widget: "boolean",
    required: false,
    default: false,
    hint:
      "Apply a light background to the entire section to make it stand out more",
  },
];

const MarkdownBodyFields: PatchedField[] = [MdMainField];

const IconSectionFields: PatchedField[] = [
  {
    label: "Icons",
    name: "icons",
    widget: "list",
    collapsed: true,
    create: true,
    delete: true,
    fields: [
      IconField,
      TitleField,
      { ...CTAField, required: false },
      { ...CTALinkField, required: false },
      DetailsField,
    ],
  },
];

const CategoryListSectionFields: PatchedField[] = [
  { ...TitleField, required: false },
  {
    label: "Number Titles",
    name: "numberTitles",
    widget: "boolean",
    required: false,
    default: true,
  },
  {
    label: "Categories",
    name: "categories",
    widget: "list",
    collapsed: true,
    create: true,
    delete: true,
    fields: [
      TitleField,
      DetailsField,
      { ...CTAField, required: false },
      { ...CTALinkField, required: false },
    ],
  },
];

const ImageCollectionFields: PatchedField[] = [
  {
    label: "Include Margin?",
    name: "spacing",
    widget: "boolean",
    required: false,
    default: false,
    hint: "Include spacing between the image colleciton and the section above.",
  },
  {
    label: "Images",
    name: "images",
    widget: "list",
    collapsed: true,
    create: true,
    delete: true,
    fields: [ImageField, AltTextField],
  },
];

const FeaturedMediaFields: PatchedField[] = [
  ImageField,
  { ...AltTextField, required: false },
  { ...MdMainField, required: false },
];

const RecentBlogPostsFields: PatchedField[] = [];
const RecentAnnouncementsFields: PatchedField[] = [];

export const SectionList: PatchedField = {
  label: "Sections",
  name: "sections",
  widget: "list",
  types: [
    {
      label: "Hero Section",
      name: "hero",
      fields: HeroSectionFields,
    },
    {
      label: "Text with Callout",
      name: "textWithCallout",
      fields: TextWithCalloutSectionFields,
    },
    {
      label: "Call to Action",
      name: "callToAction",
      fields: CallToActionSectionFields,
    },
    {
      label: "Free Text Section",
      name: "markdownBody",
      fields: MarkdownBodyFields,
    },
    {
      label: "Icon List",
      name: "iconSection",
      fields: IconSectionFields,
    },
    {
      label: "Category List",
      name: "categoryList",
      fields: CategoryListSectionFields,
    },
    {
      label: "Image Collection",
      name: "imageCollection",
      fields: ImageCollectionFields,
    },
    {
      label: "Featured Media",
      name: "featuredMedia",
      fields: FeaturedMediaFields,
    },
    {
      label: "Recent Blog Posts",
      name: "recentBlogPosts",
      fields: RecentBlogPostsFields,
    },
    {
      label: "Recent Announcements",
      name: "recentAnnouncements",
      fields: RecentAnnouncementsFields,
    },
  ],
};
