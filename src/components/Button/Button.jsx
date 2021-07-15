import React from "react";
import { CustomButton } from "./Button.styled";

function Button({ text, type }) {
  return <CustomButton type={type}>{text}</CustomButton>;
}

export default Button;