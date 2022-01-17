import * as types from "./types"

const homeState = {
  loading: false,
  cities: [],
  city: {},
}

const homeReducer = (state = homeState, action) => {
  switch (action.type) {
    case types.LOADING:
      return {
        ...state,
        loading: true,
      }
    case types.GET_CITIES_SUCCESS:
      return {
        ...state,
        loading: false,
        cities: action.payload,
      }
    case types.GET_CITY_SUCCESS:
      return {
        ...state,
        loading: false,
        city: action.payload,
      }
    default:
      return {
        ...state,
      }
  }
}

export default homeReducer
