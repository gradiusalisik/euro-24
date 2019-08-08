import styled from 'styled-components';

export const Button = styled.button `
  padding: 12px 24px;
  display: inline-block;
  max-width: 155px;
  width: 100%;
  height: 40px;
  font-size: 16px;
  border-radius: 2px;
`;

export const PrimaryButtonStyled = styled(Button)`
  color: #ffffff;
  background-color: #3985ec;
  border: none;
  box-shadow: 0 4px 8px 0 rgba(86, 149, 237, 0.15);
  transition: background-color .3s;

  &:hover {
    background-color: #116fff;
  }

  &:active {
    background-color: #0165ff;
  }

  &:disabled {
    background-color: #b0cff8;
    pointer-events: none;
    cursor: not-allowed;
    box-shadow: none;
  }
`;

export const SecondaryButtonStyled = styled(Button)`
  color: #ef7c2b;
  background-color: #ffffff;
  border: 1px solid #eb6a21;
  transition: background-color .3s, color .3s, border-color .3s;

  &:hover,
  &:active {
    color: #fff;
    background-color: #fcb258;
    border-color: transparent;
    box-shadow: 0 4px 8px 0 rgba(230, 120, 44, 0.15);
  }

  &:active {
    background-color: #ffa231;
  }

  &:disabled {
    color: #f9cbab;
    pointer-events: none;
    cursor: not-allowed;
    background-color: #ffffff;
    border-color: #f7c4a7;
  }
`;

export const TetriaryButtonStyled = styled(Button)`
  color: #fff;
  background-color: #fcb258;
  border: none;
  box-shadow: 0 4px 8px 0 rgba(230, 120, 44, 0.15);
  transition: background-color .3s;

  &:hover {
    background-color: #ffa231;
  }

  &:active {
    background-color: #fb9923;
  }

  &:disabled {
    background-color: #fee1bd;
    box-shadow: none;
  }
`;