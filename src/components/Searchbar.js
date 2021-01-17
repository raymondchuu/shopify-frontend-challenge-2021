import React from 'react';

import './Searchbar.scss';

export default function Searchbar(props) {
    function handleSetMovie(event) {
        props.setMovie(event.target.value)
    }

    return (
        <div className="searchbar-container">
            <form>
                <input 
                    type="text" 
                    className="searchbar" 
                    placeholder="Movie Title..."
                    onChange={(event) => handleSetMovie(event)}
                    required
                />
                <button onClick={(event) => props.handleSearch(event)} className="search-btn">
                    Search
                </button>
            </form>
        </div>
    )
}