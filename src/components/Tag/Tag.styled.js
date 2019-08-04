import styled from 'styled-components';

export const TagStyled = styled.button `
  padding: 4px 15px;
  /* TODO что не так с отступами? */
  display: inline-block;
  height: 30px;
  font-size: 14px;
  white-space: nowrap;
  color: #7e8fa4;
  border-radius: 20px;
  background-color: #ffffff;
  border: solid 1px #7e8fa4;
  transition: border .3s, color .3s;

  &:hover {
    color: #3985ec;
    border: solid 1px #3985ec;
  }
`;

export const TagBlueStyled = styled(TagStyled) `
  border: none;
  color: #fff;
  background-color: #3985ec;
  transition: background-color .3s;

  &:hover {
    color: #fff;
    background-color: #116fff;
    border: none;
  }
`;