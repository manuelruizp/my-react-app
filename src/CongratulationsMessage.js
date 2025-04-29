import React, { useEffect } from "react";

export const CongratulationsMessage = ({
  numberOfClicks,
  threshold,
  onHide,
}) => {
  useEffect(() => {
    return () => console.log("CongratulationMessage unmounting");
  }, []);

  return numberOfClicks >= threshold ? (
    <>
      <h1>Congrautliaons! You've reached {threshold} number of Clicks</h1>
      <button onClick={onHide}>Hide me</button>
    </>
  ) : null;
};
