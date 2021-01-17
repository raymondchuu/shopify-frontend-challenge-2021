import React from 'react';

import './NominationsListItem.scss';

export default function NominationsListItem(props) {
    return (
        <div className="nom-list-item">
            <div className="nom-list-inner-container">
                <p className="nom-list-title">
                    {props.title}
                </p> 

                <button onClick={() => props.handleRemoveNomination(props.id)} className="nom-remove-btn">
                    Remove
                </button>
            </div>
        </div>
    )
}