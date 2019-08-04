import styled from 'styled-components';

export const MainLink = styled.a `
  font-family: "OpenSans", sans-serif;
  /* TODO подключить этот шрифт! */
  font-size: 16px;
  color: #3985ec;
  cursor: pointer;
  transition: color .3s;

  &:hover,
  &:active {
    color: #0165ff;
  }
`;

export const HeaderLink = styled(MainLink) `
  position: relative;
  color: #323c48;

  &:hover {
    color: #7822f8;
  }

  &:active:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -8px;
    color: #8f03fd;
    border-bottom: 2px solid #7822f8;
  }
`;