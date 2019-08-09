import React, { useState, useRef } from "react";
// data
import { tags, slides } from "../../assets/dataJson/portfolio";

import { setTag } from "../../utils/setTag";

import Title from "../Title/Title";
import SliderPortfolio from "../SliderPortfolio/SliderPortfolio";
import SliderButton from "../SliderButton/SliderButton";

import { PortfolioStyled, TagsStyled, Top } from "./Portfolio.styled";

const Portfolio = () => {
  const sliderEl = useRef(null);

  const [tagIds, setTagId] = useState([tags[0].id]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = id => {
    setTagId(setTag(tagIds, id));
  };

  const newSlides = slides.filter(item => tagIds.includes(item.category));

  const handleClickPrev = () => {
    sliderEl.current.slickPrev();
  };
  const handleClickNext = () => {
    sliderEl.current.slickNext();
  };

  const handleChangeSlider = current => {
    setCurrentSlide(current);
  };

  // TODO так как у нас row = 2 мы делим все слайды на 2 и отнимает первый двойной слайд и последний, они не учиытваются при слайдинге
  const slideCount = Math.floor((newSlides.length - 1) / 2) - 2;

  return (
    <PortfolioStyled>
      <Top>
        <Title>Портфолио</Title>
        {newSlides.length > 6 && (
          <SliderButton
            onClickNext={handleClickNext}
            onClickPrev={handleClickPrev}
            currentSlide={currentSlide}
            slideCount={slideCount}
          />
        )}
      </Top>
      <TagsStyled onClick={handleClick} tagIds={tagIds} tags={tags} />
      <SliderPortfolio
        slides={newSlides}
        ref={sliderEl}
        changeSlider={handleChangeSlider}
      />
    </PortfolioStyled>
  );
};

export default Portfolio;
