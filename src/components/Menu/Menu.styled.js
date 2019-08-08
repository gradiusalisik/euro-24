import styled from "styled-components";
import { colors, font } from "../../variables";

import { Link as LinkScroll } from "react-scroll";

export const MenuStyled = styled.nav`
  display: flex;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-right: 24px;
  }
`;

export const Link = styled(LinkScroll)`
  position: relative;
  font-size: 16px;
  font-family: ${font.openSans};
  cursor: pointer;
  color: ${colors.main};
  transition: color 0.3s;

  &:hover {
    color: ${colors.purple};
  }

  &::before {
    position: absolute;
    top: calc(100% + 5px);
    left: 0;
    width: 100%;
    height: 2px;
    content: "";
    background-color: transparent;
    transition: background-color 0.3s;
  }

  &.active {
    color: ${colors.purple};
    &::before {
      background-color: ${colors.purpleDark};
    }
  }
`;
