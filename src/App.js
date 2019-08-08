import React, { useState, useRef, useEffect } from "react";

import { Element } from "react-scroll";

import Header from "./components/Header/Header";
import FirstScreen from "./components/FirstScreen/FirstScreen";
import SliderStocks from "./components/SliderStocks/SliderStocks";

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
      <Element name="stocks">
        <SliderStocks />
      </Element>
      <Element name="portfolio">portfolio</Element>
      <Element name="reviews">reviews</Element>
    </AppStyled>
  );
};

export default App;
