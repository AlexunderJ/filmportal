import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from './rootReducer';
import { rootSaga } from './rootSaga';
import { rootState } from './rootState';

export const configureStore = (initialState) => {
  const sagaMiddleware = createSagaMiddleware();
  const enhancers = [composeWithDevTools(applyMiddleware(sagaMiddleware))];
  const store = createStore(rootReducer, initialState(), compose(...enhancers));
  sagaMiddleware.run(rootSaga);

  return store;
};

export const rootStore = configureStore(rootState);
