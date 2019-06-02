import React from "react";
import { css } from "emotion";
// import { jsx } from "@emotion/core";

import User from "../User";
import Date from "../Date";
import Message from "./Message";

const container = css`
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.5;
`;

const ul = css`
  padding-left: 15px;
  list-style: none;
`;

function MessageBody({ content, currentUser, date }) {
  return (
    <>
      <div className={container}>
        <ul className={ul}>
          <li>
            <User size="16px">{currentUser.username}</User>
            <Date date={date} />
          </li>
          <Message content={content} />
        </ul>
      </div>
    </>
  );
}

export default MessageBody;
