import React, { useState, useEffect } from 'react';
import MovieListItem from './MovieListItem';
import loading from '../images/status.png';

import "./MovieList.scss";

export default function MoviesList(props) {
    function handleNomination(movie) {
        //checks if nominations list is already at 10 movies
        if (props.nominationsList.length >= 10) {
            props.setNominationError("Nominations list is full! Remove some before you add any more!")
            setTimeout(() => {
                props.setNominationError("");
            }, 2000);
        }
        //check if the movie is already in the nominations list
        else if (props.nominationsList.map(nom => nom.imdbID).indexOf(`${movie.imdbID}`) > -1) {
            props.setNominationError(`${movie.Title} is already in your nominations list!`);
            setTimeout(() => {
                props.setNominationError("");
            }, 3000);
        }
        //else add the movie to the nominations list
        else {
            props.setNominationsList([...props.nominationsList, movie]);
            props.setAddedNotification(`${movie.Title} was added successfully!`);
            setTimeout(() => {
                props.setAddedNotification("");
            }, 3000);
        }
    }

    return (
        <div className="movielist-outer-container">
            <p className="movies-subtitle">
                Movies
            </p>
            { !props.error && 
                <div className="movieList-container">
                    {props.movieList.map((movie) => (
                        <div key={movie.imdbID} className="movies-list-item">
                            <MovieListItem 
                                title={movie.Title}
                                year={movie.Year}
                                poster={movie.Poster}
                                setNominationsList={props.setNominationsList}
                            />
                            <button onClick={() => handleNomination(movie)} className="nominations-btn">
                                Nominate!
                            </button>
                        </div>
                    ))}
                </div>
            }  

            { props.error && 
                <div className="no-results-container">
                    <span className="loading-text">No Movies Found! :( </span>
                </div>
            }

            {
                props.searching &&
                <div className="loading-container">
                    <img src={loading} className="loading-movies" />
                    <span className="loading-text">Searching ...</span>
                </div>
            }
        </div>
    )
}