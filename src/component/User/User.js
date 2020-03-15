import React, { useState } from 'react';
import { userInfo } from 'os';

const User = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(userInfo => userData(userInfo))
    
    const userData = (userInfo)=> {
        userInfo
    };
  const [user,setUser]= useState(userData);
    return (
        <div>
            <h3>Name : {user.name}</h3>
        </div>
    );
};

export default User;
