import React from "react";
import { css } from "emotion";
import BlockDate from "./BlockDate";
import BlockNotification from "./BlockNotification";
import BlockMessage from "./BlockMessage";
import Scrollbar from "./Scrollbar";
import { compareDate, separatorDate } from "./utils/date";

const container = css`
  grid-area: list-message;
  background-color: #36393f;
`;

const ul = css`
  list-style: none;
`;

const bTop = css`
  border-top: 1px solid hsla(0, 0%, 100%, 0.06);
`;

function ListMessages({ messages, currentUser, data }) {
  return (
    <section className={container}>
      <Scrollbar height="calc(100vh - 66px - 48px - 5px)">
        <ul className={ul}>
          {/* <BlockMessage className={bTop} />
          <BlockDate />
          <BlockNotification
            key={message.id}
            className={bTop}
            currentUser={currentUser}
          />
          <BlockMessage className={bTop} />
          <BlockDate />
          <BlockNotification
            key={message.id}
            className={bTop}
            currentUser={currentUser}
          />
          <BlockMessage className={bTop} /> */}
          {messages.map((message, index) => {
            if (index === 0) {
              return (
                <>
                  <BlockDate date={separatorDate(message.date)} />
                  <BlockNotification
                    key={message.id}
                    className={bTop}
                    currentUser={currentUser}
                    date={message.date}
                  />
                </>
              );
            }
            return (
              <>
                {compareDate(messages[index - 1].date, message.date) && (
                  <BlockDate date={separatorDate(message.date)} />
                )}
                <BlockMessage
                  key={message.id}
                  className={bTop}
                  message={message}
                  currentUser={currentUser}
                />
              </>
            );
          })}
        </ul>
      </Scrollbar>
    </section>
  );
}

export default ListMessages;
