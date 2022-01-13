import AirlineLoadingGif from "assets/images/loading.gif"
import sx from "./styles.module.css"
const Loading = (props) => {
  const { sxClass = sx.content } = props
  return (
    <div className={sxClass}>
      <img src={AirlineLoadingGif} className={sx.loadig} alt="Loading ..." />
    </div>
  )
}

export default Loading
