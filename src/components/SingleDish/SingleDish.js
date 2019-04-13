import React from 'react'

const singleDish  = (props) => {
    console.log(props)
    return (
        <div>
            <h1>The Dishes</h1>
            <p>Id : {props.match.params.id}</p>
        </div>
        
    );
}

export default singleDish;