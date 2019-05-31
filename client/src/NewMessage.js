import React from "react";
import { css } from "emotion";

import MessageInput from "./MessageInput";

const container = css`
  padding: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  background-color: #36393f;
`;

function NewMessage() {
  return (
    <section className={container}>
      <MessageInput />
    </section>
  );
}

export default NewMessage;
