import styled from "styled-components";
import { colors } from "../../variables";

export const SocialIconsStyled = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 105px;
`;

export const SocialIconsLink = styled.a`
  color: rgba(255, 255, 255, 0.3);
  transition: color 0.3s;

  &:hover {
    color: ${colors.white}
  }
  
  &:not(:last-child) {
    margin-right: 30px;
  }
`;