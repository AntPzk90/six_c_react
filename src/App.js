import {useEffect } from "react";
import Header from "./components/header/header";
import Tabs from "./components/tabs/tabs";
import Places from "./components/places/places";
import Form from "./components/form/form";
import { connect } from "react-redux";
import { ActionCreator } from "./reducer";
import {onGetRequest} from "./api/api";

const App = ({getHotels}) => {
  useEffect(() => {
    onGetRequest().then((response) => getHotels(response))
  }, [getHotels]);
  
  return (
    <>  
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs/>
        <div className="cities__places-wrapper">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">312 places to stay in Amsterdam</b>
              <Form/>
              <Places/>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
const mapStateToProps = (state) => ({
  sortType: state.sortType,
  list: state.list
});

const mapDispatchToProps = (dispatch) => ({
  getHotels(hotels) {
    dispatch(ActionCreator.getHotels(hotels))
  },
});

export  { App };
export default connect(mapStateToProps, mapDispatchToProps)(App);
