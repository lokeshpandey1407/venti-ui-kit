import React from "react";
import { fetchStyles } from "../../api/fetchStyles";
import styles from "./Surface.module.css";
import clsx from "clsx";
import { defaultTheme } from "../../assets/defaultThemeConfig";

export const Surface = ({
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
    <div
      className={clsx(styles.surface, className)}
      style={{ ...style }}
      {...props}
    >
      {children}
    </div>
  );
};
