import React from "react";
import { css } from "emotion";

import UserImage from "./UserImage";

const container = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 5px;
  background: rgba(32, 34, 37, 0.3);
`;

function ChannelUser() {
  return (
    <>
      <div className={container}>
        {/* <div class="block-user">
          <div class="user-img -block in-tab">
            <img
              src="https://discordapp.com/assets/0e291f67c9274a1abdddeb3fd919cbaa.png"
              alt="user-image"
            />
          </div>
        </div> */}
        <UserImage />
        {/* <div class="block-data-user">
          <div class="data-user">
            <span class="user">Gats</span>
            <span class="id-user">#1388</span>
          </div>
          <div class="option-user">
            <svg><use xlink:href="#microphone"></svg>
            <svg><use xlink:href="#audio" ></svg>
            <svg><use xlink:href="#setting" ></svg>    
          </div>
        </div> */}
      </div>
    </>
  );
}

export default ChannelUser;
