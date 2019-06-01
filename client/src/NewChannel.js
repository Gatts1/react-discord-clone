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

function NewChannel({ error }) {
  return (
    <>
      <form className={container}>
        <label for="add-channel" aria-label="add new channel" />
        <input
          className={input}
          type="text"
          name="newChannelName"
          placeholder="New channel"
        />
      </form>
      {error && <Error>This channel is duplicated</Error>}
    </>
  );
}

export default NewChannel;
