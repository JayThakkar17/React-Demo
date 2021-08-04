import { all } from 'redux-saga/effects';
import loginSaga from './Sagas/loginSaga';

export function* rootSaga() {
  yield all([loginSaga()]);
}
