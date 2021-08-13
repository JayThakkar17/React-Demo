import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Form, FormGroup, Input } from 'reactstrap';
import { userLogin } from '../../Store/Actions/loginActions';
import { useHistory } from 'react-router-dom';

import logo from '../../Assets/Images/logo.jpeg';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passError, setPassError] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  const loginStore = useSelector((state) => state.login);
  const { response } = loginStore;

  useEffect(() => {
    if (response.accessToken) {
      history.push('/dashboard');
    }
  }, [history, response.accessToken]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (email === '' && password === '') {
      setError("Field can't be empty");
      setPassError('');
      setEmailError('');
    } else if (email === '') {
      setPassError("Email can't be empty");
      setError('');
    } else if (password === '') {
      setEmailError("Password can't be empty");
      setError('');
    } else {
      dispatch(userLogin(email, password));
    }
  };

  return (
    <Form className='container'>
      <FormGroup>
        <img src={logo} alt='logo' />
      </FormGroup>

      <FormGroup row>
        <legend>Email</legend>

        <Col sm={10} />
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type='email'
          name='email'
          placeholder='Enter Your Email'
        />
        <div style={{ color: 'red' }}>
          {error}
          {passError}
        </div>
      </FormGroup>

      <FormGroup row>
        <legend sm={2}>Password</legend>

        <Col sm={10} />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type='password'
          name='password'
          placeholder='Enter Your Password'
        />
        <div style={{ color: 'red' }}>
          {error}
          {emailError}
        </div>
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
