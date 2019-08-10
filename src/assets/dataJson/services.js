import React from "react";
import { Decor } from "../../components/Icons/Decor";
import { Blocks } from "../../components/Icons/Blocks";
import { Kladka } from "../../components/Icons/Kladka";
import { Move } from "../../components/Icons/Move";
import { MoveSecond } from "../../components/Icons/MoveSecond";
import { Woods } from "../../components/Icons/Woods";

export const tabs = [
  {
    id: "window",
    text: "Окна"
  },
  {
    id: "balconies",
    text: "Балконы"
  }
];

export const servicesWindow = [
  {
    id: "decor",
    icon: <Decor />,
    title: "Отделка балкона",
    description:
      "Стеклопакет толщиной 40 мм. Ваши окна будут бережно хранить тепло.",
    price: "500",
    value: "руб/м2"
  },
  {
    id: "blocks",
    icon: <Blocks />,
    title: "Французкое остекление",
    description: "Обеспечивает качественную теплоизоляцию высокого уровня.",
    price: "2600",
    value: "руб/м2"
  },
  {
    id: "kladka",
    icon: <Kladka />,
    title: "Кладка на балкон",
    description: "Контур уплотнения. Продлевает срок жизни окон до 50 лет.",
    price: "2100",
    value: "руб/м2"
  },
  {
    id: "woods",
    icon: <Woods />,
    title: "Крыша на балкон",
    description: "Обеспечивает качественную теплоизоляцию высокго уровня",
    price: "4950",
    value: "руб/м2"
  },
  {
    id: "move",
    icon: <Move />,
    title: "Вынос балкона",
    description: "Контур уплотнения. Продлевает срок жизни оконо до 50 лет.",
    price: "1000",
    value: "руб/м2"
  },
  {
    id: "move-second",
    icon: <MoveSecond />,
    title: "Присоединение балкона",
    description: "Контур уплотнения. Продлевает срок жизни оконо до 50 лет.",
    price: "15000",
    value: "руб"
  }
];
