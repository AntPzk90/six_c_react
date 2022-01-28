import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { ActionCreator } from "../../reducer.js";

const Form = (props) => {
  const { sortType, hotelsList, onChangeSort } = props;

  const [openedDropdown, setDropdownState] = useState(false);

  const handleDocumentClick = () => {
    if (openedDropdown) {
      setDropdownState(false);
    }
  };
  // eslint-disable-next-line 
  useEffect(() => {
    window.addEventListener("click", handleDocumentClick);
    return () => {
      window.removeEventListener("click", handleDocumentClick);
    };
  }, [handleDocumentClick]);

  return (
    <>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span
          className="places__sorting-type"
          tabIndex={0}
          onClick={() => {
            setDropdownState(!openedDropdown);
          }}
        >
          &nbsp;{sortType}
          <svg className="places__sorting-arrow" width={7} height={4}>
            <use xlinkHref="#icon-arrow-select" />
          </svg>
        </span>
        <ul
          className={`places__options places__options--custom ${
            openedDropdown
              ? `places__options--opened`
              : `places__options--close`
          }`}
        >
          <li
            className={`places__option  ${
              sortType === `popular` && `places__option--active`
            }`}
            tabIndex={0}
            onClick={() => {
              setDropdownState(!openedDropdown);
              onChangeSort("popular", hotelsList);
            }}
          >
            Popular
          </li>
          <li
            className={`places__option  ${
              sortType === `high` && `places__option--active`
            }`}
            tabIndex={0}
            onClick={() => {
              setDropdownState(!openedDropdown);
              onChangeSort("high", hotelsList);
            }}
          >
            Price: low to high
          </li>
          <li
            className={`places__option  ${
              sortType === `low` && `places__option--active`
            }`}
            tabIndex={0}
            onClick={() => {
              setDropdownState(!openedDropdown);
              onChangeSort("low", hotelsList);
            }}
          >
            Price: high to low
          </li>
          <li
            className={`places__option  ${
              sortType === `top` && `places__option--active`
            }`}
            tabIndex={0}
            onClick={() => {
              setDropdownState(!openedDropdown);
              onChangeSort("top", hotelsList);
            }}
          >
            Top rated first
          </li>
        </ul>

        {/* <select class="places__sorting-type" id="places-sorting">
                <option class="places__option" value="popular" selected="">Popular</option>
                <option class="places__option" value="to-high">Price: low to high</option>
                <option class="places__option" value="to-low">Price: high to low</option>
                <option class="places__option" value="top-rated">Top rated first</option>
              </select> */}
      </form>
    </>
  );
};

const mapStateToProps = (state) => ({
  hotelsList: state.list,
  sortType: state.sortType,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeSort(type, hotels) {
    dispatch(ActionCreator.changeSortType(type));
    dispatch(ActionCreator.sortList(type, hotels));
  },
});

export { Form };
export default connect(mapStateToProps, mapDispatchToProps)(Form);
