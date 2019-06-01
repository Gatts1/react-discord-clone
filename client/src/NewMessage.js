import React from "react";
import { css } from "emotion";

import MessageInput from "./MessageInput";

const container = css`
  padding: 10px;
  border-top: 1px solid hsla(0, 0%, 100%, 0.06);
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  background-color: #36393f;
`;

function NewMessage({ sendData }) {
  return (
    <section className={container}>
      <MessageInput sendData={sendData} />
    </section>
  );
}

export default NewMessage;
