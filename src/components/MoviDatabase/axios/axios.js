import axios from 'axios';

const instance = axios.create({
    
    method: 'GET',
    baseURL: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
    headers: {
        'content-type':'application/octet-stream',
      'x-rapidapi-key': 'c9e4f14e5cmsh756d01a9c035371p115da9jsnf832a6c5ff72',
      'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com'
    }
});
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getData: (title) =>
    instance({
        'method':'GET',
        'url':'',
        'params': {s: title, page: '1', r: 'json'}
    }),

    getDetail:(filmId)=>
    instance({
        'method': 'GET',
        'url': 'https://movie-database-imdb-alternative.p.rapidapi.com/',
        'params': {i: filmId , r: 'json'},
    })}

// instance.defaults.headers.common['Authorization'] = 'c9e4f14e5cmsh756d01a9c035371p115da9jsnf832a6c5ff72';

