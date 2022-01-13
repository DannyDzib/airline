import * as Yup from "yup"

const CharacterSchema = Yup.object().shape({
  firstName: Yup.string().required("requerido"),
  lastName: Yup.string().required("requerido"),
  address: Yup.string().required("requerido"),
  email: Yup.string().email('Invalid email').required("requerido"),
})

export default CharacterSchema
