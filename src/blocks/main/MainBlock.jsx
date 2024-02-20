import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useSearchParams} from 'react-router-dom';

import {NAVIGATION} from '../../const';
import {sortHotels} from '../../helpers/sortHotels';
import {changeFavoritesHotelsAsync} from '../../features/hotels/hotelsSlice';

import Map from '../../components/map/map';
import Nav from '../../components/nav/nav';
import SortList from '../../components/sort-list/SortList';
import CitiesList from '../../components/cities-list/CitiesList';

const MainBlock = () => {
  const dispatch = useDispatch();
  const [sort, setSortParam] = useState('popular');
  const [activePin, setActivePin] = useState(null);
  const [searchParams] = useSearchParams();
  const town = searchParams.get('town');

  const loading = useSelector((state) => state.hotels.status);
  const filteredArticles = useSelector((state) => {
    return !town
      ? sortHotels(state.hotels.hotels, sort)
      : sortHotels(state.hotels.hotels, sort).filter((hotel) => {
          return hotel.city.name.toLowerCase() === town;
        });
  });

  const mouseEnterHandler = (id) => {
    setActivePin(id);
  };
  const changeFavoriteHotelHandler = (id, isFavorite) => {
    dispatch(
      changeFavoritesHotelsAsync(`/favorite/${id}/${isFavorite ? 0 : 1}`)
    );
  };

  return (
    <>
      <div className="cities tabs">
        <Nav items={NAVIGATION} town={town} />
      </div>
      <div className="cities__places-wrapper">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">HotelsList</h2>
            <b className="places__found">
              {filteredArticles.length} places to stay in{' '}
              <span style={{textTransform: 'capitalize'}}>{town}</span>
            </b>
            <SortList setSortParamsCb={setSortParam} sort={sort} />
            <CitiesList
              articles={filteredArticles}
              loading={loading}
              mouseEnterHandlerCb={mouseEnterHandler}
              changeFavoriteHotelHandlerCb={changeFavoriteHotelHandler}
            />
          </section>
          <div className="cities__right-section">
            <section className="cities__map map">
              <Map
                cities={filteredArticles}
                loading={loading}
                activePin={activePin}
              />
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBlock;
