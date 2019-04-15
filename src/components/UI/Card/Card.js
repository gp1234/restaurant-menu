import React from 'react';
import './Card.css';

const card = (props) => {
    return (
        <div className="card" key={props.key}>
            {props.children}
        </div>
    )
};

export default card;