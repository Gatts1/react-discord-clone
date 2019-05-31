import React from "react";
import { css } from "emotion";

const container = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  color: #fff;
  font-weight: 500;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  background-color: #2f3136;
  :hover {
    cursor: pointer;
    background-color: #222327;
  }
`;
const svg = css`
  :last-child {
    width: 28px;
    height: 28px;
    fill: #8e9297;
  }
  :first-child {
    display: none;
  }
`;

function AppName() {
  return (
    <section className={container}>
      {/* <svg id="btnClose" onclick="showLeft()"> */}
      <svg className={svg}>
        <use xlinkHref="#plus" />
      </svg>
      <p>Discord clone V. 1.0 React</p>
      <svg className={svg}>
        <use xlinkHref="#arrow" />
      </svg>
    </section>
  );
}

export default AppName;
