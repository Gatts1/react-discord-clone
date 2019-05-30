import React from "react";
import { css } from "emotion";

const className = css`
  grid-area: list-message;
  background-color: rosybrown;
`;

function ListMessages() {
  return (
    <section className={className}>
      <div>ListMessages</div>
    </section>
  );
}

export default ListMessages;
