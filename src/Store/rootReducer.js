import { combineReducers } from 'redux';
import getRoleByIdReducer from './Reducers/getRoleByIdReducer';
import loginReducer from './Reducers/loginReducer';
import roleReducer from './Reducers/roleReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  role: roleReducer,
  getRoleId: getRoleByIdReducer,
});

export default rootReducer;
