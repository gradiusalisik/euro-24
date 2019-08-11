import React from "react";
import { numberWithSpaces } from "../../utils/numberWithSpaces";

import {
  CardServicesInsideStyled,
  Title,
  Description,
  PriceWrap,
  Text,
  Price
} from "./CardServicesInside.styled";

const CardServicesInside = ({ title, description, price, className }) => (
  <CardServicesInsideStyled className={className}>
    <Title>{title}</Title>
    <Description>{description}</Description>

    <PriceWrap>
      <Text>от</Text>
      <Price>{numberWithSpaces(price)}</Price>
      <Text>руб/м2</Text>
    </PriceWrap>
  </CardServicesInsideStyled>
);

export default CardServicesInside;
