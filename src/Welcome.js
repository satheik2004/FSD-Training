import React from 'react';
import './App.css';

const Welcome = ({ name, greeting }) => {
    return (
        <h1 className='message'>{greeting}, {name}</h1>
    );
};

export default Welcome;
