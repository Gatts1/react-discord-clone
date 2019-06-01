import React from "react";
import { css } from "emotion";

function User({ size, currentUser }) {
  return (
    <>
      <span
        className={css`
          font-size: ${size};
          color: #fff;
        `}
      >
        {currentUser.username}
      </span>
    </>
  );
}

export default User;
