import React, { Component } from 'react';
import { isLoggedIn } from '../../Utils/login';

const foo = (ChieldComponent) => {
  class IsAuthUser extends Component {
    UNSAFE_componentWillMount() {
      this.checkIsLoggedin();
    }

    UNSAFE_componentWillUpdate() {
      this.checkIsLoggedin();
    }

    checkIsLoggedin = () => {
      if (!isLoggedIn()) {
        this.props.history.push('/login');
      }
    };

    render() {
      return <ChieldComponent {...this.props} />;
    }
  }

  return IsAuthUser;
};

export default foo;
