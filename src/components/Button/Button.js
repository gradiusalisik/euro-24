import React from "react";

import { PrimaryButtonStyled, SecondaryButtonStyled, TetriaryButtonStyled } from "./Button.styled";

export const ButtonPrimary = ({ children, disabled }) => (
  <PrimaryButtonStyled disabled={disabled}>{children}</PrimaryButtonStyled>
);

export const ButtonSecondary = ({ children, disabled }) => (
  <SecondaryButtonStyled disabled={disabled}>{children}</SecondaryButtonStyled>
);

export const ButtonTetriary = ({ children, disabled }) => (
  <TetriaryButtonStyled disabled={disabled}>{children}</TetriaryButtonStyled>
);