import React from "react";
import { css } from "emotion";

import User from "./User";
import Date from "./Date";

const container = css`
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  padding: 20px 0;
`;

const message = css`
  margin-left: 8px;
  font-size: 15px;
  color: rgba(255, 255, 255, 0.6);
`;

const svg = css`
  fill: #43b581;
  width: 18px;
  height: 18px;
`;

function BlockNotification({ className }) {
  return (
    <>
      <li className={`${container} ${className}`}>
        <svg className={svg}>
          <use xlinkHref="#arrow-right" />
        </svg>
        <span className={message}>
          Un <User size="16px" /> salvaje apareció.
        </span>
        <Date />
      </li>
    </>
  );
}

export default BlockNotification;
