const initialState = {
    title: 'star'
}

const reducer = (state = initialState , action) =>{
    console.log(state);
    if (action.type === 'SEARCH_TITLE'){
        return {
            ...state,
            title: action.title
        }
    }
    return state;
}

export default reducer;