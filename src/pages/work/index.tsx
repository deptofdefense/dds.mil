import React from "react";
import { graphql } from "gatsby";
import { Layout } from "components";
import { Helmet } from "react-helmet";
import { HeroSection, HeroSectionQueryResult } from "sections/HeroSection";
import { TextSection, TextSectionQueryResult } from "sections/TextSection";
import {
  CategoryListSection,
  CategoryListSectionQueryResult,
} from "sections/CategoryListSection";

interface Props {
  data: {
    pagesJson: {
      heroSection: HeroSectionQueryResult;
      textSection: TextSectionQueryResult;
      categoryListSection: CategoryListSectionQueryResult;
    };
  };
}

const WorkPage: React.FC<Props> = ({
  data: {
    pagesJson: { heroSection, textSection, categoryListSection },
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>Our Work</title>
      </Helmet>
      <HeroSection result={heroSection} />
      <TextSection result={textSection} />
      <CategoryListSection result={categoryListSection} />
    </Layout>
  );
};

export default WorkPage;

export const pageQuery = graphql`
  query WorkPageQuery {
    pagesJson(fields: { slug: { eq: "workPage" } }) {
      heroSection {
        ...AllHeroSection
      }
      textSection {
        ...AllTextSection
      }
      categoryListSection {
        ...AllCategoryListSection
      }
    }
  }
`;
