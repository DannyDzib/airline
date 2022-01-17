import moment from "moment"
import EsMx from "moment/locale/es-mx"

export const formatDate = (date) => {
  return moment(date).locale("es-mx", [EsMx]).format("LL")
}

export const formatDateByHour = (date) => {
  return moment(date).locale("es-mx", [EsMx]).format("LT")
}

export const formatDateYYYYMMDD = (date) => {
  return moment(date).format("YYYY-MM-DD")
}
