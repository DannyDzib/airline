import * as Yup from "yup"

const CharacterSchema = Yup.object().shape({
  origin: Yup.object().required("requerido"),
  destination: Yup.object().required("requerido"),
  date: Yup.string().required("requerido"),
  people: Yup.string().required("requerido"),
})

export default CharacterSchema
