import React from "react";
import { css } from "emotion";

import ChannelGroup from "./ChannelGroup";
import ChannelBody from "./ChannelBody";

const container = css`
  color: #8e9297;
  padding: 0 20px 20px 20px;
`;

function ChannelsList() {
  return (
    <div className={container}>
      <div>
        <ChannelGroup>TEXT CHANNELS</ChannelGroup>
        <ChannelBody />
        {/* <div class="channel-body-list">
          <ul id="channels-list">
            <li class="active">
              <div class="channel-item">
                <svg><use xlink:href="#hashtag"></svg>
                <span>general</span>
              </div>
              <div class="channel-item-option">
                <svg><use xlink:href="#people-plus"></svg>
                <svg><use xlink:href="#setting"></svg>
              </div>
            </li>
            <li>
              <div class="channel-item">
                <svg><use xlink:href="#hashtag"></svg>
                <span>Able</span>
              </div>
              <div class="channel-item-option">
                <svg><use xlink:href="#people-plus"></svg>
                <svg><use xlink:href="#setting"></svg>
              </div>
            </li>
            <li>
              <div class="channel-item">
                <svg><use xlink:href="#hashtag"></svg>
                <span>Codeble</span>
              </div>
              <div class="channel-item-option">
                <svg><use xlink:href="#people-plus"></svg>
                <svg><use xlink:href="#setting"></svg>
              </div>
            </li>
            <form id="addChannelForm">
              <label for="add-channel" aria-label="add new channel"></label>
              <input id="add-channel" type="text" name="newChannelName" placeholder="New channel"/>
            </form>
            <span id="channelError">
              <svg><use xlink:href="#plus-circle"></svg>
              error
            </span>
          </ul>
        </div> */}
      </div>
    </div>
  );
}

export default ChannelsList;
