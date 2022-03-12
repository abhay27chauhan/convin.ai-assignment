import React, { useState } from "react";

import useFetch from "Hooks/useFetch/useFetch";
import Loader from "components/Loader/Loader";
import Card from "components/Card/Card";

import styles from "./UserList.module.scss";

function UserList() {
  const [pageNumber, setPageNumber] = useState(1);
  console.log(setPageNumber);
  const [response, loading, error] = useFetch(`?page=${pageNumber}`);

  console.log(response, error);

  return loading ? (
    <Loader size={60} />
  ) : !error ? (
    <div className={styles.cards}>
      {response.data.map((user) => (
        <Card key={user.id} user={user} />
      ))}
    </div>
  ) : (
    ""
  );
}

export default UserList;
