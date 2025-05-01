import React from "react";
import styles from "./Caption.module.css";
import clsx from "clsx";

export const Caption = ({ children, style, className, ...props }) => {
  return (
    <h1
      className={clsx(styles.caption, className)}
      style={{ ...style }}
      {...props}
    >
      {children}
    </h1>
  );
};
