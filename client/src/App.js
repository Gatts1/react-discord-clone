import React from "react";
import styled from "@emotion/styled";

import AppName from "./AppName";
import Channels from "./Channels";
import Header from "./Header";
import ListMessages from "./ListMessages";
import NewMessage from "./NewMessage";

const Container = styled.div`
  display: grid;
  margin: 0;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  font-family: "Whitney", "Helvetica Neue", Helvetica, Arial, sans-serif;
  grid-template: 48px 1fr 65px/ 300px 1fr;
  grid-template-areas:
    "app-name header"
    "channels list-message"
    "channels new-message";
`;

function App() {
  return (
    <Container>
      <AppName />
      <Header />
      <Channels />
      <ListMessages />
      <NewMessage />
    </Container>
  );
}

export default App;
