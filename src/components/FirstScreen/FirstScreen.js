import React from "react";
import Button from "../Button/Button";

// data
import { firstScreen } from "../../assets/dataJson/firstScreen";

import {
  FirstScreenStyled,
  Left,
  Title,
  Description,
  Buttons,
  Image,
  Container,
  Brands,
  Item,
  Brand
} from "./FirstScreen.styled";

const { title, description, image, brands } = firstScreen;

const FirstScreen = () => (
  <FirstScreenStyled>
    <Container>
      <Left>
        <Title dangerouslySetInnerHTML={{ __html: title }} />
        <Description>{description}</Description>
        <Buttons>
          <Button>Подобрать для себя</Button>
          <Button theme="secondary">Задать вопрос</Button>
        </Buttons>
      </Left>
      <Image src={image} alt="repairs" />
    </Container>
    <Brands>
      {brands.map(brand => (
        <Item key={brand.id}>
          <Brand src={brand.brand} alt={brand.id} />
        </Item>
      ))}
    </Brands>
  </FirstScreenStyled>
);

export default FirstScreen;
