import React from "react";
import { fetchStyles } from "../../api/fetchStyles";
import styles from "./SubHeading.module.css";
import clsx from "clsx";
import { defaultTheme } from "../../assets/defaultThemeConfig";

export const SubHeading = ({
  children,
  style,
  theme = defaultTheme.theme,
  className,
  ...props
}) => {
  React.useEffect(() => {
    fetchStyles(theme);
  }, [theme]);

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
