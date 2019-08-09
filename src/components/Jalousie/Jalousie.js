import React, { useState } from "react";

// data
import { tabs } from "../../assets/dataJson/jalousie";

import Title from "../Title/Title";
import Tabs from "../Tabs/Tabs";

import { JalousieStyled, Content } from "./Jalousie.styled";

const Jalousie = () => {
  const [tabId, setTabId] = useState(tabs[0].id);

  const handleClick = id => {
    setTabId(id);
  };
  return (
    <JalousieStyled>
      <Title>Заказать жалюзи</Title>
      <Tabs id={tabId} onClick={handleClick} tabs={tabs} />
      <Content>Hello</Content>
    </JalousieStyled>
  );
};

export default Jalousie;
