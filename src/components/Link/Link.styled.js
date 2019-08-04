import styled from 'styled-components';

export const LinkStyled = styled.a `
  font-size: 16px;
  color: #3985ec;
  cursor: pointer;
  transition: color .3s;

  &:hover,
  &:active {
    color: #0165ff;
  }
`;

export const HeaderLinkStyled = styled(LinkStyled) `
  position: relative;
  color: #323c48;
  background: none;
  border: none;

  &:hover {
    color: #7822f8;
  }

  &:active:before {
    position: absolute;
    bottom: -8px;
    width: 100%;
    height: 2px;
    content: '';
    color: #8f03fd;
    border-bottom: 2px solid #7822f8;
  }
`;