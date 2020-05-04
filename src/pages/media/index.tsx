import React from "react";
import { graphql } from "gatsby";
import {
  Layout,
  SidebarSection,
  Sidebar,
  ConnectCallout,
  RecentBlogPosts,
  RecentAnnouncements,
} from "components";
import { Helmet } from "react-helmet";
import { CtaSection, CtaSectionQueryResult } from "sections/CtaSection";
import { HeroSection, HeroSectionQueryResult } from "sections/HeroSection";
import {
  FeaturedMediaSection,
  FeaturedMediaSectionQueryResult,
} from "sections/FeaturedMediaSection";

interface Props {
  data: {
    pagesJson: {
      navigation: {
        primaryLink: string;
        subnav: {
          text: string;
          link: string;
        }[];
      };
      heroSection: HeroSectionQueryResult;
      featuredMediaSection: FeaturedMediaSectionQueryResult;
      ctaSection: CtaSectionQueryResult;
    };
  };
}

const MediaIndexPage: React.FC<Props> = ({ data: { pagesJson } }) => {
  const { subnav, primaryLink } = pagesJson.navigation;
  const { heroSection, ctaSection, featuredMediaSection } = pagesJson;

  const sideMenu = [{ link: primaryLink, text: "Overview " }, ...subnav];

  return (
    <Layout>
      <Helmet>
        <title>Media</title>
      </Helmet>
      <HeroSection result={heroSection} />
      <SidebarSection
        sidebar={
          <>
            <Sidebar menu={sideMenu} />
            <ConnectCallout />
          </>
        }
      >
        <FeaturedMediaSection result={featuredMediaSection} />
        <RecentBlogPosts />
        <RecentAnnouncements />
      </SidebarSection>
      <CtaSection accent result={ctaSection} />
    </Layout>
  );
};

export default MediaIndexPage;

export const pageQuery = graphql`
  query MediaIndexPageQuery {
    pagesJson(fields: { slug: { eq: "mediaPage" } }) {
      navigation {
        primaryLink
        subnav {
          text
          link
        }
      }
      heroSection {
        ...AllHeroSection
      }
      featuredMediaSection {
        ...AllFeaturedMediaSection
      }
      ctaSection {
        ...AllCtaSection
      }
    }
  }
`;
