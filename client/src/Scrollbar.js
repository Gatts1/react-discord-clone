import { css } from "emotion";
import React from "react";

function Scrollbar({ children, height }) {
  const messagesEndRef = React.useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollTo(0, messagesEndRef.current.scrollHeight);
  };
  React.useEffect(scrollToBottom, [children]);

  const scrollbar = css`
    overflow-y: scroll;
    height: ${height};
    &::-webkit-scrollbar {
      width: 10px;
      margin-left: 5px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 50px;
      background-color: #202225;
    }
  `;

  return (
    <div className={scrollbar} ref={messagesEndRef}>
      {children}
    </div>
  );
}

export default Scrollbar;
