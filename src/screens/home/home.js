import Plane from "assets/images/plane.png"
import SearchFlightForm from "./SearchFlightForm"
import sx from "./styles.module.css"

const Home = () => {
  return (
    <div className={sx.content}>
      <div className={sx.contentText}>
        <h2 className={sx.description}>Atrevete a tomar una aventura</h2>
        <h1 className={sx.title}>MEJORES VIAJES</h1>
      </div>
      <img src={Plane} className={sx.airplaneImage} alt="airplane" />
      <SearchFlightForm />
    </div>
  )
}

export default Home
