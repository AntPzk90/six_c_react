import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {useParams} from 'react-router';

import {getOfferAsync} from '../features/offer/offerSlice';
import {getHotelsNearAsync} from '../features/near-hotels/nearHotelsSlice';

import OfferBlock from '../blocks/offer/OfferBlock';
import Loader from '../components/loader/loader';

const Offer = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  const {id} = useParams();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.offer.status);
  useEffect(() => {
    dispatch(getOfferAsync(`hotels/${id}`));
    dispatch(getHotelsNearAsync(`hotels/${id}/nearby`));
  }, [id]);
  return (
    <main
      className="page__main page__main--property"
      style={{minHeight: '80vh'}}
    >
      {loading === 'loading' && <Loader />}
      {loading === 'idle' && <OfferBlock isAuth={isAuth} />}
    </main>
  );
};

export default Offer;
