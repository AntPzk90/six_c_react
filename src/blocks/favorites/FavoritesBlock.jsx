import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getHotelsAsync} from '../../features/hotels/hotelsSlice';
import {structureFavoriteHotels} from '../../helpers/structureFavoriteHotels';

import FavoritesList from '../../components/favorites-list/FavoritesList';

const FavoritesBlock = () => {
  const dispatch = useDispatch();

  const favoritesHotels = useSelector((state) =>
    structureFavoriteHotels(
      state.hotels.hotels.filter((hotel) => hotel.isFavorite)
    )
  );
  useEffect(() => {
    dispatch(getHotelsAsync());
  }, [dispatch]);

  return (
    <div className="page__favorites-container container">
      <section className="favorites">
        {Object.keys(favoritesHotels).length === 0 && (
          <section className="favorites favorites--empty">
            <h1 className="visually-hidden">Favorites (empty)</h1>
            <div className="favorites__status-wrapper">
              <b className="favorites__status">Nothing yet saved.</b>
              <p className="favorites__status-description">
                Save properties to narrow down search or plan yor future trips.
              </p>
            </div>
          </section>
        )}
        {Object.keys(favoritesHotels).length > 0 && (
          <>
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList favoritesHotels={favoritesHotels} />
          </>
        )}
      </section>
    </div>
  );
};

export default FavoritesBlock;
