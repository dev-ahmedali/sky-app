import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tags: [],
  search: '',
  author: null,
  pagination: {
    currentPage: 1,
    limit: 5,
    totalCount: 1,
  },
};

const filterSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    tagSelected: (state, action) => {
      state.tags.push(action.payload);
    },
    tagRemoved: (state, action) => {
      const indexToRemove = state.tags.indexOf(action.payload);
      if (indexToRemove !== -1) {
        state.tags.splice(indexToRemove, 1);
      }
    },
    clearAuthor: (state, action) => {
      state.author = action.payload;
    },
    setAuthor: (state, action) => {
      state.author = action.payload;
    },
    searched: (state, action) => {
      state.search = action.payload;
    },
    setLimit: (state, action) => {
      state.pagination.limit = parseInt(action.payload) || 5;
    },
    setPage: (state, action) => {
      state.pagination.currentPage = parseInt(action.payload) || 1;
    },
    setTotalCount: (state, action) => {
      state.pagination.totalCount = parseInt(action.payload) || 1;
    },
    clearFilter: (state) => {
      state.tags = [];
      state.search = '';
      state.author = null;
    },
  },
});

export default filterSlice.reducer;
export const {
  tagSelected,
  tagRemoved,
  searched,
  setLimit,
  setPage,
  setTotalCount,
  clearAuthor,
  clearFilter,
  setAuthor
} = filterSlice.actions;
