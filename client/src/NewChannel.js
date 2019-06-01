import React from "react";
import { css } from "emotion";

import Error from "./Error";

const container = css`
  padding: 5px;
  font-size: 15px;
  border-radius: 5px;
  background-color: #202225;
`;

const input = css`
  border: none;
  border-radius: 5px;
  padding: 5px;
  color: #b9bbbe;
  background-color: #202225;
  :focus {
    outline: none;
  }
`;

const hiddenSubmit = css`
  display: none;
`;

function NewChannel({ sendData }) {
  console.log(sendData);

  function handleSubmit(event) {
    event.preventDefault();
    const content = event.target.elements.channel.value;
    sendData(content, "channel");
    event.target.reset();
  }

  return (
    <>
      <form className={container} onSubmit={handleSubmit}>
        <label htmlFor="add-channel" aria-label="add new channel" />
        <input
          className={input}
          type="text"
          name="channel"
          placeholder="New channel"
          autocomplete="off"
        />
        <input type="submit" value="Send" class={hiddenSubmit} />
      </form>

      {/* {error && <Error>This channel is duplicated</Error>} */}
    </>
  );
}

export default NewChannel;
