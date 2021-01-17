import React, { useState, useEffect } from 'react';
import Appbar from './components/Appbar';
import NominationsList from './components/NominationsList';
import MoviesList from './components/MoviesList';
import axios from 'axios';

import './App.scss';

function App() {
  const [movie, setMovie] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [nominationsList, setNominationsList] = useState([]);
  const [error, setError] = useState(false);
  const [searching, setSearching] = useState(false);
  const [nominationError, setNominationError] = useState("");
  const [addedNotification, setAddedNotification] = useState("");

  // initialize the movies on the front of the page to iron man movies because tony stark is the best
  useEffect(() => {
    axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=9cb40b71&s="iron%20man"&type="movie"`)
    .then((data) => {
      setMovieList(data.data.Search);
    })
    .catch((err) => {
      console.log(err);
    })
  }, []);

  // renders all the nominations from the local storage when the website loads
  useEffect(() => {
    const storedNominations = JSON.parse(localStorage.getItem('nominations'));
    if (storedNominations) {
      setNominationsList(storedNominations);
    }
  }, [])

  // saves all the nominations in the local storage so that the data persists after reloading page
  useEffect(() => {
    localStorage.setItem('nominations', JSON.stringify(nominationsList));
  }, [nominationsList])

  // handles the onlick functionality when clients search for movies
  function handleSearch(event) {
    event.preventDefault();
    setError(false);
    setMovieList([]);
    axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=9cb40b71&s=""&s=${movie}&type="movie"`)
    .then((data) => {
      //intentiionally delay setting state for movies list to show the searching animation
      setSearching(true);
      setTimeout(() => {
        if (data.data.Response === "True") {
          setError(false);
          setMovieList(data.data.Search);
        }
        else {
          setError(true);
        }
        setSearching(false);
      }, 1000);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  return (
    <div className="App">
      <Appbar movie={movie} setMovie={setMovie} handleSearch={handleSearch} />
      <div className="Lists">
        <MoviesList 
          movie={movie} 
          movieList={movieList} 
          nominationsList={nominationsList} 
          setNominationsList={setNominationsList} 
          error={error} 
          searching={searching}
          setNominationError={setNominationError}
          setAddedNotification={setAddedNotification}
        /> 
        <NominationsList 
          nominationsList={nominationsList} 
          setNominationsList={setNominationsList}
          nominationError={nominationError}
          addedNotification={addedNotification}
        />
      </div>
    </div>
  );
}

export default App;
