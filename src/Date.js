import React from "react";
import { css } from "emotion";
import { formatAMPM } from "./utils/date";

const container = css`
  color: rgb(255, 255, 250);
  font-size: 12px;
  margin-left: 7px;
  padding-top: 3px;
`;

function Date({ date }) {
  return <span className={container}>{formatAMPM(date)} </span>;
}

export default Date;
