import { Link } from "react-router-dom"
import AirplaneIcon from "assets/icons/plane.png"
import ShoppingCartButton from "components/ShoppingCartButton"
import sx from "./styles.module.css"

const Header = () => {
  return (
    <header className={sx.header}>
      <Link to="/" className={sx.link}>
        <img src={AirplaneIcon} className={sx.airplaneIcon} alt="airplane" />
        airline
      </Link>
      <nav>
        <Link to="/shopping-cart">
          <ShoppingCartButton />
        </Link>
      </nav>
    </header>
  )
}

export default Header
