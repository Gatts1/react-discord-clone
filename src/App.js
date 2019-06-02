import React from "react";
import { css } from "emotion";

import { useLocalStorage } from "./utils/hooks";
import AppName from "./AppName";
import Channels from "./channels/Channels";
import Header from "./Header";
import ListMessages from "./messages/ListMessages";
import NewMessage from "./messages/NewMessage";

const container = css`
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

function App({ url = "ws://localhost:4000", currentUser }) {
  const ws = React.useRef(null);
  const [channelId, setChannelId] = React.useState(1000000000000); // for channel active
  const [connected, setConnected] = React.useState(false);
  const [channels, setChannels] = useLocalStorage("channels", []); // list channels
  const [users, setUsers] = useLocalStorage("users", []); // list users

  React.useEffect(() => {
    const server = new WebSocket(url);
    ws.current = server;
    return () => {
      ws.current = null;
      server.close();
    };
  }, [url]);

  React.useEffect(() => {
    if (connected && !channelActive().joined) {
      sendData(`${currentUser.username} joined`);
      const updateChannels = channels.map(channel => {
        if (channel.id === channelId) channel.joined = true;
        return channel;
      });
      setChannels(updateChannels);
    }
  }, [channelId, connected]);

  React.useEffect(() => {
    // here send data when channel is created
  }, [channels]);

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
        const parseData = JSON.parse(data);
        const updateChannels = channels.map(channel => {
          if (channel.id === parseData.channelId) {
            channel.messages.push(parseData);
          }
          return channel;
        });
        setChannels(updateChannels);
      };
    }
  }, [ws.current]);

  function sendData(content, type = "message") {
    ws.current.send(
      JSON.stringify({
        id: new Date().getTime(),
        content: content,
        date: new Date(),
        channelId,
        type
      })
    );
  }

  function channelActive() {
    return channels.find(channel => channel.id === channelId);
  }

  return (
    <div className={container}>
      <AppName />
      <Header />
      <Channels
        currentUser={currentUser}
        setChannels={setChannels}
        channels={channels}
        channelId={channelId}
        setChannelId={setChannelId}
      />
      <ListMessages
        messages={channelActive().messages}
        currentUser={currentUser}
      />
      <NewMessage sendData={sendData} />
    </div>
  );
}

export default App;
