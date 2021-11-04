import React from 'react';

interface PaginationProps {
  postsPerPage: number;
  totalPosts: number;
  paginate: (arg0: number) => void;
}

const Pagination = ({postsPerPage, totalPosts, paginate}: PaginationProps) => {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map((number) => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='!#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
