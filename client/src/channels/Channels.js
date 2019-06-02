import React from "react";
import { css } from "emotion";

import ChannelList from "./ChannelsList";
import ChannelUser from "./ChannelUser";

const container = css`
  grid-area: channels;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #2f3136;
`;

function Channels({
  currentUser,
  channels,
  channelId,
  setChannels,
  setChannelId
}) {
  return (
    <section className={container}>
      <ChannelList
        channels={channels}
        channelId={channelId}
        setChannels={setChannels}
        currentUser={currentUser}
        setChannelId={setChannelId}
      />
      <ChannelUser currentUser={currentUser} />
    </section>
  );
}

export default Channels;
