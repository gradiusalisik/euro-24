import React from "react";
import { PropTypes as pt } from "prop-types";

import { TagsStyled, TagStyled } from "./Tags.styled";

const Tags = ({ onClick, tags, tagIds }) => {
  const handleClick = id => () => {
    onClick(id);
  };

  return (
    <TagsStyled>
      {tags.map(tag => {
        return (
          <TagStyled
            key={tag.id}
            onClick={handleClick(tag.id)}
            isActive={tagIds.includes(tag.id)}
          >
            {tag.text}
          </TagStyled>
        );
      })}
    </TagsStyled>
  );
};

Tags.propTypes = {
  onClick: pt.func,
  tagIds: pt.arrayOf(pt.string)
};

Tags.defaultProps = {
  onClick: () => {}
};

export default Tags;
