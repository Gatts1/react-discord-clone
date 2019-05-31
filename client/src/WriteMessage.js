import React from "react";
import { css } from "emotion";

const writeMessage = css`
  display: flex;
  width: 100%;
`;

const writeMessageInputText = css`
  width: 100%;
  padding-left: 5px;
  border: none;
  font-size: 14px;
  color: #f6f6f7;
  border-left: 1px solid #55585d;
  background-color: rgb(72, 75, 81);
`;

const hiddenSubmit = css`
  display: none;
`;

function WriteMessage() {
  return (
    <div className={writeMessage}>
      <form action="" id="sendMessageForm">
        <label for="txtMessage" aria-label="Recieve message" />
        <input
          className={writeMessageInputText}
          type="text"
          id="txtMessage"
          placeholder="Send message to #general"
          autocomplete="off"
        />
        <br />
        <input type="submit" value="Send" class={hiddenSubmit} />
      </form>
    </div>
  );
}

export default WriteMessage;
