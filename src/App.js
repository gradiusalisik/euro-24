import React, { useState, useRef, useEffect } from "react";
import { Provider } from "mobx-react";
import { Element } from "react-scroll";

import { store } from "./store/store";

import Header from "./components/Header/Header";
import FirstScreen from "./components/FirstScreen/FirstScreen";
import Stocks from "./components/Stocks/Stocks";
import Portfolio from "./components/Portfolio/Portfolio";
import Reviews from "./components/Reviews/Reviews";
import Jalousie from "./components/Jalousie/Jalousie";
import Balconies from "./components/Balconies/Balconies";
import Services from "./components/Services/Services";
import Nets from "./components/Nets/Nets";
import Window from "./components/Window/Window";
import Repair from "./components/Repair/Repair";
import Footer from "./components/Footer/Footer";
import ModalSuccess from "./components/ModalSuccess/ModalSuccess";
import FixedButton from "./components/FixedButton/FixedButton";
import Promo from "./components/Promo/Promo";

import {
  AppStyled,
  HeaderScroll,
  Container,
  ContentWindow,
  CupboardStyled,
  Content,
  ContentWrap
} from "./App.styled.js";

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
    <Provider {...store}>
      <AppStyled>
        <Container>
          <div ref={headerEl}>
            <Header />
          </div>

          <HeaderScroll isScroll isShowHeader={isShowHeader} />
          <FirstScreen />
          <Element name="window">
            <Window />
            <Promo />
            <ContentWindow>
              <Jalousie />
              <Nets />
            </ContentWindow>
          </Element>
          <Element name="repair">
            <Repair />
          </Element>
          <Element name="balconies">
            <Balconies />
            <CupboardStyled />
          </Element>
          <Content>
            <ContentWrap>
              <Element name="services">
                <Services />
              </Element>
              <Element name="stocks">
                <Stocks />
              </Element>
              <Element name="portfolio">
                <Portfolio />
              </Element>
            </ContentWrap>
          </Content>
          <Element name="reviews">
            <Reviews />
          </Element>
          <Footer />
          <ModalSuccess />
          <FixedButton />
        </Container>
      </AppStyled>
    </Provider>
  );
};

export default App;
