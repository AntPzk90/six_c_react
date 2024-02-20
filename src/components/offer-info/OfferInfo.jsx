import React from 'react';
import {ratingLine} from '../../helpers/ratingLine';
import {changeFavoritesHotelsAsync} from '../../features/offer/offerSlice';
import {useDispatch} from 'react-redux';

import ReviewsBlock from '../../blocks/reviews/ReviewsBlock';
import Map from '../map/map';
import Error from '../error/error';
import Features from '../features/Features';
import PropertyInside from '../property-inside/PropertyInside';
import PropertyHosts from '../property-hosts/PropertyHosts';

const OfferInfo = ({
  id,
  isAuth,
  title,
  isFavorite,
  type,
  isPremium,
  rating,
  bedrooms,
  maxAdults,
  price,
  goods = [],
  hosts,
  description,
  nearHotels,
  loadingOffer,
  loadingNearHotels,
  activePin,
  error,
}) => {
  const dispatch = useDispatch();
  const changeFavoritesHotelHandler = () => {
    dispatch(
      changeFavoritesHotelsAsync(`/favorite/${id}/${isFavorite ? 0 : 1}`)
    );
  };
  if (error !== null) return <Error info={error} />;
  return (
    <section className="property">
      <div className="property__container container">
        <div className="property__wrapper">
          {isPremium && (
            <div className="property__mark">
              <span>Premium</span>
            </div>
          )}
          <div className="property__name-wrapper">
            <h1 className="property__name">{title}</h1>
            <button
              className={`property__bookmark-button button ${
                isFavorite ? 'property__bookmark-button--active' : ''
              }`}
              type="button"
              onClick={changeFavoritesHotelHandler}
            >
              <svg className="property__bookmark-icon" width={31} height={33}>
                <use xlinkHref="#icon-bookmark" />
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="property__rating rating">
            <div className="property__stars rating__stars">
              <span style={{width: ratingLine(rating)}} />
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="property__rating-value rating__value">
              {rating}
            </span>
          </div>

          <Features type={type} maxAdults={maxAdults} bedrooms={bedrooms} />
          <div className="property__price">
            <b className="property__price-value">€{price}</b>
            <span className="property__price-text">&nbsp;night</span>
          </div>
          <PropertyInside goods={goods} />
          {hosts && (
            <PropertyHosts
              avatarUrl={hosts.avatarUrl}
              name={hosts.name}
              isPro={hosts.isPro}
              description={description}
            />
          )}
          <ReviewsBlock isAuth={isAuth} />
        </div>
      </div>
      <section className="property__map map">
        <Map
          cities={nearHotels}
          loading={loadingNearHotels}
          activePin={activePin}
        />
      </section>
    </section>
  );
};

export default OfferInfo;
