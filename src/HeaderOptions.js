import React from "react";
import { css } from "emotion";

import HeaderSearch from "./HeaderSearch";

const container = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const svg = css`
  width: 24px;
  height: 24px;
  margin: 0 8px;
  fill: #b9bbbe;
  :hover {
    cursor: pointer;
    fill: #dcddde;
  }
`;

function HeaderOptions() {
  return (
    <div className={container}>
      <svg className={svg}>
        <use xlinkHref="#bel" />
      </svg>
      <svg className={svg}>
        <use xlinkHref="#pin" />
      </svg>
      <svg className={svg}>
        <use xlinkHref="#people" />
      </svg>
      <HeaderSearch />
      <svg className={svg}>
        <use xlinkHref="#at" />
      </svg>
      <svg className={svg}>
        <use xlinkHref="#help" />
      </svg>
    </div>
  );
}

export default HeaderOptions;
