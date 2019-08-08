import React, { useState, useRef, useEffect } from "react";

import { Element } from "react-scroll";

import Header from "./components/Header/Header";
import FirstScreen from "./components/FirstScreen/FirstScreen";

// TODO Delete ME later
import { ButtonPrimary, ButtonSecondary, ButtonTetriary } from "./components/Button/Button";
import { Tag, TagBlue } from "./components/Tag/Tag";
import { Tab, TabBlue } from "./components/Tab/Tab";


import { AppStyled, HeaderScroll } from "./App.styled.js";

const App = () => {
  const [isShowHeader, setShowHeader] = useState(false);
  const headerEl = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const scrollPage = window.pageYOffset;
    const headerHeight = headerEl.current.getBoundingClientRect().height;

    if (scrollPage > headerHeight) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
  };

  return (
    // TODO удалить гигантскую высоту, когда будут блоки
    <AppStyled style={{ height: 5000 }}>
      <div ref={headerEl}>
        <Header />
      </div>

      <HeaderScroll isScroll isShowHeader={isShowHeader} />
      <FirstScreen />
      <Element name="box">box</Element>
      <Element name="repair">repair</Element>
      <Element name="balconies">balconies</Element>
      <Element name="services">services</Element>
      <Element name="stocks">stocks</Element>
      <Element name="portfolio">portfolio</Element>
      <Element name="reviews">reviews</Element>
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
};

export default App;