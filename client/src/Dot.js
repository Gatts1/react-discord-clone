/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { css } from "emotion";

function Dot({ hasConnected }) {
  const color = hasConnected ? "#43b581" : "#faa61a";
  const container = css`
    position: absolute;
    bottom: -3px;
    right: -2px;
    width: 8.5px;
    height: 8.5px;
    border-radius: 50%;
    border: 2.5px solid #2f3136;
    background: ${color};
    z-index: 2;
  `;

  return (
    <>
      <span className={container} />
    </>
  );
}

export default Dot;
