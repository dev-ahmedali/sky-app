import { configureStore } from '@reduxjs/toolkit';
import tagsReducer from '../features/tags/tagsSlice';
import videosReducer from '../features/videos/VideosSlice';

export const store = configureStore({
  reducer: {
    videos: videosReducer,
    tags: tagsReducer
  },
});
