import React from 'react';

const List = props => {

    let list = null;
        
    if(props.films[0]){
    list = <div>

    {props.films.map(film=>(film.Search.map(title=>(
        <li key={title.imdbID} onClick={()=> props.onShowDetails(title.imdbID)}>
            {title.Title}
            <span> - {title.Year}</span>
        </li>
        ))))}
        </div>
    
          }else{
              list = <h1>Dupa</h1>
          }
        
        
    


    return (
        <div>
            <ul>
                {list}
            </ul>
        </div>
    )
}

export default  List;