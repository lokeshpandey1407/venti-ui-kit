import React from "react";
import styles from "./Heading.module.css";
import clsx from "clsx";

export const Heading = ({ children, style, className, ...props }) => {
  return (
    <h1
      className={clsx(styles.heading, className)}
      style={{ ...style }}
      {...props}
    >
      {children}
    </h1>
  );
};
