import { all } from 'redux-saga/effects';
import addRoleSaga from './Sagas/addRoleSaga';
import deleteRoleSaga from './Sagas/deleteRoleSaga';
import getRoleIdSaga from './Sagas/getRoleIdSaga';
import loginSaga from './Sagas/loginSaga';
import roleSaga from './Sagas/roleSaga';
import updateRoleSaga from './Sagas/updateRoleSaga';

export function* rootSaga() {
  yield all([
    loginSaga(),
    roleSaga(),
    updateRoleSaga(),
    addRoleSaga(),
    deleteRoleSaga(),
    getRoleIdSaga(),
  ]);
}
