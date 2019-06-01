import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import App from "./App";
import Login from "./Login/index";
import { useLocalStorage } from "./utils/hooks";
import { newAppObject } from "./utils/storage";
// import "./utils/fakeData"; // load fake data, remove when pass to production

function Index() {
  const [user, setUser] = useState(null);
  const [app, setApp] = useLocalStorage("app", null);

  useEffect(() => {
    if (user) {
      setApp(newAppObject(user));
    }
  }, [user]);

  if (app) {
    return <App app={app} setApp={setApp} />;
  }
  return <Login setUser={setUser} />;
}

const $root = document.getElementById("root");
render(<Index />, $root);
