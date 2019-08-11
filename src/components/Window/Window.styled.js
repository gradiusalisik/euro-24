import styled from "styled-components";
import CardDescription from "../CardDescription/CardDescription";

export const WindowStyled = styled.div`
  margin-bottom: 100px;
`;

export const Content = styled.div`
  padding-top: 40px;
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

export const ButtonStyled = styled.button`
  border: none;
  background-color: transparent;
`;

export const Information = styled.div`
  display: flex;
`;

export const Slides = styled.div`
  overflow: hidden;
  width: 300px;
`;

export const List = styled.div`
  display: flex;
`;

export const CardDescriptionStyled = styled(CardDescription)`
  flex: 0 0 auto;
`;

export const Colors = styled.div``;
