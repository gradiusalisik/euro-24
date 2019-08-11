import React from "react";
import { PropTypes as pt } from "prop-types";
import { ButtonStyled, Wrap } from "./Button.styled";

const Button = ({ children, disabled, type, theme, onClick }) => (
  <ButtonStyled disabled={disabled} theme={theme} type={type} onClick={onClick}>
    <Wrap>{children}</Wrap>
  </ButtonStyled>
);

Button.propTypes = {
  theme: "primary" || "secondary" || "tetriary",
  type: pt.string,
  onClick: pt.func
};

Button.defaultProps = {
  theme: "primary",
  type: "button"
};

export default Button;
