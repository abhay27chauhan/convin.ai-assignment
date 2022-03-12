import React from "react";
import PropTypes from "prop-types";

import useFetch from "Hooks/useFetch/useFetch";
import Loader from "components/Loader/Loader";
import Card from "components/Card/Card";

import styles from "./UserList.module.scss";

function UserList({ setUserId }) {
  const [response, loading, error] = useFetch("");

  console.log(response, error);

  return loading ? (
    <Loader size={60} />
  ) : !error ? (
    <div className={styles.cards}>
      {new Array(response.total).fill(0).map((_, index) => (
        <Card key={index} userId={index + 1} setUserId={setUserId} />
      ))}
    </div>
  ) : (
    ""
  );
}

UserList.propTypes = {
  setUserId: PropTypes.func,
};

export default UserList;
