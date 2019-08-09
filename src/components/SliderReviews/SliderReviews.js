import React from "react";

// data
import { reviews } from "../../assets/dataJson/reviews";

import { SliderReviewsStyled, CardReviewsStyled } from "./SliderReviews.styled";

const SliderReviews = ({ className }) => {
  const settings = {
    // centerMode: true,
    slidesToShow: 3,
    speed: 700,
    adaptiveHeight: true
  };

  return (
    <SliderReviewsStyled {...settings} className={className}>
      {reviews.map(item => (
        <CardReviewsStyled
          key={item.id}
          images={item.images}
          description={item.description}
          date={item.date}
          name={item.name}
        />
      ))}
    </SliderReviewsStyled>
  );
};

export default SliderReviews;
