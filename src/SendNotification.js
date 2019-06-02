import React from "react";

function SendNotification(currentUser) {
  if (
    currentUser.user !== currentUser.username
    // currentUser.channel != channelId
  ) {
    const notification = new Notification(
      // `New message in channel "${currentUser.channel}"`,
      `New message in channel`,
      {
        body: `${currentUser.username}: ${currentUser.content}`,
        icon: "./icons/logo.js"
      }
    );
    notification.onclick = event => {
      notification.close();
    };
  }
}

export default SendNotification;
