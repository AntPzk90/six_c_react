import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {postReview, fetchReviews} from '../../api/api';

const initialState = {
  reviews: [],
  status: 'idle',
  error: null,
};

export const getReviewsAsync = createAsyncThunk(
  'reviews/getReviews',
  async (url) => {
    const response = await fetchReviews(url);
    return response;
  }
);

export const postReviewAsync = createAsyncThunk(
  'reviews/postReview',
  async (postData) => {
    const response = await postReview(postData.url, postData.data);
    return response;
  }
);

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postReviewAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(postReviewAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.reviews = action.payload;
      })
      .addCase(postReviewAsync.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.error;
      })
      .addCase(getReviewsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getReviewsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.reviews = action.payload;
      })
      .addCase(getReviewsAsync.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.error;
      });
  },
});
export const {setStatus} = reviewsSlice.actions;
export default reviewsSlice.reducer;
