function newAppObject(newUsername) {
  const newId = Date.now();
  const objApp = {
    currentUser: {
      id: newId,
      username: newUsername,
      creationDate: new Date().toLocaleString(),
      state: "active"
    },
    users: [
      {
        id: newId,
        username: newUsername,
        isActive: true
      }
    ],
    channels: [
      {
        id: 1000000000000,
        creationDate: null,
        name: "general",
        author: null,
        joined: false,
        visibility: true,
        messages: []
      }
    ]
  };
  return objApp;
}

export { newAppObject };
