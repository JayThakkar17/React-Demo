import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from '../Store/store';
import Layout from '../Components/Layouts/Layout';
import Login from '../Components/Login/Login';

function Routes() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Layout} />
      </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default Routes;
