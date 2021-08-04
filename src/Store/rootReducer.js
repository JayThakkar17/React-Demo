import { combineReducers } from 'redux';
import loginReducer from './Reducers/loginReducer';

const rootReducer = combineReducers({
  login: loginReducer,
});

export default rootReducer;
