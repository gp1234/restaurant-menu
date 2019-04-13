import React from 'react';
import './input.css';


const Input = (props) => {
    let element = null;
    switch(props.elementType) 
    {
        case 'input':
            element =  (<input type="text" className="text" {...props.elementConfig} />)
        break;

        case 'textarea':
            element = (<textarea rows="4" col="50"/>)
    }

    return (
        <div className="inputContainer">
            <label for={props.elementConfig ? props.elementConfig : null }>{props.title.toUpperCase()}</label>
            {element}
        </div>
    );
};

export default Input;