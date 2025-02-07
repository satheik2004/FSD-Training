import React from 'react';

const Wish = ({ isLoggedIn }) => {
    if(isLoggedIn){
        return <h1>Welcome Back! User!</h1>
    }
    else{
        return <h1>Please LOGIN User!</h1>
    }
}

export default Wish;