import styled from "styled-components";
import Slider from "react-slick";
import CardReviews from "../CardReviews/CardReviews";

import { Content } from "../CardReviews/CardReviews.styled";

export const CardReviewsStyled = styled(CardReviews)`
  opacity: 0.6;
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
`;
