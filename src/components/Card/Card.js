import sx from "./styles.module.css"
const Card = (props) => {
  const { children, sxClass } = props
  return <div className={`${sx.card} ${sxClass}`}>{children}</div>
}

export default Card
