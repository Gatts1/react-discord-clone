import React from "react";
import { css } from "emotion";

import UserImage from "./UserImage";
import MessageBody from "./MessageBody";

const container = css`
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: flex-start;
  padding: 20px 0;
`;

function BlockMessage({ className }) {
  return (
    <>
      <li className={`${container} ${className}`}>
        <UserImage size="45px;" />
        <MessageBody />
      </li>
    </>
  );
}

export default BlockMessage;
