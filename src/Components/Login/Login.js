import React, { useState } from 'react';
import { Col, Form, Button, FormGroup, Label, Input } from 'reactstrap';

import logo from '../../Assets/Images/logo.jpeg';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Form className='container' onSubmit={submitHandler}>
      <FormGroup>
        <img src={logo} />
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

      <button type='submit' className='btn btn-primary'>
        SUBMIT
      </button>
      <button className='btn btn-dark'>REGISTER</button>
    </Form>
  );
}

export default Login;
