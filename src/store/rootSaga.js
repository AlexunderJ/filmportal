import { all } from 'redux-saga/effects';
import { movieDBSaga } from '../components/MoviDatabase/saga/movieDBSaga';

export function* rootSaga() {
  yield all([
    movieDBSaga(),
  ])
};