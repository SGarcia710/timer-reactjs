import React from "react";
import Timer from "react-compound-timer";

const App = ({ minutes }) => {
  const time = minutes * 60000
  return (
    <Timer initialTime={time} direction="backward">
      {() => (
        <>
          <Timer.Minutes />:<Timer.Seconds />
        </>
      )}
    </Timer>
  );
};

export default App;
