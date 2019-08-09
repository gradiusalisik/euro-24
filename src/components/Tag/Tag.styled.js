import styled from 'styled-components';
import { colors } from "../../variables";

export const TagStyled = styled.button `
  padding-left: 15px;
  padding-right: 15px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  font-size: 14px;
  white-space: nowrap;
  color: #7e8fa4;
  border-radius: 20px;
  background-color: ${colors.white};
  border: solid 1px #7e8fa4;
  transition: border .3s, color .3s;

  &:hover {
    color: ${colors.brightblue};
    border: solid 1px ${colors.brightblue};
}`;

export const TagBlueStyled = styled(TagStyled) `
  border: none;
  color: ${colors.white};
  background-color: ${colors.brightblue};
  transition: background-color .3s;

  &:hover {
    color: ${colors.white};
    background-color: ${colors.vividBlue};
    border: none;
  }
`;