import React from "react";
import { PropTypes as pt } from "prop-types";

import {
  CardReviewsStyled,
  Images,
  Image,
  Item,
  Content,
  Description,
  Info,
  Name,
  Date,
  Video
} from "./CardReviews.styled";

const CardReviews = ({ images, description, name, date, className }) => {
  const getSize = quantity => {
    if (quantity === 2) {
      return "two";
    }
    if (quantity === 3) {
      return "three";
    }

    if (quantity === 4) {
      return "four";
    }

    if (quantity > 4) {
      return "more";
    }

    return;
  };

  return (
    <CardReviewsStyled className={className}>
      <Images>
        {images.map(item => (
          <Item key={item.id} size={getSize(images.length)}>
            {item.video ? (
              <Video
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                src={item.video}
                frameborder="0"
                allowfullscreen
              />
            ) : (
              <Image
                style={{
                  backgroundImage: `url(${item.image})`
                }}
              />
            )}
          </Item>
        ))}
      </Images>
      <Content>
        <Description>{description}</Description>
        <Info>
          <Name>{name}</Name>
          <Date>{date}</Date>
        </Info>
      </Content>
    </CardReviewsStyled>
  );
};

CardReviews.propTypes = {
  images: pt.arrayOf(
    pt.shape({
      id: pt.string,
      image: pt.string,
      video: pt.string
    })
  ),
  description: pt.string,
  name: pt.string,
  date: pt.string
};

export default CardReviews;
