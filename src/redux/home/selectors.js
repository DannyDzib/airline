import _ from "lodash"
const reducersName = "home"

export const getCharactersSelector = (state) => {
  return _.get(state[reducersName], "characters", [])
}

export const getCharacterItemSelector = (state) => {
  return _.get(state[reducersName], "character", {})
}

export const isLoading = (state) => state[reducersName].loading
