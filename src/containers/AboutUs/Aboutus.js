import React from 'react'

const aboutus = (props) => {
    console.log(props)
    return (
        <div style={{textAlign: 'center'}}>
            <h1>About Us</h1>
            <p>We are the first vegan restaurant build with <strong>React!</strong></p>
        </div>
    );
}

export default aboutus;