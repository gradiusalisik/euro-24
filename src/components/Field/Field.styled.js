import styled, {css} from 'styled-components';
import { colors, font } from "../../variables";

export const FieldStyled = styled.div`
  display: block;

  ${props => props.filled && css`
    ${Input} {
      border-color: ${colors.main};
    }
  `};

  ${props => props.error && css`
    ${Input} {
      border-color: ${colors.softRed};
    }
    ${Error} {
      opacity: 1;
      visibility: visible;
    }
  `};
`;

export const Input = styled.input`
  padding-left: 12px;
  width: 100%;
  height: 40px;
  font-size: 16px;
  color: ${colors.main};
  border-radius: 2px;
  border: 1px solid ${colors.whiteBlue};
  transition: border-color 0.3s;

  &:focus {
    border-color: ${colors.vividBlueTwo};
  }
  
  &:placeholder {
    border-color: ${colors.gray};
  }
`;

export const Error = styled.span`
  opacity: 0;
  visibility: hidden;
  padding-top: 8px;
  display: block;
  font-family: ${font.openSans};
  font-size: 12px;
  color: ${colors.softRed};
  transition: opacity 0.3s;
`;
