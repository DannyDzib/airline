import * as types from "./types"

const flightsState = {
  loading: false,
  flights: [],
}

const flightsReducer = (state = flightsState, action) => {
  switch (action.type) {
    case types.LOADING:
      return {
        ...state,
        loading: true,
      }
    case types.GET_FLIGHTS_SUCCESS:
      return {
        ...state,
        loading: false,
        flights: action.payload,
      }

    default:
      return {
        ...state,
      }
  }
}

export default flightsReducer
