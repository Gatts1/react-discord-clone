import React from 'react';
import { css } from 'emotion';

function GroupActivity() {
  const container = css`
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    justify-content: center;
  `;

  const group = css`
    position: relative;
    width: 100px;
    height: 100px;
    margin-bottom: 16px;
  `;

  const image = css`
    height: 100%;
    width: 100%;
    object-fit: cover;
    position: absolute;
    border-radius: 50%;
    margin-bottom: 20px;
  `;
  return (
    <div className={container}>
      <div className={group}>
        <img
          className={image}
          src="https://discordapp.com/assets/0e291f67c9274a1abdddeb3fd919cbaa.png"
          alt="logo-discord"
        />
      </div>
    </div>
  );
}

export default GroupActivity;
