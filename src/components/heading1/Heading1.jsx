import React, { useEffect } from "react";
import { fetchStyles } from "../../api/fetchStyles";
import styles from "./Heading1.module.css";
import clsx from "clsx";

export const Heading = ({ children, style, className, ...props }) => {
  useEffect(() => {
    fetchStyles();
  }, []);

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
