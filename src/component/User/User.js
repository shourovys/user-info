import React, { useState } from 'react';
import { userInfo } from 'os';

const User = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(userInfo => console.log(userInfo))

  const [user,setUser]= useState(userInfo);
    return (
        <div>
            <h3>Name : {user.name}</h3>
        </div>
    );
};

export default User;