import React from "react";
import { css } from "emotion";

const container = css`
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  padding: 20px 0;
  &::after,
  &::before {
    content: " ";
    width: calc(100% - 300px);
    border-bottom: 1px solid hsla(0, 0%, 100%, 0.06);
  }
`;

const lineDate = css`
  color: rgb(194, 205, 209);
  width: 300px;
  margin: 0 10px;
  line-height: 19px;
  font-weight: 500;
  font-size: 14px;
  text-align: center;
`;

function BlockDate({ date }) {
  return (
    <li className={container}>
      <span className={lineDate}>{date}</span>
    </li>
  );
}

export default BlockDate;
