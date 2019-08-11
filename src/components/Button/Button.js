import React from "react";
import { PropTypes as pt } from "prop-types";
import { ButtonStyled } from "./Button.styled";

const Button = ({
  children,
  disabled,
  type,
  theme,
  onClick,
  className,
  size
}) => (
  <ButtonStyled
    disabled={disabled}
    theme={theme}
    type={type}
    size={size}
    onClick={onClick}
    className={className}
  >
    {children}
  </ButtonStyled>
);

Button.propTypes = {
  theme: pt.oneOf(["primary", "secondary", "tetriary"]),
  type: pt.string,
  onClick: pt.func
};

Button.defaultProps = {
  theme: "primary",
  type: "button"
};

export default Button;
