/*
💥💥💥 Rules of STATE 💥💥💥
  - We create a slice of state like this: `const [healthPoints, setHealthPoints] = useState(100)`
  - A component may have as may slices of state as it needs
  - A slice of state may contain a string, a number, a boolean, an array, an object...
  - We use slices of state to store information that changes as the user interacts with the app
  - State is used in the JSX interpolated inside curly brackets
  - We never tamper with state: `healthPoints++`, `healthPoints--` or `someState.push(item)` is FORBIDDEN
  - We use the dedicated "state updater" to schedule a state change: `setHealthPoints(healthPoints + 1)`
*/

import React, { useState } from "react";

function Playground(props) {
  const [count, setCount] = useState(0);
  const [spinnerOn, setSpinnerOn] = false;
  const [error, setError] = useState("");

  const updateCount = function (amount) {
    if (count + amount < 0 || count + amount > 10) {
      setError("Cant go outside of dead zone bruh.");
      return;
    }

    setCount(count + amount);
    setError("");
  }

  if (spinnerOn) {
    return (
      <div className="container">
        <h3>The spinner is {spinnerOn ? "ON" : "OFF"}</h3>
        <button onClick={() => setSpinnerOn(false)}>Toggle Spinning Icon</button>
      </div>
    )
  }

  return (
    <div classname="contained">
      <h1> HELLOOOOOO </h1>
      {error && <h2>{error}</h2>}
      <h3> THE COUNT IS: {count} </h3>
      <button onClick={() => updateCount(1)}>Increment Count!</button>
      <button onClick={() => updateCount(-1)}>Decrement Count!</button>
      <h3>The spinner is: {spinnerOn ? "ON" : "OFF"}</h3>
      <button onClick={() => setSpinnerOn(true)}> Toggle Spinning Icon </button>
    </div>
  )
}

export default Playground;
