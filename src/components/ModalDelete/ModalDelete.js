import Modal from "components/Modal"
import sx from "./styles.module.css"
import FlightsCart from "components/FlightsCart"

const ModalDelete = (props) => {
  const { item, showModal, onClick, handleChangeModal } = props

  return (
    <Modal
      showModal={showModal}
      handleChange={handleChangeModal}
      sxClassContent={sx.modalContent}
    >
      <p className={sx.title}>¿Estas seguro de querer eliminar el vuelo?</p>
      <FlightsCart data={item} showImage={false} sxClass={sx.cartReservation} />

      <button onClick={() => onClick(item.id)} className={sx.btn}>
        Eliminar
      </button>
    </Modal>
  )
}

export default ModalDelete
