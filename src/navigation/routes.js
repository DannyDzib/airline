import Home from "../screens/home"
import Reservation from "../screens/reservation"

const routes = [
  {
    path: "/",
    name: "Home Page",
    component: Home,
    exact: true,
  },
  {
    path: "/reservation",
    name: "Reservacion",
    component: Reservation,
    exact: true,
  },
  /*
    {
        path: '/character/:id(\\d+)',
        name: 'About Page',
        component: CharacterAddEdit,
        exact: true
    } */
]

export default routes
