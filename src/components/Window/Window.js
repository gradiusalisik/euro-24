import React, { useState } from "react";

// data
import { tags } from "../../assets/dataJson/window";

import { setTag } from "../../utils/setTag";

import Title from "../Title/Title";
import Tags from "../Tags/Tags";

import { WindowStyled, Content } from "./Window.styled";

const Window = () => {
  const [tagIds, setTagId] = useState([tags[0].id]);

  const handleClick = id => {
    setTagId(setTag(tagIds, id));
  };

  return (
    <WindowStyled>
      <Title>Подобрать окна</Title>
      <Tags onClick={handleClick} tagIds={tagIds} tags={tags} />
      <Content>Hello</Content>
    </WindowStyled>
  );
};

export default Window;
