import CMS from "netlify-cms-app";
import { CmsCollection, CmsField, CmsBackend } from "netlify-cms-core";

type Patch<T> = T & {
  // netlify-cms types are kind of a mess right now
  [key: string]: any;
};

const backend: Patch<CmsBackend> = {
  name: "github",
  branch: "v2-master",
  site_domain: "dds.mil",
  repo: "deptofdefense/dds.mil",
};

const entrySummaryFormat = "{{year}}-{{month}} -- {{title}}";

const hiddenTypeField = (x: string): Patch<CmsField> => ({
  label: "type",
  name: "Type",
  widget: "hidden",
  default: x,
});

const TitleField: CmsField = {
  label: "Title",
  name: "title",
  widget: "string",
};

const PublishDateField: Patch<CmsField> = {
  label: "Publish Date",
  name: "date",
  widget: "datetime",
  hint: "This field determines the order of the entries when listing",
};

const EntrySummaryField: Patch<CmsField> = {
  label: "Summary",
  name: "summary",
  widget: "string",
  hint: "Description shown in the shorter card version of the entry",
};

const EntryCoverImageField: Patch<CmsField> = {
  label: "Cover Image",
  name: "cover",
  widget: "image",
  required: false,
};

const EntryBodyField: CmsField = {
  label: "Body",
  name: "body",
  widget: "markdown",
};

const CTAField: Patch<CmsField> = {
  label: "Call to action",
  name: "cta",
  widget: "string",
};

const CTALinkField: Patch<CmsField> = {
  label: "Call to action link",
  name: "ctaLink",
  widget: "string",
  hint:
    "This should be an internal link beginning with a '/'. Support for external links will be included soon.",
};

const AltTextField: Patch<CmsField> = {
  label: "AltText",
  name: "altText",
  widget: "string",
  hint: "Description of the image for screen readers / accessibility.",
};

const HeroSectionFields: Patch<CmsField> = {
  label: "Hero Section",
  name: "heroSection",
  widget: "object",
  collapsed: true,
  fields: [
    {
      label: "Hero Image",
      name: "img",
      widget: "image",
      hint:
        "Image should be high resolution with an aspect ratio appropriate for the Hero Image",
    },
    {
      label: "Title",
      name: "title",
      widget: "string",
      required: false,
      hint:
        "If a title is included, it will be rendered with a blue background overlayed on the hero image",
    },
    {
      ...CTAField,
      required: false,
      hint:
        "If a call to action is included, the call to action link is required and the blue hero overlay will be expanded. The aspect ratio of the hero image should account for the larger height.",
    },
    { ...CTALinkField, required: false },
  ],
};

const TextInfoSectionFields: Patch<CmsField> = {
  label: "Text Info and Callout Section",
  name: "textSection",
  widget: "object",
  collapsed: true,
  fields: [
    {
      label: "Main (left) section",
      name: "mdMain",
      widget: "markdown",
    },
    {
      label: "Call Out (right) section",
      name: "mdCallout",
      widget: "markdown",
      hint:
        "Use header levels 1 and 2 to control the size of the text. Note, headers may look different in the editor for now.",
    },
    {
      label: "Align By Text",
      name: "alignByText",
      widget: "boolean",
      required: false,
      hint:
        "Align the callout section to the main section be the start of the text rather than the border.",
    },
    {
      ...CTAField,
      required: false,
      hint:
        "If included, the call-to-action link is required and a themed button will appear at the bottom of the call out section.",
    },
    { ...CTALinkField, required: false },
  ],
};

const IconSectionFields: Patch<CmsField> = {
  label: "Icon Section",
  name: "iconSection",
  widget: "object",
  fields: [
    {
      ...TitleField,
      required: false,
      hint: "If included, show title above the actual icons.",
    },
    {
      label: "Icons",
      name: "icons",
      widget: "list",
      fields: [
        {
          label: "heading",
          widget: "string",
          name: "heading",
          hint: "Heading to desplay next to the icon",
        },
        {
          label: "Details",
          name: "details",
          widget: "string",
          required: false,
          hint:
            "If included, a paragraph of further details related to this section.",
        },
        {
          label: "Icon",
          name: "icon",
          widget: "image",
          hint:
            "PNG or SVG format. SVG format has slight performance advantage.",
        },
        { ...CTAField, required: false },
        { ...CTALinkField, required: false },
      ],
    },
  ],
};

const CallToActionSectionFields: Patch<CmsField> = {
  label: "Call to Action Section",
  name: "ctaSection",
  widget: "object",
  collapsed: true,
  fields: [
    {
      label: "Details (left column)",
      name: "mdDetails",
      widget: "markdown",
    },
    { ...CTAField, required: false },
    { ...CTALinkField, required: false },
  ],
};

