import React from 'react';
import Logo from '../icons/logo';
import bg from '../assets/img/bg.jpg';
import Form from './Form';
import GroupActivity from './GroupActivity';
import GroupTitle from './GroupTitle';
import GroupImage from './GroupImage';
import { css } from 'emotion';

const layout = css`
  display: flex;
  height: 100vh;
  margin: 0px;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: Whitney, 'Helvetica Neue', Helvetica, Arial, sans-serif;
`;

const background = css`
  object-fit: cover;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
`;

const logo = css`
  position: absolute;
  left: 30px;
  top: 50px;
  font-size: 20px;
  svg {
    fill: rgb(255, 255, 255);
    width: 200px;
  }
`;

const login = css`
  position: absolute;
  width: 480px;
  font-size: 18px;
  color: rgb(114, 118, 125);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 10px 0px;
  box-sizing: border-box;
  padding: 40px;
  background: rgb(54, 57, 63);
  border-radius: 5px;
`;

function Login({ setUser }) {
  return (
    <div className={layout}>
      <img src={bg} alt="background" className={background} />
      <div className={logo}>
        <Logo />
      </div>
      <div className={login}>
        <GroupImage />
        <GroupTitle />
        <GroupActivity />
        <Form setUser={setUser} />
      </div>
    </div>
  );
}

export default Login;
