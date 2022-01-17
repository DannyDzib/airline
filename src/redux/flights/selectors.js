import _ from "lodash"
const reducersName = "flights"

export const getFlightsSelectors = (state) => {
  return _.get(state[reducersName], "flights", [])
}

export const isLoading = (state) => state[reducersName].loading
