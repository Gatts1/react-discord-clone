import React from "react";
import { css } from "emotion";

import HeaderName from "./HeaderName";
import HeaderOptions from "./HeaderOptions";

const container = css`
  grid-area: header;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  background-color: #36393f;
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

function Header() {
  return (
    <section className={container}>
      <HeaderName />
      <HeaderOptions />
    </section>
  );
}

export default Header;
