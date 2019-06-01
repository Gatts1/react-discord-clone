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

function Channels() {
  return (
    <section className={container}>
      <ChannelList />
      <ChannelUser />
    </section>
  );
}

export default Channels;
