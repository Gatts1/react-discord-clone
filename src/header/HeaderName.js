import React from "react";
import { css } from "emotion";

const container = css`
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
`;

const name = css`
  font-size: 15px;
  color: #f6f6f7;
  padding: 0;
`;

const svg = css`
  width: 24px;
  height: 24px;
  margin: 0 8px;
  fill: #72767d;
`;

function HeaderName({ channelAct }) {
  return (
    <div className={container}>
      {/* <svg id="btnMenu" onclick="showLeft()"><use xlink:href="#menu"></svg> */}
      <svg className={svg}>
        <use xlinkHref="#hashtag" />
      </svg>
      <span className={name}>{channelAct.name}</span>
    </div>
  );
}

export default HeaderName;
