import React from "react";
import styled from "styled-components";

import { ButtonPrimary, ButtonSecondary, ButtonTetriary } from "./components/Button/Button";
import { Tag, TagBlue } from "./components/Tag/Tag";
import { Tab, TabBlue } from "./components/Tab/Tab";

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
        <Tag>Премиальные</Tag>
        <TagBlue>Премиальные</TagBlue>
        <Tab>Рольставни</Tab>
        <TabBlue>Рольставни</TabBlue>
      </AppStyled>
    );
  }
}
