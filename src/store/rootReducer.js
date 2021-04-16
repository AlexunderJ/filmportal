import { combineReducers } from "redux";
import { movieDBReducer } from "../components/MoviDatabase/reducers/movieDBReducer";

export const rootReducer = combineReducers({
  movieDB: movieDBReducer,
})