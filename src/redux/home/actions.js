import * as types from "./types"
import { getApiCities } from "./action-creator"

export const getCitiesApi = () => async (dispach) => {
  dispach({
    type: types.LOADING,
  })
  const response = await getApiCities()
  if (response) {
    dispach({
      type: types.GET_CITIES_SUCCESS,
      payload: response,
    })
  }
}
