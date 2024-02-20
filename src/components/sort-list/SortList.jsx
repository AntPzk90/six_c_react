import React, {useState} from 'react';

const SortList = ({setSortParamsCb, sort}) => {
  const [isOpenSortList, setIsOpenSortList] = useState(false);
  return (
    <>
      <div className="places__sorting">
        <div
          onClick={() => {
            setIsOpenSortList(true);
          }}
        >
          <span className="places__sorting-caption">Sort by</span>
          <span className="places__sorting-type" tabIndex={0}>
            &nbsp; {sort}
            <svg className="places__sorting-arrow" width={7} height={4}>
              <use xlinkHref="#icon-arrow-select" />
            </svg>
          </span>
        </div>
        <ul
          className={`places__options places__options--custom ${
            isOpenSortList ? 'places__options--opened' : ''
          }`}
        >
          <li
            className="places__option places__option--active"
            tabIndex={0}
            onClick={() => {
              setSortParamsCb('popular');
              setIsOpenSortList(!isOpenSortList);
            }}
          >
            Popular
          </li>
          <li
            className="places__option"
            tabIndex={0}
            onClick={() => {
              setSortParamsCb('low');
              setIsOpenSortList(false);
            }}
          >
            Price: low to high
          </li>
          <li
            className="places__option"
            tabIndex={0}
            onClick={() => {
              setSortParamsCb('up');
              setIsOpenSortList(false);
            }}
          >
            Price: high to low
          </li>
          <li
            className="places__option"
            tabIndex={0}
            onClick={() => {
              setSortParamsCb('top');
              setIsOpenSortList(false);
            }}
          >
            Top rated first
          </li>
        </ul>
      </div>
    </>
  );
};

export default SortList;
