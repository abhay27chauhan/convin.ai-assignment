import React, { useState } from "react";

import UserInfoCard from "components/UserInfoCard/UserInfoCard";
import UserList from "components/UserList/UserList";

function UserInfo() {
  const [userId, setUserId] = useState(null);

  function setState(id) {
    setUserId(id);
  }

  return (
    <>
      <UserInfoCard userId={userId} />
      <UserList setUserId={setState} />
    </>
  );
}

export default UserInfo;
