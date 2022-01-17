import { combineReducers } from "redux"
import homeReducer from "./home/reducer"
import flightsReducer from "./flights/reducer"

const RootReducers = combineReducers({
  home: homeReducer,
  flights: flightsReducer,
})

export default RootReducers
