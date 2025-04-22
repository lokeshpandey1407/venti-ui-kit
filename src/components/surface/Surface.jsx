import React, { useEffect } from "react";
import { fetchStyles } from "../../api/fetchStyles";
import styles from "./Surface.module.css";
import clsx from "clsx";

export const Surface = ({ children, style, className, ...props }) => {
  useEffect(() => {
    fetchStyles();
  }, []);

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
