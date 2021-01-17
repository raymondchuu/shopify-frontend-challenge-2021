import React from 'react';

import "./MovieListItem.scss";

export default function MovieListItem(props) {
    return (
        <div className="movie-container">
            <img src={props.poster} className="movie-img" alt={props.title}/>
            <span className="movie-title">{props.title}</span>
            <span className="movie-year">{props.year}</span>
        </div>
    )
}