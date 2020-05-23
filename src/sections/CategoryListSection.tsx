import React from "react";
import { SectionBase } from "types";
import { Section, ConditionalLink } from "components";
import { FaChevronRight } from "react-icons/fa";

export interface CategoryListSectionData extends SectionBase {
  type: "categoryList";
  numberTitles?: boolean;
  title?: string;
  categories: {
    title: string;
    details: string;
    cta: string;
    ctaLink: string;
  }[];
}

export const CategoryListSection: React.FC<CategoryListSectionData> = ({
  numberTitles,
  title,
  categories,
}) => {
  return (
    <Section>
      <div className="category-list-section">
        {title && <h2>{title}</h2>}
        {categories.map(({ title, cta, ctaLink, details }, idx) => (
          <div className={"category-list-section-item"} key={title}>
            <h3>
              {numberTitles && <small>{idx + 1}.</small>}
              {title}
            </h3>
            <p>{details}</p>
            {cta && (
              <ConditionalLink to={ctaLink}>
                {cta} <FaChevronRight fontSize={13} />
              </ConditionalLink>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};
