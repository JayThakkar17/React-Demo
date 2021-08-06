import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../Components/Login/Login';
import Dashboard from '../Components/Pages/Dashboard/Dashboard';
import Home from '../Components/Pages/Home/Home';
import Photos from '../Components/Pages/Photos/Photos';
import Layout from '../Components/Layouts/Layout';
import store from '../Store/store';

function Routes() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path='/login' component={Login} />
          {/* <Route path='/' component={Login} /> */}
          <>
            <Layout />
            <Route path='/home' component={Home} />
            <Route path='/photos' component={Photos} />
            <Route path='/dashboard' component={Dashboard} />
          </>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default Routes;
