import React from "react";
import { css } from "emotion";

const writeMessage = css`
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
  :focus {
    outline: none;
  }
`;

function WriteMessage({ sendData }) {
  function handleSubmit(event) {
    event.preventDefault();
    const content = event.target.elements.message.value;
    sendData(content, "message");
    event.target.reset();
  }

  return (
    <div className={writeMessage}>
      <form onSubmit={handleSubmit}>
        <label for="txtMessage" aria-label="Recieve message" />
        <input
          className={writeMessageInputText}
          type="text"
          name="message"
          placeholder="Send message to #general"
          autocomplete="off"
        />
        <br />
        <input
          type="submit"
          value="Send"
          class={css`
            display: none;
          `}
        />
      </form>
    </div>
  );
}

export default WriteMessage;
