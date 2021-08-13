import React, { useState } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Form, FormGroup, Input } from 'reactstrap';

import AuthUser from '../../HOC/AuthUser';
import store from '../../../Store/store';
import { addRoleRequest } from '../../../Store/Actions/roleActions';

function CreateNewUser() {
  const [roleName, setRoleName] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addRoleRequest(roleName));
    history.push('/roles');
  };

  const goBackHandler = () => {
    history.push('/roles');
  };

  return (
    <Provider store={store}>
      <Form inline className='container'>
        <legend className='mr-sm-2'>Enter New RoleName</legend>
        <FormGroup className='inner-form mb-2 mr-sm-2 mb-sm-0'>
          <Input
            value={roleName}
            onChange={(e) => setRoleName(e.target.value)}
            type='text'
            name='Name'
            id='exampleName'
          />
        </FormGroup>
        <FormGroup className='my-3'>
          <button
            onClick={submitHandler}
            type='button'
            className='btn btn-outline-success'
          >
            ADD
          </button>
          <button
            onClick={goBackHandler}
            type='button'
            className='btn btn-outline-secondary'
          >
            BACK
          </button>
        </FormGroup>
      </Form>
    </Provider>
  );
}

export default AuthUser(CreateNewUser);
