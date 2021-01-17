import React from 'react';
import Searchbar from './Searchbar';
import trophy from '../images/trophy.png';

import './Appbar.scss';

export default function Appbar(props) {
    return (
        <div className="appbar-container">
            <div className="appbar-inner-container">
                <div className="logo-container">
                    <h1 className="logo">The Shoppies</h1>
                    <img src={trophy} style={{width: '50px'}}/>
                </div>
                <div className="searchbar">
                    <Searchbar movie={props.movie} setMovie={props.setMovie} handleSearch={props.handleSearch} />
                </div>
                <div className="empty">&emsp;&emsp;&emsp;&emsp;</div>
            </div>

        </div>
    )
}