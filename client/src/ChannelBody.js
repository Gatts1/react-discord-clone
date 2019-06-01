import React from "react";
import { css } from "emotion";

import List from "./List";
import NewChannel from "./NewChannel";

const ul = css`
  margin: 5px 0;
  padding: 0;
  list-style: none;
`;

function ChannelBody() {
  return (
    <div>
      <ul className={ul}>
        <List hasActive>general</List>
        <List>Able</List>
        <NewChannel />
      </ul>
    </div>
  );
}

export default ChannelBody;
