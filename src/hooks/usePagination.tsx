import { useState } from "react";

export const usePagination = (data: string | any[], count: number) => {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(data.length / count);

  const next = () => {
    let newPage = Math.min(currentPage + 1, maxPage);
    setCurrentPage(newPage);
  };
  const previous = () => {
    let prevPage = Math.max(currentPage - 1, 1);
    setCurrentPage(prevPage);
  };
  const step = (page: number) => {
    setCurrentPage(page);
  };
  const setPageData = () => {
    let start = (currentPage - 1) * count;
    let end = start + count;
    return data.slice(start, end);
  };

  return { currentPage, maxPage, next, previous, step, setPageData };
};
