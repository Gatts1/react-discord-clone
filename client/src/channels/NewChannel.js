import React from "react";
import { css } from "emotion";

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

function NewChannel({ setChannels, channels, currentUser }) {
  console.log(channels);
  function handleSubmit(event) {
    event.preventDefault();
    const channel = event.target.elements.channel.value;

    if (channels.some(channelLocal => channelLocal.name === channel)) {
      alert(`Channel ${channel} already exists`);
    } else {
      setChannels([
        ...channels,
        {
          id: Date.now(),
          creationDate: new Date().toLocaleString(),
          name: channel,
          author: currentUser.username,
          joined: false,
          visibility: false,
          messages: []
        }
      ]);
    }

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
          autoComplete="off"
        />
        <input type="submit" value="Send" className={hiddenSubmit} />
      </form>
    </>
  );
}

export default NewChannel;
