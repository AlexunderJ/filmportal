import React, {useState} from 'react';
import {connect} from 'react-redux';

export const SearchBar = ({search, searchTitle}) => {
    const [serchFilms, setSerchFilms] = useState('');
    return (
        <div>
            <label htmlFor="title">Title</label>
            <input type="text" value={serchFilms} id="title"
            onChange={event =>{
                setSerchFilms(event.target.value)}}/>
            <button  onClick={() =>{
                this.props.searchTitle(serchFilms)
            }}
                >Serch</button>
                {/* <h1>{this.props.search}</h1> */}
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        search: state.title
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        searchTitle: (title) => dispatch({type: 'SEARCH_TITLE', title:title})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);