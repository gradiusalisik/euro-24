import React from "react";
import styled from "styled-components";

import { Button } from "./components/Button/Button";
import { ButtonSecondary } from "./components/Button/Button";
import { ButtonTetriary } from "./components/Button/Button";

const AppStyled = styled.div`
`;

export default class App extends React.Component {
  render() {
    return (
      <AppStyled>
        <Button>Перезвонить?</Button>
        <Button disabled>Перезвонить?</Button>
        <ButtonSecondary>Перезвонить?</ButtonSecondary>
        <ButtonSecondary disabled>Перезвонить?</ButtonSecondary>
        <ButtonTetriary>Перезвонить?</ButtonTetriary>
        <ButtonTetriary disabled>Перезвонить?</ButtonTetriary>
      </AppStyled>
    );
  }
}
