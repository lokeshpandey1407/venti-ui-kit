import React from "react";
import styles from "./Surface.module.css";
import clsx from "clsx";

export const Surface = ({ children, style, className, ...props }) => {
  return (
    <div
      className={clsx(styles.surface, className)}
      style={{ ...style }}
      {...props}
    >
      {children}
    </div>
  );
};
