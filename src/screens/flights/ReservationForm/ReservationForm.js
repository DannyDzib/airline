import { useState } from "react"
import { Formik, Field } from "formik"
import Schema from "./Schema"
import Modal from "components/Modal"
import FlightsCart from "components/FlightsCart"
import CustomField from "components/CustomField"
import { saveLocalStorageFligth } from "utils/localStorageFlight"
import sx from "./styles.module.css"

const ReservationForm = (props) => {
  const { handleChangeModal, showModal = false, item } = props
  const [initialValues, setInitialValues] = useState({})
  const [errorMessage, setErrorMessage] = useState(null)

  const handleSubmit = (values) => {
    const { isSave, error } = saveLocalStorageFligth(item)
    isSave && handleChangeModal()
    if (error) {
      setErrorMessage(error)
      setTimeout(() => setErrorMessage(null), 3000)
    }
  }

  return (
    <Modal
      showModal={showModal}
      handleChange={handleChangeModal}
      sxClassContent={sx.modalContent}
    >
      <FlightsCart data={item} showImage={false} sxClass={sx.cartReservation} />
      <Formik
        enableReinitialize
        validationSchema={Schema}
        initialValues={initialValues}
        onSubmit={(values, actions) => handleSubmit(values)}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          setFieldTouched,
        }) => (
          <form onSubmit={handleSubmit}>
            <Field
              type="text"
              placeholder="Nombre(s)"
              name="firstName"
              component={CustomField}
              className={sx.input}
              values={values.date}
              onChange={handleChange("firstName")}
              onBlur={() => setFieldTouched("firstName")}
              required
            />
            <Field
              type="text"
              placeholder="Apellidos"
              name="lastName"
              component={CustomField}
              className={sx.input}
              values={values.people}
              onChange={handleChange("lastName")}
              onBlur={() => setFieldTouched("lastName")}
              required
            />
            <Field
              type="text"
              placeholder="Dirección"
              name="address"
              component={CustomField}
              className={sx.input}
              values={values.people}
              onChange={handleChange("address")}
              onBlur={() => setFieldTouched("address")}
              required
            />
            <Field
              type="email"
              placeholder="Correo"
              name="email"
              component={CustomField}
              className={sx.input}
              values={values.people}
              onChange={handleChange("email")}
              onBlur={() => setFieldTouched("email")}
              required
            />
            {errorMessage && <p className={sx.errorMessage}>{errorMessage}</p>}
            <button
              className={`${sx.button} ${
                Object.keys(values).length < 4 && sx.disabled
              }`}
              disabled={
                !(
                  Object.keys(errors).length === 0 &&
                  Object.keys(values).length === 4
                )
              }
              type="submit"
            >
              Reservar
            </button>
          </form>
        )}
      </Formik>
    </Modal>
  )
}

export default ReservationForm
