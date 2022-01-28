import {extend} from "./utils.js";
// import { HOTELS } from "./mock/mock";
import cloneDeep  from "lodash.clonedeep";
import { sortHotels } from "./helpers/sort"

const initialState = {
  sortType: `low`,
  list: [],
  isLoading: false
};

const ActionType = {
  GET_HOTELS: `GET_HOTELS`,
  CHANGE_TYPE: `CHANGE_TYPE`,
  SORT_LIST: `SORT_LIST`,
};

const ActionCreator = {
  getHotels: (hotels) => ({
    type: ActionType.GET_HOTELS,
    payload: hotels
  }),
  changeSortType: (type) => ({
    type: ActionType.CHANGE_TYPE,
    payload: type,
  }),
  sortList: (type, hotels) => ( {
    type: ActionType.SORT_LIST,
    payload: sortHotels(type, cloneDeep(hotels)),
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_HOTELS:
      return extend(state, {
        list: action.payload,
      });
    case ActionType.CHANGE_TYPE:
      return extend(state, {
        sortType: action.payload,
      });
    case ActionType.SORT_LIST:
      return extend(state, {
        list: action.payload
      })
  }
  return state;
};

console.log(initialState)

export {reducer, ActionType, ActionCreator};