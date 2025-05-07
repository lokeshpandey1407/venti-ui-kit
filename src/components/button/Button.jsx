import React from "react";
import styles from "./Button.module.css";
import clsx from "clsx";

export const Button = ({
  children,
  dataType = "primary",
  style,
  className = "",
  ...props
}) => {
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

// const Button = () => {
//   return (
//     <div>My component</div>
//   );
// };

// export default Button;
