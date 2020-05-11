import React from "react";
import { Link } from "gatsby";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Props {
  currentPage: number;
  numPages: number;
  basePage: string;
}

export const Paginator: React.FC<Props> = ({
  currentPage,
  numPages,
  basePage,
}) => {
  console.log(currentPage, numPages, basePage);

  let prevPage = null;
  if (currentPage > 2) {
    prevPage = `${basePage}/${currentPage - 1}`;
  } else if (currentPage > 1) {
    prevPage = basePage;
  }

  let nextPage = null;
  if (currentPage < numPages) {
    nextPage = `${basePage}/${currentPage + 1}`;
  }

  return (
    <div className="paginator">
      {prevPage && (
        <Link to={prevPage}>
          <FaChevronLeft /> Previous
        </Link>
      )}
      {nextPage && (
        <Link to={nextPage}>
          Next <FaChevronRight />
        </Link>
      )}
    </div>
  );
};
