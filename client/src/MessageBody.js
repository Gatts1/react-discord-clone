import React from "react";
import { css } from "emotion";
// import { jsx } from "@emotion/core";

import User from "./User";
import Date from "./Date";
import Message from "./Message";

const container = css`
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.5;
`;

const ul = css`
  padding-left: 15px;
  list-style: none;
`;

function MessageBody() {
  return (
    <>
      <div className={container}>
        <ul className={ul}>
          <li>
            <User />
            <Date />
          </li>
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
        </ul>
      </div>
    </>
  );
}

export default MessageBody;
