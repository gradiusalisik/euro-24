import React from "react";
import { PropTypes as pt } from "prop-types";
import { numberWithSpaces } from "../../utils/numberWithSpaces";

import {
  CardDescriptionStyled,
  Head,
  Title,
  Content,
  Tags,
  Tag,
  Description,
  PriceWrap,
  PriceText,
  Price,
  SliderButtonStyled
} from "./CardDescription.styled";

const CardDescription = ({
  tags,
  title,
  description,
  price,
  children,
  slideCount,
  currentSlide,
  onClickPrev,
  onClickNext,
  className
}) => {
  const count = currentSlide !== undefined ? currentSlide : 0;

  return (
    <CardDescriptionStyled className={className} count={count}>
      <Head>
        <Title>{title}</Title>
        {slideCount > 0 && (
          <SliderButtonStyled
            size="small"
            slideCount={slideCount}
            currentSlide={currentSlide}
            onClickPrev={onClickPrev}
            onClickNext={onClickNext}
          />
        )}
      </Head>
      <Content>
        {tags && (
          <Tags>
            {tags.map((tag, key) => (
              <Tag key={key}>{tag}</Tag>
            ))}
          </Tags>
        )}
        <Description dangerouslySetInnerHTML={{ __html: description }} />
        <PriceWrap>
          <PriceText>Цена от</PriceText>
          <Price>{numberWithSpaces(price)}</Price>
          <PriceText>руб/м2</PriceText>
        </PriceWrap>
        {children}
      </Content>
    </CardDescriptionStyled>
  );
};

CardDescription.propTypes = {
  tags: pt.arrayOf(pt.string),
  title: pt.string,
  description: pt.string,
  price: pt.string,
  children: pt.node,
  slideCount: pt.number,
  currentSlide: pt.number,
  onClickPrev: pt.func,
  onClickNext: pt.func
};

CardDescription.defaultProps = {
  onClickPrev: () => {},
  onClickNext: () => {}
};

export default CardDescription;
