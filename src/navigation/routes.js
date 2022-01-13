import Home from "screens/home"
import ShoppingCart from "screens/shoppingCart"
import Flights from "screens/flights"
import Error404 from "screens/error404"

const routes = [
  {
    path: "/",
    name: "Home Page",
    component: Home,
    exact: true,
    isProtected: false,
  },
  {
    path: "/flights",
    name: "flights",
    component: Flights,
    exact: true,
    isProtected: true,
  },
  {
    path: "/shopping-cart",
    name: "Shopping Cart",
    component: ShoppingCart,
    exact: true,
    isProtected: false,
  },
  { path: "*", name: "Error 404", component: Error404, exact: false },
  /*
    {
        path: '/character/:id(\\d+)',
        name: 'About Page',
        component: CharacterAddEdit,
        exact: true
    } */
]

export default routes
