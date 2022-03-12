import React from "react";
import PropTypes from "prop-types";

import styles from "./Card.module.scss";

function Card({ userId }) {
  return (
    <div className={styles.card} id={userId}>
      {userId}
    </div>
  );
}

Card.propTypes = {
  userId: PropTypes.number,
};

export default Card;
