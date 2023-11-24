import React from "react";
import styles from "./Input.module.css";
type Props = {
  children?: React.ReactNode;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onKeyPress?: React.KeyboardEventHandler<HTMLInputElement>;
  inputData?: string;
  placeholder?: string;
};

const Input = (props: Props) => {
  return (
    <input
      className={styles["input-field"]}
      onChange={props.onChange}
      placeholder={props.placeholder ? props.placeholder : ""}
      value={props.inputData}
      onKeyDown={props.onKeyPress}
    />
  );
};

export default Input;
