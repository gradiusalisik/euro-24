import React, { useState } from "react";

// data
import { tabs } from "../../assets/dataJson/balconies";

import Title from "../Title/Title";
import Tabs from "../Tabs/Tabs";

import { BalconiesStyled, Content } from "./Balconies.styled";

const Balconies = () => {
  const [tabId, setTabId] = useState(tabs[0].id);

  const handleClick = id => {
    setTabId(id);
  };
  return (
    <BalconiesStyled>
      <Title>Подобрать балкон</Title>
      <Tabs id={tabId} onClick={handleClick} tabs={tabs} />
      <Content>Hello</Content>
    </BalconiesStyled>
  );
};

export default Balconies;
