import React from 'react';
import NominationsListItem from './NominationsListItem';

import './NominationsList.scss';

export default function NominationsList(props) {
    const nominationItems = props.nominationsList.map((nominations) => (
        <NominationsListItem 
            key={nominations.imdbID}
            title={nominations.Title} 
            year={nominations.Year}
            id={nominations.imdbID}
            handleRemoveNomination={handleRemoveNomination}
        />
    ))
    function handleRemoveNomination(id) {
        let pos = props.nominationsList.map((nom) => (nom.imdbID)).indexOf(`${id}`);
        if (pos > -1) {
            let temp = props.nominationsList.slice();
            temp.splice(pos, 1);
            props.setNominationsList(temp);
        }
    }

    return (
        <div className="outer-right-container">
            <div className="nom-outer-container">
                <p className="nom-subtitle">
                    Your Nominations
                </p>
                {
                    props.nominationsList.length === 0 ? "Search for your favourite movies to start your nominations list!" : 
                    <div className="nom-inner-container">
                        {nominationItems}
                    </div>
                }
            </div>
            <div>
                { props.nominationError && <div className="nom-error-box">{props.nominationError}</div> }
                { props.addedNotification &&  <div className="nom-success-box">{props.addedNotification}</div> }
            </div>
        </div>

    )
}