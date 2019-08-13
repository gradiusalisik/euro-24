import React from "react";
import { FieldStyled, Input, Error } from "./Field.styled";

const Field = ({ error, name, placeholder, filled }) => (
  <FieldStyled error={error} filled={filled}>
    <Input placeholder={placeholder} type="text" name={name} />
    <Error>Пожалуйста, введите правильные данные</Error>
  </FieldStyled>
);

export default Field;
