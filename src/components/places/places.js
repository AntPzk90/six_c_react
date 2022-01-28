import PlacesItem from "./places-item/places-item.js";
import { connect } from "react-redux";

const Places = (props) => {
  console.log(props)
  const {list} = props
  return (
    <>
      <div className="cities__places-list places__list tabs__content">
        {list.map((hotel) => {
          return <PlacesItem hotel={hotel} key={hotel.id}/>
        })}
        </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  list: state.list
});


export {Places};

export default connect(mapStateToProps, null)(Places);
