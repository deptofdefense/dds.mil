import React from "react";
import { SectionBase } from "types";
import { Section } from "components";
import { Link } from "gatsby";
import { FaChevronRight } from "react-icons/fa";

export interface CategoryListSectionData extends SectionBase {
  type: "categoryList";
  numberTitles?: boolean;
  sectionHeading?: string;
  categories: {
    title: string;
    details: string;
    cta: string;
    ctaLink: string;
  }[];
}

export const CategoryListSection: React.FC<CategoryListSectionData> = ({
  numberTitles,
  sectionHeading,
  categories,
}) => {
  return (
    <Section>
      <div className="category-list-section">
        {sectionHeading && <h2>{sectionHeading}</h2>}
        {categories.map(({ title, cta, ctaLink, details }, idx) => (
          <div className={"category-list-section-item"} key={title}>
            <h3>
              {numberTitles && <small>{idx + 1}.</small>}
              {title}
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
