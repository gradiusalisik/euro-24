import React, { useState } from "react";

// data
import { tags } from "../../assets/dataJson/nets";

import { setTag } from "../../utils/setTag";

import Title from "../Title/Title";
import Tags from "../Tags/Tags";

import { NetsStyled, Content } from "./Nets.styled";

const Nets = () => {
  const [tagIds, setTagId] = useState([tags[0].id]);

  const handleClick = id => {
    setTagId(setTag(tagIds, id));
  };

  return (
    <NetsStyled>
      <Title>Сетки</Title>
      <Tags onClick={handleClick} tagIds={tagIds} tags={tags} />
      <Content>Hello</Content>
    </NetsStyled>
  );
};

export default Nets;
