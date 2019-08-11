import styled, { css } from "styled-components";
import { colors } from "../../variables";
import SliderButton from "../SliderButton/SliderButton";

export const CardDescriptionStyled = styled.div`
  width: 300px;
  opacity: 0;
  transform: translateX(0);
  transition: transform 0.7s ease-in, opacity 0.7s ease-in;

  &:nth-child(${p => p.count + 1}) {
    opacity: 1;
  }

  ${p =>
    p.count &&
    css`
      transform: translateX(-${p.count * 300}px);
    `}
`;

export const Head = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const Content = styled.div``;

export const Title = styled.h3`
  font-size: 32px;
  padding-right: 45px;
  line-height: 1.5;
  color: ${colors.main};
`;

export const SliderButtonStyled = styled(SliderButton)`
  top: calc(50% + 4px);
  right: 0;
`;

export const Tags = styled.div`
  margin-top: 8px;
  margin-left: -10px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const Tag = styled.div`
  padding-left: 8px;
  padding-right: 8px;
  margin-left: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 20px;
  font-size: 12px;
  color: ${colors.white};
  background-color: ${colors.brightblue};
  border-radius: 20px;
`;

export const Description = styled.p`
  margin-top: 28px;
  margin-bottom: 24px;
  font-size: 14px;
  line-height: 1.43;
  color: ${colors.main};
`;

export const PriceWrap = styled.div`
  margin-bottom: 24px;
  display: flex;
  align-items: flex-end;
`;

export const PriceText = styled.span`
  padding-bottom: 4px;
  font-size: 14px;
  color: ${colors.main};
`;

export const Price = styled.span`
  padding-right: 8px;
  padding-left: 8px;
  font-size: 32px;
  font-weight: 500;
  color: ${colors.orange};
`;
