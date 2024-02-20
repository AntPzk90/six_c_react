import {configureStore} from '@reduxjs/toolkit';
import hotelsReducer from '../features/hotels/hotelsSlice';
import userReducer from '../features/user/userSlice';
import reviewsReducer from '../features/reviews/reviewsSlice';
import offerReducer from '../features/offer/offerSlice';
import nearHotelsReducer from '../features/near-hotels/nearHotelsSlice';

export const store = configureStore({
  reducer: {
    hotels: hotelsReducer,
    user: userReducer,
    reviews: reviewsReducer,
    offer: offerReducer,
    nearHotels: nearHotelsReducer,
  },
  devTools: true,
});
