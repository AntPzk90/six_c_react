import React from 'react';

const Features = ({type, bedrooms, maxAdults}) => {
  return (
    <ul className="property__features">
      <li className="property__feature property__feature--entire">{type}</li>
      <li className="property__feature property__feature--bedrooms">
        {bedrooms} Bedrooms
      </li>
      <li className="property__feature property__feature--adults">
        Max {maxAdults} adults
      </li>
    </ul>
  );
};

export default Features;
