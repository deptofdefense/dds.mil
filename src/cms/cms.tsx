import "../styles/index.scss";
import CMS from "netlify-cms-app";
import { CmsBackend } from "netlify-cms-core";
import { Patch } from "./types";
import { PagesCollection } from "./pages";
import { AnnouncementCollection } from "./announcements";
import { PostCollection } from "./posts";
import { NewsArticleCollection } from "./news";
import { SettingsCollection } from "./settings";

const backend: Patch<CmsBackend> = {
  name: "github",
  branch: "master",
  site_domain: "dds.mil",
  repo: "deptofdefense/dds.mil",
  squash_merges: true,
};

CMS.init({
  config: {
    backend,
    site_url: "https://dds.mil/",
    display_url: "DDS.mil",
    logo_url: "/img/logo-cms.png",
    publish_mode: "editorial_workflow",
    media_folder: "media",
    public_folder: "../../media",
    collections: [
      PagesCollection,
      AnnouncementCollection,
      PostCollection,
      NewsArticleCollection,
      SettingsCollection,
    ],
  },
});
