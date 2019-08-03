import React from "react";

import { ButtonStyled } from "./Button.styled";

export const Button: React.FC = ({ children }) => (
  <ButtonStyled>{children}</ButtonStyled>
);
