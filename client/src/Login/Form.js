import React from 'react';

import { css } from 'emotion';

const Form = css`
  .container-img {
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    justify-content: center;
  }
  .group-img {
    position: relative;
    width: 100px;
    height: 100px;
    margin-bottom: 16px;
  }
  .group-img img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    position: absolute;
    border-radius: 50%;
    margin-bottom: 20px;
  }
  .group-title {
    display: flex;
    justify-content: center;
  }
  .title {
    font-size: 26px;
    line-height: 32px;
    color: #fff;
  }
`;

const inputUsername = css`
  width: calc(100% - 20px);
  margin-top: 20px;
  padding: 10px 10px;
  font-size: 15px;
  color: #f6f6f7;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  background-color: rgba(0, 0, 0, 0.1);
  &:focus {
    border: 1px solid #7289da;
    outline: none;
  }
`;

const username = css`
  color: #b9bbbe;
  font-size: 12px;
  letter-spacing: 0.5px;
  font-weight: bold;
`;

const ButtonLogin = css`
  width: 100%;
  border: none;
  margin-top: 20px;
  padding: 10px 16px;
  font-size: 15px;
  font-weight: bold;
  color: #fff;
  border-radius: 5px;
  background-color: #516dd2;
  cursor: pointer;
`;

function Login() {
  return (
    <form className={Form}>
      <span className={username}>USERNAME</span>
      <br />
      <input
        class={inputUsername}
        type="text"
        id="txtUsername"
        placeholder="How do you want to be called?"
        title="You can change this later."
      />
      <br />
      <label htmlFor="button-login" aria-label="Submit login" />
      <input
        class={ButtonLogin}
        type="submit"
        id="btnContinue"
        value="Continue"
        autoComplete="off"
      />
    </form>
  );
}

export default Login;
