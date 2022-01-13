import moment from "moment"
import EsMx from "moment/locale/es-mx"

export const formatDate = (date)=>{
  return moment(date).locale("es-mx", [EsMx]).format("LL")
}