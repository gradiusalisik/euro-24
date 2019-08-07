import React from "react";

import { ButtonStyled } from "./Button.styled";

const Button: React.FC = ({ children }) => (
  <ButtonStyled>{children}</ButtonStyled>
);

export default Button;
