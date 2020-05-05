import { CmsCollection, CmsField } from 'netlify-cms-core';


export type Patch<T> = T & {
  [key: string]: any;
}

export type PatchedField = Patch<CmsField>;
