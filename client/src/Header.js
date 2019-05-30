import React from "react";
import { css } from "emotion";

const className = css`
  grid-area: header;
  background-color: purple;
`;

function Header() {
  return (
    <section className={className}>
      <div>Header</div>
    </section>
  );
}

export default Header;
