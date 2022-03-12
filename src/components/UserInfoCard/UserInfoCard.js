import React from "react";
import PropTypes from "prop-types";

import useFetch from "Hooks/useFetch/useFetch";

import styles from "./UserInfoCard.module.scss";

function UserInfoCard({ userId }) {
  const [response, loading, error] = useFetch(userId);

  console.log(response, loading, error);
  return <div className={styles.container}></div>;
}

UserInfoCard.propTypes = {
  userId: PropTypes.number,
};

export default UserInfoCard;
