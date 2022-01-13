import Card from "components/Card"
import sx from "./styles.module.css"
const Modal = (props) => {
  const {
    showModal = false,
    handleChange,
    children,
    renderFooter,
    title,
    sxClassContent = "",
  } = props

  const isVisible = showModal && sx.showModal
  return (
    <div className={`${sx.modal}  ${isVisible}`}>
      <Card sxClass={`${sx.modalContent} ${sxClassContent}`}>
        <div className={sx.modalHeader}>
          <span className={sx.close} onClick={handleChange}>
            &times;
          </span>
          <h2>{title}</h2>
        </div>
        <div className={sx.modalBody}>{children}</div>
        {renderFooter && <div className={sx.modalFooter}>{renderFooter}</div>}
      </Card>
    </div>
  )
}

export default Modal
