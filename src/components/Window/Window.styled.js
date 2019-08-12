import styled from "styled-components";
import Advantage from "../Advantage/Advantage";

export const WindowStyled = styled.div`
  margin-bottom: 100px;
  padding-left: 96px;
  padding-right: 96px;
`;

export const Content = styled.div`
  padding-top: 40px;
  display: flex;
  justify-content: space-between;
`;

export const Visual = styled.div`
  margin-right: 40px;
`;

export const Photo = styled.div`
  width: 270px;
  height: 454px;
  mix-blend-mode: darken;
  background-image: url(${p => p.background});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const ButtonColor = styled.button`
  border: none;
  background-color: transparent;
`;

export const Buttons = styled.div`
  width: 210px;

  & > * {
    &:first-child {
      margin-bottom: 16px;
    }
  }
`;

export const Information = styled.div`
  display: flex;
  width: 50%;
`;

export const Colors = styled.div`
  width: 50%;
`;

export const Advantages = styled.div`
  padding-top: 118px;
  margin-left: -40px;
  display: flex;
  width: 50%;
  flex-wrap: wrap;
`;

export const AdvantageStyled = styled(Advantage)`
  margin-left: 40px;

  &:not(:nth-last-child(-n + 2)) {
    margin-bottom: 20px;
  }
`;
