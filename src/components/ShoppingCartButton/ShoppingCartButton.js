import { useEffect } from "react"
import ShippingCartIcon from "assets/icons/shopping-cart.png"
import sx from "./styles.module.css"

export const ShoppingCartButton = (props) => {
  useEffect(() => {
    console.log("inicios")
  }, [])
  return (
    <div className={sx.content}>
      <img src={ShippingCartIcon} className={sx.shippingIcon} alt="shipping" />
      <div className={sx.badge}>2</div>
    </div>
  )
}

export default ShoppingCartButton
