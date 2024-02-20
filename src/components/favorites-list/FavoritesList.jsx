import React from 'react';

import List from '../ui/list/List';
import FavoriteArticle from '../favorite-article/FavoriteArticle';

export const FavoritesList = ({favoritesHotels}) => {
  return (
    <List>
      {Object.keys(favoritesHotels).map((town) => (
        <FavoriteArticle
          town={town}
          hotels={favoritesHotels[town]}
          key={town}
        />
      ))}
    </List>
  );
};

export default FavoritesList;
