import React from "react";
import { css } from "emotion";

import BlockDate from "./BlockDate";
import BlockNotification from "./BlockNotification";
import BlockMessage from "./BlockMessage";
import Scrollbar from "./Scrollbar";

const container = css`
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

const bTop = css`
  border-top: 1px solid hsla(0, 0%, 100%, 0.06);
`;

function ListMessages({ messages, sendData }) {
  return (
    <section className={container}>
      <Scrollbar height="calc(100vh - 66px - 48px - 5px)">
        <ul className={ul}>
          {/* <BlockDate />
          <BlockNotification className={bTop} />
          <BlockMessage className={bTop} />
          <BlockDate />
          <BlockNotification className={bTop} />
          <BlockMessage className={bTop} />
          <BlockDate />
          <BlockNotification className={bTop} />
          <BlockMessage className={bTop} /> */}
          {messages.map((message) => (
            <li>{message.content}</li>
          ))}
        </ul>
      </Scrollbar>
    </section>
  );
}

export default ListMessages;
