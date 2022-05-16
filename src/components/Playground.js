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

import React, { useState } from 'react';
// 1.) React -> Default Export
// 2.) useState -> Named Export

function Playground(props) {
  const [count, setCount] = useState(0);
  // Never, ever, ever, ever, ever, ever mutate state directly!

  const updateCount = (num) => {
    if (count + num < 0 || count + num > 10) {
      return;
    }
    setCount(count + num);
  }

  return (
    <div>
      { props.cohort === '55' ? <p>The best cohort!</p> : <p>Laaaaame!</p> }
      {count}
      <button onClick={() => updateCount(1)}>Increment</button>
      <button onClick={() => updateCount(-1)}>Decrement</button>
    </div>
  )
}

// const Playground = () => {}

export default Playground;

/**
 * props?! -> Data passed from a parent (component) to a child (component)
 * state?! -> Data that 'lives' in the component itself
 */