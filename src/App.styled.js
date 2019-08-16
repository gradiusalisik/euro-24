import styled, { css } from "styled-components";
import Header from "./components/Header/Header";

export const HeaderScroll = styled(Header)`
  ${props =>
    props.isShowHeader &&
    css`
      transform: translateY(0);
    `}
`;
