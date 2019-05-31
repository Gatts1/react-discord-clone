/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { css } from "emotion";

const container = css`
  position: relative;
  width: 45px;
  height: 45px;
`;

const img = css`
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: absolute;
  border-radius: 50%;
`;

function UserImage() {
  return (
    <>
      <div className={container}>
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
