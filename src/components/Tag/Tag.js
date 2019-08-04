import React from "react";

import { TagStyled, TagBlueStyled } from "./Tag.styled";

export const Tag = ({ children }) => (
  <TagStyled>{children}</TagStyled>
);

export const TagBlue = ({ children }) => (
  <TagBlueStyled>{children}</TagBlueStyled>
);