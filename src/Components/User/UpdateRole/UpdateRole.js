import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Form, FormGroup, Input } from 'reactstrap';
import {
  getRoleIDRequest,
  updateRoleRequest,
} from '../../../Store/Actions/roleActions';
import AuthUser from '../../HOC/AuthUser';

function UpdateRole(props) {
  const [id, setId] = useState();
  const [roleName, setRoleName] = useState('');

  const history = useHistory();
  const dispatch = useDispatch();

  const getIdStore = useSelector((state) => state.getRoleId.roleNameArray);

  useEffect(() => {
    setId(props.match.params);
    dispatch(getRoleIDRequest(props.match.params.id));
  }, [props.match.params, dispatch]);

  useEffect(() => {
    setRoleName(getIdStore);
  }, [getIdStore]);

  const updateHandler = (e) => {
    e.preventDefault();
    dispatch(updateRoleRequest(id, roleName));
    history.push('/roles');
  };

  const goBackHandler = () => {
    history.push('/roles');
  };

  return (
    <div>
      <h1>Update Role</h1>
      <Form inline className='container'>
        <FormGroup className='inner-form mb-2 mr-sm-2 mb-sm-0'>
          <legend className='mr-sm-2'>Role Name</legend>
          <Input
            value={roleName || ''}
            onChange={(e) => setRoleName(e.target.value)}
            type='text'
            name='roleName'
            id='exampleroleName'
          />
        </FormGroup>
        <button
          type='submit'
          onClick={(e) => updateHandler(e)}
          className='btn btn-outline-primary my-3'
        >
          UPDATE
        </button>
        <button
          type='button'
          onClick={goBackHandler}
          className='btn btn-outline-secondary my-3'
        >
          Back
        </button>
      </Form>
    </div>
  );
}

export default AuthUser(UpdateRole);
