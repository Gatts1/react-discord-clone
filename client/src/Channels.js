import React from "react";
import { css } from "emotion";

const className = css`
  grid-area: channels;
  background-color: peru;
`;

function Channels() {
  return (
    <section className={className}>
      <div>Channels</div>
    </section>
  );
}

export default Channels;
