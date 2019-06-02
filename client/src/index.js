import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import App from "./App";
import Login from "./Login/index";
import { useLocalStorage } from "./utils/hooks";
//import "./utils/fakeData"; // load fake data, remove when pass to production

function Index() {
  const [username, setUsername] = useState("");
  const [currentUser, setCurrentUser] = useLocalStorage("currentUser", null);
  const [, setChannels] = useLocalStorage("channels", []);
  const [, setUsers] = useLocalStorage("users", []);

  useEffect(() => {
    if (username) {
      const newId = Date.now();
      setCurrentUser({
        id: newId,
        username: username,
        creationDate: new Date().toLocaleString(),
        state: "active"
      });

      setUsers([
        {
          id: newId,
          username: username,
          isActive: true
        }
      ]);

      setChannels([
        {
          id: 1000000000000,
          creationDate: null,
          name: "general",
          author: null,
          joined: false,
          visibility: true,
          messages: []
        }
      ]);
    }
  }, [username]);

  if (currentUser) {
    return <App currentUser={currentUser} />;
  }
  return <Login setUser={setUsername} />;
}

const $root = document.getElementById("root");
render(<Index />, $root);
