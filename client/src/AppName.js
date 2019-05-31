import React from "react";
import { css } from "emotion";

const container = css`
  grid-area: app-name;
  background-color: green;
`;

function AppName() {
  return (
    <section className={container}>
      <svg id="btnClose" onclick="showLeft()">
        <use xlinkHref="#plus" />
      </svg>
      <p class="group-name">Codeable V. 1.0 Gate3</p>
      <svg>
        <use xlinkHref="#arrow" />
      </svg>
    </section>
  );
}

export default AppName;
