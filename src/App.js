import React from "react";
import styled from "styled-components";

import { ButtonPrimary, ButtonSecondary, ButtonTetriary } from "./components/Button/Button";
import { Link, HeaderMenuLink } from "./components/Link/Link";

const AppStyled = styled.div`
`;

export default class App extends React.Component {
  render() {
    return (
      <AppStyled>
        <ButtonPrimary>Перезвонить?</ButtonPrimary>
        <ButtonPrimary disabled>Перезвонить?</ButtonPrimary>
        <ButtonSecondary>Перезвонить?</ButtonSecondary>
        <ButtonSecondary disabled>Перезвонить?</ButtonSecondary>
        <ButtonTetriary>Перезвонить?</ButtonTetriary>
        <ButtonTetriary disabled>Перезвонить?</ButtonTetriary>
        <Link>info@master-pvx.ru</Link>
        <HeaderMenuLink>Окна</HeaderMenuLink>
      </AppStyled>
    );
  }
}
