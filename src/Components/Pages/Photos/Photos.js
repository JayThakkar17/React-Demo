import React from 'react';
import AuthUser from '../../HOC/AuthUser';

function Photos() {
  return <h1>Photos</h1>;
}

export default AuthUser(Photos);
