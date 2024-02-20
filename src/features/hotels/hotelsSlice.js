import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {
  changeHotelFavoriteStatus,
  fetchFavoritesHotels,
  fetchHotels,
  fetchOffer,
} from '../../api/api';

const initialState = {
  hotels: [],
  status: 'loading',
  error: null,
};

export const getHotelsAsync = createAsyncThunk(
  'hotels/fetchData',
  async (url) => {
    const response = await fetchHotels(url);
    return response;
  }
);

export const getHotelsNearAsync = createAsyncThunk(
  'hotels/fetchNearData',
  async (url) => {
    const response = await fetchHotels(url);
    return response;
  }
);

export const getOfferAsync = createAsyncThunk(
  'hotels/fetchOffer',
  async (url) => {
    console.log(url);
    const response = await fetchOffer(url);
    return response;
  }
);

export const changeFavoritesHotelsAsync = createAsyncThunk(
  'hotels/changeStatus',
  async (url) => {
    const response = await changeHotelFavoriteStatus(url);
    return response;
  }
);

export const getFavoritesHotelsAsync = createAsyncThunk(
  'hotels/fetchFavoriteHotels',
  async (url) => {
    const response = await fetchFavoritesHotels(url);
    return response;
  }
);

export const hotelsSlice = createSlice({
  name: 'hotels',
  initialState,
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getHotelsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getHotelsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.hotels = action.payload;
      })
      .addCase(getHotelsAsync.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.error;
      })
      .addCase(getFavoritesHotelsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getFavoritesHotelsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.hotels = action.payload;
      })
      .addCase(getFavoritesHotelsAsync.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.error;
      })
      .addCase(changeFavoritesHotelsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(changeFavoritesHotelsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.hotels[
          state.hotels.findIndex((hotel) => hotel.id === action.payload.id)
        ] = action.payload;
      })
      .addCase(changeFavoritesHotelsAsync.rejected, (state, action) => {
        state.status = 'loading';
        state.error = action.error;
      });
  },
});

export const {setStatus} = hotelsSlice.actions;

export default hotelsSlice.reducer;
