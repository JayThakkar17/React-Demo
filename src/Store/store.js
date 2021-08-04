import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './rootReducer';
import createSagaMiddleWare from 'redux-saga';
import { rootSaga } from './index';

const sagaMiddleWare = createSagaMiddleWare();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleWare))
);

sagaMiddleWare.run(rootSaga);

export default store;
