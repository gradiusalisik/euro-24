import React, { useState } from "react";

// data
import { tabs, servicesWindow } from "../../assets/dataJson/services";

import Title from "../Title/Title";

import {
  ServicesStyled,
  Content,
  TabsStyled,
  CardsServices,
  CardServicesStyled,
  Window
} from "./Services.styled";

const Services = () => {
  const [tabId, setTabId] = useState(tabs[0].id);
  const [serviceId, setServiceId] = useState(tabs[0].id);

  const handleClick = id => {
    setTabId(id);
  };

  const handleClickCard = id => () => {
    setServiceId(id);
  };

  return (
    <ServicesStyled>
      <Title>Наши услуги</Title>
      <TabsStyled id={tabId} onClick={handleClick} tabs={tabs} />
      <Content>
        <Window>
          {/* TODO Вынести в отдельный компонент CardsServices */}
          <CardsServices>
            {servicesWindow.map(service => (
              <CardServicesStyled
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                price={service.price}
                value={service.value}
                onClick={handleClickCard(service.id)}
              />
            ))}
          </CardsServices>
        </Window>
      </Content>
    </ServicesStyled>
  );
};

export default Services;
