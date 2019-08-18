import React from "react";
import { PropTypes as pt } from "prop-types";

import { FieldStyled, Input, Error } from "./Field.styled";

const Field = ({
  error,
  name,
  onChange,
  type,
  placeholder,
  filled,
  className
}) => (
  <FieldStyled error={error} filled={filled} className={className}>
    <Input
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      name={name}
    />
    {error && <Error>Пожалуйста, введите правильные данные</Error>}
  </FieldStyled>
);

Field.propTypes = {
  error: pt.bool,
  name: pt.string,
  type: pt.string,
  placeholder: pt.string,
  filled: pt.bool,
  onChange: pt.func
};

Field.defaultProps = {
  type: "text",
  onChange: () => {}
};

export default Field;
