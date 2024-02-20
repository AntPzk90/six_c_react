import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

import OfferGallery from '../../components/offer-galey/OfferGallery';
import OfferInfo from '../../components/offer-info/OfferInfo';
import NearPlaces from '../../components/near-places/NearPlaces';
import {useNavigate} from 'react-router';

const OfferBlock = ({isAuth}) => {
  const errorOffer = useSelector((state) => state.offer.error);
  const history = useNavigate();
  useEffect(() => {
    console.log(errorOffer);
    if (errorOffer !== null) history('*');
  }, [errorOffer]);
  const offer = useSelector((state) => state.offer.offer);
  const loadingOffer = useSelector((state) => state.offer.status);
  const nearHotels = useSelector((state) => state.nearHotels.hotels);
  const errorNearHotels = useSelector((state) => state.nearHotels.error);
  const loadingNearHotels = useSelector((state) => state.nearHotels.status);
  const [activePin, setActivePin] = useState(null);
  const mouseEnterHandler = (id) => {
    setActivePin(id);
  };
  return (
    <>
      <OfferGallery images={offer.images} error={errorOffer} />
      <OfferInfo
        id={offer.id}
        isAuth={isAuth}
        title={offer.title}
        isFavorite={offer.isFavorite}
        isPremium={offer.isPremium}
        rating={offer.rating}
        bedrooms={offer.bedrooms}
        maxAdults={offer.maxAdults}
        price={offer.price}
        goods={offer.goods}
        type={offer.type}
        hosts={offer.host}
        description={offer.description}
        nearHotels={nearHotels}
        loadingOffer={loadingOffer}
        loadingNearHotels={loadingNearHotels}
        activePin={activePin}
        error={errorOffer}
      />
      <NearPlaces
        hotels={nearHotels}
        onMouseEnterCb={mouseEnterHandler}
        loading={loadingNearHotels}
        error={errorNearHotels}
      />
    </>
  );
};

export default OfferBlock;
