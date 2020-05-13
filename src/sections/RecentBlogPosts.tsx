import React from "react";
import { SectionBase } from "types";
import { useRecentBlogPosts } from "hooks";
import { RecentBlogPost, Section } from "components";

export interface RecentBlogPostsSectionData extends SectionBase {
  type: "recentBlogPosts";
}

export const RecentBlogPosts: React.FC<RecentBlogPostsSectionData> = () => {
  const posts = useRecentBlogPosts();

  return (
    <Section>
      <h3>Recent Blog Posts:</h3>
      <div className="recent-media-list">
        {posts.map((post) => (
          <RecentBlogPost
            className="recent-media-list-item"
            {...post.frontmatter}
            imgFluid={post.frontmatter.image.childImageSharp.fluid}
            slug={post.fields.slug}
            key={post.fields.slug}
          />
        ))}
      </div>
    </Section>
  );
};
