import React from 'react';

const Details = props => {

    let details = null;
    
    if(props.films.length !== 0){
        details = 
        <div>
    {
        <span>
            {(((
            <div>
                <h1>{props.films.Title}</h1> 
                <span>Rok : {props.films.Year}</span>
                <div>
                <img src={props.films.Poster} alt='Poster'></img> 
                <span>Ocena : {props.films.imdbRating}</span>
                </div>
                <p>Fabuła : {props.films.Plot}</p>
            </div>)))}
        </span>

    }
        </div>

          }else{
            details = <h1>Nie ma</h1>
          }
        
        
       


    return (
        <div>
            <ul>
                {details}
            </ul>
        </div>
    )
}

export default  Details;