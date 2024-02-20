import React from 'react';

import List from '../ui/list/List';
import Article from '../article/Article';
import Loader from '../loader/loader';

const CitiesList = ({
  articles,
  loading,
  mouseEnterHandlerCb,
  changeFavoriteHotelHandlerCb,
}) => {
  if (loading === 'loading') return <Loader />;
  if (loading === 'idle')
    return (
      <List styleClass={'cities__places-list places__list tabs__content'}>
        {articles.slice(0, 6).map((hotel) => (
          <Article
            hotelInfo={hotel}
            key={hotel.id}
            onMouseEnterCb={mouseEnterHandlerCb}
            changeFavoriteHotelCb={changeFavoriteHotelHandlerCb}
          />
        ))}
      </List>
    );
};

export default CitiesList;
