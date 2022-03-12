import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Loader from "components/Loader/Loader";
import Card from "components/Card/Card";
import { usersCountFetchMiddleWare } from "redux/userFetchMiddleware";

import styles from "./UserList.module.scss";

function UserList({ total, loading, error, setUserId, fetchUser }) {
  useEffect(() => {
    fetchUser();
  }, []);

  return loading ? (
    <Loader size={60} />
  ) : !error ? (
    <div className={styles.cards}>
      {new Array(total).fill(0).map((_, index) => (
        <Card key={index} userId={index + 1} setUserId={setUserId} />
      ))}
    </div>
  ) : (
    ""
  );
}

function mapStatetoProps(store) {
  return store.UserCount;
}

function mapDispatchtoProps(dispatch) {
  return {
    fetchUser: () => {
      return dispatch(usersCountFetchMiddleWare);
    },
  };
}

UserList.propTypes = {
  setUserId: PropTypes.func,
  loading: PropTypes.bool,
  error: PropTypes.object,
  total: PropTypes.number,
  fetchUser: PropTypes.func,
};

export default connect(mapStatetoProps, mapDispatchtoProps)(UserList);
