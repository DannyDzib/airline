import HttpClient from "config/httpClient"
import ApiSettings from "settings/api.settings"

export const getApiFlights = async () => {
  const response = await HttpClient.get(ApiSettings.ENDPOINT_FLIGHTS)
  if (response.data) return await response.data
  else return {}
}
