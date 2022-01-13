import { useEffect, useState } from "react"
import FlightsCart from "components/FlightsCart"
import Loading from "components/Loading"
import ReservationForm from "./ReservationForm"
import sx from "./styles.module.css"

const Flights = (props) => {
  const [isLoading, setIsLoading] = useState(true)
  const [showReservation, setShowReservation] = useState(false)

  const { location } = props
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 5000)
  }, [location])
  const handleChangeModal = () => {
    setShowReservation(!showReservation)
  }
  return (
    <div>
      {isLoading && <Loading />}
      <h2>VUELOS DISPONIBLES</h2>
      <div className={sx.contentCarts}>
        <FlightsCart onSubmit={handleChangeModal} />
        <FlightsCart onSubmit={handleChangeModal} />
        <FlightsCart onSubmit={handleChangeModal} />
        <FlightsCart onSubmit={handleChangeModal} />
        <FlightsCart onSubmit={handleChangeModal} />
        <FlightsCart onSubmit={handleChangeModal} />
        <FlightsCart onSubmit={handleChangeModal} />
        <FlightsCart onSubmit={handleChangeModal} />
      </div>
      {showReservation && (
        <ReservationForm
          handleChangeModal={handleChangeModal}
          showModal={showReservation}
        />
      )}
    </div>
  )
}

export default Flights
