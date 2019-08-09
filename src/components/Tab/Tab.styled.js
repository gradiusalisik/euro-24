import styled from 'styled-components';
import { TagStyled, TagBlueStyled } from "../Tag/Tag.styled";

export const TabStyled = styled(TagStyled) `
  padding-left: 17px;
  padding-right: 17px;
  
  &:first-child {
    border-radius: 50px 0 0 50px;
  }

  &:last-child {
    border-radius: 0 50px 50px 0;
  }
`;

export const TabBlueStyled = styled(TagBlueStyled) `
  padding-left: 17px;
  padding-right: 17px;
  border-radius: 0 50px 50px 0;
`;