import { useState } from "react"
import { useHistory } from "react-router-dom"
import { Formik, Field } from "formik"
import CharacterSchema from "./Schema"
import ActualLocationIcon from "assets/icons/actual-location.png"
import LocationIcon from "assets/icons/location.png"
import MultiSelect from "components/MultiSelect"
import CustomField from "components/CustomField"
import Card from "components/Card"
import sx from "./styles.module.css"

const SearchFlightForm = (props) => {
  const { cities = [] } = props
  const [initialValues, setInitialValues] = useState({})
  const history = useHistory()

  const handleSubmit = (values) => {
    history.push(
      `/flights?destination=${values.destination.name}&origin=${values.origin.name}&date=${values.date}&people=${values.people}`
    )
  }

  return (
    <Card sxClass={sx.card}>
      <Formik
        enableReinitialize
        validationSchema={CharacterSchema}
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
            <h3>Busca tu viaje</h3>
            <MultiSelect
              options={cities}
              placeholder={"Origen"}
              icon={ActualLocationIcon}
              className={sx.select}
              name="origin"
              values={values.origin}
              onChange={(value) =>
                handleChange({ target: { name: "origin", value: value } })
              }
              onBlur={() => setFieldTouched("origin")}
              helperText={touched.origin && errors.origin}
              required
            />
            <MultiSelect
              options={cities}
              placeholder={"Destino"}
              icon={LocationIcon}
              className={sx.select}
              name="destination"
              values={values.destination}
              onChange={(value) =>
                handleChange({ target: { name: "destination", value: value } })
              }
              onBlur={() => setFieldTouched("destination")}
              helperText={touched.destination && errors.destination}
              required
            />
            <Field
              type="date"
              placeholder="Fecha"
              name="date"
              component={CustomField}
              className={sx.input}
              values={values.date}
              onChange={handleChange("date")}
              onBlur={() => setFieldTouched("date")}
              required
            />
            <Field
              type="number"
              placeholder="Personas"
              name="people"
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
              Buscar
            </button>
          </form>
        )}
      </Formik>
    </Card>
  )
}

export default SearchFlightForm
