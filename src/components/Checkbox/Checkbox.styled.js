import styled from "styled-components";
import { colors } from "../../variables";

export const Label = styled.label`
  position: relative;
  display: inline-block;
`;

export const Input = styled.input`
  position: absolute;
  overflow: hidden;
  width: 1px;
  height: 1px;
  padding: 0;
  border: 0;
  margin: -1px;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  white-space: nowrap;

  &:checked + span:before {
    background-color: ${colors.vividBlue};
  }

  &:checked + span:after {
    opacity: 1;
  }
`;

export const Text = styled.span`
  position: relative;
  display: inline-flex;
  font-size: 16px;
  color: ${colors.gray};
  border-radius: 2px;
  cursor: pointer;
  user-select: none;
  align-items: center;

  &:before {
    margin-right: 8px;
    display: inline-block;
    width: 16px;
    height: 16px;
    content: '';
    border: 1px solid ${colors.whiteBlue};
    background-color: ${colors.white};
    transition: background-color .3s; 
  }

  &:after {
    position: absolute;
    left: 4px;
    top: 5px;
    content: "";
    width: 9px;
    height: 4px;
    opacity: 0;
    border: 2px solid ${colors.white};
    border-top: none;
    border-right: none;
    transform: rotate(-52deg);
  }
`;