import React, { useRef } from "react";
import Button from "../Button/Button";

import {
  ReviewsStyled,
  Info,
  Title,
  Wrap,
  SliderButtonStyled,
  SliderReviewsStyled
} from "./Reviews.styled";

const Reviews = () => {
  const sliderEl = useRef(null);

  const handleClickPrev = () => {
    sliderEl.current.slickPrev();
  };
  const handleClickNext = () => {
    sliderEl.current.slickNext();
  };

  return (
    <ReviewsStyled>
      <SliderButtonStyled
        onClickNext={handleClickNext}
        onClickPrev={handleClickPrev}
      />
      <Info>
        <Wrap>
          <Title>
            Мы трудимся <br /> для вас.
          </Title>
          <Button>Оставить отзыв</Button>
        </Wrap>
      </Info>
      <SliderReviewsStyled ref={sliderEl} />
    </ReviewsStyled>
  );
};

export default Reviews;
