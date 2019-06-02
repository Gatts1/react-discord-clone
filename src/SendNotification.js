import React from "react";

function SendNotification(currentUser) {
  if (
    currentUser.user !== currentUser.name
    // currentUser.channel != channelId
  ) {
    const notification = new Notification(
      // `New message in channel "${currentUser.channel}"`,
      `New message in channel`,
      {
        body: `${currentUser.user}: ${currentUser.content}`,
        icon: "./icons/logo.js"
      }
    );
    notification.onclick = event => {
      notification.close();
    };
  }
}

export default SendNotification;
