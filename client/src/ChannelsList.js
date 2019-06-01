import React from "react";
import { css } from "emotion";

import ChannelGroup from "./ChannelGroup";
import ChannelBody from "./ChannelBody";

const container = css`
  color: #8e9297;
  padding: 0 20px 20px 20px;
`;

function ChannelsList() {
  return (
    <div className={container}>
      <div>
        <ChannelGroup>TEXT CHANNELS</ChannelGroup>
        <ChannelBody />
      </div>
    </div>
  );
}

export default ChannelsList;
