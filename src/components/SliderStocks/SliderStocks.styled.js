import styled from "styled-components";
import Slider from "react-slick";
import CardStock from "../CardStocks/CardStocks";

export const SliderStocksStyled = styled(Slider)`
  .slick-slide {
    transform: scale(0.9);
    /* max-width: 464px; */
    transition: transform 0.3s ease;
  }

  .slick-center {
    transform: scale(1);
  }

  .slick-list {
    padding-top: 80px !important;
    padding-bottom: 80px !important;
  }
`;

export const CardStocksStyled = styled(CardStock)`
  padding-left: 20px;
  padding-right: 20px;
`;

export const List = styled.div`
  display: flex;
`;
