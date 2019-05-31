import React from "react";
import { css } from "emotion";

const container = css`
  font-size: 16px;
  color: #fff;
`;

function User() {
  return (
    <>
      <span className={container}>Brian</span>
    </>
  );
}

export default User;
