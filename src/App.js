import React from "react"
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"
import routes from "navigation/routes"
import { Provider } from "react-redux"
import Store from "redux/Store"
import Layoult from "components/Layoult"

const App = () => {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Layoult>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                render={(props) => (
                  <>
                    {route.isProtected &&
                      (props.location.state ||
                        props.location.search === "") && <Redirect to={"/"} />}
                    <route.component {...props} {...route.props} />
                  </>
                )}
              />
            ))}
          </Switch>
        </Layoult>
      </BrowserRouter>
    </Provider>
  )
}

export default App
