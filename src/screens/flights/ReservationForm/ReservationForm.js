import { useState } from "react"
import { useHistory } from "react-router-dom"
import { Formik, Field } from "formik"
import Schema from "./Schema"
import CustomField from "components/CustomField"
import Modal from "components/Modal"
import sx from "./styles.module.css"
import FlightsCart from "components/FlightsCart"

const ReservationForm = (props) => {
  const { handleChangeModal, showModal = false } = props
  const [initialValues, setInitialValues] = useState({})
  const history = useHistory()

  const handleSubmit = (values) => {
    history.push(`/flights`, values)
  }

  return (
    <Modal
      showModal={showModal}
      handleChange={handleChangeModal}
      sxClassContent={sx.modalContent}
      title="RESERVA"
    >
      <FlightsCart showImage={false} sxClass={sx.cartReservation} />
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
              onChange={handleChange("date")}
              onBlur={() => setFieldTouched("date")}
              required
            />
            <Field
              type="text"
              placeholder="Apellidos"
              name="lastName"
              component={CustomField}
              className={sx.input}
              values={values.people}
              onChange={handleChange("people")}
              onBlur={() => setFieldTouched("people")}
              required
            />
            <Field
              type="text"
              placeholder="Dirección"
              name="address"
              component={CustomField}
              className={sx.input}
              values={values.people}
              onChange={handleChange("people")}
              onBlur={() => setFieldTouched("people")}
              required
            />
            <Field
              type="email"
              placeholder="Correo"
              name="email"
              component={CustomField}
              className={sx.input}
              values={values.people}
              onChange={handleChange("people")}
              onBlur={() => setFieldTouched("people")}
              required
            />
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
