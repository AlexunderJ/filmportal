import { movieDBState } from "../state/movieDBState";

export const movieDBReducer = (state = movieDBState , action) =>{
    if (action.type === 'SEARCH_TITLE'){
        return {
            ...state,
            title: action.payload.title
        }
    }
    return state;
}
