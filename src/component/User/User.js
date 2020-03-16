import React, { useState } from "react";
import FackData from "../../Fack-data/FackData";
import DisplayUser from '../DisplayUser/DisplayUser'

const User = props => {
  const [usersInfo, setUsersInfo] = useState(FackData);

  return (
    <div>
      {usersInfo.map(userInfo => (
        <DisplayUser userInfo={userInfo}></DisplayUser>
      ))}
    </div>
  );
};

export default User;
