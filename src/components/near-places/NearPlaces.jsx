import React from 'react';
import {useDispatch} from 'react-redux';

import {changeFavoritesNearHotelsAsync} from '../../features/near-hotels/nearHotelsSlice';

import Article from '../article/Article';
import Error from '../error/error';
import Loader from '../loader/loader';

const NearPlaces = ({hotels, onMouseEnterCb, error, loading}) => {
  const dispatch = useDispatch();
  const changeFavoriteHotelHandler = (id, isFavorite) => {
    dispatch(
      changeFavoritesNearHotelsAsync(`/favorite/${id}/${isFavorite ? 0 : 1}`)
    );
  };
  if (error !== null) return <Error info={error} />;
  return (
    <>
      {loading === 'loading' && <Loader />}
      {loading === 'idle' && (
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <ul
              style={{listStyle: 'none'}}
              className="near-places__list places__list"
            >
              {hotels.map((hotel) => (
                <Article
                  hotelInfo={hotel}
                  key={hotel.id}
                  onMouseEnterCb={onMouseEnterCb}
                  changeFavoriteHotelCb={changeFavoriteHotelHandler}
                />
              ))}
            </ul>
          </section>
        </div>
      )}
    </>
  );
};

export default NearPlaces;
