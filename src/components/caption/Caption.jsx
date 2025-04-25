import React from "react";
import { fetchStyles } from "../../api/fetchStyles";
import styles from "./Caption.module.css";
import clsx from "clsx";
import { defaultTheme } from "../../assets/defaultThemeConfig";

export const Caption = ({
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
      className={clsx(styles.caption, className)}
      style={{ ...style }}
      {...props}
    >
      {children}
    </h1>
  );
};
