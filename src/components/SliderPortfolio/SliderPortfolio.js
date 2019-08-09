import React from "react";
import { PropTypes as pt } from "prop-types";

import { SliderPortfolioStyled, Image } from "./SliderPortfolio.styled";

const SliderPortfolio = React.forwardRef(({ slides, changeSlider }, ref) => {
  const settings = {
    slidesToShow: 3,
    infinite: false,
    arrows: false,
    rows: 2,
    beforeChange: (current, next) => changeSlider(next)
  };

  return (
    <SliderPortfolioStyled {...settings} ref={ref}>
      {slides.map(slide => (
        <Image
          key={slide.id}
          src={slide.image}
          category={slide.category}
          alt={slide.category}
        />
      ))}
    </SliderPortfolioStyled>
  );
});

SliderPortfolio.propTypes = {
  slides: pt.arrayOf(
    pt.shape({
      image: pt.string,
      category: pt.string,
      id: pt.string
    })
  )
};

export default SliderPortfolio;
