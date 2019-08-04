import React from "react";

import { LinkStyled, HeaderLinkStyled } from "./Link.styled";

export const Link = ({ children }) => (
  <LinkStyled>{children}</LinkStyled>
);

export const HeaderMenuLink = ({ children }) => (
  <HeaderLinkStyled  as="button">{children}</HeaderLinkStyled >
);