import React from 'react';

import List from '../ui/list/List';

const PropertyInside = ({goods}) => {
  return (
    <div className="property__inside">
      <h2 className="property__inside-title">What's inside</h2>
      <List styleClass={'property__inside-list'}>
        {goods.map((prop) => (
          <li className="property__inside-item" key={prop}>
            {prop}
          </li>
        ))}
      </List>
    </div>
  );
};

export default PropertyInside;
