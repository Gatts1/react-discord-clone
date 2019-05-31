import React from "react";
import { css } from "emotion";
import WriteMessage from "./WriteMessage";

const container = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
  background-color: rgba(114, 118, 125, 0.3);
  margin: 2px;
  padding: 10px;
`;

const svgs = css`
  width: 21px;
  height: 21px;
  fill: #b9bbbe;
  margin: 0 10px;
  &:hover {
    cursor: pointer;
    fill: #fff;
    transform: scale(1.2);
  }
`;

function MessageInput() {
  return (
    <div className={container}>
      <svg id="btnPlus" className={svgs}>
        <use xlinkHref="#plus" />
      </svg>
      <svg id="btnPlusCircle" className={svgs}>
        <use xlinkHref="#plus-circle" />
      </svg>
      <WriteMessage />
      <svg id="btnGift" className={svgs}>
        <use xlinkHref="#gift" />
      </svg>
      <svg id="btnGif" className={svgs}>
        <use xlinkHref="#gif" />
      </svg>
      <svg id="btnSmile" className={svgs}>
        <use xlinkHref="#smile" />
      </svg>
      <svg id="btnSend" className={svgs}>
        <use xlinkHref="#send" />
      </svg>
    </div>
  );
}

export default MessageInput;
