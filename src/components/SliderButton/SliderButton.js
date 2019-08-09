import React from "react";

import {
  SliderButtonStyled,
  SliderPrevStyled,
  ArrowLeft,
  SliderNextStyled,
  ArrowRight
} from "./SliderButton.styled";

const SliderButton = ({
  onClickNext,
  onClickPrev,
  currentSlide,
  slideCount,
  className
}) => {
  const disabledPrev = currentSlide && currentSlide === 0;
  const disabledNext = currentSlide && currentSlide === slideCount;

  return (
    <SliderButtonStyled className={className}>
      <SliderPrevStyled onClick={onClickPrev} disabled={disabledPrev}>
        <ArrowLeft />
      </SliderPrevStyled>
      <SliderNextStyled onClick={onClickNext} disabled={disabledNext}>
        <ArrowRight />
      </SliderNextStyled>
    </SliderButtonStyled>
  );
};

export default SliderButton;
