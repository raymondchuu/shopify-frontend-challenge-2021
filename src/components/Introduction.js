import React from 'react';
import trophy from '../images/trophy.png';

import "./Introduction.scss";

export default function Introduction(props) {
    let introClass = props.show ? "show" : "";

    return (
        <div className={"intro-container " + introClass} >
            <p className="intro-title">Welcome to the Shoppies!</p>
            <div>
            <img src={trophy} className="intro-trophy" />
            <img src={trophy} className="intro-trophy" />
            <img src={trophy} className="intro-trophy" />
            </div>
            <p className="intro-text">Start searching for your favourite movies to nominate them for a chance of winning a glorious Shoppy!</p>
            <button className="intro-btn" onClick={props.handleClose}>
                Start Searching!
            </button>
        </div>
    )
}