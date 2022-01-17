import { DevEnviroment as Enviroment } from "./dev.env"

class ApiSettings {
  API_URL
  ENDPOINT_CITIES
  constructor() {
    this.API_URL = Enviroment.apiUrl
    //cities
    this.ENDPOINT_CITIES = this.API_URL + Enviroment.endpoint.cities
    //flights
    this.ENDPOINT_FLIGHTS = this.API_URL + Enviroment.endpoint.flights
  }
}
export default new ApiSettings()
