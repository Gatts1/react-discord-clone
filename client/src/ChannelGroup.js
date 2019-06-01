import React from "react";
import { css } from "emotion";

const container = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
`;

const title = css`
  margin-left: 10px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
`;

const headerName = css`
  display: flex;
  align-items: center;
  :hover {
    cursor: pointer;
    color: #dcddde;
  }
  svg:first-child {
    fill: #8e9297;
    width: 12px;
    height: 12px;
  }
`;

const svg = css`
  fill: #8e9297;
  width: 18px;
  height: 18px;
`;

function ChannelGroup({ children }) {
  return (
    <div className={container}>
      <div className={headerName}>
        <svg>
          <use xlinkHref="#arrow" />
        </svg>
        <span className={title}>{children}</span>
      </div>
      <svg className={svg}>
        <use xlinkHref="#plus" />
      </svg>
    </div>
  );
}

export default ChannelGroup;
