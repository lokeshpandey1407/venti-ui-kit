import React, { useEffect } from "react";
import { fetchStyles } from "../../api/fetchStyles";
import styles from "./Body.module.css";
import clsx from "clsx";

export const Body = ({ children, style, className, ...props }) => {
  useEffect(() => {
    fetchStyles();
  }, []);

  return (
    <h1
      className={clsx(styles.surface, className)}
      style={{ ...style }}
      {...props}
    >
      {children}
    </h1>
  );
};
