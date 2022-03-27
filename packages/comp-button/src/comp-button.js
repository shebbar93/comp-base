import React from "react";
import cx from "clsx";
import styles from "./styles.css";

const Button = ({ children, className, variant, type, ...rest }) => {
  const classes = cx(styles.Button, className);
  if (!type) throw new Error(`This cant be`);
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};

export { Button };
