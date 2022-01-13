import Card from "components/Card"
import AirplaneArrivalIcon from "assets/icons/airplane-landing.png"
import AirplaneGoingIcon from "assets/icons/airplane-take-off.png"
import AirplaneIcon from "assets/icons/plane.png"
import { formatDate } from "utils/utils"
import sx from "./styles.module.css"

const FlightsCart = (props) => {
  const { onSubmit, sxClass = sx.card, onCancel, showImage = true } = props
  const renderOriginDestination = (icon, text) => (
    <div className={sx.contentItem}>
      <img src={icon} className={sx.airplaneIcon} alt={text} />
      <p className={sx.cities}>{text}</p>
    </div>
  )
  const today = new Date()
  return (
    <Card sxClass={sxClass}>
      {showImage && (
        <>
          <img
            src={
              "https://images.unsplash.com/photo-1528702748617-c64d49f918af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            }
            className={sx.imageDestination}
            alt="destination"
          />
          <img
            src={AirplaneIcon}
            className={sx.airplaneIconLogo}
            alt="airline"
          />
        </>
      )}
      <div>
        <p className={sx.hour}>02:30</p>
        <p className={sx.date}>{formatDate(today)}</p>
        <div className={sx.contentOriginDestination}>
          {renderOriginDestination(AirplaneGoingIcon, "Cancun Q.roo")}
          {renderOriginDestination(AirplaneArrivalIcon, "Monterrey")}
        </div>
        <div className={sx.contentBtn}>
          {onCancel && (
            <button className={sx.btn} onClick={onCancel}>
              Eliminar
            </button>
          )}
          {onSubmit && (
            <button className={sx.btn} onClick={onSubmit}>
              Reservar
            </button>
          )}
        </div>
      </div>
    </Card>
  )
}

export default FlightsCart
