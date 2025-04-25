import React from "react";
import { fetchStyles } from "../../api/fetchStyles";
import styles from "./Heading.module.css";
import clsx from "clsx";
import { defaultTheme } from "../../assets/defaultThemeConfig";

export const Heading = ({
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
    <h1
      className={clsx(styles.heading, className)}
      style={{ ...style }}
      {...props}
    >
      {children}
    </h1>
  );
};
