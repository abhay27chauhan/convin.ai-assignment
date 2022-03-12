import React from "react";
import PropTypes from "prop-types";

import useFetch from "Hooks/useFetch/useFetch";

import styles from "./UserInfoCard.module.scss";
import Loader from "components/Loader/Loader";

function UserInfoCard({ userId }) {
  const [response, loading, error] = useFetch(userId);

  console.log(response, loading, error);
  return (
    <div className={styles.container}>
      {loading ? (
        <Loader size={40} />
      ) : error ? (
        <h1>Some Error Occurred. Please Try Again.</h1>
      ) : response == null ? (
        <h1>Click on any below button to display user data</h1>
      ) : (
        <div>
          <h1 className={styles.heading}>{response.data.id}</h1>
          <ul>
            <li>
              <strong>First Name:</strong> {response.data.first_name}
            </li>
            <li>
              <strong>Last Name:</strong> {response.data.last_name}
            </li>
            <li>
              <strong>Email:</strong> {response.data.email}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

UserInfoCard.propTypes = {
  userId: PropTypes.number,
};

export default UserInfoCard;
