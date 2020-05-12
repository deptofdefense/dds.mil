import { CmsCollection, CmsField } from "netlify-cms-core";

export type Patch<T> = T & {
  [key: string]: any;
};

export type PatchedField = Patch<CmsField>;

export interface PreviewProps {
  entry: {
    getIn<T extends any = string>(arg0: string[]): T;
  };
  getAsset(arg0: any): string;
  widgetFor(arg0: string): any;
}
