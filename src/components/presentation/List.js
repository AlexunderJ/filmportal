import React from 'react';

const List = ({ films, onShowDetails }) => {

    if (!films || films.length === 0 || films[0].Error) {
        return null;
    }

    const list = films.map(film=>(film.Search.map(title=>(
        <li key={title.imdbID} onClick={()=> onShowDetails(title.imdbID)}>
            {title.Title}
            <span> - {title.Year}</span>
        </li>
    ))))

    return (
        <div>
            <ul>
                {list}
            </ul>
        </div>
    )
}

export default  List;