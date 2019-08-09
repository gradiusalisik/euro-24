import React, { useState } from "react";

// data
import { tabs } from "../../assets/dataJson/cupboard";

import Title from "../Title/Title";
import Tabs from "../Tabs/Tabs";

import { CupboardStyled, Content } from "./Cupboard.styled";

const Cupboard = () => {
  const [tabId, setTabId] = useState(tabs[0].id);

  const handleClick = id => {
    setTabId(id);
  };
  return (
    <CupboardStyled>
      <Title>Выбрать шкаф на балкон</Title>
      <Tabs id={tabId} onClick={handleClick} tabs={tabs} />
      <Content>Hello</Content>
    </CupboardStyled>
  );
};

export default Cupboard;
