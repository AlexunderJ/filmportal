import React, {useEffect, useState} from "react";
import axiosMD from '../MoviDatabase/axios/axios';
import List from '../presentation/List';
import Details from '../presentation/Details';
import { useSelector } from "react-redux";
import {selectSearchFilm} from '../MoviDatabase/selectors/selector';

const useSelectors = () => ({
  title: useSelector(selectSearchFilm),
})

export default function FilmBox() {
    const {title} = useSelectors();
    const [filmState, setFilm] = useState(title);
    const [ratingState, setRating] = useState("");
    const [serchFilms, setSerchFilms] = useState([]);
    const [detailFilms, setDetailFilms] = useState([]);

    useEffect(() => {
      setFilm(title);
      addFilm({title:title, rating: ratingState})
    }, [title]);
    /// - AXIOS METHOD
    
    console.log(1);
    setTimeout(() => {
      console.log(2);
    }, 0);
    (() => {
      console.log(3);
    })()
    console.log(4);


    const addFilm = film => {


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
          Dodaj tyt????
        </button>
        <List films={serchFilms} onShowDetails={(id)=>(onShowDetails(id))}/>
        <Details films={detailFilms}/>
      </div>
    );
 
}
