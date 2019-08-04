import styled from 'styled-components';

export const PrimaryButton = styled.button `
  display: inline-block;
  max-width: 155px;
  width: 100%;
  height: 40px;
  border-radius: 2px;
  box-shadow: 0 4px 8px 0 rgba(86, 149, 237, 0.15);
  background-color: #3985ec;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  color: #ffffff;
  border: none;
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

export const SecondaryButton = styled(PrimaryButton)`
  background-color: #ffffff;
  color: #ef7c2b;
  border: 1px solid #eb6a21;
  box-shadow: 0 4px 8px 0 rgba(230, 120, 44, 0);
  transition: background-color .3s, color .3s, box-shadow .3s;

  &:hover {
    background-color: #fcb258;
    color: #fff;
    border-color: transparent;
    box-shadow: 0 4px 8px 0 rgba(230, 120, 44, 0.15);
  }

  &:active {
    background-color: #ffa231;
    color: #ffffff;
    box-shadow: 0 4px 8px 0 rgba(230, 120, 44, 0.15);
  }

  &:disabled {
    background-color: #ffffff;
    color: #f9cbab;
    pointer-events: none;
    cursor: not-allowed;
    border-color: #f7c4a7;
    box-shadow: none;
  }
`;


export const TetriaryButton = styled(SecondaryButton)`
  background-color: #fcb258;
  color: #fff;
  box-shadow: 0 4px 8px 0 rgba(230, 120, 44, 0.15);
  border: none;
  transition: background-color .3s;

  &:hover {
    background-color: #ffa231;
  }

  &:active {
    background-color: #fb9923;
  }

  &:disabled {
    background-color: #fee1bd;
    color: #fff;
    box-shadow: none;
  }
`;