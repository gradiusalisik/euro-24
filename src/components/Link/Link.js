import React from "react";

import { MainLink, HeaderLink } from "./Link.styled";

export const Link: React.FC = ({ children }) => (
  <MainLink>{children}</MainLink>
);

export const HeaderMenuLink: React.FC = ({ children }) => (
  <HeaderLink>{children}</HeaderLink>
);