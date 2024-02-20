import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {getHotelsAsync} from '../features/hotels/hotelsSlice';

import MainBlock from '../blocks/main/MainBlock';

function Main() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHotelsAsync('/hotels'));
  }, [dispatch]);
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <MainBlock />
    </main>
  );
}

export default Main;
