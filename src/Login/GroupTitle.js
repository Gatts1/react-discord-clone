import React from 'react';
import { css } from 'emotion';

const container = css`
  display: flex;
  justify-content: center;
`;

const title = css`
  font-size: 26px;
  line-height: 32px;
  color: #fff;
`;

function GroupTitle() {
  return (
    <div className={title}>
      <span className={container}>Group Title</span>
    </div>
  );
}

export default GroupTitle;
