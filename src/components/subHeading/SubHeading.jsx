import React from "react";
import styles from "./SubHeading.module.css";
import clsx from "clsx";

export const SubHeading = ({ children, style, className, ...props }) => {
  return (
    <h3
      className={clsx(styles.heading, className)}
      style={{ ...style }}
      {...props}
    >
      {children}
    </h3>
  );
};
