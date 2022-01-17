import { useEffect, useState } from "react"
import FlightsCart from "components/FlightsCart"
import Loading from "components/Loading"
import ReservationForm from "./ReservationForm"
import { getFlightsApi } from "redux/flights/actions"
import * as flightsSelectors from "redux/flights/selectors"
import { connect } from "react-redux"
import queryString from "query-string"
import sx from "./styles.module.css"

const Flights = (props) => {
  const { location, getFlightsApi, flights, isLoading } = props
  const [showReservation, setShowReservation] = useState(false)
  const [flightSave, setFlightSave] = useState({})
  const query = queryString.parse(location.search)

  useEffect(() => {
    getFlightsApi(query)
  }, [])

  const handleChangeModal = (item) => {
    setFlightSave({ ...item, people: query.people })
    setShowReservation(!showReservation)
  }

  return (
    <div>
      {isLoading && <Loading />}
      <h2>Vuelos Disponibles</h2>
      <div className={sx.contentCarts}>
        {flights.map((item, key) => (
          <FlightsCart
            key={key}
            data={item}
            onSubmit={() => handleChangeModal(item)}
            textButton="Reservar"
          />
        ))}
      </div>
      {showReservation && (
        <ReservationForm
          handleChangeModal={handleChangeModal}
          showModal={showReservation}
          item={flightSave}
        />
      )}
    </div>
  )
}

const mapStateToProps = (state) => ({
  flights: flightsSelectors.getFlightsSelectors(state),
  isLoading: flightsSelectors.isLoading(state),
})

const mapDispatchToProps = (dispatch) => ({
  getFlightsApi: (data) => dispatch(getFlightsApi(data)),
})
export default connect(mapStateToProps, mapDispatchToProps)(Flights)
