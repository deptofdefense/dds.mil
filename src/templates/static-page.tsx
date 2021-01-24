import React, { useMemo } from "react";
import { graphql } from "gatsby";
import { Layout, SEO, Sidebar, SidebarSection } from "components";
import {
  HeroSection,
  HeroSectionData,
  TextSection,
  TextSectionData,
  IconSection,
  IconSectionData,
  CategoryListSection,
  CategoryListSectionData,
  CtaSection,
  CtaSectionData,
  ImgCollection,
  ImgCollectionData,
  FeaturedMediaSection,
  FeaturedMediaSectionData,
  RecentAnnouncements,
  RecentAnnouncementsSectionData,
  RecentBlogPosts,
  RecentBlogPostsSectionData,
  MarkdownBodySection,
  MarkdownBodySectionData,
  InterestForm,
  InterestFormData,
  RecentTweets,
  RecentTweetsSectionData,
  RawHTMLSection,
  RawHTMLSectionData,
} from "sections";

type SectionData =
  | HeroSectionData
  | TextSectionData
  | IconSectionData
  | CategoryListSectionData
  | CtaSectionData
  | ImgCollectionData
  | FeaturedMediaSectionData
  | RecentAnnouncementsSectionData
  | RecentBlogPostsSectionData
  | MarkdownBodySectionData
  | InterestFormData
  | RecentTweetsSectionData
  | RawHTMLSectionData;

type SidenavData = {
  includeSidenav: boolean;
  wrapSectionFirst: number;
  wrapSectionLast: number;
  menu: {
    text: string;
    link: string;
    partiallyActive?: boolean;
  }[];
  includeSocial: boolean;
};

interface Props {
  pageContext: {
    link: string;
  };
  data: {
    pagesJson: {
      sections: SectionData[];
      sidenav?: SidenavData;
      navigation: {
        title: string;
        metaDescription: string;
      };
    };
  };
}

const SectionSwitch: React.FC<{ section: SectionData }> = ({ section }) => {
  switch (section.type) {
    case "hero":
      return <HeroSection {...section} />;
    case "textWithCallout":
      return <TextSection {...section} />;
    case "iconSection":
      return <IconSection {...section} />;
    case "categoryList":
      return <CategoryListSection {...section} />;
    case "callToAction":
      return <CtaSection {...section} />;
    case "imageCollection":
      return <ImgCollection {...section} />;
    case "featuredMedia":
      return <FeaturedMediaSection {...section} />;
    case "recentAnnouncements":
      return <RecentAnnouncements {...section} />;
    case "recentBlogPosts":
      return <RecentBlogPosts {...section} />;
    case "markdownBody":
      return <MarkdownBodySection {...section} />;
    case "interestForm":
      return <InterestForm {...section} />;
    case "recentTweets":
      return <RecentTweets {...section} />;
    case "rawHTML":
      return <RawHTMLSection {...section} />;
    default:
      throw new Error(`Invalid section type encountered`);
  }
};

const StaticPage: React.FC<Props> = ({
  data: {
    pagesJson: { sections, sidenav, navigation },
  },
  pageContext: { link },
}) => {
  const splitSections = useMemo(() => {
    const hasSidebar = Boolean(sidenav?.wrapSectionFirst);
    const sidebarFirst = sidenav?.wrapSectionFirst;
    const sidebarLast = sidenav?.wrapSectionLast;
    const beforeNav: SectionData[] = hasSidebar
      ? sections.slice(0, sidebarFirst! - 1)
      : [];

    const inNav: SectionData[] = hasSidebar
      ? sections.slice(sidebarFirst! - 1, sidebarLast)
      : [];

    const afterNav: SectionData[] = hasSidebar
      ? sections.slice(sidebarLast)
      : sections;
    return {
      beforeNav,
      inNav,
      afterNav,
    };
  }, [sections]);

  return (
    <Layout>
      <SEO
        title={navigation.title}
        description={navigation.metaDescription}
        url={link}
      />
      {splitSections.beforeNav.map((section, idx) => (
        <SectionSwitch section={section} key={idx} />
      ))}
      {sidenav && (
        <SidebarSection sidebar={<Sidebar {...sidenav} />}>
          {splitSections.inNav.map((section, idx) => (
            <SectionSwitch section={section} key={idx} />
          ))}
        </SidebarSection>
      )}
      {splitSections.afterNav.map((section, idx) => (
        <SectionSwitch section={section} key={idx} />
      ))}
    </Layout>
  );
};

export default StaticPage;

export const query = graphql`
  query staticPageQuery($link: String!) {
    pagesJson(navigation: { link: { eq: $link } }) {
      navigation {
        title
        metaDescription
      }
      sidenav {
        includeSidenav
        wrapSectionFirst
        wrapSectionLast
        menu {
          text
          link
        }
        includeSocial
      }
      sections {
        type
        title
        subtitle
        cta
        ctaLink
        numberTitles
        accent
        spacing
        tweetLimit
        mdMain {
          html
        }
        mdCallout {
          html
        }
        heroImage {
          childImageSharp {
            fluid(maxWidth: 1440, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        images {
          altText
          image {
            childImageSharp {
              fluid(maxHeight: 460) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        image {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
          childInlineSvg {
            rawSvg
          }
        }
        altText
        icons {
          icon {
            childInlineSvg {
              rawSvg
            }
            childImageSharp {
              fluid(maxHeight: 70, maxWidth: 100, fit: INSIDE) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
          cta
          ctaLink
          details
        }
        categories {
          title
          details
          cta
          ctaLink
        }
      }
    }
  }
`;
