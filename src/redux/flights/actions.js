import * as types from "./types"
import { getApiFlights } from "./action-creator"
import { formatDateYYYYMMDD } from "utils/utils"
import _ from "lodash"

export const getFlightsApi = (flight) => async (dispach) => {
  const { origin, destination, date } = flight
  dispach({
    type: types.LOADING,
  })
  const response = await getApiFlights()
  const result = _.filter(response, (item) => {
    return (
      item.origin === origin &&
      item.destination === destination &&
      formatDateYYYYMMDD(item.date) === date
    )
  })
  if (result) {
    await dispach({
      type: types.GET_FLIGHTS_SUCCESS,
      payload: result,
    })
  }
}
