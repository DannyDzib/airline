import _ from "lodash"
const reducersName = "home"

export const getCitiesSelector = (state) => {
  return _.get(state[reducersName], "cities", [])
}

export const getCitySelector = (state) => {
  return _.get(state[reducersName], "city", {})
}

export const isLoading = (state) => state[reducersName].loading
