import React from "react";
import { fetchStyles } from "../../api/fetchStyles";
import styles from "./Button.module.css";
import clsx from "clsx";
import { defaultTheme } from "../../assets/defaultThemeConfig";

export const Button = ({
  children,
  dataType = "primary",
  style,
  className = "",
  theme = defaultTheme.theme,
  ...props
}) => {
  React.useEffect(() => {
    fetchStyles(theme);
  }, []);

  return (
    <button
      className={clsx(styles.button, className)}
      display={dataType}
      style={{ ...style }}
      {...props}
    >
      {children}
    </button>
  );
};
