import React, { useState } from "react";

// data
import { tabs } from "../../assets/dataJson/services";

import Title from "../Title/Title";
import Tabs from "../Tabs/Tabs";

import { ServicesStyled, Content } from "./Services.styled";

const Services = () => {
  const [tabId, setTabId] = useState(tabs[0].id);

  const handleClick = id => {
    setTabId(id);
  };

  return (
    <ServicesStyled>
      <Title>Наши услуги</Title>
      <Tabs id={tabId} onClick={handleClick} tabs={tabs} />
      <Content>Hello</Content>
    </ServicesStyled>
  );
};

export default Services;
