import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {changeHotelFavoriteStatus, fetchHotels} from '../../api/api';

const initialState = {
  hotels: [],
  status: 'loading',
  error: null,
};

export const getHotelsNearAsync = createAsyncThunk(
  'nearHotels/fetchNearData',
  async (url) => {
    const response = await fetchHotels(url);
    return response;
  }
);

export const changeFavoritesNearHotelsAsync = createAsyncThunk(
  'nearHotels/changeStatus',
  async (url) => {
    const response = await changeHotelFavoriteStatus(url);
    return response;
  }
);

export const nearHotelsSlice = createSlice({
  name: 'nearHotels',
  initialState,
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(changeFavoritesNearHotelsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(changeFavoritesNearHotelsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        console.log(action.payload);
        state.hotels[
          state.hotels.findIndex((hotel) => hotel.id === action.payload.id)
        ] = action.payload;
      })
      .addCase(changeFavoritesNearHotelsAsync.rejected, (state, action) => {
        state.status = 'loading';
        state.error = action.error;
      })
      .addCase(getHotelsNearAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getHotelsNearAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.hotels = action.payload;
      })
      .addCase(getHotelsNearAsync.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.error;
      });
  },
});

export const {setStatus} = nearHotelsSlice.actions;

export default nearHotelsSlice.reducer;
