import styled from "styled-components";
import { colors } from "../../variables";

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
`;

export const Label = styled.label`
  display: block;
  width: 32px;
  height: 32px;
  background-image: url(${p => p.background});
  background-size: contain;
  border-radius: 50%;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 0 0 6px ${colors.softBlue};
  }

  &:active {
    box-shadow: 0 0 0 3px ${colors.white},
    0 0 0 6px ${colors.softBlueTwo};
  }
`;