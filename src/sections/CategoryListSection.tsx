import React from "react";
import { Section } from "components";
import { Link, graphql } from "gatsby";
import { FaChevronRight } from "react-icons/fa";

export type CategoryListSectionQueryResult = {
  numberHeadings?: boolean;
  sectionHeading?: string;
  categories: {
    heading: string;
    details: string;
    cta: string;
    ctaLink: string;
  }[];
};

export interface Props {
  result: CategoryListSectionQueryResult;
}

export const CategoryListSection: React.FC<Props> = ({ result }) => {
  const { numberHeadings, sectionHeading } = result;

  return (
    <Section>
      <div className="category-list-section">
        {sectionHeading && <h2>{sectionHeading}</h2>}
        {result.categories.map(({ heading, cta, ctaLink, details }, idx) => (
          <div className={"category-list-section-item"} key={heading}>
            <h3>
              {numberHeadings && <small>{idx + 1}.</small>}
              {heading}
            </h3>
            <p>{details}</p>
            {cta && (
              <Link to={ctaLink}>
                {cta} <FaChevronRight fontSize={13} />
              </Link>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};

export const query = graphql`
  fragment AllCategoryListSection on CategoryListSection {
    numberHeadings
    sectionHeading
    categories {
      heading
      details
      cta
      ctaLink
    }
  }
`;
