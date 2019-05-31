import React from "react";
import { css } from "emotion";

function Message() {
  return (
    <>
      <li
        className={css`
          font-size: 14px;
        `}
      >
        Asi te queria encontrar!
      </li>
    </>
  );
}

export default Message;
