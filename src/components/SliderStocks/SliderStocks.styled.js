import styled from "styled-components";
import Slider from "react-slick";
import CardStock from "../CardStocks/CardStocks";
import IconLeft from "../../assets/img/icons/ic-arrow-left.svg";
import IconRight from "../../assets/img/icons/ic-arrow-right.svg";

export const SliderStocksStyled = styled(Slider)`
  .slick-center {
    transform: scale(1.3);
    transition: transform 0.3s ease;
  }

  .slick-list {
    padding-top: 80px !important;
    padding-bottom: 80px !important;
  }

  .slick-arrow {
    position: absolute;
    z-index: 100;
    top: -40px;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0;
    background-color: transparent;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
    border: none;
  }

  .slick-arrow.slick-next {
    right: 60px;
    background-image: url(${IconRight});
  }

  .slick-arrow.slick-prev {
    right: 116px;
    background-image: url(${IconLeft});
  }
`;

export const CardStocksStyled = styled(CardStock)`
  padding-left: 20px;
  padding-right: 20px;
`;