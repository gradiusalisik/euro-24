import React from "react";

import { PrimaryButton } from "./Button.styled";
import { SecondaryButton } from "./Button.styled";
import { TetriaryButton } from "./Button.styled";


export const ButtonPrimary = ({ children, disabled }) => (
  <PrimaryButton disabled={disabled}>{children}</PrimaryButton>
);

export const ButtonSecondary = ({ children, disabled }) => (
  <SecondaryButton disabled={disabled}>{children}</SecondaryButton>
);

export const ButtonTetriary = ({ children, disabled }) => (
  <TetriaryButton disabled={disabled}>{children}</TetriaryButton>
);