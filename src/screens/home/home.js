import Plane from "assets/images/plane.png"
import { connect } from "react-redux"
import SearchFlightForm from "./SearchFlightForm"
import * as homeSelectors from "redux/home/selectors"
import { getCitiesApi } from "redux/home/actions"
import sx from "./styles.module.css"
import { useEffect } from "react"

const Home = (props) => {
  const { getCitiesApi, cities } = props

  useEffect(() => {
    getCitiesApi()
  }, [getCitiesApi])
  return (
    <div className={sx.content}>
      <div className={sx.contentText}>
        <h2 className={sx.description}>Atrevete a tomar una aventura</h2>
        <h1 className={sx.title}>MEJORES VIAJES</h1>
      </div>
      <img src={Plane} className={sx.airplaneImage} alt="airplane" />
      <SearchFlightForm cities={cities} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  cities: homeSelectors.getCitiesSelector(state),
})

const mapDispatchToProps = (dispatch) => ({
  getCitiesApi: () => dispatch(getCitiesApi()),
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)
