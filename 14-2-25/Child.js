import React from 'react';

const Child = ({changeMessage}) => {
    return(
        <div>
            <button onClick={changeMessage}>Change Message</button>
        </div>
    )
    }

    export default Child;