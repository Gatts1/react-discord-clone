import React from "react";
import { css } from "emotion";

// import ChannelUser from "./"

const className = css`
  grid-area: channels;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #2f3136;
`;

function Channels() {
  return (
    <section className={className}>
      <div>Channels</div>
      <Channels />
    </section>
  );
}

export default Channels;
