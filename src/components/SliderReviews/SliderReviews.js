import React, { useState } from "react";

// data
import { reviews } from "../../assets/dataJson/reviews";

import LightboxSlide from "../LightboxSlide/LightboxSlide";

import { SliderReviewsStyled, CardReviewsStyled } from "./SliderReviews.styled";

const SliderReviews = React.forwardRef(({ className }, ref) => {
  const [isOpenSlides, setOpenSlides] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesReview, setImagesReview] = useState([]);

  const settings = {
    slidesToShow: 3,
    arrows: false,
    speed: 700
  };

  const handleOpenSlides = images => idImage => () => {
    const currentIndexSlide = images.map(item => item.id).indexOf(idImage);
    const currentImages = images.map(item => item.image);

    setCurrentIndex(currentIndexSlide);
    setImagesReview(currentImages);
    setOpenSlides(true);
  };

  const handleCloseSlides = () => {
    setOpenSlides(false);
  };

  return (
    <SliderReviewsStyled {...settings} className={className} ref={ref}>
      {reviews.map(review => (
        <CardReviewsStyled
          key={review.id}
          images={review.images}
          description={review.description}
          date={review.date}
          name={review.name}
          openSlide={handleOpenSlides(review.images)}
        />
      ))}
      {isOpenSlides && (
        <LightboxSlide
          onClose={handleCloseSlides}
          images={imagesReview}
          currentIndexSlide={currentIndex}
        />
      )}
    </SliderReviewsStyled>
  );
});

export default SliderReviews;
