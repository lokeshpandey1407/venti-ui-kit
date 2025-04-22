import React from "react";
import { fetchStyles } from "../../api/fetchStyles";
import styles from "./Surface.module.css";
import clsx from "clsx";

export const Surface = ({ children, style, className, ...props }) => {
  React.useEffect(() => {
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
