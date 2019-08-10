import React from "react";
import { numberWithSpaces } from "../../utils/numberWithSpaces";

import {
  CardServicesStyled,
  Icon,
  Info,
  Title,
  Description,
  PriceWrap,
  Text,
  Price
} from "./CardServices.styled";

const CardServices = ({
  icon,
  title,
  description,
  price,
  value,
  onClick,
  className
}) => (
  <CardServicesStyled onClick={onClick} className={className}>
    <Icon>{icon}</Icon>
    <Info>
      <Title>{title}</Title>
      <Description>{description}</Description>

      <PriceWrap>
        <Text>от</Text>
        <Price>{numberWithSpaces(price)}</Price>
        <Text>{value}</Text>
      </PriceWrap>
    </Info>
  </CardServicesStyled>
);

export default CardServices;
