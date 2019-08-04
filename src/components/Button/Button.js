import React from "react";

import { PrimaryButton } from "./Button.styled";
import { SecondaryButton } from "./Button.styled";
import { TetriaryButton } from "./Button.styled";


export const ButtonPrimary: React.FC = ({ children, disabled }) => (
  <PrimaryButton disabled={disabled}>{children}</PrimaryButton>
);

export const ButtonSecondary: React.FC = ({ children, disabled }) => (
  <SecondaryButton disabled={disabled}>{children}</SecondaryButton>
);

export const ButtonTetriary: React.FC = ({ children, disabled }) => (
  <TetriaryButton disabled={disabled}>{children}</TetriaryButton>
);