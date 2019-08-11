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
  onClick,
  onMouseOver,
  onMouseOut,
  className
}) => (
  <CardServicesStyled
    onClick={onClick}
    onMouseOver={onMouseOver}
    onMouseOut={onMouseOut}
    className={className}
  >
    <Icon>{icon}</Icon>
    <Info>
      <Title>{title}</Title>
      <Description>{description}</Description>

      <PriceWrap>
        <Text>от</Text>
        <Price>{numberWithSpaces(price)}</Price>
        <Text>руб/м2</Text>
      </PriceWrap>
    </Info>
  </CardServicesStyled>
);

export default CardServices;
