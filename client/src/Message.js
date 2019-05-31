import React from "react";
import { css } from "emotion";

const container = css`
  font-size: 14px;
`;

function Message() {
  return (
    <>
      <li className={container}>Asi te queria encontrar!</li>
    </>
  );
}

export default Message;
