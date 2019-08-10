import styled from "styled-components";
import Tabs from "../Tabs/Tabs";
import CardServices from "../CardServices/CardServices";

export const ServicesStyled = styled.div`
  margin-bottom: 100px;
`;

export const TabsStyled = styled(Tabs)`
  margin-bottom: 56px;
`;

export const Content = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1000px;
`;

export const Window = styled.div``;

export const CardsServices = styled.div`
  max-width: 680px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const CardServicesStyled = styled(CardServices)`
  width: calc(50% - 50px);

  &:not(:nth-last-child(-n + 2)) {
    margin-bottom: 80px;
  }
`;
