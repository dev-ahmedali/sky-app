import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tags: [],
  seatch: ''
};



const filterSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    tagSelected: (state, action) => {
        state.tags.push(action.payload)
    },
    tagRemoved: (state, action) => {
        const indexToRemove = state.tags.indexOf(action.payload)
        if(indexToRemove !== -1) {
            state.tags.splice(indexToRemove, 1)
        }
    },
    searched: (state, action) => {
        state.seatch = action.payload
    }
   
  }
});

export default filterSlice.reducer;
export const {tagSelected, tagRemoved, searched} = filterSlice.actions
