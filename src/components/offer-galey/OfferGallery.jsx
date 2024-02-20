import React from 'react';

import Error from '../error/error';

const OfferGallery = ({images = [], error}) => {
  if (error !== null) return <Error info={error} />;
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {images.slice(0, 3).map((src) => {
          return (
            <div className="property__image-wrapper" key={src}>
              <img
                className="property__image"
                src={src}
                width={337}
                height={452}
                alt="Photo studio"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OfferGallery;
