import React from "react";
import styled from 'styled-components';

const AppStyled = styled.div`
  display: block;
`;

export default class App extends React.Component {
  render() {
    return <AppStyled>Hello World</AppStyled>
  }
}
