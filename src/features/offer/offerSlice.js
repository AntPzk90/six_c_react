import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {changeHotelFavoriteStatus, fetchOffer} from '../../api/api';

const initialState = {
  offer: {},
  status: 'loading',
  error: null,
};

export const getOfferAsync = createAsyncThunk(
  'offer/fetchOffer',
  async (url) => {
    console.log(url);
    const response = await fetchOffer(url);
    return response;
  }
);

export const changeFavoritesHotelsAsync = createAsyncThunk(
  'nearHotels/changeStatus',
  async (url) => {
    const response = await changeHotelFavoriteStatus(url);
    return response;
  }
);

export const offerSlice = createSlice({
  name: 'offer',
  initialState,
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(changeFavoritesHotelsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(changeFavoritesHotelsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.offer = action.payload;
        state.error = null;
      })
      .addCase(changeFavoritesHotelsAsync.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.error;
      })
      .addCase(getOfferAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getOfferAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.offer = action.payload;
        state.error = null;
      })
      .addCase(getOfferAsync.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.error;
      });
  },
});

export const {setStatus} = offerSlice.actions;

export default offerSlice.reducer;
