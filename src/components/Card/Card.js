import React from "react";
import PropTypes from "prop-types";

import styles from "./Card.module.scss";

function Card({ userId, setUserId }) {
  return (
    <div className={styles.card} onClick={() => setUserId(userId)}>
      {userId}
    </div>
  );
}

Card.propTypes = {
  userId: PropTypes.number,
  setUserId: PropTypes.func,
};

export default Card;
