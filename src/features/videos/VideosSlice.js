import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getVideos } from './videosAPI';

const initialState = {
  videos: [],
  isLoading: false,
  isError: false,
  error: '',
};

// async thunk
export const fetchVideos = createAsyncThunk(
  'videos/fetchVideos',
  async ({ tags, search, author, limit, currentPage }) => {
    const videos = await getVideos({
      tags,
      search,
      author,
      limit,
      currentPage,
    });
    return videos;
  }
);

const videoSlice = createSlice({
  name: 'videos',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.videos = action.payload.videos;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.isLoading = false;
        state.videos = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default videoSlice.reducer;