/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { css } from "emotion";

import Dot from "./Dot";

const img = css`
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: absolute;
  border-radius: 50%;
`;

function UserImage({ size, state, hasConnected }) {
  const container = css`
    position: relative;
    width: ${size};
    height: ${size};
  `;

  return (
    <>
      <div className={`${container} ${size}`}>
        {state && <Dot hasConnected />}
        <img
          className={img}
          src="https://discordapp.com/assets/0e291f67c9274a1abdddeb3fd919cbaa.png"
          alt="user-image"
        />
      </div>
    </>
  );
}

export default UserImage;
