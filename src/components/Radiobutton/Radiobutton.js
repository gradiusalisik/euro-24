import React from "react";

import BackgroundRadio from "../../assets/img/radiobutton/Classic/button/cs001.jpg";

import { Label, Input } from "./Radiobutton.styled";

const Radiobutton = ({ checked, value }) => (
  <Label background={BackgroundRadio}>
    <Input type="radio" checked={checked} value={value} />
  </Label>
);

export default Radiobutton;