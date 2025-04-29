import React from "react";

export const Greeting = (props) => {
  const { userName, numberOfMessages } = props;

  let isMorning = new Date().getHours() < 12;

  let greetingHeader = isMorning ? (
    <h3>Good Morning {userName}!</h3>
  ) : (
    <h3>Good Evening {userName}!</h3>
  );
  return (
    <>
      {greetingHeader}
      <p>You have {numberOfMessages} new messages</p>
    </>
  );
};
