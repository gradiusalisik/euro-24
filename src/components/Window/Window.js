import React, { useState, useEffect } from "react";

// data
import { tags, slides } from "../../assets/dataJson/window";

import { setTag } from "../../utils/setTag";

import Title from "../Title/Title";
import Tags from "../Tags/Tags";

import {
  WindowStyled,
  Content,
  Visual,
  Photo,
  ButtonStyled,
  Information,
  Slides,
  List,
  CardDescriptionStyled,
  Colors
} from "./Window.styled";

const Window = () => {
  const defaultSlides = slides.filter(slide => slide.tags.includes(tags[0].id));

  const [tagIds, setTagId] = useState([tags[0].id]);
  const [newSlides, setNewSlides] = useState(defaultSlides);
  const [background, setBackground] = useState(newSlides[0].background);
  const [count, setCount] = useState(0);

  const handleClick = id => {
    setTagId(setTag(tagIds, id));
    setBackground(newSlides[0].background);
    setCount(0);
  };

  useEffect(() => {
    setNewSlides(
      slides.filter(slide => slide.tags.map(item => tagIds.includes(item)))
    );
  }, [tagIds]);

  console.log(newSlides, background, "slides", tagIds);

  useEffect(() => {
    setBackground(newSlides[count].background);
  }, [count, newSlides]);

  const handleClickPrev = () => {
    setCount(count - 1);
  };

  const handleClickNext = () => {
    setCount(count + 1);
  };

  const getSlideTags = slideTags =>
    slideTags
      .map(slideTag => tags.filter(tag => slideTag === tag.id)[0])
      .map(tag => tag.text);

  return (
    <WindowStyled>
      <Title>Подобрать окна</Title>
      <Tags onClick={handleClick} tagIds={tagIds} tags={tags} />
      <Content>
        <Information>
          <Visual>
            <Photo background={background} />
            <ButtonStyled>Хочу вызвать мастера</ButtonStyled>
          </Visual>
          <Slides>
            <List>
              {newSlides.map(slide => (
                <CardDescriptionStyled
                  key={slide.id}
                  title={slide.title}
                  description={slide.description}
                  price={slide.price}
                  tags={getSlideTags(slide.tags)}
                  currentSlide={count}
                  slideCount={newSlides.length - 1}
                  onClickPrev={handleClickPrev}
                  onClickNext={handleClickNext}
                />
              ))}
            </List>
          </Slides>
        </Information>

        <Colors />
      </Content>
    </WindowStyled>
  );
};

export default Window;
