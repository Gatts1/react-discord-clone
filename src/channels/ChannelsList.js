import React from "react";
import { css } from "emotion";

import ChannelGroup from "./ChannelGroup";
import List from "./List";
import NewChannel from "./NewChannel";
import Scrollbar from "../messages/Scrollbar";

const ul = css`
  margin: 5px 0;
  padding: 0;
  list-style: none;
`;

const container = css`
  color: #8e9297;
  padding: 0 20px 20px 20px;
`;

function ChannelsList({
  setChannels,
  channels,
  channelId,
  currentUser,
  setChannelId
}) {
  return (
    <div className={container}>
      <Scrollbar height="calc(100vh - 66px - 48px - 5px)">
        <div>
          <ChannelGroup>TEXT CHANNELS</ChannelGroup>
          <div>
            <ul className={ul}>
              {channels.map(channel => (
                <List
                  key={channel.id}
                  hasActive={channelId === channel.id}
                  onClick={() => setChannelId(channel.id)}
                >
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
      </Scrollbar>
    </div>
  );
}

export default ChannelsList;
