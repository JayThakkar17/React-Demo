import React from 'react';
import { getName } from '../../../Utils/login';

import AuthUser from './../../HOC/AuthUser';

import './Home.css';

function Home() {
  return <h1>Hello {getName()}</h1>;
}

export default AuthUser(Home);
