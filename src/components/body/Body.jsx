import React from "react";
import styles from "./Body.module.css";
import clsx from "clsx";

export const Body = ({ children, style, className, ...props }) => {
  return (
    <h1
      className={clsx(styles.body, className)}
      style={{ ...style }}
      {...props}
    >
      {children}
    </h1>
  );
};
