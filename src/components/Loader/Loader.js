import React from "react";
import PropTypes from "prop-types";

import styles from "./Loader.module.scss";

function Loader({ size }) {
  return (
    <div className={styles.loader}>
      <div
        className={styles.loaderIcon}
        style={{ width: size, height: size }}
      />
    </div>
  );
}

Loader.propTypes = {
  size: PropTypes.number,
};

export default Loader;
