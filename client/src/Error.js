import React from "react";
import { css } from "emotion";

const container = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: rgb(170, 18, 18);
  svg {
    fill: rgb(170, 18, 18);
    width: 12px;
    height: 12px;
    margin-right: 5px;
    transform: rotate(45deg);
  }
`;

function NewChannel({ children }) {
  return (
    <>
      <span className={container}>
        <svg>
          <use xlinkHref="#plus-circle" />
        </svg>
        {children}
      </span>
    </>
  );
}

export default NewChannel;
