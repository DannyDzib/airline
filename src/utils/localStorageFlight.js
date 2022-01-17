import LocalStorageService from "services/localStorageService"

export const saveLocalStorageFligth = (value) => {
  let isSave = false
  let error = ""
  try {
    const storageFlights = LocalStorageService.getItem("flights")
    const existing =
      storageFlights && storageFlights.find((item) => item.id === value.id)

    if (existing) error = "Este vuelo ya esta reservado"
    else {
      LocalStorageService.setItem(
        "flights",
        storageFlights ? [...storageFlights, value] : [value]
      )
      isSave = true
    }
  } catch (e) {
    console.log(e)
    error = "Error"
  }

  return { isSave, error }
}

export const deleteLocalStorageFligth = (id) => {
  let isDelete = false
  let error = ""
  try {
    const storageFlights = LocalStorageService.getItem("flights")
    const newStorageFlights =
      storageFlights && storageFlights.filter((item) => item.id !== id)
    LocalStorageService.setItem("flights", newStorageFlights)
    isDelete = true
  } catch (e) {
    console.log(e)
    error = "Error"
  }

  return { isDelete, error }
}
