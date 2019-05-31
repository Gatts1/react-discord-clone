import React from "react";
import { css } from "emotion";

import BlockDate from "./BlockDate";
import BlockNotification from "./BlockNotification";
import BlockMessage from "./BlockMessage";

const section = css`
  grid-area: list-message;
  background-color: #36393f;
`;

const ul = css`
  list-style: none;
`;

const scrollbar = css`
  overflow-y: scroll;
  height: calc(100vh - 66px - 48px - 5px);
  &::-webkit-scrollbar {
    width: 10px;
    margin-left: 5px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 50px;
    background-color: #202225;
  }
`;

// ToDo: How to add this class in block
// const b_top = css`
//   border-top: 1px solid hsla(0, 0%, 100%, 0.06);
// `;

function ListMessages() {
  return (
    <section className={section}>
      <div className={scrollbar}>
        <ul className={ul}>
          <BlockDate />
          <BlockNotification />
          <BlockMessage />
          <BlockNotification />
          <BlockDate />
          <BlockNotification />
          <BlockMessage />
          <BlockMessage />
          <BlockDate />
          <BlockMessage />
        </ul>
      </div>
    </section>
  );
}

export default ListMessages;
