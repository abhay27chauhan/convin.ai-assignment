import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Loader from "components/Loader/Loader";
import { userFetchMiddleWare } from "redux/userFetchMiddleware";

import styles from "./UserInfoCard.module.scss";

function UserInfoCard({ user, loading, error, userId, fetchUser }) {
  useEffect(() => {
    if (!userId) return;
    fetchUser(userId);
  }, [userId]);

  return (
    <div className={styles.container}>
      {loading ? (
        <Loader size={40} />
      ) : error ? (
        <h1>Some Error Occurred. Please Try Again.</h1>
      ) : user == null ? (
        <h1>Click on any below button to display user data</h1>
      ) : (
        <>
          <div className={styles.image}>
            <img src={user.avatar} />
          </div>
          <div>
            <h1 className={styles.heading}>{user.id}</h1>
            <ul>
              <li>
                <strong>First Name:</strong> {user.first_name}
              </li>
              <li>
                <strong>Last Name:</strong> {user.last_name}
              </li>
              <li>
                <strong>Email:</strong> {user.email}
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

function mapStatetoProps(store) {
  return store.User;
}

function mapDispatchtoProps(dispatch) {
  return {
    fetchUser: (id) => {
      return dispatch((dispatch) => userFetchMiddleWare(dispatch, id));
    },
  };
}

UserInfoCard.propTypes = {
  userId: PropTypes.string,
  loading: PropTypes.bool,
  error: PropTypes.object,
  user: PropTypes.object,
  fetchUser: PropTypes.func,
};

export default connect(mapStatetoProps, mapDispatchtoProps)(UserInfoCard);
