import React, {useState} from "react";
import axiosMD from '../MoviDatabase/axios/axios';
import List from '../presentation/List';
import Details from '../presentation/Details';

export default function FilmBox() {
    const [filmState, setFilm] = useState("");
    const [ratingState, setRating] = useState("");
    const [serchFilms, setSerchFilms] = useState([]);
    const [detailFilms, setDetailFilms] = useState([]);

    /// - AXIOS METHOD
    

    
    const addFilm = film =>{


      axiosMD.getData(filmState).then(res => {
        return res.data;
      }).then(responseData =>{
          setSerchFilms([
          {id: Math.random().toString(), ...responseData}
          ]);
      }).catch(function (error) {
        console.error(error);
      });}


    const onShowDetails = filmId =>{
      axiosMD.getDetail(filmId).then(res => {
        return res.data;
      }).then(responseData =>{
        setDetailFilms(responseData);
      }).catch(function (error) {
        console.error(error);
      });
    }

    return (
      <div>
        <h1>Film {filmState} rating is {ratingState}</h1>
        <label htmlFor="title">Title</label>
        <input 
        type="text" 
        id ="tytul"
        value={filmState}
        onChange={event =>{
          setFilm(event.target.value);
        }}
        />
        <label htmlFor="rating">Rating</label>
        <input 
        type="number" 
        id ="rating"
        value={ratingState}
        onChange={event =>{
          setRating(event.target.value);
        }}
        />
        <button onClick={() => 
        addFilm({title:filmState, rating: ratingState})}>
          Dodaj tytół
        </button>
        <List films={serchFilms} onShowDetails={(id)=>(onShowDetails(id))}/>
        <Details films={detailFilms}/>
      </div>
    );
 
}
