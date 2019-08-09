import React from "react";
import Button from "../Button/Button";

import {
  ReviewsStyled,
  Info,
  Title,
  Wrap,
  SliderReviewsStyled
} from "./Reviews.styled";

const Reviews = () => (
  <ReviewsStyled>
    <Info>
      <Wrap>
        <Title>
          Мы трудимся <br /> для вас.
        </Title>
        <Button>Оставить отзыв</Button>
      </Wrap>
    </Info>
    <SliderReviewsStyled />
  </ReviewsStyled>
);

export default Reviews;
