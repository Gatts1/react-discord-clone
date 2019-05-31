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

function App({ url = "ws://localhost:4000" }) {
  const ws = React.useRef(null);
  const [messages, setMessages] = React.useState([]);
  const [connected, setConnected] = React.useState(false);

  React.useEffect(() => {
    const server = new WebSocket(url);
    ws.current = server;
    return () => {
      ws.current = null;
      server.close();
    };
  }, [url]);

  React.useEffect(() => {
    if (ws.current) {
      ws.current.onopen = () => {
        console.log("open");
        setConnected(true);
      };
      ws.current.onclose = () => {
        console.log("close");
        setConnected(false);
      };
      ws.current.onmessage = ({ data }) => {
        setMessages((state) => {
          return [...state, JSON.parse(data)];
        });
      };
    }
  }, [ws.current]);

  function sendData(content, type = "message") {
    ws.current.send(
      JSON.stringify({
        id: new Date().getTime(),
        content: content,
        type
      })
    );
  }

  return (
    <Container>
      <AppName />
      <Header />
      <Channels />
      <ListMessages messages={messages} />
      <NewMessage sendData={sendData} />
    </Container>
  );
}

export default App;
