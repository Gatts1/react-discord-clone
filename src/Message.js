import React from "react";
import { css } from "emotion";

function Message({ content }) {
  return (
    <>
      <li
        className={css`
          font-size: 14px;
        `}
      >
        {content}
      </li>
    </>
  );
}

export default Message;
