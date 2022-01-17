import Card from "components/Card"
import AirplaneArrivalIcon from "assets/icons/airplane-landing.png"
import AirplaneGoingIcon from "assets/icons/airplane-take-off.png"
import AirplaneIcon from "assets/icons/plane.png"
import { formatDate, formatDateByHour } from "utils/utils"
import sx from "./styles.module.css"

const FlightsCart = (props) => {
  const {
    onSubmit,
    sxClass = sx.card,
    onCancel,
    onClick,
    showImage = true,
    data,
    textButton = "",
  } = props
  const renderOriginDestination = (icon, text) => (
    <div className={sx.contentItem}>
      <img src={icon} className={sx.airplaneIcon} alt={text} />
      <p className={sx.cities}>{text}</p>
    </div>
  )

  return (
    <Card sxClass={sxClass}>
      {showImage && (
        <>
          <img
            src={data?.image}
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
      <div className={sx.bodyCard}>
        {data.people && <p className={sx.people}>Personas: {data.people}</p>}
        <p className={sx.hour}>{formatDateByHour(data?.date)}</p>
        <p className={sx.date}>{formatDate(data?.date)}</p>
        <div className={sx.contentOriginDestination}>
          {renderOriginDestination(AirplaneGoingIcon, data?.origin)}
          {renderOriginDestination(AirplaneArrivalIcon, data?.destination)}
        </div>
        <div className={sx.contentBtn}>
          {onCancel && (
            <button className={sx.btn} onClick={onCancel}>
              Eliminar
            </button>
          )}
          {onClick && (
            <button className={sx.btn} onClick={onClick}>
              Cancelar
            </button>
          )}
          {onSubmit && (
            <button className={sx.btn} onClick={onSubmit}>
              {textButton}
            </button>
          )}
        </div>
      </div>
    </Card>
  )
}

export default FlightsCart
