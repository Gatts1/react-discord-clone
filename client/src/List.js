import React from "react";
import { css } from "emotion";

const container = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 7px 10px 5px 10px;
  margin: 3px 0;
  border-radius: 5px;
  :hover {
    cursor: pointer;
    background-color: #292b2f;
    .channel-item-option svg {
      visibility: visible;
    }
  }
  svg {
    visibility: visible;
  }
`;

const active = css`
  background-color: #40444b;
  :hover {
    cursor: auto;
    background-color: #40444b;
  }
`;

const activeSpan = css`
  color: #fff;
`;

const activeSvg = css`
  visibility: visible;
`;

const channelItem = css`
  display: flex;
  align-items: center;
  span {
    margin-left: 5px;
  }
  svg {
    width: 20px;
    height: 20px;
    margin: 0 2px;
    fill: #8e9297;
  }
`;

const channelItemOption = css`
  svg {
    visibility: hidden;
    width: 16px;
    height: 16px;
    margin: 0 2px;
    fill: #8e9297;
  }
  svg:hover {
    cursor: pointer;
    fill: #dcddde !important;
  }
`;

const activeChannel = css`
  svg {
    visibility: visible;
  }
`;

function List({ hasActive, children }) {
  return (
    <>
      <li className={`${container} ${hasActive && active}`}>
        <div className={channelItem}>
          <svg>
            <use xlinkHref="#hashtag" />
          </svg>
          <span className={hasActive && activeSpan}>{children}</span>
        </div>
        <div
          className={`${channelItemOption} ${hasActive &&
            activeChannel} channel-item-option`}
        >
          <svg className={hasActive && activeSvg}>
            <use xlinkHref="#people-plus" />
          </svg>
          <svg className={hasActive && activeSvg}>
            <use xlinkHref="#setting" />
          </svg>
        </div>
      </li>
      {/* <li>
        <div class="channel-item">
          <svg>
            <use xlinkHref="#hashtag" />
          </svg>
          <span>Able</span>
        </div>
        <div class="channel-item-option">
          <svg>
            <use xlinkHref="#people-plus" />
          </svg>
          <svg>
            <use xlinkHref="#setting" />
          </svg>
        </div>
      </li>
      <li>
        <div class="channel-item">
          <svg>
            <use xlinkHref="#hashtag" />
          </svg>
          <span>Codeble</span>
        </div>
        <div class="channel-item-option">
          <svg>
            <use xlinkHref="#people-plus" />
          </svg>
          <svg>
            <use xlinkHref="#setting" />
          </svg>
        </div>
      </li> */}
    </>
  );
}

export default List;
