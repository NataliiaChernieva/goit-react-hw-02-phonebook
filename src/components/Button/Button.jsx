import React from "react";
import PropTypes from 'prop-types';
import { CustomButton } from "./Button.styled";

function Button({ text, type }) {
  return <CustomButton type={type}>{text}</CustomButton>;
}

Button.PropTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

export default Button;