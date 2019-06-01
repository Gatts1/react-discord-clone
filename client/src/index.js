import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import App from "./App";
import Login from "./Login/index";
import { newAppObject } from "./utils/storage";
import "./utils/fakeData"; // load fake data, remove when pass to production

function Index() {
  const [user, setUser] = useState(null);

  // this run once when component is render first time
  useEffect(() => {
    const app = JSON.parse(localStorage.getItem("app")) || null;
    if (app) {
      setUser(app.currentUser);
    }
  }, []);

  useEffect(() => {
    console.log(user);
    newAppObject(user);
  }, [user]);

  if (user) {
    return <App />;
  }
  return <Login setUser={setUser} />;
}

const $root = document.getElementById("root");
render(<Index />, $root);
