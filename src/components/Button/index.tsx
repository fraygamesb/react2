import React from "react";
import styles from "./style.module.css";

interface ButtonProps extends React.ComponentProps<"button"> {
  disabled: boolean;
}

const Button = ({ children, disabled = false, ...props }: ButtonProps) => {
  return (
    <button
      className={
        disabled ? `${styles.button} ${styles.disabled}` : `${styles.button}`
      }
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
