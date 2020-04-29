import React from "react";
import { Link, graphql } from "gatsby";
import { FaChevronRight } from "react-icons/fa";

export type CategoryListSectionQueryResult = {
  numberHeadings?: boolean;
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
  const { numberHeadings } = result;

  return (
    <div className="dds-container">
      <div className="category-list-section">
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
    </div>
  );
};

export const query = graphql`
  fragment AllCategoryListSection on CategoryListSection {
    numberHeadings
    categories {
      heading
      details
      cta
      ctaLink
    }
  }
`;
