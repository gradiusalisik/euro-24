import React from "react";
import styled from "styled-components";

import { Button } from "./components/Button/Button";

const AppStyled = styled.div`
  display: block;
`;

export default class App extends React.Component {
  render() {
    return (
      <AppStyled>
        <Button>Hello World</Button>
      </AppStyled>
    );
  }
}
