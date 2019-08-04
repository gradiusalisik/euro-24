import React from "react";

import { TabStyled, TabBlueStyled } from "./Tab.styled";

export const Tab = ({ children }) => (
  <TabStyled>{children}</TabStyled>
);

export const TabBlue = ({ children }) => (
  <TabBlueStyled>{children}</TabBlueStyled>
);