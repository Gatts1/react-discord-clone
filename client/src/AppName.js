import React from "react";
import { css } from "emotion";

const container = css`
  grid-area: app-name;
  background-color: green;
`;

function AppName() {
  return (
    <section className={container}>
      <div>AppName</div>
    </section>
  );
}

export default AppName;
