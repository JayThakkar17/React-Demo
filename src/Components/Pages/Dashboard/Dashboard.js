import React from 'react';
import AuthUser from '../../HOC/AuthUser';

function Dashboard() {
  return <h1>Dashboard Page</h1>;
}

export default AuthUser(Dashboard);
