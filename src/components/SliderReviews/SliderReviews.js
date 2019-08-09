import React from "react";

// data
import { reviews } from "../../assets/dataJson/reviews";

import { SliderReviewsStyled, CardReviewsStyled } from "./SliderReviews.styled";

const SliderReviews = React.forwardRef(({ className }, ref) => {
  const settings = {
    slidesToShow: 3,
    arrows: false,
    speed: 700
  };

  return (
    <SliderReviewsStyled {...settings} className={className} ref={ref}>
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
});

export default SliderReviews;
