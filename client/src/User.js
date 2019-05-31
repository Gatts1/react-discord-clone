import React from "react";
import { css } from "emotion";

function User() {
  return (
    <>
      <span
        className={css`
          font-size: 16px;
          color: #fff;
        `}
      >
        Brian
      </span>
    </>
  );
}

export default User;
