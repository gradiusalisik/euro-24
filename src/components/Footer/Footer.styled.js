import styled from "styled-components";
import { colors } from "../../variables";
import { LogoFooter } from "../Icons/LogoFooter";

export const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: ${colors.dark};
`;

export const Wrap = styled.div`
  padding: 28px 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 140px;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
`;

export const Right = styled.div`
  display: block;
`;

export const CopyrightStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 95px;
  border-top: 1px solid rgba(126, 143, 164, 0.5);
`;

export const CopyrightTextStyled = styled.span`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.3);
`;

export const LogoFooterStyled = styled(LogoFooter)`
  margin-right: 44px;
  width: 72px;
  height: 65px;
`;