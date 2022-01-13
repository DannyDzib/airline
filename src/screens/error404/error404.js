import sx from "./styles.module.css"
const Error404 = () => {
  return (
    <div className={sx.content}>
      <h3 className={sx.notFound}>Error 404</h3>
      <p className={sx.notFound}>Not Found</p>
    </div>
  )
}

export default Error404
