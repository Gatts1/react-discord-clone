import React from "react";
import { css } from "emotion";
// import { jsx } from "@emotion/core";

const container = css`
  color: rgb(255, 255, 250);
  font-size: 12px;
  margin-left: 7px;
  padding-top: 3px;
`;

function Date() {
  return (
    <>
      <span className={container}>hoy a las 14:51</span>
    </>
  );
}

export default Date;
