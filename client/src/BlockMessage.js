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

function BlockMessage({ className, message, currentUser }) {
  return (
    <>
      <li className={`${container} ${className}`}>
        <UserImage size="45px;" />
        <MessageBody
          content={message.content}
          currentUser={currentUser.username}
        />
      </li>
    </>
  );
}

export default BlockMessage;
