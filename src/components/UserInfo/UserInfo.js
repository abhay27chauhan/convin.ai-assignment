import React, { useState } from "react";

import UserInfoCard from "components/UserInfoCard/UserInfoCard";
import UserList from "components/UserList/UserList";

function UserInfo() {
  const [userSelected, setUserSelected] = useState(null);
  console.log(userSelected, setUserSelected);

  return (
    <>
      <UserInfoCard />
      <UserList />
    </>
  );
}

export default UserInfo;
