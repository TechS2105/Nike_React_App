import React from 'react';

function Logo(props) {
    
    return (

        <img src={props.image} alt="props.image || nikelogo" />

    );

}

export default Logo;