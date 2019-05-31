import React from "react";
import { css } from "emotion";

const container = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 2px;
  font-size: 15px;
  border-radius: 5px;
  background-color: #202225;
`;

const inputSearch = css`
  border: none;
  border-radius: 5px;
  padding: 5px;
  color: #b9bbbe;
  background-color: #202225;
  transition: all 0.25s;
  width: 10vw;
  :focus {
    outline: none;
    width: 15vw;
  }
`;

const svg = css`
  margin: 0;
  width: 20px;
  height: 20px;
`;

function HeaderSearch() {
  return (
    <div className={container}>
      <form action="">
        <label for="input-search" aria-label="add search" />
        <input
          className={inputSearch}
          type="text"
          placeholder="Search"
          title="You can change this later."
        />
        <label for="submit_search" aria-label="Submit search" />
        <input hidden type="submit" />
      </form>

      <svg className={svg}>
        <use xlinkHref="#search" />
      </svg>
    </div>
  );
}

export default HeaderSearch;
