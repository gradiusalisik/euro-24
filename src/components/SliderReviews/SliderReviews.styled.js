import styled from "styled-components";
import Slider from "react-slick";
import CardReviews from "../CardReviews/CardReviews";
import IconLeft from "../../assets/img/icons/ic-arrow-left.svg";
import IconRight from "../../assets/img/icons/ic-arrow-right.svg";

import { Content } from "../CardReviews/CardReviews.styled";

export const CardReviewsStyled = styled(CardReviews)`
  opacity: 0.8;
`;

export const SliderReviewsStyled = styled(Slider)`
  /* .slick-center { */
  .slick-current + .slick-slide {
    position: relative;
    z-index: 1;
    /* margin-left: -192px; */
    transform: scale(1.3);
    width: 630px;
    transition: transform 0.3s ease;

    ${Content},
    ${CardReviewsStyled} {
      opacity: 1;
    }
    ${Content} {
      transform: scale(1);
    }
  }

  .slick-list {
    padding-top: 100px !important;
    padding-bottom: 100px !important;
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
