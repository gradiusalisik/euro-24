import styled from "styled-components";
import { colors } from "../../variables";

export const CardServicesStyled = styled.div`
  display: flex;
`;

export const Icon = styled.div`
  margin-right: 16px;
`;

export const Info = styled.div``;

export const Title = styled.h4`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: bold;
  color: ${colors.main};
`;

export const Description = styled.p`
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 1.43;
  color: ${colors.main};
`;

export const PriceWrap = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const Text = styled.span`
  padding-bottom: 4px;
  font-size: 14px;
  color: ${colors.main};
`;

export const Price = styled.span`
  padding-left: 8px;
  padding-right: 8px;
  font-size: 32px;
  font-weight: 500;
  color: ${colors.orange};
`;
