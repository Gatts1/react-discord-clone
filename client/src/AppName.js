import React from "react";
import { css } from "emotion";

const className = css`
  grid-area: app-name;
  background-color: green;
`;

function AppName() {
  return (
    <section className={className}>
      <div>AppName</div>
    </section>
  );
}

export default AppName;
