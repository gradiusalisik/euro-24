import React, { useState, useEffect } from "react";

// data
import { tags, slides } from "../../assets/dataJson/window";

import { setTag } from "../../utils/setTag";

import Title from "../Title/Title";
import Tags from "../Tags/Tags";
import Slides from "../Slides/Slides";
import Button from "../Button/Button";

import {
  WindowStyled,
  Content,
  Visual,
  Photo,
  ButtonColor,
  Information,
  Colors,
  Advantages,
  Buttons,
  AdvantageStyled
} from "./Window.styled";

const Window = () => {
  const defaultSlides = slides.filter(slide => slide.tags.includes(tags[0].id));

  const [tagIds, setTagId] = useState([tags[0].id]);
  const [newSlides, setNewSlides] = useState(defaultSlides);
  const [background, setBackground] = useState(newSlides[0].background);
  const [advantages, setAdvantages] = useState(newSlides[0].advantages);
  const [count, setCount] = useState(0);

  const handleClick = id => {
    setTagId(setTag(tagIds, id));
    setBackground(newSlides[0].background);
    setAdvantages(newSlides[0].advantages);
    setCount(0);
  };

  useEffect(() => {
    const newSlidesArr = slides.filter(({ tags }) =>
      tags.some(tag => tagIds.includes(tag))
    );

    setNewSlides(newSlidesArr);
  }, [tagIds]);

  useEffect(() => {
    setBackground(newSlides[count].background);
    setAdvantages(newSlides[count].advantages);
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
            <ButtonColor>Хочу вызвать мастера</ButtonColor>
          </Visual>
          <Slides
            slides={newSlides}
            count={count}
            onClickPrev={handleClickPrev}
            onClickNext={handleClickNext}
            getSlideTags={getSlideTags}
            isArrows
          >
            <Buttons>
              <Button size="full">Заказать окна</Button>
              <Button size="full">Рассчитать стоимость</Button>
            </Buttons>
          </Slides>
        </Information>

        {/* <Colors /> */}
        <Advantages>
          {advantages.map(advantage => (
            <AdvantageStyled
              key={advantage.id}
              icon={advantage.icon}
              title={advantage.title}
              description={advantage.description}
            />
          ))}
        </Advantages>
      </Content>
    </WindowStyled>
  );
};

export default Window;
