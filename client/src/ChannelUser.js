/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { css } from "emotion";

import UserImage from "./UserImage";
import User from "./User";

const container = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 5px;
  background: rgba(32, 34, 37, 0.3);
`;

const svg = css`
  width: 24px;
  height: 24px;
  fill: #b9bbbe;
  padding: 5px;
  :hover {
    cursor: pointer;
    fill: #dcddde;
    border-radius: 5px;
    background-color: rgba(24, 25, 28, 0.3);
  }
`;

const containerUser = css`
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  padding: 10px 5px;
`;

const containerData = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: 0 10px;
`;

const dataUser = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const userId = css`
  margin-top: 4px;
  opacity: 0.7;
  font-size: 10px;
  color: #c8cacb;
`;

function ChannelUser() {
  return (
    <>
      <div className={container}>
        <div className={containerUser}>
          <UserImage size="30px" hasConnected="false" state />
        </div>
        <div className={containerData}>
          <div className={dataUser}>
            <User size="14px" />
            <span className={userId}>#1388</span>
          </div>
          <div>
            <svg className={svg}>
              <use xlinkHref="#microphone" />
            </svg>
            <svg className={svg}>
              <use xlinkHref="#audio" />
            </svg>
            <svg className={svg}>
              <use xlinkHref="#setting" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChannelUser;
