import { PatchedField } from "./types";

export const internalLinkHint =
  "For an internal link this should start with a '/', for external links use the full url starting with 'https://'";

export const entrySummaryFormat = "{{year}}-{{month}} -- {{title}}";

export const hiddenTypeField = (value: string): PatchedField => ({
  label: "type",
  name: "type",
  widget: "hidden",
  default: value,
});

export const hiddenNavOrderField = (value: number): PatchedField => ({
  label: "navOrder",
  name: "navOrder",
  widget: "hidden",
  default: value,
});

export const TitleField: PatchedField = {
  label: "Title",
  name: "title",
  widget: "string",
};

export const PublishDateField: PatchedField = {
  label: "Publish Date",
  name: "date",
  widget: "datetime",
  hint: "This field determines the order of the entries when listing",
};

export const EntrySummaryField: PatchedField = {
  label: "Summary",
  name: "summary",
  widget: "string",
  hint: "Description shown in the shorter card version of the entry",
};

export const EntryCoverImageField: PatchedField = {
  label: "Image",
  name: "image",
  widget: "image",
  required: true,
  allow_multiple: false,
  default: "default-media-image.png",
  hint: "PNG or JPG only",
};

export const EntryBodyField: PatchedField = {
  label: "Body",
  name: "body",
  widget: "markdown",
  default: "",
};

export const CTAField: PatchedField = {
  label: "Call to action",
  name: "cta",
  widget: "string",
};

export const CTALinkField: PatchedField = {
  label: "Call to action link",
  name: "ctaLink",
  widget: "string",
  hint: internalLinkHint,
};

export const ImageField: PatchedField = {
  label: "Image",
  name: "image",
  widget: "image",
};

export const AltTextField: PatchedField = {
  label: "Alt Text",
  name: "altText",
  widget: "string",
  hint: "Description of the image for screen readers and accessibility.",
};

export const IconField: PatchedField = {
  label: "Icon",
  name: "icon",
  widget: "image",
  hint: "PNG or SVG format. SVG format has slight performance advantage.",
};

export const DetailsField: PatchedField = {
  label: "Details",
  name: "details",
  widget: "string",
};

export const MdMainField: PatchedField = {
  label: "Main Body Content",
  name: "mdMain",
  widget: "markdown",
};

export const MdCalloutField: PatchedField = {
  label: "Callout Content",
  name: "mdCallout",
  widget: "markdown",
};
