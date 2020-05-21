import React from "react";
import { SectionBase } from "types";
import { Section } from "components";

export interface RecentTweetsSectionData extends SectionBase {
  type: "recentTweets";
  tweetLimit?: number;
}

export const RecentTweets: React.FC<RecentTweetsSectionData> = ({
  tweetLimit,
}) => {
  return (
    <Section>
      <div className="recent-tweets-wrapper">
        <a
          className="twitter-timeline"
          href="https://twitter.com/DefenseDigital?ref_src=twsrc%5Etfw"
          data-tweet-limit={tweetLimit ?? 3}
        >
          Tweets by DefenseDigital
        </a>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charSet="utf-8"
        ></script>
      </div>
    </Section>
  );
};
