import React from "react";
import { css } from "emotion";

import ChannelGroup from "./ChannelGroup";
import List from "./List";
import NewChannel from "./NewChannel";

const ul = css`
  margin: 5px 0;
  padding: 0;
  list-style: none;
`;

const container = css`
  color: #8e9297;
  padding: 0 20px 20px 20px;
`;

function ChannelsList({ setChannels, channels, channelId, currentUser }) {
  return (
    <div className={container}>
      <div>
        <ChannelGroup>TEXT CHANNELS</ChannelGroup>
        <div>
          <ul className={ul}>
            {channels.map(channel => (
              <List key={channel.id} hasActive={channelId === channel.id}>
                {channel.name}
              </List>
            ))}
            <NewChannel
              setChannels={setChannels}
              channels={channels}
              currentUser={currentUser}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ChannelsList;
