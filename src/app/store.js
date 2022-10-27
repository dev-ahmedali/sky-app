import { configureStore } from '@reduxjs/toolkit';
import videosReducer from '../features/videos/VideosSlice';

export const store = configureStore({
  reducer: {
    videos: videosReducer,
  },
});
