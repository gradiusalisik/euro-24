import React, { useState, useRef, useEffect } from "react";

import { Element } from "react-scroll";

import Header from "./components/Header/Header";
import FirstScreen from "./components/FirstScreen/FirstScreen";
import Stocks from "./components/Stocks/Stocks";
import Portfolio from "./components/Portfolio/Portfolio";
import Reviews from "./components/Reviews/Reviews";
import Balconies from "./components/Balconies/Balconies";
import Jalousie from "./components/Jalousie/Jalousie";
import Cupboard from "./components/Cupboard/Cupboard";
import Services from "./components/Services/Services";
import Nets from "./components/Nets/Nets";
import Window from "./components/Window/Window";
import Repair from "./components/Repair/Repair";

import Radiobutton from "./components/Radiobutton/Radiobutton";

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
    <AppStyled>
      <div ref={headerEl}>
        <Header />
      </div>

      <HeaderScroll isScroll isShowHeader={isShowHeader} />
      <FirstScreen />
      <Radiobutton />
      <Element name="window">
        <Window />
        <Jalousie />
        <Nets />
      </Element>
      <Element name="repair">
        <Repair />
      </Element>
      <Element name="balconies">
        <Balconies />
        <Cupboard />
      </Element>
      <Element name="services">
        <Services />
      </Element>
      <Element name="stocks">
        <Stocks />
      </Element>
      <Element name="portfolio">
        <Portfolio />
      </Element>
      <Element name="reviews">
        <Reviews />
      </Element>
    </AppStyled>
  );
};

export default App;
