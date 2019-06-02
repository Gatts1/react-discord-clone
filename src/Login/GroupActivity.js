import React from 'react';
import { css } from 'emotion';

const activity = css`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

const info = css`
  margin: 5px;
  padding: 5px 16px 4px;
  border-radius: 100px;
  background-color: rgba(32, 34, 37, 0.3);
  &:before {
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 6px;
  }
`;

const success = css`
  ${info}
  &:before {
    background-color: #43b581;
  }
`;

const nothing = css`
  ${info}
  &:before {
    background-color: #72767d;
  }
`;

const members = css`
  color: #b9bbbe;
  font-size: 15px;
  white-space: nowrap;
`;

function GroupActivity() {
  return (
    <div className={activity}>
      <div className={success}>
        <span className={members}>0 Online</span>
      </div>
      <div className={nothing}>
        <span className={members}>0 members</span>
      </div>
    </div>
  );
}

export default GroupActivity;
