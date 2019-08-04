import styled from 'styled-components';

export const PrimaryButton = styled.button `
  display: inline-block;
  max-width: 155px;
  width: 100%;
  height: 40px;
  font-size: 16px;
  color: #ffffff;
  background-color: #3985ec;
  border: none;
  border-radius: 2px;
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

export const SecondaryButton = styled(PrimaryButton)`
  color: #ef7c2b;
  background-color: #ffffff;
  border: 1px solid #eb6a21;
  box-shadow: 0 4px 8px 0 rgba(230, 120, 44, 0);
  transition: background-color .3s, color .3s, box-shadow .3s;

  &:hover {
    color: #fff;
    background-color: #fcb258;
    border-color: transparent;
    box-shadow: 0 4px 8px 0 rgba(230, 120, 44, 0.15);
  }

  &:active {
    color: #ffffff;
    background-color: #ffa231;
    box-shadow: 0 4px 8px 0 rgba(230, 120, 44, 0.15);
  }

  &:disabled {
    color: #f9cbab;
    background-color: #ffffff;
    pointer-events: none;
    cursor: not-allowed;
    border-color: #f7c4a7;
    box-shadow: none;
  }
`;


export const TetriaryButton = styled(SecondaryButton)`
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
    color: #fff;
    background-color: #fee1bd;
    box-shadow: none;
  }
`;