import React from "react";
import PropTypes from "prop-types";

import styles from "./Card.module.scss";

function Card({ user }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardInner}>
        <div className={styles.cardFront}>
          <img src={user.avatar} alt="" />
        </div>
        <div className={styles.cardBack}>
          <h1>{user.id}</h1>
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
      </div>
    </div>
  );
}

Card.propTypes = {
  user: PropTypes.object,
};

export default Card;
