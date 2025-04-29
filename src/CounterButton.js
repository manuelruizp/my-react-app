import React, { useEffect } from "react";

export const CounterButton = ({ onIncrement, numberOfClicks }) => {
  useEffect(() => {
    console.log("useEffect function called!");
  }, []);

  return (
    <>
      <h3>You've clicked the button {numberOfClicks} times</h3>
      <button onClick={onIncrement}>Click me!</button>
    </>
  );
};
