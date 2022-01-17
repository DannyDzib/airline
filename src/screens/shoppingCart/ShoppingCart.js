import { useState } from "react"
import localStorageService from "services/localStorageService"
import { deleteLocalStorageFligth } from "utils/localStorageFlight"
import FlightsCart from "components/FlightsCart"
import ModalDelete from "components/ModalDelete"
import sx from "./styles.module.css"

const ShoppingCart = (props) => {
  const [showModal, setShowModal] = useState(false)
  const [flightDelete, setFlightDelete] = useState(null)
  const [isSucces, setIsSucces] = useState(null)
  const storageFlights = localStorageService.getItem("flights")

  const handleChangeModalDelete = (item) => {
    setFlightDelete(item)
    setShowModal(!showModal)
  }
  const handleDeleteLocalStorage = (id) => {
    const { isDelete } = deleteLocalStorageFligth(id)
    if (isDelete) {
      setIsSucces(true)
      setTimeout(() => setIsSucces(false), 3000)
    }
    setShowModal(!showModal)
  }
  return (
    <>
      <h2>Mis vuelos</h2>
      {isSucces && <p className={sx.succes}>Se elimino correctamente</p>}
      <div className={sx.contentCarts}>
        {storageFlights &&
          storageFlights.map((item, key) => (
            <FlightsCart
              key={key}
              data={item}
              onSubmit={() => handleChangeModalDelete(item)}
              textButton="Eliminar"
            />
          ))}
      </div>
      {showModal && (
        <ModalDelete
          showModal={showModal}
          item={flightDelete}
          handleChangeModal={handleChangeModalDelete}
          onClick={handleDeleteLocalStorage}
        />
      )}
    </>
  )
}

export default ShoppingCart
