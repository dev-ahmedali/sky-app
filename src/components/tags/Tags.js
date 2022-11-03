import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTags } from '../../features/tags/tagsSlice';
import Tag from './Tag';
import { clearFilter } from '../../features/filter/filterSlice';

export default function Tags() {
  const { tags } = useSelector((state) => state.tags);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);

  // clear filter handler
 const clearFiltersHandler = () => {
  dispatch(clearFilter())
 }
  return tags?.length > 0 ? (
      <section>
        <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
          {tags.map((tag) => (
            <Tag key={tag.id} title={tag.title} />
          ))}
           <div
          onClick={clearFiltersHandler}
          className="bg-red-100 text-red-500 px-4 py-1 cursor-pointer flex items-center justify-center rounded-full space-x-1 group hover:bg-red-200 hover-text-red-600 transition"
        >
          
          <span>Reset</span>
        </div>
        </div>
      </section>
  ) : null;
}
