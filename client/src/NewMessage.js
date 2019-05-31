import React from "react";
import { css } from "emotion";

import MessageInput from "./MessageInput";
import WriteMessage from "./WriteMessage";

const container = css`
  padding: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  background-color: #36393f;
  /* grid-area: new-message;
  background-color: #36393e;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
  margin: 2px; */
`;

// const writeMessage = css`
//   display: flex;
//   width: 100%;
// `;

// const svgs = css`
//   width: 21px;
//   height: 21px;
//   fill: #b9bbbe;
//   margin: 0 10px;
//   &:hover {
//     cursor: pointer;
//     fill: #fff;
//     width: 26px;
//     height: 26px;
//   }
// `;

// const writeMessageInputText = css`
//   width: 100%;
//   padding-left: 5px;
//   border: none;
//   font-size: 14px;
//   color: #f6f6f7;
//   border-left: 1px solid #55585d;
//   background-color: rgb(72, 75, 81);
// `;

// const hiddenSubmit = css`
//   display: none;
// `;

function NewMessage() {
  return (
    <section className={container}>
      <MessageInput />
      <WriteMessage />
    </section>
  );
}

export default NewMessage;
