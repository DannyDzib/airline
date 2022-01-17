import ShippingCartIcon from "assets/icons/shopping-cart.png"
import sx from "./styles.module.css"

export const ShoppingCartButton = () => {

  return (
    <div className={sx.content}>
      <img src={ShippingCartIcon} className={sx.shippingIcon} alt="shipping" />
    </div>
  )
}

export default ShoppingCartButton
