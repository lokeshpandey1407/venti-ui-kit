import React from "react";
import { fetchStyles } from "../../api/fetchStyles";
import styles from "./Button.module.css";
import clsx from "clsx";

export const Button = ({ children, type, style, className = "", ...props }) => {
  React.useEffect(() => {
    fetchStyles();
  }, []);

  return (
    <button
      className={clsx(styles.button, className)}
      type={type}
      style={{ ...style }}
      {...props}
    >
      {children}
    </button>
  );
};
