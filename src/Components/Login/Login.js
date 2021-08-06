import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { userLogin } from '../../Store/Actions/loginActions';
import { useHistory } from 'react-router-dom';

import logo from '../../Assets/Images/logo.jpeg';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import { authToken, isLoggedIn } from '../../Utils/login';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  const loginStore = useSelector((state) => state.login);
  const { response } = loginStore;
  // console.log(response);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(userLogin(email, password));
    if (response.statusCode === 200) {
      history.push('/layout');
    }
  };

  console.log('response.statusCode', response.statusCode);
  return (
    <Form className='container'>
      <FormGroup>
        <img src={logo} alt='logo' />
      </FormGroup>

      <FormGroup row>
        <Label for='exampleEmail' sm={2}>
          Email
        </Label>
        <Col sm={10} />
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type='email'
          name='email'
          placeholder='Enter Your Email'
        />
      </FormGroup>

      <FormGroup row>
        <Label for='examplePassword' sm={2}>
          Password
        </Label>
        <Col sm={10} />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type='password'
          name='password'
          placeholder='Enter Your Password'
        />
      </FormGroup>
      <br />
      <button
        type='submit'
        className='btn btn-primary btn-lg'
        onClick={(e) => submitHandler(e)}
      >
        LOGIN
      </button>
      <button className='btn btn-dark btn-lg'>REGISTER</button>
    </Form>
  );
}

export default Login;
