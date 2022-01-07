import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from 'navigation/routes';
import { Provider } from 'react-redux'
import Store from 'redux/Store';

const App = () => {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              render={(props) => (
                <route.component
                  {...props}
                  {...route.props}
                />
              )}
            />
          ))}
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