const ImageCollectionSectionFields: Patch<CmsField> = {
  label: "Image Collection Section",
  name: "imgSection",
  widget: "list",
  fields: [
    {
      label: "Image",
      widget: "image",
      name: "image",
      hint:
        "Image should have a high enough resolution and appropriate aspect ration for desktop and mobile devices.",
    },
    { ...AltTextField, required: false },
  ],
};

const FeatureImageSectionFields: Patch<CmsField> = {
  label: "Featured Image Section",
  name: "featureImgSection",
  widget: "object",
  fields: [
    {
      label: "Image",
      widget: "image",
      name: "image",
    },
    { ...AltTextField, required: false },
  ],
};

const announcementCollection: CmsCollection = {
  name: "announcements",
  label: "Announcements",
  label_singular: "Announcement",
  description: "General announcements from the DDS Team.",
  folder: "content/announcements",
  slug: "{{year}}-{{month}}-{{slug}}",
  summary: entrySummaryFormat,
  create: true,
  editor: { preview: false },
  fields: [
    hiddenTypeField("announcement"),
    TitleField,
    PublishDateField,
    EntryCoverImageField,
    EntrySummaryField,
    EntryBodyField,
  ],
};

const postCollection: CmsCollection = {
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

const teamCollection: CmsCollection = {
  name: "team",
  label: "Team Members",
  label_singular: "Team Member",
  description: "DDS Team members.",
  folder: "content/team",
  slug: "{{year}}-{{month}}-{{slug}}",
  summary: "{{name}}",
  identifier_field: "name",
  create: true,
  editor: { preview: false },
  fields: [
    hiddenTypeField("teamMember"),
    {
      label: "Name",
      name: "name",
      widget: "string",
    },
    {
      label: "Joined",
      name: "joined",
      widget: "datetime",
    },
    {
      label: "Bio",
      name: "bio",
      widget: "string",
    },
    {
      label: "Photo",
      name: "photo",
      widget: "image",
      required: false,
    },
  ],
};

const newsCollection: CmsCollection = {
  name: "news",
  label: "DDS in the News",
  label_singular: "News Article",
  description: "References to articles posted about DDS.",
  folder: "content/news",
  slug: "{{year}}-{{month}}-{{slug}}",
  summary: entrySummaryFormat,
  create: true,
  editor: { preview: false },
  fields: [
    hiddenTypeField("newsArticle"),
    TitleField,
    PublishDateField,
    EntrySummaryField,
    {
      label: "External Link",
      name: "link",
      widget: "string",
    },
  ],
};

CMS.init({
  config: {
    backend,
    site_url: "https://v2-master--dds-mil.netlify.app/",
    display_url: "DDS.mil",
    logo_url: "/img/logo-cms.png",
    publish_mode: "editorial_workflow",
    media_folder: "media",
    public_folder: "",
    collections: [
      announcementCollection,
      postCollection,
      teamCollection,
      newsCollection,
      {
        name: "pages",
        label: "Content Pages",
        editor: { preview: false },
        files: [
          {
            label: "Home Page",
            name: "homePage",
            file: "content/pages/homePage.json",
            fields: [
              HeroSectionFields,
              TextInfoSectionFields,
              IconSectionFields,
              CallToActionSectionFields,
            ],
          },
          {
            label: "About Page",
            name: "aboutPage",
            file: "content/pages/aboutPage.json",
            fields: [
              HeroSectionFields,
              TextInfoSectionFields,
              IconSectionFields,
              ImageCollectionSectionFields,
              CallToActionSectionFields,
            ],
          },
          {
            label: "Team Page",
            name: "teamPage",
            file: "content/pages/teamPage.json",
            fields: [
              HeroSectionFields,
              TextInfoSectionFields,
              FeatureImageSectionFields,
            ],
          },
          {
            label: "Our Work Main Page",
            name: "portfolioPage",
            file: "content/pages/portfolioPage.json",
            fields: [HeroSectionFields, TextInfoSectionFields],
          },
        ],
      },
      {
        name: "settings",
        label: "Site Settings",
        editor: { preview: false },
        files: [
          {
            name: "general",
            label: "General Settings",
            file: "content/settings.json",
            fields: [
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
                label: "Navigation Links",
                name: "navbar",
                widget: "list",
                fields: [
                  {
                    label: "Display Text",
                    name: "text",
                    widget: "string",
                  },
                  {
                    label: "Link to",
                    name: "link",
                    widget: "string",
                    hint:
                      "This should be an internal link beginning with a '/'. Support for external links will be included soon.",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
});
