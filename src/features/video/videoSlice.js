import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getVideo, updateLikeUnlike } from './videoAPI';

const initialState = {
  video: {},
  isLoading: false,
  isError: false,
  error: '',
};

// async thunk
export const fetchVideo = createAsyncThunk('video/fetchVideo', async (id) => {
  const video = await getVideo(id);
  return video;
});

export const updateVideoLikeUnlike = createAsyncThunk(
  'video/updateLikeUnlike',
  async ({ id, reaction }) => {
    const updateVideo = await updateLikeUnlike({ id, reaction });
    return updateVideo;
  }
);

const videoSlice = createSlice({
  name: 'video',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideo.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchVideo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.video = action.payload;
      })
      .addCase(fetchVideo.rejected, (state, action) => {
        state.isLoading = false;
        state.video = {};
        state.isError = true;
        state.error = action.error?.message;
      });
    builder
      .addCase(updateVideoLikeUnlike.pending, (state, action) => {
        return state;
      })
      .addCase(updateVideoLikeUnlike.fulfilled, (state, action) => {
        state.video.likes = action.payload.likes;
        state.video.unlikes = action.payload.unlikes;
      })
      .addCase(updateVideoLikeUnlike.rejected, (state, action) => {
        return state;
      });
  },
});

export default videoSlice.reducer;
