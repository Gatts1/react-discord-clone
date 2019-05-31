import React from "react";
import { css } from "emotion";

function Scrollbar({ children, height }) {
  const scrollbar = css`
    overflow-y: scroll;
    height: ${height};
    &::-webkit-scrollbar {
      width: 10px;
      margin-left: 5px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 50px;
      background-color: #202225;
    }
  `;

  return <div className={scrollbar}>{children}</div>;
}

export default Scrollbar;
