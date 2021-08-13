import React, { useEffect } from 'react';
import {
  deleteRoleRequest,
  getRoleRequest,
} from '../../../Store/Actions/roleActions';

import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import { useHistory } from 'react-router';

import * as FaIcons from 'react-icons/fa';
import * as GrIcons from 'react-icons/gr';
import * as MdIcons from 'react-icons/md';

import AuthUser from '../../HOC/AuthUser';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Roles.css';

function Roles() {
  const history = useHistory();
  const dispatch = useDispatch();
  const roleStore = useSelector((state) => state.role);
  const { loading, response, error } = roleStore;

  useEffect(() => {
    dispatch(getRoleRequest());
  }, [dispatch]);

  const deleteHandler = (e, id) => {
    e.preventDefault();
    if (window.confirm('Are You Sure, You Want To Delete It ?')) {
      dispatch(deleteRoleRequest(id));
    }
  };

  const addNewUserHandler = (e) => {
    e.preventDefault();
    history.push('/roles/create');
  };

  const updateRoleHandler = (e, id) => {
    e.preventDefault();
    history.push(`/roles/update/${id}`);
  };

  const roleList =
    response &&
    response.map((roleName) => {
      return (
        <tr key={roleName.id}>
          <td>{roleName.id}</td>
          <td>{roleName.roleName}</td>
          <td>
            <button
              type='button'
              onClick={(e) =>
                updateRoleHandler(e, roleName.id, roleName.roleName)
              }
              className='btn btn-secondary'
            >
              UPDATE <GrIcons.GrUpdate />{' '}
            </button>
            <button
              onClick={(e) => deleteHandler(e, roleName.id)}
              className='btn btn-danger'
            >
              DELETE <MdIcons.MdDelete />{' '}
            </button>
          </td>
        </tr>
      );
    });

  return (
    <>
      <button
        onClick={(e) => addNewUserHandler(e)}
        className='btn btn-primary'
        style={{ marginLeft: '10%' }}
      >
        Create Role <FaIcons.FaPlus />{' '}
      </button>
      <div className='containerr'>
        <div>
          {loading && <h1>Loading...</h1>}
          {error && <h1>Something Went Wrong</h1>}

          {response && response.length > 0 && (
            <div>
              <Table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Role Name</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>{roleList}</tbody>
              </Table>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default AuthUser(Roles);
