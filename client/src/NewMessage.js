import React from "react";
import { css } from "emotion";

const className = css`
  grid-area: new-message;
  background-color: red;
`;

function NewMessage() {
  return (
    <section className={className}>
      <div>NewMessage</div>
    </section>
  );
}

export default NewMessage;
