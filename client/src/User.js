import React from "react";
import { css } from "emotion";

function User({ size }) {
  return (
    <>
      <span
        className={css`
          font-size: ${size};
          color: #fff;
        `}
      >
        Brian
      </span>
    </>
  );
}

export default User;
