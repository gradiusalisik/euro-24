import React from "react";
import { PropTypes as pt } from "prop-types";

import { TextareaStyled, Field, Error, Description } from "./Textarea.styled";

const Textarea = ({ error, name, onChange, placeholder, filled }) => (
  <TextareaStyled error={error} filled={filled}>
    <Field onChange={onChange} placeholder={placeholder} name={name} />
    <Description>Не более 400 символов</Description>
    <Error>Пожалуйста, введите правильные данные</Error>
  </TextareaStyled>
);

Textarea.propTypes = {
  error: pt.bool,
  name: pt.string,
  placeholder: pt.string,
  filled: pt.bool,
  onChange: pt.func
};

Textarea.defaultProps = {
  onChange: () => {}
};

export default Textarea;
