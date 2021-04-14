import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { selectSearchFilm } from '../MoviDatabase/selectors/selector';

const useActions = () => {
    const dispatch = useDispatch();

    return {
        searchTitle: (title) => {
            dispatch({type: 'SEARCH_TITLE', title})
        }
    }
}

const useSelectors = () => {
    return {
        searchFilm: useSelector(selectSearchFilm),
    }
}

export const SearchBar = () => {
    const {searchTitle} = useActions();
    const {searchFilm} = useSelectors();

    return (
        <div>
            <label htmlFor="title">Title</label>
            <input type="text" value={searchFilm} id="title"
            onChange={event =>{
                searchTitle(event.target.value)}}/>
            <button  onClick={() => {
                searchTitle(searchFilm)
            }}
                >Serch</button>
                {/* <h1>{this.props.search}</h1> */}
        </div>
    )
}
