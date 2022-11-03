import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPage, setLimit } from '../../features/filter/filterSlice';

export default function Pagination() {
  const {
    pagination: { totalCount, currentPage, limit },
  } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const totalPage = Math.ceil(totalCount / limit);
  let contentPagination;

  if (totalPage <= 5) {
    contentPagination = [
      ...Array(totalPage).map((_, i) => (
        <button
          className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full disabled:bg-blue-700 disabled:text-white"
          onClick={() => dispatch(setPage(i + 1))}
          key={i + 1}
          disabled={currentPage === i + 1}
        >
          {i + 1}
        </button>
      )),
    ];
  } else {
    const startValue = Math.floor((currentPage - 1) / 5) * 5;
    contentPagination = (
      <>
        {[...Array(5)].map((_, i) => (
          <button
            className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full disabled:bg-blue-700 disabled:text-white"
            key={startValue + i + 1}
            onClick={() => dispatch(setPage(startValue + i + 1))}
            disabled={currentPage === startValue + i + 1}
          >
            {startValue + (i + 1)}
          </button>
        ))}
        <button>...</button>
        <button
          className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full disabled:bg-blue-700 disabled:text-white"
          onClick={() => dispatch(setPage(totalPage))}
        >
          {totalPage}
        </button>
      </>
    );
    if (currentPage > 5) {
      if (totalPage - currentPage >= 5) {
        contentPagination = (
          <>
            <button
              className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full disabled:bg-blue-700 disabled:text-white"
              onClick={() => dispatch(setPage(1))}
            >
              1
            </button>
            <button>...</button>
            <button
              className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full disabled:bg-blue-700 disabled:text-white"
              onClick={() => dispatch(setPage(startValue))}
            >
              {startValue}
            </button>
            {[...Array(5)].map((_, i) => (
              <button
                className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full disabled:bg-blue-700 disabled:text-white"
                key={startValue + i + 1}
                disabled={currentPage === startValue + i + 1}
                onClick={() => dispatch(setPage(startValue + i + 1))}
              ></button>
            ))}
            <button>...</button>
            <button
              className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full disabled:bg-blue-700 disabled:text-white"
              onClick={() => dispatch(setPage(totalPage))}
            >
              {totalPage}
            </button>
          </>
        );
      } else {
        let amountLeft = totalPage - currentPage + 5;

        contentPagination = (
          <>
            <button
              className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full disabled:bg-blue-700 disabled:text-white"
              onClick={() => dispatch(setPage(1))}
            >
              1
            </button>
            <button>...</button>
            {[...Array(amountLeft)].map((_, i) => (
              <button
                className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full disabled:bg-blue-700 disabled:text-white"
                key={startValue + i + 1}
                disabled={currentPage === startValue + i + 1}
                style={
                  totalPage < startValue + i + 1 ? { display: 'none' } : null
                }
                onClick={() => dispatch(setPage(startValue + i + 1))}
              >
                {startValue + i + 1}
              </button>
            ))}
          </>
        );
      }
    }
  }

  return (
    <section className="pt-12">
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end">
        <select
          value={limit}
          onChange={(e) => dispatch(setLimit(e.target.value))}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5"
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
        <button
          className="px-4 py-1 rounded-full bg-blue-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => dispatch(setPage(currentPage - 1))}
        >
          Prev
        </button>
        {contentPagination}
        <button
          className="px-4 py-1 rounded-full bg-blue-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => dispatch(setPage(currentPage + 1))}
          disabled={currentPage === totalPage}
        >
          Next
        </button>
      </div>
    </section>
  );
}
